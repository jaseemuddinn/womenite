import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Users, MapPin, Award, Target, Heart, Building2, Trophy, Check, X, ExternalLink, Download, Image as ImageIcon } from 'lucide-react';

const OurJourney = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [selectedMilestone, setSelectedMilestone] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (milestone: any) => {
    setSelectedMilestone(milestone);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; 
  };

  const closeModal = () => {
    setSelectedMilestone(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'unset'; 
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  // navigation for modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isModalOpen || !selectedMilestone) return;

      if (event.key === 'Escape') {
        closeModal();
      } else if (event.key === 'ArrowLeft') {
        const currentIndex = milestones.findIndex(m => m.year === selectedMilestone.year);
        if (currentIndex > 0) {
          setSelectedMilestone(milestones[currentIndex - 1]);
        }
      } else if (event.key === 'ArrowRight') {
        const currentIndex = milestones.findIndex(m => m.year === selectedMilestone.year);
        if (currentIndex < milestones.length - 1) {
          setSelectedMilestone(milestones[currentIndex + 1]);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, selectedMilestone]);
  const keyStats = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Established",
      value: "2018",
      description: "Founded with a vision to empower women"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Women Helped",
      value: "25,000+",
      description: "Lives transformed across communities"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "States Reached",
      value: "15+",
      description: "Expanding our impact nationwide"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Programs Active",
      value: "12+",
      description: "Comprehensive support initiatives"
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Foundation and First Steps",
      description: "Established our organization with the mission to empower underprivileged women through education and healthcare access.",
      achievements: [
        "Registered as a non-profit organization",
        "Launched first menstrual hygiene awareness program",
        "Reached 100 women in initial pilot project"
      ],
      detailedInfo: {
        impact: "Our foundation year marked the beginning of a transformative journey. We identified the critical need for menstrual hygiene awareness in rural communities.",
        challenges: "Limited funding, lack of awareness, cultural barriers",
        solutions: "Community engagement, local partnerships, culturally sensitive approach",
        testimonial: "This organization gave me hope and dignity. I learned about health and hygiene for the first time. - Priya, Beneficiary",
        images: ["foundation1.jpg", "foundation2.jpg"],
      },
      icon: <Heart className="h-6 w-6" />,
      color: "bg-[#fd8f45]"
    },
    {
      year: "2019",
      title: "Expanding Reach and Impact",
      description: "Scaled our programs to reach more communities and launched skill development initiatives.",
      achievements: [
        "Reached 1,000+ women with health programs",
        "Launched first skill training center",
        "Distributed 5,000+ sanitary pads",
        "Partnered with 3 local organizations"
      ],
      detailedInfo: {
        impact: "Expanded operations to 5 districts, established sustainable distribution networks, and launched vocational training programs.",
        challenges: "Scaling operations, maintaining quality, resource allocation",
        solutions: "Strategic partnerships, volunteer networks, standardized training modules",
        testimonial: "The skill training program changed my life. I now earn ₹8,000 per month from tailoring. - Sunita, Graduate",
        images: ["expansion1.jpg", "training1.jpg"],
      },
      icon: <Users className="h-6 w-6" />,
      color: "bg-pink-500"
    },
    {
      year: "2020",
      title: "Innovation During Challenges",
      description: "Adapted our approach during the pandemic and introduced digital literacy programs.",
      achievements: [
        "Launched online education programs",
        "Provided emergency relief to 500+ families",
        "Started digital literacy training",
        "Maintained programs despite COVID-19"
      ],
      detailedInfo: {
        impact: "Successfully transitioned to digital platforms, provided emergency support during lockdowns, and reached remote areas through technology.",
        challenges: "Pandemic restrictions, digital divide, economic hardship of beneficiaries",
        solutions: "Mobile apps, offline content, emergency relief packages, virtual training",
        testimonial: "During lockdown, the online classes kept me connected and learning. The relief package saved my family. - Meera, Participant",
        images: ["digital1.jpg", "relief1.jpg"],
      },
      icon: <Building2 className="h-6 w-6" />,
      color: "bg-blue-500"
    },
    {
      year: "2021",
      title: "Recognition and Growth",
      description: "Received national recognition and expanded to multiple states with enhanced programs.",
      achievements: [
        "Received National Women Empowerment Award",
        "Expanded to 8 states",
        "Helped 5,000+ women gain employment",
        "Launched mobile health units"
      ],
      detailedInfo: {
        impact: "National recognition brought credibility and resources. Mobile health units reached the most remote communities.",
        challenges: "Interstate operations, regulatory compliance, maintaining standards across states",
        solutions: "State coordinators, standardized protocols, regular monitoring and evaluation",
        testimonial: "The mobile health unit brought healthcare to our doorstep. My children are healthier now. - Kavita, Beneficiary",
        images: ["award1.jpg", "mobile_health1.jpg"],
      },
      icon: <Award className="h-6 w-6" />,
      color: "bg-green-500"
    },
    {
      year: "2022",
      title: "Sustainable Impact",
      description: "Achieved significant milestones and established sustainable programs for long-term impact.",
      achievements: [
        "Reached 10,000+ women milestone",
        "Opened 5 permanent skill centers",
        "Achieved 80% employment rate for trainees",
        "Launched women leadership program"
      ],
      detailedInfo: {
        impact: "Established permanent infrastructure and achieved remarkable employment outcomes. Leadership program created community change agents.",
        challenges: "Sustainability, leadership development, economic empowerment at scale",
        solutions: "Income-generating models, leadership training, mentorship programs",
        testimonial: "I am now a community leader, helping other women start their businesses. This organization made it possible. - Asha, Leader",
        images: ["centers1.jpg", "leadership1.jpg"],
      },
      icon: <Target className="h-6 w-6" />,
      color: "bg-purple-500"
    },
    {
      year: "2023",
      title: "Strategic Partnerships",
      description: "Formed key partnerships with corporations and government bodies to amplify our impact.",
      achievements: [
        "Partnered with 10+ corporate sponsors",
        "Signed MOU with state governments",
        "Launched rural entrepreneurship program",
        "Trained 100+ community leaders"
      ],
      detailedInfo: {
        impact: "Strategic partnerships multiplied our resources and reach. Government MOUs ensured program sustainability.",
        challenges: "Partnership alignment, government processes, rural entrepreneurship support",
        solutions: "Collaborative frameworks, dedicated partnership team, microfinance linkages",
        testimonial: "The entrepreneurship program helped me start my food processing business. I now employ 5 women. - Rekha, Entrepreneur",
        images: ["partnerships1.jpg", "entrepreneurs1.jpg"],
      },
      icon: <Building2 className="h-6 w-6" />,
      color: "bg-indigo-500"
    },
    {
      year: "2024",
      title: "Milestone Achievement",
      description: "Reached our major goal of helping 25,000+ women and expanding our comprehensive programs.",
      achievements: [
        "Achieved 25,000+ women helped milestone",
        "Opened offices in 15+ states",
        "Launched mental health support program",
        "Received multiple humanitarian awards"
      ],
      detailedInfo: {
        impact: "Reached the significant milestone of 25,000 women empowered. Mental health support addressed a critical gap in our services.",
        challenges: "Mental health stigma, counselor training, holistic support integration",
        solutions: "Culturally sensitive counseling, peer support groups, integrated service delivery",
        testimonial: "The mental health support helped me overcome trauma and rebuild my confidence. I'm grateful for this holistic approach. - Deepika, Survivor",
        images: ["milestone1.jpg", "mental_health1.jpg"],
      },
      icon: <Trophy className="h-6 w-6" />,
      color: "bg-[#fd8f45]"
    }
  ];

  const recognitions = [
    "National Women Empowerment Award 2021",
    "Best NGO for Women Development 2022",
    "Excellence in Community Service 2023",
    "Humanitarian Impact Award 2024"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @media (max-width: 768px) {
          .timeline-item {
            margin-bottom: 2rem;
          }
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#fd8f45] to-[#e67c3a] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Journey</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              From humble beginnings to transforming thousands of lives - discover the milestones 
              that shaped our mission of empowering women and creating lasting change
            </p>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact <span className="text-[#fd8f45]">at a Glance</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These numbers represent lives changed, dreams realized, and communities transformed through our dedicated efforts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyStats.map((stat, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 border border-gray-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#fd8f45] to-[#e67c3a] text-white rounded-full mb-4 shadow-lg">
                  {stat.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-[#fd8f45] to-[#e67c3a] bg-clip-text text-transparent">{stat.value}</h3>
                <h4 className="text-lg font-semibold text-[#fd8f45] mb-2">{stat.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-200" ref={timelineRef} id="timeline">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#fd8f45]">Milestones</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Every year has brought new achievements, expanded reach, and deeper impact in the lives of women across communities.
            </p>
            
            {/* timeline navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {milestones.map((milestone, index) => (
                <a
                  key={index}
                  href={`#milestone-${milestone.year}`}
                  className="bg-white text-[#fd8f45] px-3 py-1 rounded-full text-sm font-semibold hover:bg-[#fd8f45] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  {milestone.year}
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* timeline with gradient */}
            <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#fd8f45] via-pink-500 to-purple-500 rounded-full shadow-lg"></div>

            <div className="space-y-8 md:space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} id={`milestone-${milestone.year}`} className={`timeline-item relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center opacity-0 transform translate-y-8 transition-all duration-700`}>
                  {/* pulse animation  */}
                  <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-white border-4 border-[#fd8f45] rounded-full z-10 shadow-lg animate-pulse"></div>

                  {/* content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-8 md:ml-0`}>
                    <div 
                      className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] cursor-pointer"
                      onClick={() => openModal(milestone)}
                    >
                      {/* year badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className={`${milestone.color} text-white rounded-full p-2 mr-3 shadow-md`}>
                            {React.cloneElement(milestone.icon, { className: "w-5 h-5" })}
                          </div>
                          <span className="bg-gradient-to-r from-[#fd8f45] to-[#e67c3a] text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
                            {milestone.year}
                          </span>
                        </div>
                        <div className="text-2xl font-bold text-[#fd8f45]">
                          #{index + 1}
                        </div>
                      </div>

                      {/* title, description */}
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">{milestone.description}</p>

                      {/* acheivements with checkmarks */}
                      <div>
                        <h4 className="text-sm md:text-base font-semibold text-[#fd8f45] mb-3 flex items-center">
                          <Award className="w-4 h-4 mr-2" />
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {milestone.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start group">
                              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                                <Check className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* progress indicator */}
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Year {index + 1} of our journey</span>
                          <span>{Math.round(((index + 1) / milestones.length) * 100)}% Complete</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                          <div 
                            className="bg-gradient-to-r from-[#fd8f45] to-[#e67c3a] h-1 rounded-full transition-all duration-1000"
                            style={{ width: `${((index + 1) / milestones.length) * 100}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Click to learn more indicator */}
                      <div className="mt-3 text-center">
                        <span className="text-xs text-[#fd8f45] font-medium flex items-center justify-center">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Click to learn more
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recognition & <span className="text-[#fd8f45]">Awards</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our work has been recognized by various organizations and institutions for its impact and dedication to women's empowerment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {recognitions.map((recognition, index) => (
              <div key={index} className="bg-gradient-to-r from-[#fd8f45] to-[#e67c3a] text-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border-2 border-transparent hover:border-white">
                <Award className="h-10 w-10 mx-auto mb-4 animate-bounce" />
                <h3 className="text-lg md:text-xl font-semibold">{recognition}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#fd8f45] to-[#e67c3a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Continuing Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of our mission to empower more women and create lasting change in communities across the nation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#fd8f45] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
              Get Involved
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#fd8f45] transition-colors transform hover:scale-105">
              Learn More About Our Work
            </button>
          </div>
        </div>
      </section>

      

      {/* modal for year detail */}
      {isModalOpen && selectedMilestone && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="flex items-center justify-center min-h-screen p-2 md:p-4">
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[92vh] md:max-h-[90vh] overflow-hidden transform transition-all mx-2 md:mx-0 flex flex-col">
              {/* Header */}
              <div className={`${selectedMilestone.color} text-white p-4 md:p-6 relative`}>
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 md:top-4 md:right-4 text-white hover:text-gray-200 transition-colors z-10"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                
                <div className="flex items-center mb-3 md:mb-4 pr-8">
                  <div className="bg-white bg-opacity-20 rounded-full p-2 md:p-3 mr-3 md:mr-4">
                    {React.cloneElement(selectedMilestone.icon, { className: "w-6 h-6 md:w-8 md:h-8" })}
                  </div>
                  <div>
                    <h2 className="text-xl md:text-3xl font-bold">{selectedMilestone.title}</h2>
                    <p className="text-lg md:text-xl opacity-90">{selectedMilestone.year}</p>
                  </div>
                </div>
                
                <p className="text-sm md:text-lg opacity-90 leading-relaxed pr-8">
                  {selectedMilestone.description}
                </p>
              </div>

              {/* year modal content */}
              <div className="p-4 md:p-6 overflow-y-auto flex-1 min-h-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* imapct section */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                        <Target className="w-5 h-5 mr-2 text-[#fd8f45]" />
                        Our Impact
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {selectedMilestone.detailedInfo.impact}
                      </p>
                    </div>

                    {/* challenge and sol. */}
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenges</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {selectedMilestone.detailedInfo.challenges}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solutions</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {selectedMilestone.detailedInfo.solutions}
                        </p>
                      </div>
                    </div>

                    {/* acheive */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                        <Award className="w-5 h-5 mr-2 text-[#fd8f45]" />
                        Key Achievements
                      </h3>
                      <ul className="space-y-2">
                        {selectedMilestone.achievements.map((achievement: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* right column */}
                  <div className="space-y-6">
                    {/* testimonial (only 1) */}
                    <div className="bg-gray-50 rounded-xl p-4 md:p-6">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 flex items-center">
                        <Heart className="w-4 h-4 md:w-5 md:h-5 mr-2 text-[#fd8f45]" />
                        Testimonial
                      </h3>
                      <blockquote className="text-sm md:text-base text-gray-700 italic leading-relaxed">
                        "{selectedMilestone.detailedInfo.testimonial}"
                      </blockquote>
                    </div>

                    {/* modal image */}
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 flex items-center">
                        <ImageIcon className="w-4 h-4 md:w-5 md:h-5 mr-2 text-[#fd8f45]" />
                        Gallery
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedMilestone.detailedInfo.images.map((image: string, index: number) => (
                          <div key={index} className="bg-gray-200 rounded-lg h-24 md:h-32 flex flex-col items-center justify-center p-2">
                            <ImageIcon className="w-6 h-6 md:w-8 md:h-8 text-gray-400 mb-1" />
                            <span className="text-xs md:text-sm text-gray-500 text-center break-words">{image}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* footer for modal */}
              <div className="bg-gray-50 px-3 md:px-6 py-4 flex flex-col gap-3">
                <div className="text-xs md:text-sm text-gray-600 text-center">
                  Milestone {milestones.findIndex(m => m.year === selectedMilestone.year) + 1} of {milestones.length}
                </div>
                <div className="flex gap-2 w-full">
                  <button
                    onClick={() => {
                      const currentIndex = milestones.findIndex(m => m.year === selectedMilestone.year);
                      if (currentIndex > 0) {
                        setSelectedMilestone(milestones[currentIndex - 1]);
                      }
                    }}
                    disabled={milestones.findIndex(m => m.year === selectedMilestone.year) === 0}
                    className="flex-1 px-3 py-2.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() => {
                      const currentIndex = milestones.findIndex(m => m.year === selectedMilestone.year);
                      if (currentIndex < milestones.length - 1) {
                        setSelectedMilestone(milestones[currentIndex + 1]);
                      }
                    }}
                    disabled={milestones.findIndex(m => m.year === selectedMilestone.year) === milestones.length - 1}
                    className="flex-1 px-3 py-2.5 bg-[#fd8f45] text-white rounded-lg hover:bg-[#e67c3a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurJourney; 