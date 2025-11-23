import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Share2, Heart, Users } from 'lucide-react';

interface StoryDetailProps {
  title: string;
  subtitle: string;
  heroImage: string;
  content: React.ReactNode;
  quote?: {
    text: string;
    author: string;
  };
}

const StoryDetail: React.FC<StoryDetailProps> = ({ 
  title, 
  subtitle, 
  heroImage, 
  content, 
  quote 
}) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/impact-stories"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Impact Stories
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">{title}</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              {subtitle}
            </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Make a Difference</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Stories like these are possible because of people like you. Join us in creating more stories of hope, 
              empowerment, and transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center bg-[#F58220] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e67c3a] transition-colors">
                <Share2 className="h-5 w-5 mr-2" />
                Share This Story
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
                Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoryDetail; 