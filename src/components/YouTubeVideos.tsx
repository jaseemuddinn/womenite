import React, { useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const YouTubeVideos = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const videos = [
    {
      id: "H1XF2MF1Q1o",
      title: "Campaign Support Message",
      embedUrl: "https://www.youtube.com/embed/H1XF2MF1Q1o"
    },
    {
      id: "dEmghr4pfFQ",
      title: "Child Abuse Awareness",
      embedUrl: "https://www.youtube.com/embed/dEmghr4pfFQ"
    },
    {
      id: "1G0u8Y1tlUw",
      title: "Mother's Day Celebration",
      embedUrl: "https://www.youtube.com/embed/1G0u8Y1tlUw"
    },
    {
      id: "gVEa7Ry4sm0",
      title: "Swachh Bharat Abhiyan Nukad Natak",
      embedUrl: "https://www.youtube.com/embed/gVEa7Ry4sm0"
    }
  ];

  // Auto-slide functionality with 6-7 second intervals
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 6500); // 6.5 seconds

    return () => clearInterval(interval);
  }, [api]);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            United as <span className="text-[#fd8f45]">One</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            One cause, many voices: Hear from inspiring voices endorsing our work and supporting our mission.
          </p>
          <div className="w-24 h-1 bg-[#fd8f45] mx-auto mt-6"></div>
        </div>

        {/* Video Carousel */}
        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {videos.map((video, index) => (
                <CarouselItem key={video.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                    {/* Video Container */}
                    <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-t-xl">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={video.embedUrl}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                    
                    {/* Video Title */}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 text-center">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Navigation Buttons */}
            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white border-gray-200 text-gray-700 hover:bg-[#fd8f45] hover:text-white hover:border-[#fd8f45] transition-colors shadow-lg w-12 h-12" />
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white border-gray-200 text-gray-700 hover:bg-[#fd8f45] hover:text-white hover:border-[#fd8f45] transition-colors shadow-lg w-12 h-12" />
          </Carousel>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: count }, (_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current - 1 
                    ? 'bg-[#fd8f45]' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideos; 