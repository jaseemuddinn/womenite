
import React, { useState } from 'react';
import { Users, Target, Heart, Award, User, UserCheck, GraduationCap, Handshake, ExternalLink } from 'lucide-react';

const About = () => {
  const [activeTeamTab, setActiveTeamTab] = useState('founder');

  // Custom placeholder component for team members
  const TeamMemberPlaceholder = ({ name }: { name: string }) => {
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
    const colors = [
      'from-blue-400 to-blue-600',
      'from-green-400 to-green-600', 
      'from-purple-400 to-purple-600',
      'from-pink-400 to-pink-600',
      'from-indigo-400 to-indigo-600',
      'from-yellow-400 to-yellow-600'
    ];
    const colorIndex = name.length % colors.length;
    
    return (
      <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${colors[colorIndex]} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
        <span className="text-white text-xl font-bold">{initials}</span>
      </div>
    );
  };

  const teamData = {
    founder: [
      {
        name: "Harshit",
        role: "Founder & Director",
        image: "/images/team/harshit.JPG",
        bio: "Engineer by education and social entrepreneur by choice. National Youth Awardee, V-Award recipient from UN Volunteers India, Queen's Young Leader, and TEDx speaker. Founded Womenite in 2015 to advance gender equality through education and menstrual-hygiene awareness. Finalist for 'We Are Together' International Prize in Moscow, Russia. Has impacted 50,000+ youth and women across 500+ schools.",
        specialization: "Social Entrepreneurship & Gender Equality",
        linkedin: "https://www.linkedin.com/in/harshitgupta812"
      }
    ],
    executive: [
      {
        name: "Tanya Gupta",
        role: "Chief Operating Officer",
        image: null, 
        bio: "Former Teach For India Fellow and Swedish Institute Leader Lab participant. Recognized with Shashakt Nari Gaurav Samman 2023 and finalist for 'We Are Together' International Prize. Collaborates with policymakers and NGOs to advance gender equity through education, advocacy, and scalable social impact.",
        specialization: "Education & Policy Advocacy",
        linkedin: "https://www.linkedin.com/in/tanyagupta604/"
      },
      {
        name: "Ankur Bansal",
        role: "Chief Financial Officer & Treasurer",
        image: null, 
        bio: "Qualified Chartered Accountant (Class of 2017) and MBA from MDI Gurgaon. Oversees all finance operations—budgeting, forecasting, statutory compliance and fund management. Prior experience at State Street Corporation and EY. CFA Level I candidate bringing analytical skills and strategic vision to drive Womenite's mission.",
        specialization: "Financial Management & Strategic Planning",
        linkedin: "https://www.linkedin.com/in/ankur-bansal145/"
      },
      {
        name: "Priya Gupta",
        role: "General Secretary",
        image: null, 
        bio: "Dedicated to organizational governance and strategic coordination. Ensures smooth communication across all departments and maintains institutional records while supporting the leadership team in achieving Womenite's mission.",
        specialization: "Governance & Administration"
      },
      {
        name: "Kanishka Goel",
        role: "Head of Communications",
        image: null, 
        bio: "Strategic communications professional responsible for brand messaging, public relations, and digital outreach. Develops compelling narratives that amplify Womenite's impact and builds meaningful connections with stakeholders, media, and community partners.",
        specialization: "Strategic Communications & Public Relations"
      },
      {
        name: "Pratap Kumar",
        role: "Head of Accounts",
        image: null, 
        bio: "Experienced accounting professional overseeing financial operations, bookkeeping, and audit coordination. Ensures accurate financial reporting and maintains compliance with regulatory requirements while supporting the organization's fiscal responsibility and transparency.",
        specialization: "Accounting & Financial Reporting"
      },
      {
        name: "Aditi Bansal",
        role: "Operations Manager",
        image: null, 
        bio: "Aditi brings her expertise in mental health and program management to drive Womenite's on-ground impact. As Operations Manager, she oversees the planning and execution of gender-equality initiatives across schools and communities, coordinating logistics, volunteer training, and monitoring to ensure seamless delivery of menstrual-hygiene and empowerment programs. Co-founder of Serene MINDS, Aditi leverages her background as a counselling psychologist to design holistic workshops that integrate mental-wellbeing with social advocacy. Her cross-sector experience in community mobilization, youth mentorship, and strategic partnerships strengthens Womenite's mission to foster sustainable change for girls and women across India.",
        specialization: "Mental Health & Program Management",
        linkedin: "https://www.linkedin.com/in/aditi-bansal-she-her-9a6aba136/"
      }
    ],
    advisory: [
      {
        name: "Ravi Karkara",
        role: "Senior Advisor",
        image: null, 
        bio: "Experienced advisor bringing strategic guidance and expertise to support Womenite's mission and organizational development.",
        specialization: "Strategic Advisory & Development"
      },
      {
        name: "Divya Gautam",
        role: "Advisory Council Member",
        image: null, 
        bio: "Committed to advancing women's empowerment through strategic counsel and advocacy initiatives.",
        specialization: "Women's Empowerment & Advocacy"
      },
      {
        name: "Jyoti Rathee",
        role: "Advisory Council Member",
        image: null, 
        bio: "Dedicated advisor providing expertise and guidance to strengthen Womenite's programs and impact.",
        specialization: "Program Development & Strategy"
      },
      {
        name: "Meenakshi Narang",
        role: "Advisory Council Member",
        image: "images/team/Meenakshi narang.jpg", 
        bio: "Passionate about social change and gender equality, contributing valuable insights to Womenite's strategic direction.",
        specialization: "Social Impact & Gender Equality"
      }
    ],
    changemakers: [
      {
        name: "Anjali Sharma",
        role: "Community Impact Leader",
        image: null, // Will use custom placeholder
        bio: "Passionate about grassroots change and community mobilization. Leads initiatives to create sustainable impact in rural communities through education and empowerment programs.",
        specialization: "Community Mobilization & Rural Development"
      },
      {
        name: "Rohit Verma",
        role: "Youth Engagement Coordinator",
        image: null, // Will use custom placeholder
        bio: "Dedicated to inspiring and engaging young people in social causes. Develops innovative programs to involve youth in gender equality and social justice initiatives.",
        specialization: "Youth Development & Social Engagement"
      },
      {
        name: "Priya Patel",
        role: "Health Advocacy Specialist",
        image: null, // Will use custom placeholder
        bio: "Committed to promoting health awareness and wellness in underserved communities. Focuses on women's health education and preventive healthcare initiatives.",
        specialization: "Health Education & Community Wellness"
      },
      {
        name: "Arjun Singh",
        role: "Digital Empowerment Lead",
        image: null, // Will use custom placeholder
        bio: "Technology enthusiast working to bridge the digital divide. Implements digital literacy programs and uses technology for social impact and women's empowerment.",
        specialization: "Digital Literacy & Technology for Social Good"
      },
      {
        name: "Kavita Reddy",
        role: "Skills Development Coordinator",
        image: null, // Will use custom placeholder
        bio: "Expert in vocational training and entrepreneurship development. Designs and implements skill-building programs to enhance economic opportunities for women.",
        specialization: "Vocational Training & Entrepreneurship"
      },
      {
        name: "Vikash Kumar",
        role: "Research & Documentation Lead",
        image: null, // Will use custom placeholder
        bio: "Researcher passionate about data-driven social change. Documents impact stories and conducts research to improve program effectiveness and advocacy efforts.",
        specialization: "Research & Impact Documentation"
      }
    ]
  };

  const teamTabs = [
    { id: 'founder', label: 'Founder', icon: User, count: teamData.founder.length },
    { id: 'executive', label: 'Executive Team', icon: UserCheck, count: teamData.executive.length },
    { id: 'advisory', label: 'Advisory Council', icon: GraduationCap, count: teamData.advisory.length },
    { id: 'changemakers', label: 'Changemakers', icon: Handshake, count: teamData.changemakers.length }
  ];

  const getCurrentTeamMembers = () => {
    return teamData[activeTeamTab as keyof typeof teamData] || [];
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#fd8f45] to-[#e67c3a] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About womenite</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Founded in 2018, we are dedicated to empowering underprivileged women through comprehensive programs that address education, health, and economic independence.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Mission Statement</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              "To empower underprivileged women and girls by providing them with education, healthcare access, 
              skill development, and leadership training, enabling them to become self-reliant, confident, 
              and active contributors to their communities and society at large."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#fd8f45] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Education</h3>
                <p className="text-gray-600">Providing quality education and literacy programs</p>
              </div>
              <div className="text-center">
                <div className="bg-[#fd8f45] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Healthcare</h3>
                <p className="text-gray-600">Ensuring access to healthcare and wellness programs</p>
              </div>
              <div className="text-center">
                <div className="bg-[#fd8f45] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Empowerment</h3>
                <p className="text-gray-600">Building confidence and leadership skills</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                womenite was born from a simple yet powerful observation: when women are empowered, 
                entire communities transform. Founded in 2015 by Harshit, our organization 
                began with a vision to advance gender equality through education and advocacy.
              </p>
              <p className="mb-6">
                What started as weekend literacy classes for 20 women has grown into a comprehensive 
                empowerment program reaching over 25,000 women across multiple states. Our approach 
                is holistic - we don't just focus on one aspect of empowerment but address the 
                interconnected challenges women face.
              </p>
              <p className="mb-6">
                From menstrual health awareness to digital literacy, from self-defense training to 
                entrepreneurship support, we believe in addressing the root causes of gender inequality. 
                Our programs are designed by women, for women, with deep cultural sensitivity and 
                community involvement.
              </p>
              <p>
                Today, we are proud to be recognized as one of India's leading women empowerment NGOs, 
                but our real pride comes from the thousands of women who have transformed their lives 
                and are now empowering others in their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated team brings together diverse expertise in social work, healthcare, education, and operations.
            </p>
          </div>

          {/* Team Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 shadow-lg rounded-2xl p-2">
              {teamTabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTeamTab(tab.id)}
                    className={`px-4 py-3 rounded-lg text-center font-medium transition-all duration-300 mx-1 text-sm ${
                      activeTeamTab === tab.id
                        ? 'bg-[#fd8f45] text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {tab.label}
                    <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                      activeTeamTab === tab.id ? 'bg-white/20' : 'bg-gray-300'
                    }`}>
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Team Members Grid */}
          <div className={`grid gap-8 ${
            activeTeamTab === 'founder' ? 'grid-cols-1 max-w-md mx-auto' : 
            'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {getCurrentTeamMembers().map((member, index) => (
              <div key={`${activeTeamTab}-${index}`} className="text-center bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="relative">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                    />
                  ) : (
                    <TeamMemberPlaceholder name={member.name} />
                  )}
                  {(member as any).linkedin && (
                    <a 
                      href={(member as any).linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute -top-2 -right-2 bg-[#fd8f45] hover:bg-[#e67c3a] text-white p-2 rounded-full shadow-lg transition-colors"
                      title="View LinkedIn Profile"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-[#fd8f45] font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-3">{member.bio}</p>
                <div className="border-t pt-3">
                  <span className="text-xs font-medium text-gray-500">Specialization:</span>
                  <p className="text-[#fd8f45] text-sm font-medium">{member.specialization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#fd8f45] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-orange-100 max-w-2xl mx-auto">
              These values guide every decision we make and every program we implement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-3">Compassion</h3>
              <p className="text-orange-100">We approach every woman's story with empathy and understanding.</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-orange-100">Transparency and honesty in all our operations and communications.</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-3">Empowerment</h3>
              <p className="text-orange-100">Building confidence and capabilities, not creating dependency.</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-orange-100">Creating networks of support that last beyond our programs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
