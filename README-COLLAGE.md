# Women Empowerment Collage Creator Guide

## Overview
This guide helps you create a beautiful grayscale collage of 15 women empowerment photos to use as the background for the Mission & Vision section.

## Requirements
- 15 high-resolution photos (minimum 800x600 pixels each)
- Photos should represent: women empowerment, health, education, rural life, skill development, etc.
- Tools: Python with PIL/Pillow OR online collage tools OR photo editing software

## Method 1: Using Python Script (Recommended)

### Step 1: Install Python Dependencies
```bash
pip install Pillow
```

### Step 2: Create the Python Script
Create a file called `create_collage.py` in your project root:

```python
#!/usr/bin/env python3
"""
Women Empowerment Collage Creator
Creates a 5x3 or 3x5 grid collage from 15 images, converts to grayscale,
and saves as mission-bg.jpg for the Mission & Vision section background.
"""

import os
import sys
from PIL import Image, ImageEnhance
import argparse

def create_collage(image_paths, output_path="mission-bg.jpg", layout="5x3", cell_size=300):
    """Create a collage from a list of image paths."""
    
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
    
    # Slightly darken for better background effect
    enhancer = ImageEnhance.Brightness(grayscale_collage)
    grayscale_collage = enhancer.enhance(0.7)  # Darken to 70%
    
    # Convert back to RGB for JPEG
    final_collage = grayscale_collage.convert('RGB')
    
    # Save the collage
    final_collage.save(output_path, 'JPEG', quality=95, optimize=True)
    print(f"Collage saved as: {output_path}")
    
    return output_path

def resize_and_crop(img, target_width, target_height):
    """Resize and crop an image to fit exactly into target dimensions."""
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
    """Find all image files in a directory."""
    image_extensions = ('.jpg', '.jpeg', '.png', '.bmp', '.gif', '.tiff')
    image_files = []
    
    for filename in os.listdir(directory):
        if filename.lower().endswith(image_extensions):
            image_files.append(os.path.join(directory, filename))
    
    return sorted(image_files)

if __name__ == "__main__":
    # Example usage
    images_directory = "path/to/your/images"  # Update this path
    image_paths = find_images_in_directory(images_directory)[:15]
    
    if len(image_paths) >= 15:
        create_collage(image_paths[:15], "public/images/mission-bg.jpg", "5x3", 400)
        print("✅ Collage created successfully!")
    else:
        print(f"❌ Need 15 images, found only {len(image_paths)}")
```

### Step 3: Prepare Your Images
1. Create a folder called `women-empowerment-photos`
2. Add exactly 15 high-resolution images
3. Rename them sequentially (optional): `01-education.jpg`, `02-health.jpg`, etc.

### Step 4: Run the Script
```bash
python create_collage.py
```

### Step 5: Move the Generated Image
Move the generated `mission-bg.jpg` to:
```
bloom-future-project/public/images/mission-bg.jpg
```

## Method 2: Using Online Tools

### Option A: Canva
1. Go to [Canva.com](https://www.canva.com)
2. Create a new design (custom size: 1500x900 pixels)
3. Upload your 15 images
4. Create a 5x3 grid layout
5. Apply grayscale filter
6. Download as JPG

### Option B: Photoshop/GIMP
1. Create new document (1500x900 pixels)
2. Create a 5x3 grid guide
3. Place 15 images in each grid cell
4. Apply grayscale adjustment layer
5. Apply dark overlay (multiply blend mode, 40% opacity)
6. Export as JPG

### Option C: Online Photo Collage Makers
- **Fotor**: fotor.com/features/collage
- **PicMonkey**: picmonkey.com/collage
- **Canva**: canva.com/collage

## Method 3: Using AI Tools

### Midjourney/DALL-E Prompt
```
Create a collage of 15 realistic photos showing women empowerment, education, health awareness, rural development, skill training, arranged in a 5x3 grid, black and white, documentary style, high quality, professional photography
```

## Final Steps

1. **File Placement**: Place the final image as `bloom-future-project/public/images/mission-bg.jpg`

2. **Optimization**: Ensure the image is:
   - Grayscale (black and white)
   - High resolution (minimum 1500x900)
   - Optimized file size (under 1MB)
   - JPG format

3. **Verification**: The image should automatically appear as the background in the Mission & Vision section

## Photo Subject Suggestions

For your 15 photos, consider including:
1. Women in education/learning settings
2. Healthcare/medical check-ups
3. Skill development workshops
4. Rural women working
5. Mother-child interactions
6. Women in leadership roles
7. Self-defense training
8. Digital literacy sessions
9. Community gatherings
10. Women entrepreneurs
11. Traditional crafts/skills
12. Health awareness programs
13. Women supporting women
14. Rural development activities
15. Celebration/achievement moments

## Technical Specifications

- **Final dimensions**: 1500x900 pixels (5x3 grid with 300px cells)
- **Alternative**: 900x1500 pixels (3x5 grid with 300px cells)
- **Color**: Grayscale (black and white)
- **Format**: JPG
- **Quality**: High (90-95%)
- **File size**: Under 1MB
- **Brightness**: Slightly darkened for better text overlay

## Troubleshooting

### Common Issues:
1. **Images not loading**: Check file path and permissions
2. **Background not showing**: Verify image is in `public/images/`
3. **Text not readable**: Ensure image is dark enough
4. **Poor quality**: Use higher resolution source images

### CSS Debugging:
If the background doesn't appear, check the browser developer tools for:
- Network errors loading the image
- CSS path issues
- Cache problems (try hard refresh)

## Final Result

Your Mission & Vision section will now have a beautiful, professional background showcasing real women empowerment stories while maintaining excellent text readability with the dark overlay applied. 