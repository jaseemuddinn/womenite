#!/usr/bin/env python3
"""
Women Empowerment Collage Creator
Creates a 5x3 or 3x5 grid collage from 15 images, converts to grayscale,
and saves as mission-bg.jpg for the Mission & Vision section background.
"""

import os
import sys
from PIL import Image, ImageFilter
import argparse

def create_collage(image_paths, output_path="mission-bg.jpg", layout="5x3", cell_size=300):
    """
    Create a collage from a list of image paths.
    
    Args:
        image_paths: List of paths to 15 images
        output_path: Path where the collage will be saved
        layout: Either "5x3" or "3x5" for grid layout
        cell_size: Size of each cell in pixels
    """
    
    if len(image_paths) != 15:
        raise ValueError("Exactly 15 images are required")
    
    # Determine grid dimensions
    if layout == "5x3":
        cols, rows = 5, 3
    elif layout == "3x5":
        cols, rows = 3, 5
    else:
        raise ValueError("Layout must be '5x3' or '3x5'")
    
    # Calculate total canvas size
    canvas_width = cols * cell_size
    canvas_height = rows * cell_size
    
    # Create a new image with white background
    collage = Image.new('RGB', (canvas_width, canvas_height), 'white')
    
    # Process each image
    for i, image_path in enumerate(image_paths):
        try:
            # Open and process the image
            img = Image.open(image_path)
            
            # Convert to RGB if necessary
            if img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Resize to fit cell while maintaining aspect ratio
            img = resize_and_crop(img, cell_size, cell_size)
            
            # Calculate position in grid
            col = i % cols
            row = i // cols
            
            # Calculate pixel position
            x = col * cell_size
            y = row * cell_size
            
            # Paste the image
            collage.paste(img, (x, y))
            
            print(f"Processed: {os.path.basename(image_path)}")
            
        except Exception as e:
            print(f"Error processing {image_path}: {e}")
            continue
    
    # Convert to grayscale
    grayscale_collage = collage.convert('L')
    
    # Slightly enhance contrast for better background effect
    grayscale_collage = grayscale_collage.point(lambda x: x * 0.8)  # Darken slightly
    
    # Convert back to RGB for JPEG
    final_collage = grayscale_collage.convert('RGB')
    
    # Save the collage
    final_collage.save(output_path, 'JPEG', quality=95, optimize=True)
    print(f"Collage saved as: {output_path}")
    print(f"Dimensions: {canvas_width}x{canvas_height}")
    
    return output_path

def resize_and_crop(img, target_width, target_height):
    """
    Resize and crop an image to fit exactly into target dimensions.
    """
    # Calculate aspect ratios
    img_ratio = img.width / img.height
    target_ratio = target_width / target_height
    
    if img_ratio > target_ratio:
        # Image is wider, crop width
        new_height = target_height
        new_width = int(target_height * img_ratio)
        img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
        
        # Crop from center
        left = (new_width - target_width) // 2
        img = img.crop((left, 0, left + target_width, target_height))
    else:
        # Image is taller, crop height
        new_width = target_width
        new_height = int(target_width / img_ratio)
        img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
        
        # Crop from center
        top = (new_height - target_height) // 2
        img = img.crop((0, top, target_width, top + target_height))
    
    return img

def find_images_in_directory(directory):
    """
    Find all image files in a directory.
    """
    image_extensions = ('.jpg', '.jpeg', '.png', '.bmp', '.gif', '.tiff')
    image_files = []
    
    for filename in os.listdir(directory):
        if filename.lower().endswith(image_extensions):
            image_files.append(os.path.join(directory, filename))
    
    return sorted(image_files)

def main():
    parser = argparse.ArgumentParser(description='Create a women empowerment collage')
    parser.add_argument('--images', '-i', nargs='+', help='List of image paths')
    parser.add_argument('--directory', '-d', help='Directory containing images')
    parser.add_argument('--output', '-o', default='mission-bg.jpg', help='Output filename')
    parser.add_argument('--layout', '-l', choices=['5x3', '3x5'], default='5x3', help='Grid layout')
    parser.add_argument('--size', '-s', type=int, default=300, help='Cell size in pixels')
    
    args = parser.parse_args()
    
    # Get image paths
    if args.images:
        image_paths = args.images
    elif args.directory:
        image_paths = find_images_in_directory(args.directory)
    else:
        print("Please provide either --images or --directory")
        sys.exit(1)
    
    # Validate we have exactly 15 images
    if len(image_paths) < 15:
        print(f"Found only {len(image_paths)} images. Need exactly 15.")
        print("Available images:")
        for i, path in enumerate(image_paths, 1):
            print(f"  {i}. {os.path.basename(path)}")
        sys.exit(1)
    elif len(image_paths) > 15:
        print(f"Found {len(image_paths)} images. Using first 15:")
        for i, path in enumerate(image_paths[:15], 1):
            print(f"  {i}. {os.path.basename(path)}")
        image_paths = image_paths[:15]
    
    try:
        output_path = create_collage(image_paths, args.output, args.layout, args.size)
        print(f"\n✅ Success! Collage created: {output_path}")
        print(f"📁 Move this file to: bloom-future-project/public/images/")
        print(f"🎨 The image is ready to use as background in the Mission & Vision section")
        
    except Exception as e:
        print(f"❌ Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main() 