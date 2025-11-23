import React, { useEffect } from 'react';
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const LatestNews = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const newsItems = [
    {
      title: "Rakhi Celebration Brings Community Together",
      excerpt: "Our annual Rakhi festival celebrated the bond between women and children, spreading joy and traditional values across the community.",
      date: "July 5, 2024",
      category: "Events",
      image: "/images/news-rakhi-celebration.png"
    },
    {
      title: "Community Cleaning Drive with Children",
      excerpt: "Women and children joined hands in a massive cleaning drive, teaching environmental responsibility and community service.",
      date: "June 20, 2024",
      category: "Community",
      image: "/images/news-cleaning-activity.png"
    },
    {
      title: "Creative Art Sessions Empower Young Minds",
      excerpt: "Our art and creativity programs are helping children express themselves while building confidence and artistic skills.",
      date: "May 15, 2024",
      category: "Education",
      image: "/images/news-drawing-activity.png"
    },
    {
      title: "Volunteer Program Reaches New Milestones",
      excerpt: "Over 200 volunteers have joined our mission, creating a strong network of support for women's empowerment initiatives.",
      date: "April 22, 2024",
      category: "Volunteers",
      image: "/images/news-volunteer-program.png"
    },
    {
      title: "Health Awareness Program Expansion",
      excerpt: "Our menstrual health and wellness programs have reached 50 new villages, empowering women with knowledge and resources.",
      date: "March 30, 2024",
      category: "Health",
      image: "/images/news-health-program.png"
    },
    {
      title: "Skill Training Programs Show Remarkable Results",
      excerpt: "Women completing our vocational training programs are now earning sustainable incomes and supporting their families.",
      date: "March 10, 2024",
      category: "Programs",
      image: "/images/news-skill-training.png"
    }
  ];

  // Auto-slide functionality with 5-second intervals
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Latest <span className="text-[#fd8f45]">News & Updates</span>
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Stay informed with our recent activities, campaigns, and announcements.
            </p>
            <div className="w-24 h-1 bg-[#fd8f45] mx-auto md:mx-0 mt-4"></div>
          </div>
          <div className="text-center md:text-right">
            <Link 
              to="/news" 
              className="inline-flex items-center text-[#fd8f45] font-semibold hover:text-[#e67c3a] transition-colors"
            >
              View All <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Carousel */}
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
              {newsItems.map((item, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#fd8f45] text-white px-3 py-1 rounded-full text-xs font-medium">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="text-gray-500 text-sm flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-[#fd8f45] transition-colors cursor-pointer">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                        {item.excerpt}
                      </p>
                      <button className="flex items-center text-[#fd8f45] font-semibold hover:text-[#e67c3a] transition-colors">
                        Read More <ArrowRight className="h-4 w-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Navigation Buttons */}
            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white border-gray-200 text-gray-700 hover:bg-[#fd8f45] hover:text-white hover:border-[#fd8f45] transition-colors shadow-lg" />
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white border-gray-200 text-gray-700 hover:bg-[#fd8f45] hover:text-white hover:border-[#fd8f45] transition-colors shadow-lg" />
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
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
