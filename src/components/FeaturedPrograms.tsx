
import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedPrograms = () => {
  const programs = [
    {
      title: "Skill Development Centre",
      description: "Comprehensive skill development center providing vocational training and educational support.",
      image: "/images/skill.jpg",
      impact: "200+ women trained | 100+ adolescents benefited"
    },
    {
      title: "Bank Pad",
      description: "Breaking taboos and providing access to sanitary products and education about menstrual hygiene.",
      image: "/images/bank-pad.png",
      impact: "1,50,000+ sanitary pads distributed"
    },
    {
      title: "Pink Pad",
      description: "Vocational training in tailoring, cooking, handicrafts, and entrepreneurship to ensure financial independence.",
      image: "/images/pink-pad.png",
      impact: "7,000+ women trained"
    },
    {
      title: "Ladli Gudia",
      description: "Empowering women with physical and mental strength to protect themselves and build confidence.",
      image: "/images/ladli-gudia.png",
      impact: "5,000+ women trained"
    },
    {
      title: "Nanhi Pari",
      description: "Teaching digital skills, smartphone usage, and online safety to bridge the digital divide.",
      image: "/images/nanhi-pari.png",
      impact: "3,500+ women digitally literate"
    },
    {
      title: "Uchi Udan",
      description: "Training women to become community leaders and advocates for women's rights.",
      image: "/images/uchi-udan.png",
      impact: "60+ women leaders created"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-[#fd8f45]">Programs</span> & Initiatives
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive programs designed to address every aspect of women's empowerment and well-being.
          </p>
          <div className="w-24 h-1 bg-[#fd8f45] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${program.image})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="border-t pt-4">
                  <p className="text-sm font-semibold text-[#fd8f45]">{program.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/programs"
            className="inline-block bg-[#fd8f45] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e67c3a] transition-colors"
          >
            Learn More About Our Programs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
