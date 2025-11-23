
import React from 'react';
import { Link } from 'react-router-dom';

const GetInvolved = () => {
  const ways = [
    {
      title: "Donate",
      description: "Your contribution directly impacts women's lives. Every rupee helps us provide education, healthcare, and skill training.",
      features: ["Secure payment gateway", "Tax exemption under 80G", "Monthly impact reports", "Transparent fund usage"],
      buttonText: "Donate Securely",
      buttonLink: "/donate",
      bgColor: "bg-red-50",
      image: "/images/donate.png"
    },
    {
      title: "Volunteer",
      description: "Join our mission by contributing your time and skills. Be part of the change you want to see in the world.",
      features: ["Flexible timings", "Skill-based volunteering", "Community impact", "Personal growth"],
      buttonText: "Join Our Team",
      buttonLink: "/volunteer",
      bgColor: "bg-blue-50",
      image: "/images/volunteer.png"
    },
    {
      title: "Partner With Us",
      description: "Corporate partnerships and CSR collaborations help us scale our impact and reach more women in need.",
      features: ["CSR compliance", "Brand visibility", "Employee engagement", "Social impact reporting"],
      buttonText: "Explore Partnership",
      buttonLink: "/partners",
      bgColor: "bg-green-50",
      image: "/images/partner.png"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get <span className="text-[#fd8f45]">Involved</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            There are many ways you can contribute to our mission of empowering women. Find the one that resonates with you.
          </p>
          <div className="w-24 h-1 bg-[#fd8f45] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ways.map((way, index) => {
            return (
              <div key={index} className={`${way.bgColor} rounded-xl overflow-hidden hover:shadow-lg transition-shadow`}>
                <div className="relative">
                  <img 
                    src={way.image} 
                    alt={way.title}
                    className="w-full h-40 object-cover rounded-t-xl"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{way.title}</h3>
                  <p className="text-gray-600 mb-6">{way.description}</p>
                  
                  <ul className="text-left space-y-2 mb-8">
                    {way.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-[#fd8f45] rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={way.buttonLink}
                    className="inline-block bg-[#fd8f45] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#e67c3a] transition-colors"
                  >
                    {way.buttonText}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Not sure where to start?</h3>
          <p className="text-gray-600 mb-6">
            Contact us to discuss how you can best contribute to our mission based on your interests and availability.
          </p>
          <Link
            to="/contact"
            className="inline-block border-2 border-[#fd8f45] text-[#fd8f45] px-6 py-3 rounded-full font-semibold hover:bg-[#fd8f45] hover:text-white transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
