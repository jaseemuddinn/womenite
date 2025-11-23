import React from 'react';

const MissionVision = () => {
  const principles = [
    {
      title: "Community-Centered",
      description: "We work with communities, not for them, ensuring local ownership and sustainability.",
      image: "/images/Screenshot 2025-07-05 041535.png"
    },
    {
      title: "Holistic Approach", 
      description: "Addressing interconnected challenges through comprehensive, multi-faceted programs.",
      image: "/images/Screenshot 2025-07-05 041555.png"
    },
    {
      title: "Quality Focus",
      description: "Delivering high-impact programs with measurable outcomes and continuous improvement.",
      image: "/images/Screenshot 2025-07-05 044041.png"
    },
    {
      title: "Transparency",
      description: "Maintaining open communication about our work, impact, and use of resources.",
      image: "/images/Screenshot 2025-07-05 044050.png"
    }
  ];

  const impactAreas = [
    {
      title: "Education & Literacy",
      description: "Breaking barriers to education through literacy programs, digital skills training, and scholarships.",
      stats: "15,000+ women educated",
      image: "/images/Screenshot 2025-07-05 044104.png"
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health programs including menstrual hygiene, reproductive health, and mental wellness.",
      stats: "25,000+ women reached",
      image: "/images/Screenshot 2025-07-05 044111.png"
    },
    {
      title: "Economic Empowerment",
      description: "Skill development, entrepreneurship training, and financial literacy for economic independence.",
      stats: "7,500+ women trained",
      image: "/images/Screenshot 2025-07-05 044125.png"
    },
    {
      title: "Leadership Development",
      description: "Building confident leaders who drive change in their communities and beyond.",
      stats: "500+ leaders created",
      image: "/images/Screenshot 2025-07-05 044130.png"
    }
  ];

  return (
    <section className="relative py-20 bg-gray-50">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/photos/background2.png')`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Mission & Vision
          </h2>
          <div className="w-24 h-1 bg-[#fd8f45] mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Driven by purpose, guided by compassion, and committed to creating lasting change 
            in the lives of women and communities across India.
          </p>
        </div>

        {/* Mission, Vision & Values - Vertical Cards with Images */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-8xl mx-auto mb-16">
          {/* Mission */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="relative overflow-hidden">
              <img 
                src="/images/Screenshot 2025-07-05 044057.png" 
                alt="Our Mission"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower underprivileged women and girls by providing them with education, healthcare access, 
                skill development, and leadership training to help them become self-reliant, confident, and 
                active contributors to their communities and society at large.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="relative overflow-hidden">
              <img 
                src="/images/Screenshot 2025-07-05 041524.png" 
                alt="Our Vision"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                A world where every woman has equal opportunities to thrive, lead, and contribute to society. 
                We envision communities where gender equality is not just a dream but a lived reality, 
                where women are agents of change and pillars of strength.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="relative overflow-hidden">
              <img 
                src="/images/Screenshot 2025-07-05 044141.png" 
                alt="Our Values"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
              <p className="text-gray-700 leading-relaxed">
                Compassion, integrity, and empowerment guide everything we do. We believe in the power of 
                sisterhood, community support, and creating lasting change from the ground up through 
                collaborative action and unwavering dedication.
              </p>
            </div>
          </div>
        </div>

        {/* Core Principles - Horizontal Cards with Images */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core <span className="text-[#fd8f45]">Principles</span>
            </h3>
            <p className="text-gray-200 max-w-2xl mx-auto">
              These principles form the foundation of every program we design and every initiative we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                {/* Mobile: Stack vertically */}
                <div className="block md:hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={principle.image} 
                      alt={principle.title}
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{principle.title}</h4>
                    <p className="text-sm text-gray-600">{principle.description}</p>
                  </div>
                </div>

                {/* Desktop: Horizontal layout */}
                <div className="hidden md:flex items-center">
                  <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden">
                    <img 
                      src={principle.image} 
                      alt={principle.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10"></div>
                  </div>
                  <div className="flex-1 p-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{principle.title}</h4>
                    <p className="text-sm text-gray-600">{principle.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Areas - Enhanced Cards with Images */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Areas of <span className="text-[#fd8f45]">Impact</span>
            </h3>
            <p className="text-gray-200 max-w-2xl mx-auto">
              We focus on key areas that create the most significant and lasting impact in women's lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactAreas.map((area, index) => (
              <div key={index} className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={area.image} 
                    alt={area.title}
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{area.title}</h4>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <div className="bg-[#fd8f45]/10 px-4 py-2 rounded-full inline-block">
                    <span className="text-[#fd8f45] font-semibold text-sm">{area.stats}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment Statement */}
        <div className="text-center bg-white/95 backdrop-blur-sm p-12 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Our <span className="text-[#fd8f45]">Commitment</span>
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We are committed to creating a world where every woman has the opportunity to realize her full potential. 
            Through our comprehensive programs, dedicated team, and unwavering support from our community, 
            we continue to break barriers, challenge stereotypes, and build pathways to empowerment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-gradient-to-br from-[#fd8f45]/10 to-[#fd8f45]/5 rounded-lg">
              <div className="text-3xl font-bold text-[#fd8f45] mb-2">25,000+</div>
              <div className="text-gray-600 font-medium">Women Empowered</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-[#fd8f45]/10 to-[#fd8f45]/5 rounded-lg">
              <div className="text-3xl font-bold text-[#fd8f45] mb-2">150+</div>
              <div className="text-gray-600 font-medium">Communities Reached</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-[#fd8f45]/10 to-[#fd8f45]/5 rounded-lg">
              <div className="text-3xl font-bold text-[#fd8f45] mb-2">6</div>
              <div className="text-gray-600 font-medium">Years of Impact</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
