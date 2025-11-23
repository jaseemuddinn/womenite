import React from 'react';
import { Link } from 'react-router-dom';

interface StoryCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ id, title, excerpt, image, slug }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>{excerpt}</p>
        
        <Link 
          to={`/impact-stories/${slug}`}
          className="inline-block bg-[#F58220] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#e67c3a] transition-colors"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default StoryCard; 