import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Trophy } from 'lucide-react';

const OurPartners = () => {
  const [activeTab, setActiveTab] = useState('companies');

  const partnerData = {
    companies: [
      {
        name: "Dentsu",
        logo: "/images/partner-dentsu.png",
        alt: "Dentsu Logo"
      },
      {
        name: "Kepler",
        logo: "/images/partner-kepler.png",
        alt: "Kepler Logo"
      },
      {
        name: "NSE",
        logo: "/images/partner-nse.png",
        alt: "NSE Logo"
      },
      {
        name: "GoDaddy",
        logo: "/images/partner-godaddy.png",
        alt: "GoDaddy Logo"
      },
      {
        name: "Sochgreen",
        logo: "/images/partner-sochgreen.png",
        alt: "Sochgreen Logo"
      },
      {
        name: "BCG",
        logo: "/images/partner-bcg.png",
        alt: "BCG Logo"
      },
      {
        name: "Adobe",
        logo: "/images/partner-adobe.png",
        alt: "Adobe Logo"
      }
    ],
    govt: [
      {
        name: "Prodege",
        logo: "/images/partner-prodege.png",
        alt: "Prodege Logo"
      },
      {
        name: "MISAP",
        logo: "/images/partner-misap.png",
        alt: "MISAP Logo"
      },
      {
        name: "Sochgreen",
        logo: "/images/partner-sochgreen.png",
        alt: "Sochgreen Logo"
      },
      {
        name: "BCG Foundation",
        logo: "/images/partner-bcg.png",
        alt: "BCG Foundation Logo"
      }
    ],
    studentBodies: [
      {
        name: "Cars24",
        logo: "/images/partner-cars24.png",
        alt: "Cars24 Logo"
      },
      {
        name: "Kepler Student Program",
        logo: "/images/partner-kepler.png",
        alt: "Kepler Student Program Logo"
      },
      {
        name: "Adobe Student Community",
        logo: "/images/partner-adobe.png",
        alt: "Adobe Student Community Logo"
      },
      {
        name: "NSE Student Initiative",
        logo: "/images/partner-nse.png",
        alt: "NSE Student Initiative Logo"
      }
    ]
  };

  const tabs = [
    { id: 'companies', label: 'Companies' },
    { id: 'govt', label: 'Government Dept.' },
    { id: 'studentBodies', label: 'Student Bodies' }
  ];

  const getCurrentPartners = () => {
    return partnerData[activeTab as keyof typeof partnerData] || [];
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Recognition & <span className="text-[#fd8f45]">Partners</span>
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            Being a top NGO in India, our motto to end menstrual inequality is coming to light because of the prestigious partners and supporters uniting with us.
          </p>
          <div className="w-24 h-1 bg-[#fd8f45] mx-auto mt-6"></div>
        </div>

        {/* Recognition & Awards Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Awards & <span className="text-[#fd8f45]">Recognition</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to social change has been recognized by prestigious national and international organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* UN Award Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start mb-6">
                <div className="bg-blue-500 p-3 rounded-full mr-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    Award by the United Nations
                  </h4>
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium inline-block">
                    2020
                  </div>
                </div>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h5 className="text-lg font-semibold text-gray-700 mb-2">
                  V-Award by UN
                </h5>
                <p className="text-gray-600">
                  Associated with India for outstanding contribution to social development and community empowerment initiatives.
                </p>
              </div>
            </div>

            {/* Government Award Card */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start mb-6">
                <div className="bg-orange-500 p-3 rounded-full mr-4">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    Ministry of Youth Affairs & Sports
                  </h4>
                  <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium inline-block">
                    2018
                  </div>
                </div>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h5 className="text-lg font-semibold text-gray-700 mb-2">
                  National Youth Award
                </h5>
                <p className="text-gray-600">
                  Government of India recognition for exceptional work in youth development and social service initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Our Partners In <span className="text-[#fd8f45]">Change</span>
          </h3>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-2 rounded-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 mx-1 ${
                  activeTab === tab.id
                    ? 'bg-[#fd8f45] text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getCurrentPartners().map((partner, index) => (
            <div
              key={`${activeTab}-${index}`}
              className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center hover:shadow-xl transition-shadow duration-300 min-h-[120px]"
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                className="max-h-12 max-w-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {getCurrentPartners().length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              More partners coming soon in this category.
            </p>
          </div>
        )}

        {/* View All Partners Button */}
        <div className="text-center mt-12">
          <Link
            to="/partners"
            className="inline-flex items-center bg-[#fd8f45] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#e67c3a] transition-colors shadow-lg"
          >
            View All Partners & Their Impact
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurPartners; 