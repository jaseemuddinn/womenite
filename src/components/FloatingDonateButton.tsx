import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const FloatingDonateButton = () => {
  return (
    <Link
      to="https://rzp.io/rzp/sw35Gxt"
      target="_blank"
      className="fixed bottom-6 right-6 bg-[#fd8f45] text-white p-4 rounded-full shadow-lg hover:bg-[#e67c3a] transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center group"
      aria-label="Donate Now"
    >
      <Heart className="h-6 w-6 mr-0 group-hover:mr-2 transition-all duration-300" />
      <span className="hidden group-hover:inline-block text-sm font-semibold whitespace-nowrap transition-all duration-300">
        Donate Now
      </span>
    </Link>
  );
};

export default FloatingDonateButton; 