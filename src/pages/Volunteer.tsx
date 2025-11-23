
import React from 'react';
import { Users, Clock, Heart, Star } from 'lucide-react';

const Volunteer = () => {
  const opportunities = [
    {
      title: "Program Assistant",
      commitment: "4-6 hours/week",
      location: "Field locations",
      description: "Help run our skill development and health awareness programs",
      skills: ["Communication", "Organization", "Local language helpful"]
    },
    {
      title: "Digital Mentor",
      commitment: "2-4 hours/week",
      location: "Remote/Online",
      description: "Teach digital literacy and online safety to women",
      skills: ["Basic computer skills", "Patience", "Teaching ability"]
    },
    {
      title: "Content Creator",
      commitment: "Flexible",
      location: "Remote",
      description: "Create educational content, social media posts, and success stories",
      skills: ["Writing", "Design", "Social media knowledge"]
    },
    {
      title: "Health Educator",
      commitment: "6-8 hours/week",
      location: "Community centers",
      description: "Conduct health awareness sessions and menstrual hygiene workshops",
      skills: ["Healthcare background", "Public speaking", "Cultural sensitivity"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#fd8f45] to-[#e67c3a] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Our Mission</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Become a volunteer and directly impact women's lives while growing personally and professionally
          </p>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why <span className="text-[#fd8f45]">Volunteer</span> With Us?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Volunteering with womenite is more than giving back – it's about being part of a transformative journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#fd8f45] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Make Real Impact</h3>
              <p className="text-gray-600">See direct results of your efforts in women's transformed lives</p>
            </div>
            <div className="text-center">
              <div className="bg-[#fd8f45] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Build Community</h3>
              <p className="text-gray-600">Connect with like-minded people who share your passion for change</p>
            </div>
            <div className="text-center">
              <div className="bg-[#fd8f45] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Skill Development</h3>
              <p className="text-gray-600">Gain valuable experience in social work, leadership, and community building</p>
            </div>
            <div className="text-center">
              <div className="bg-[#fd8f45] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">Choose opportunities that fit your availability and lifestyle</p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Volunteer <span className="text-[#fd8f45]">Opportunities</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find the perfect role that matches your skills, interests, and availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{opportunity.title}</h3>
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="bg-[#fd8f45] text-white px-3 py-1 rounded-full text-sm">
                    {opportunity.commitment}
                  </span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {opportunity.location}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{opportunity.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Skills Needed:</h4>
                  <div className="flex flex-wrap gap-2">
                    {opportunity.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="bg-[#fd8f45] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#e67c3a] transition-colors">
                  Apply for This Role
                </button>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Application Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Ready to <span className="text-[#fd8f45]">Get Started</span>?
              </h2>
              <p className="text-gray-600">
                We use Google Forms to collect volunteer applications. Fill out the application form below.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg flex flex-col items-center p-4 md:p-8">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScs1cbYrl8l2V1wWdKj-YY6MXpaWUOLv9oy8HJIWxgXAyFp2w/viewform?embedded=true"
                width="100%"
                height="1000"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Volunteer Application Form"
                className="w-full max-w-2xl mx-auto rounded-lg border border-gray-200 shadow"
                allowFullScreen
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Testimonials */}
      <section className="py-16 bg-[#fd8f45] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Volunteers Say</h2>
            <p className="text-orange-100 max-w-2xl mx-auto">
              Hear from our amazing volunteers about their experience with womenite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-8">
              <p className="text-lg mb-4 italic">
                "Volunteering with womenite has been the most rewarding experience of my life. 
                Seeing women transform and become confident leaders is incredible."
              </p>
              <div className="font-semibold">- Sarah Johnson, Program Assistant</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-8">
              <p className="text-lg mb-4 italic">
                "As a digital mentor, I've helped over 50 women learn to use smartphones and 
                access online services. Their gratitude and progress motivates me every day."
              </p>
              <div className="font-semibold">- Rahul Sharma, Digital Mentor</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
