import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Users, Building, GraduationCap, Heart } from 'lucide-react';

const Partners = () => {
  const [activeTab, setActiveTab] = useState('companies');

  const partnerData = {
    companies: [
      {
        name: "HCL Foundation",
        logo: "https://csrbox.org/organization/org_logo/1510384867HCL%20Foundation.png",
        alt: "HCL Foundation Logo",
        description: "Corporate foundation of HCL Technologies supporting our education and skill development programs, providing technology training and digital literacy initiatives for women empowerment.",
        type: "Corporate Foundation",
        partnership: "Education & Skill Development"
      },
      {
        name: "Cobb Apparels Pvt Ltd",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM353OJCJOfBczgpQrhUaPWb4CY81ue6XweA&s",
        alt: "Cobb Apparels Logo",
        description: "Leading apparel manufacturer partnering with us to provide clothing and textile support for women in need, contributing to dignity and confidence building programs.",
        type: "Apparel & Textiles",
        partnership: "Product Support & CSR"
      },
      {
        name: "Hillson Shoes",
        logo: "https://m.media-amazon.com/images/S/aplus-media/vc/491a43c4-cedf-41ff-b604-a5bff91bbad2.__CR0,0,1251,1251_PT0_SX300_V1___.jpg",
        alt: "Hillson Shoes Logo",
        description: "Leading footwear manufacturer supporting our women empowerment programs by providing quality footwear for women in need, promoting dignity and professional appearance for job readiness programs.",
        type: "Footwear & Manufacturing",
        partnership: "Product Support & Women's Professional Development"
      },
      {
        name: "Sharekhan",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Official_Logo_of_Sharekhan_by_BNP_Paribas.png",
        alt: "Sharekhan Logo",
        description: "Leading financial services company partnering with us to provide financial literacy programs, investment education, and economic empowerment initiatives for women entrepreneurs and working professionals.",
        type: "Financial Services",
        partnership: "Financial Literacy & Economic Empowerment"
      }
    ],
    govt: [
      {
        name: "Delhi Police",
        logo: "https://images.seeklogo.com/logo-png/30/2/delhi-police-logo-png_seeklogo-304814.png",
        alt: "Delhi Police Logo",
        description: "Law enforcement agency partnering with us on women safety initiatives, awareness campaigns, and community policing programs to ensure safer environments for women and children.",
        type: "Law Enforcement",
        partnership: "Women Safety Programs"
      },
      {
        name: "DSLSA (Delhi State Legal Services Authority)",
        logo: "https://pbs.twimg.com/profile_images/1610499563613491201/PVLO_Gqz_400x400.jpg",
        alt: "DSLSA Logo",
        description: "State legal services authority collaborating on legal awareness programs, women's rights education, and providing access to justice for underprivileged women.",
        type: "Legal Services",
        partnership: "Legal Awareness & Support"
      },
      {
        name: "Jharkhand Pollution Control Board",
        logo: "https://pbs.twimg.com/profile_images/1135954658055213056/rbKPyFiE_400x400.jpg",
        alt: "Jharkhand Pollution Control Board Logo",
        description: "Environmental regulatory body working with us on sustainable menstrual hygiene solutions and eco-friendly waste management practices in rural areas.",
        type: "Environmental Regulation",
        partnership: "Sustainable Hygiene Solutions"
      },
      {
        name: "Sonipat Municipal Corporation",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmnKtREmgPxQAYKToLuz3CkA-DQPt6spye--M9MFmzbxMjGoWGMRbHRdmTVbpiD-XpZkU&usqp=CAU",
        alt: "Sonipat Municipal Corporation Logo",
        description: "Municipal government partner supporting our urban women empowerment programs, sanitation drives, and public health initiatives in Sonipat district.",
        type: "Municipal Government",
        partnership: "Urban Development Programs"
      },
      {
        name: "Delhi Commission for Protection of Child Rights",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI_EmmLCZ_O5S8-NTDlxdBlI3F7pfYhpukNA&s",
        alt: "Delhi Commission for Protection of Child Rights Logo",
        description: "Child rights protection commission collaborating on child safety programs, girl child education initiatives, and protection against child abuse and trafficking.",
        type: "Child Rights Commission",
        partnership: "Child Protection Programs"
      },
      {
        name: "Ministry of Textiles (Govt of India)",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-hwjcg4oxC_w4KfQRFklyOYHScVNkvB3dw&s",
        alt: "Ministry of Textiles Logo",
        description: "Central government ministry supporting our menstrual hygiene initiatives, installation of sanitary napkin vending machines, and promoting dignity and health in public spaces.",
        type: "Central Government Ministry",
        partnership: "Menstrual Hygiene Infrastructure"
      },
      {
        name: "District Magistrate",
        logo: "https://sharmajobs.com/wp-content/uploads/2018/09/DK.png",
        alt: "District Magistrate Logo",
        description: "District administrative head collaborating with us on district-level women empowerment programs, policy implementation, and coordination of government schemes for women's welfare and development.",
        type: "District Administration",
        partnership: "Administrative Support & Policy Implementation"
      },
      {
        name: "NICSI (National Informatics Centre Services Inc.)",
        logo: "https://nicsi.com/pbd/images/nicsilogo.jpg",
        alt: "NICSI Logo",
        description: "Government IT services company supporting our digital infrastructure, technology solutions, and online platforms for women empowerment programs and digital literacy initiatives.",
        type: "Government IT Services",
        partnership: "Digital Infrastructure & Technology Support"
      },
      {
        name: "PSU (Public Sector Undertaking)",
        logo: "https://www.adraas.com/assets/uploads/blog/B-1705037604.jpg",
        alt: "PSU Logo",
        description: "Public sector enterprise collaborating with us on corporate social responsibility initiatives, women empowerment programs, and sustainable development projects in rural and urban areas.",
        type: "Public Sector Enterprise",
        partnership: "CSR & Sustainable Development"
      }
    ],
    ngos: [
      {
        name: "Prodege",
        logo: "/images/partner-prodege.png",
        alt: "Prodege Logo",
        description: "A partner organization focused on social development, collaborating with us on community outreach programs and women empowerment initiatives in rural areas.",
        type: "Social Development",
        partnership: "Community Outreach"
      },
      {
        name: "MISAP",
        logo: "/images/partner-misap.png",
        alt: "MISAP Logo",
        description: "An NGO working on health and education, partnering with us to expand menstrual hygiene awareness and health education programs across different regions.",
        type: "Health & Education",
        partnership: "Health Education Programs"
      },
      {
        name: "Sochgreen Foundation",
        logo: "/images/partner-sochgreen.png",
        alt: "Sochgreen Foundation Logo",
        description: "Environmental and social impact organization working with us on sustainable menstrual health solutions and eco-friendly product distribution.",
        type: "Environmental Impact",
        partnership: "Sustainable Solutions"
      },
      {
        name: "BCG Foundation",
        logo: "/images/partner-bcg.png",
        alt: "BCG Foundation Logo",
        description: "The philanthropic arm of BCG, supporting our organizational capacity building and providing strategic guidance for scaling our impact programs.",
        type: "Philanthropic Foundation",
        partnership: "Capacity Building"
      }
    ],
    studentBodies: [
      {
        name: "Cars24 Student Program",
        logo: "/images/partner-cars24.png",
        alt: "Cars24 Student Program Logo",
        description: "Student volunteer program from Cars24, engaging young professionals in our awareness campaigns and digital literacy programs for women.",
        type: "Corporate Student Program",
        partnership: "Youth Engagement"
      },
      {
        name: "Kepler Student Program",
        logo: "/images/partner-kepler.png",
        alt: "Kepler Student Program Logo",
        description: "Technology-focused student initiative providing coding and digital skills training to women and girls in our empowerment programs.",
        type: "Technology Education",
        partnership: "Digital Skills Training"
      },
      {
        name: "Adobe Student Community",
        logo: "/images/partner-adobe.png",
        alt: "Adobe Student Community Logo",
        description: "Creative student network helping us develop engaging visual content, infographics, and educational materials for our awareness campaigns.",
        type: "Creative Community",
        partnership: "Content Creation"
      },
      {
        name: "NSE Student Initiative",
        logo: "/images/partner-nse.png",
        alt: "NSE Student Initiative Logo",
        description: "Finance student program conducting financial literacy workshops and helping women understand investment, savings, and economic independence.",
        type: "Financial Education",
        partnership: "Financial Literacy"
      }
    ]
  };

  const tabs = [
    { id: 'companies', label: 'Corporate Partners', icon: Building, count: partnerData.companies.length },
    { id: 'govt', label: 'Govt. Partners', icon: Users, count: partnerData.govt.length },
    { id: 'ngos', label: 'NGO Partners', icon: Heart, count: partnerData.ngos.length },
    { id: 'studentBodies', label: 'Student Bodies', icon: GraduationCap, count: partnerData.studentBodies.length }
  ];

  const getCurrentPartners = () => {
    return partnerData[activeTab as keyof typeof partnerData] || [];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#fd8f45] to-[#f97316] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Partners In <span className="text-yellow-300">Change</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Together with our valued partners, we're building a world where every woman has the opportunity to thrive, succeed, and lead with dignity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold">{partnerData.companies.length + partnerData.govt.length + partnerData.ngos.length + partnerData.studentBodies.length}+</div>
                <div className="text-lg">Active Partners</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold">5</div>
                <div className="text-lg">Years of Collaboration</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-lg">Joint Programs</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white shadow-lg rounded-2xl p-2">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg text-center font-medium transition-all duration-300 mx-1 ${
                    activeTab === tab.id
                      ? 'bg-[#fd8f45] text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  {/* <IconComponent className="h-5 w-5 mr-2" /> */}
                  {tab.label}
                  <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                    activeTab === tab.id ? 'bg-white/20' : 'bg-gray-200'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {getCurrentPartners().map((partner, index) => (
            <div
              key={`${activeTab}-${index}`}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gray-50 rounded-xl p-4 mr-6">
                    <img
                      src={partner.logo}
                      alt={partner.alt}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{partner.name}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="bg-[#fd8f45]/10 text-[#fd8f45] px-3 py-1 rounded-full mr-2">
                        {partner.type}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {partner.description}
                </p>
                
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Partnership Focus:</span>
                      <p className="text-[#fd8f45] font-semibold">{partner.partnership}</p>
                    </div>
                    {/* <ExternalLink className="h-5 w-5 text-gray-400" /> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#fd8f45] to-[#f97316] rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Become a Partner</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join us in creating lasting change. Partner with Womenite to empower women and build stronger communities.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-[#fd8f45] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Partnership Inquiry
              </Link>
              <Link
                to="/donate"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#fd8f45] transition-colors"
              >
                Support Our Mission
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners; 