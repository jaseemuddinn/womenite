import React from 'react';
import { Link } from 'react-router-dom';

const SuccessStories = () => {
  const stories = [
    {
      name: "Priya Sharma",
      age: "28",
      image: "/images/priya-sharma.png",
      background: "Single mother from rural village",
      transformation: "From struggling to survive to running her own tailoring business, now employs 15 women in her community.",
      quote: "womenite didn't just teach me skills, they gave me confidence to dream bigger."
    },
    {
      name: "Anjali Verma",
      age: "24",
      image: "/images/anjali-verma.png",
      background: "College dropout due to financial constraints",
      transformation: "Completed digital literacy program, now works as a freelance graphic designer earning ₹30,000/month.",
      quote: "Technology opened doors I never knew existed. Today, I'm financially independent."
    },
    {
      name: "Meera Devi",
      age: "35",
      image: "/images/meera-devi.png",
      background: "Domestic violence survivor",
      transformation: "Through our support and self-defense training, she left an abusive marriage and now runs a small grocery store.",
      quote: "I found my voice and my strength. Now I help other women find theirs."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Real Stories of <span className="text-[#fd8f45]">Transformation</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every woman has a story. Here are just a few of the thousands of lives we've had the privilege to touch.
          </p>
          <div className="w-24 h-1 bg-[#fd8f45] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${story.image})` }}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{story.name}</h3>
                  <span className="text-gray-500 ml-2">• {story.age}</span>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Background:</strong> {story.background}
                  </p>
                  <p className="text-sm text-gray-700 mb-4">
                    <strong>Journey:</strong> {story.transformation}
                  </p>
                </div>
                <blockquote className="border-l-4 border-[#fd8f45] pl-4 italic text-gray-700">
                  "{story.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to share your story or read more transformations?</p>
          <Link 
            to="/impact-stories"
            className="inline-block bg-[#fd8f45] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#e67c3a] transition-colors"
          >
            View More Stories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
