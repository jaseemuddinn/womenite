import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Images for the carousel - Your actual photos from the photos folder
  const carouselImages = [
    {
      url: "/images/hero-rakhi-celebration.png",
      alt: "Rakhi celebration with women and children - building community bonds"
    },
    {
      url: "/images/hero-cleaning-activity.png",
      alt: "Community cleaning drive with children - environmental responsibility"
    },
    {
      url: "/images/hero-drawing-activity.png",
      alt: "Creative art sessions with children - empowering young minds"
    },
    {
      url: "/images/hero-volunteer-program.png",
      alt: "Volunteer program activities - community support and engagement"
    },
    {
      url: "/images/hero-impact.png",
      alt: "Our impact so far - transformation and empowerment in action"
    }
  ];

  // Auto-play functionality with 2-second intervals
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${image.url}')`
              }}
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-[#fd8f45]' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Building a <span className="text-[#fd8f45]">stronger tomorrow</span> by empowering women today
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          We uplift underprivileged women through education, health access, and skill training
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/donate"
            className="bg-[#fd8f45] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e67c3a] transition-colors transform hover:scale-105"
          >
            Donate Now
          </Link>
          <Link
            to="/volunteer"
            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors transform hover:scale-105"
          >
            Volunteer
          </Link>
          <Link
            to="/programs"
            className="border-2 border-[#fd8f45] text-[#fd8f45] bg-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#fd8f45] hover:text-white transition-colors transform hover:scale-105"
          >
            Know Our Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
