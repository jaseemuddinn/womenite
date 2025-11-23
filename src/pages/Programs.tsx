import React from 'react';
import { Heart, BookOpen, Shield, Smartphone, Phone, Users, Award, Target, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Programs = () => {
  const programs = [
    {
      icon: Award,
      title: "Skill Development Centre",
      description: "Comprehensive skill development center providing vocational training and educational support.",
      details: [
        "Vocational training programs",
        "Sewing machine operation and tailoring",
        "Educational classes for school students",
        "Computer literacy training",
        "Life skills and personality development"
      ],
      impact: "200+ women trained | 100+ adolescents benefited",
      image: "/images/skill.jpg",
      socialLinks: [
        "https://www.instagram.com/reel/C0gp3Fti-l1/?igsh=MWZhMG5tMW01Ym9hdA==",
        "https://www.instagram.com/reel/CwNteAoAo_W/?igsh=NWVydTZwejVxbnNk",
        "https://www.instagram.com/reel/CunzbOuLikB/?igsh=MTMzaGxmaWxvaGFhOQ=="
      ]
    },
    {
      icon: Heart,
      title: "Bank Pad",
      description: "Comprehensive menstrual health education and hygiene programs breaking cultural taboos.",
      details: [
        "Free distribution of biodegradable sanitary pads",
        "Health education workshops in schools and communities",
        "Training local women as menstrual health educators",
        "Setting up pad banks in rural areas"
      ],
      impact: "1,50,000+ sanitary pads distributed | 50,000+ women educated",
      image: "/images/bank-pad.png"
    },
    {
      icon: BookOpen,
      title: "Pink Pad",
      description: "Practical skills training to help women achieve financial independence.",
      details: [
        "Tailoring and embroidery workshops",
        "Beauty and wellness training",
        "Food processing and packaging",
        "Handicrafts and jewelry making",
        "Basic accounting and business skills"
      ],
      impact: "7,000+ women trained | 3,500+ now earning independently",
      image: "/images/pink-pad.png"
    },
    {
      icon: Shield,
      title: "Ladli Gudia",
      description: "Physical and mental empowerment through self-defense and confidence building.",
      details: [
        "Basic self-defense techniques",
        "Awareness about women's rights and legal aid",
        "Confidence building workshops",
        "Emergency response training"
      ],
      impact: "5,000+ women trained | 12 self-defense centers operational",
      image: "/images/ladli-gudia.png"
    },
    {
      icon: Smartphone,
      title: "Nanhi Pari",
      description: "Bridging the digital divide by teaching essential digital skills.",
      details: [
        "Basic smartphone and internet usage",
        "Digital payments and banking",
        "Online safety and privacy",
        "Social media awareness",
        "Basic computer skills"
      ],
      impact: "3,500+ women trained | 80% now use digital payments",
      image: "/images/nanhi-pari.png"
    },
    {
      icon: Phone,
      title: "Kagazke Pad",
      description: "24/7 support system for women in distress and need of guidance.",
      details: [
        "24/7 toll-free helpline",
        "Professional counseling services",
        "Legal aid and guidance",
        "Emergency shelter coordination",
        "Follow-up support and rehabilitation"
      ],
      impact: "10,000+ calls handled | 2,500+ women provided direct assistance",
      image: "/images/kagazke-pad.png"
    },
    {
      icon: Users,
      title: "Uchi Udan",
      description: "Creating the next generation of women leaders and change-makers.",
      details: [
        "Leadership skills workshops",
        "Public speaking and communication training",
        "Community organizing and advocacy",
        "Mentorship programs",
        "Women's rights education"
      ],
      impact: "60+ women leaders trained | 25 now leading community initiatives",
      image: "/images/uchi-udan.png"
    }
    
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#fd8f45] to-[#e67c3a] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive programs designed to address every aspect of women's empowerment and well-being
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Transforming Lives Through <span className="text-[#fd8f45]">Action</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our programs are carefully designed based on ground realities and community needs. 
              Each initiative addresses specific challenges while building overall capacity and confidence.
            </p>
          </div>

          <div className="space-y-16">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                  <div className="lg:w-1/2">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-84 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <div className="flex items-center mb-6">
                      <div className="bg-[#fd8f45] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{program.title}</h3>
                    </div>
                    <p className="text-gray-600 text-lg mb-6">{program.description}</p>
                    <ul className="space-y-2 mb-6">
                      {program.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-[#fd8f45] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">Impact So Far:</h4>
                      <p className="text-[#fd8f45] font-semibold">{program.impact}</p>
                    </div>
                    {program.socialLinks && (
                      <div className="mt-6">
                        <h4 className="font-bold text-gray-800 mb-3">See Our Work:</h4>
                        <div className="flex flex-wrap gap-3">
                          {program.socialLinks.map((link, linkIndex) => (
                            <a
                              key={linkIndex}
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2 bg-[#fd8f45] text-white rounded-full hover:bg-[#e67c3a] transition-colors"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Instagram Reel {linkIndex + 1}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Outcomes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Program <span className="text-[#fd8f45]">Outcomes</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our programs create lasting change that extends beyond individual beneficiaries to entire communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#fd8f45] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Economic Independence</h3>
              <p className="text-gray-600">85% of skill training graduates are now earning independently</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#fd8f45] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Community Leadership</h3>
              <p className="text-gray-600">60+ women now lead community initiatives and support groups</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#fd8f45] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Health Awareness</h3>
              <p className="text-gray-600">90% improvement in menstrual hygiene practices among participants</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#fd8f45] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Confidence Building</h3>
              <p className="text-gray-600">95% of participants report increased self-confidence and agency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#fd8f45] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be Part of This Transformation
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Every program we run is made possible by the support of people like you. 
            Join us in creating lasting change in women's lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" className="bg-white text-[#fd8f45] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-center">
              Support Our Programs
            </Link>
            <Link to="/volunteer" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#fd8f45] transition-colors text-center">
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
