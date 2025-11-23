import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Users, Heart, Share2 } from 'lucide-react';

interface EventDetailProps {
  title: string;
  subtitle: string;
  heroImage: string;
  date?: string;
  time?: string;
  location?: string;
  content: React.ReactNode;
  photos?: string[];
  quote?: {
    text: string;
    author: string;
  };
  isUpcoming?: boolean;
}

const EventDetail: React.FC<EventDetailProps> = ({ 
  title, 
  subtitle, 
  heroImage, 
  date,
  time,
  location,
  content, 
  photos,
  quote,
  isUpcoming = false
}) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/events"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Events
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">{title}</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              {subtitle}
            </p>
            
            {/* Event Details */}
            {(date || time || location) && (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-3">
                {date && (
                  <div className="flex items-center text-white">
                    <Calendar className="h-5 w-5 mr-3 text-[#F58220]" />
                    <span className="font-semibold">{date}</span>
                  </div>
                )}
                {time && (
                  <div className="flex items-center text-white">
                    <Clock className="h-5 w-5 mr-3 text-[#F58220]" />
                    <span>{time}</span>
                  </div>
                )}
                {location && (
                  <div className="flex items-center text-white">
                    <MapPin className="h-5 w-5 mr-3 text-[#F58220]" />
                    <span>{location}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {content}
            </div>
          </div>
        </div>
      </section>

      {/* Photos Section */}
      {photos && photos.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Event Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {photos.map((photo, index) => (
                  <div key={index} className="relative h-64 bg-cover bg-center rounded-lg overflow-hidden shadow-md" style={{ backgroundImage: `url(${photo})` }}>
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Quote Section */}
      {quote && (
        <section className="py-16 bg-[#F58220]/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 mb-6 italic">
                "{quote.text}"
              </blockquote>
              <cite className="text-lg text-gray-600 font-semibold">- {quote.author}</cite>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {isUpcoming ? 'Get Involved' : 'Make a Difference'}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {isUpcoming 
                ? 'Join us in this important initiative and be part of the positive change we\'re creating in our community.'
                : 'Events like these are possible because of people like you. Help us create more opportunities for empowerment and positive change.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center bg-[#F58220] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e67c3a] transition-colors">
                <Share2 className="h-5 w-5 mr-2" />
                Share Event
              </button>
              <Link 
                to="/donate" 
                className="inline-flex items-center bg-white text-[#F58220] px-6 py-3 rounded-lg font-semibold border-2 border-[#F58220] hover:bg-[#F58220] hover:text-white transition-colors"
              >
                <Heart className="h-5 w-5 mr-2" />
                Support Our Work
              </Link>
              <Link 
                to="/volunteer" 
                className="inline-flex items-center bg-white text-[#F58220] px-6 py-3 rounded-lg font-semibold border-2 border-[#F58220] hover:bg-[#F58220] hover:text-white transition-colors"
              >
                <Users className="h-5 w-5 mr-2" />
                {isUpcoming ? 'Join Event' : 'Get Involved'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetail; 