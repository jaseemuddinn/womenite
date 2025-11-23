
import React from 'react';

const PhotoGallery = () => {
  const galleryImages = [
    {
      src: "/images/rakhi-1.png",
      alt: "Rakhi celebration with women and children"
    },
    {
      src: "/images/rakhi-2.png",
      alt: "Rakhi festival community gathering"
    },
    {
      src: "/images/rakhi-on-hand.png",
      alt: "Traditional rakhi on hand during celebration"
    },
    {
      src: "/images/cleaning-with-children-2.png",
      alt: "Community cleaning activity with children"
    },
    {
      src: "/images/cleaning-with-childrens.png",
      alt: "Women teaching children about cleanliness"
    },
    {
      src: "/images/draw-with-child.png",
      alt: "Art and creativity session with child"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Moments of <span className="text-[#fd8f45]">Empowerment</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A glimpse into our workshops, events, and community work - capturing authentic moments of learning, growth, and transformation.
          </p>
          <div className="w-24 h-1 bg-[#fd8f45] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="aspect-w-4 aspect-h-3 h-64">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <p className="text-white text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default PhotoGallery;
