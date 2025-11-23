
import React from 'react';
import { Award, Star, Shield } from 'lucide-react';

const MediaMentions = () => {
  const mentions = [
    {
      type: "Award",
      title: "Awarded by United Nations",
      source: "V-Award by UNV (United Nations Volunteers) in association with UNDP India",
      date: "Dec 2020",
      icon: Award
    },
    {
      type: "Recognition",
      title: "National Youth Award",
      source: "Awarded by Ministry of Youth Affairs & Sports, Government of India",
      date: "2018",
      icon: Star
    },
    // {
    //   type: "Certification",
    //   title: "GuideStar India Transparency Seal",
    //   source: "GuideStar India",
    //   date: "Oct 2023",
    //   icon: Shield
    // }
  ];

  const partners = [
    { name: "HCL Foundation", logo: "🌐" },
    { name: "Survey of India", logo: "🏛️" },
    // { name: "Tata Trusts", logo: "🤝" },
    // { name: "Wipro Foundation", logo: "💼" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Recognition & <span className="text-[#fd8f45]">Partners</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our work has been recognized by leading organizations and media outlets, reinforcing our commitment to transparency and impact.
          </p>
          <div className="w-24 h-1 bg-[#fd8f45] mx-auto mt-4"></div>
        </div>

        {/* Awards & Media Mentions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {mentions.map((mention, index) => {
            const IconComponent = mention.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-[#fd8f45] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{mention.title}</h3>
                <p className="text-gray-600 text-sm mb-1">{mention.source}</p>
                <p className="text-gray-500 text-xs">{mention.date}</p>
              </div>
            );
          })}
        </div>

        {/* As Seen In */}
        <div className="bg-white rounded-lg p-8 shadow-md mb-8">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">As Seen In</h3>
          
          {/* First Row */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center mb-8">
            <div className="flex flex-col items-center">
              <img src="https://companieslogo.com/img/orig/RADIOCITY.NS-42ad2e24.png?t=1720244493" alt="Radio City" className="h-12 mb-2 object-contain" />
              <span className="text-gray-600 text-sm font-medium">Radio City</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://polarity.in/wp-content/uploads/2020/01/YourStory-Logo.png" alt="YourStory" className="h-12 mb-2 object-contain" />
              <span className="text-gray-600 text-sm font-medium">YourStory</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/images/bbc.png" alt="BBC" className="h-12 mb-2 object-contain" />
              <span className="text-gray-600 text-sm font-medium">BBC</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://img-cdn.publive.online/fit-in/1200x675/filters:format(webp)/bmi/media/media_files/2025/07/17/cnn-news18-logo-2025-07-17-18-49-22.jpg" alt="CNN" className="h-12 mb-2 object-contain" />
              <span className="text-gray-600 text-sm font-medium">CNN</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/images/htcity.png" alt="HT City" className="h-12 mb-2 object-contain" />
              <span className="text-gray-600 text-sm font-medium">HT City</span>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            <div className="flex flex-col items-center">
              <img src="https://content.jdmagicbox.com/v2/comp/mumbai/56/022p802856/catalogue/business-world-magazine-lower-parel-mumbai-english-publications-3k7gwqs-250.jpg" alt="Business World" className="h-12 mb-2 object-contain" />
              <span className="text-gray-600 text-sm font-medium">Business World</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://play-lh.googleusercontent.com/hkvRkmcwd7AXnRanrZpNlPKWv8SBPLmfVPIJzihw5fleRZELjt-Y5vNO9x7ouw0mWw=w480-h960-rw" alt="ETV Bharat" className="h-12 mb-2 object-contain" />
              <span className="text-gray-600 text-sm font-medium">ETV Bharat</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://images.seeklogo.com/logo-png/40/1/dainik-jagran-logo-png_seeklogo-403739.png" alt="Dainik Jagran" className="h-12 mb-2 object-contain" />
              <span className="text-gray-600 text-sm font-medium">Dainik Jagran</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://scontent.fdel8-2.fna.fbcdn.net/v/t39.30808-6/352331792_797541915015446_9080369306387611311_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=PnzVlXcm_TcQ7kNvwFN2hFf&_nc_oc=Admnv0MFcJiyBsPh0hHD2DuiHAUVdnKoXzRU_RhaO72wpyzSd2pMPZxhzzQUXeQ_eOI&_nc_zt=23&_nc_ht=scontent.fdel8-2.fna&_nc_gid=M3ylC4DEQ1BPFePWTJ2oeA&oh=00_AfSvOJwL3qo1LG_oosIATx9TqDGI8A_Ih8JWjAXXHpC-tg&oe=6882F6DD" alt="Punjab Kesari" className="h-12 mb-2 object-contain" />
              <span className="text-gray-600 text-sm font-medium">Punjab Kesari</span>
            </div>
            
          </div>
        </div>

        {/* Trust Badges */}
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Trusted By Leading Organizations</h3>
          <div className="grid grid-cols-4 md:grid-cols-2 gap-6 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{partner.logo}</div>
                <p className="text-gray-600 text-sm font-medium">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Elements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <h4 className="font-bold text-gray-800 mb-2">FCRA Registered</h4>
            <p className="text-gray-600 text-sm">Registration No: 231662059</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <h4 className="font-bold text-gray-800 mb-2">80G Certified</h4>
            <p className="text-gray-600 text-sm">Tax exemption available</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <h4 className="font-bold text-gray-800 mb-2">CSR Compliant</h4>
            <p className="text-gray-600 text-sm">Eligible for CSR funding</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaMentions;