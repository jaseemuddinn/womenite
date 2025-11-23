import React from 'react';
import { Link } from 'react-router-dom';

const MenstrualHygiene = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/menstrual-hygiene-bg.png')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Menstrual Hygiene</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white">
              Breaking the stigma and promoting healthy menstrual practices for all
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Menstruation is a natural biological process that affects half the world's population, yet it remains 
                shrouded in stigma, myths, and misconceptions. Proper menstrual hygiene education is crucial for the 
                health, dignity, and empowerment of women and girls. Understanding menstrual health helps break down 
                barriers that prevent girls from attending school and women from participating fully in society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Resources Section */}
      <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Educational Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Downloadable Guides</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#F58220] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Menstrual Hygiene Management for Adolescents (PDF)
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#F58220] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Understanding the Menstrual Cycle: A Complete Guide
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#F58220] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Menstrual Products: Comparison and Usage Guidelines
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#F58220] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Breaking Menstrual Taboos: A Community Approach
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Educational Videos</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#F58220] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    "Understanding Menstruation" - Animated Educational Video
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#F58220] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    "Menstrual Hygiene Practices" - Documentary Series
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#F58220] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    "Addressing Period Poverty" - Community Stories
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#F58220] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    "Myths vs Facts" - Educational Webinar Series
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Myths and Facts Callout */}
      <section className="py-16 bg-[#F58220]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Myths vs Facts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-red-800 mb-4">Common Myths</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• Girls cannot exercise during periods</li>
                  <li>• Menstruating women are "impure"</li>
                  <li>• Periods are shameful and should be hidden</li>
                  <li>• Girls can't cook or touch plants during periods</li>
                </ul>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-green-800 mb-4">Scientific Facts</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• Exercise can help reduce period pain</li>
                  <li>• Menstruation is a natural, healthy process</li>
                  <li>• Periods are normal and nothing to be ashamed of</li>
                  <li>• There are no restrictions on daily activities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops and Training Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Workshops and Training</h2>
            <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-8 text-center shadow-md">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We conduct comprehensive menstrual hygiene workshops for schools, communities, and organizations. 
                Our trained facilitators provide age-appropriate education covering menstrual health, hygiene practices, 
                and breaking cultural taboos. We also offer train-the-trainer programs to help expand our reach 
                and create local champions for menstrual health awareness.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-800 mb-2">School Programs</h4>
                  <p className="text-gray-600 text-sm">Age-appropriate education for students and teachers</p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-800 mb-2">Community Workshops</h4>
                  <p className="text-gray-600 text-sm">Breaking taboos and educating families</p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-800 mb-2">Corporate Training</h4>
                  <p className="text-gray-600 text-sm">Workplace menstrual health awareness</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics and Impact Section */}
      <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Statistics and Impact</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding the current challenges helps us work towards creating a more inclusive and supportive society for menstruating individuals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-[#F58220] mb-2">23%</div>
                <p className="text-gray-600 text-sm">of girls drop out of school when they start menstruating</p>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-[#F58220] mb-2">73%</div>
                <p className="text-gray-600 text-sm">of women in India have no knowledge about menstruation before their first period</p>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-[#F58220] mb-2">88%</div>
                <p className="text-gray-600 text-sm">of women in India use cloth, ash, or other unhygienic materials during periods</p>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-[#F58220] mb-2">500M</div>
                <p className="text-gray-600 text-sm">women worldwide lack access to menstrual facilities and hygiene education</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions (FAQ) Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Common Questions</h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-3">What is a normal menstrual cycle?</h3>
                <p className="text-gray-600 leading-relaxed">
                  A normal menstrual cycle typically lasts 21-35 days, with menstrual bleeding lasting 3-7 days. 
                  The average cycle is about 28 days. It's normal for cycles to vary slightly from month to month, 
                  especially during the first few years after menstruation begins.
                </p>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Which menstrual products are safest to use?</h3>
                <p className="text-gray-600 leading-relaxed">
                  All commercially available menstrual products (pads, tampons, menstrual cups, period underwear) 
                  are safe when used correctly and changed regularly. The best choice depends on personal preference, 
                  lifestyle, and comfort level. It's important to maintain good hygiene regardless of the product used.
                </p>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-3">When should I consult a healthcare provider about my period?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Consult a healthcare provider if you experience: periods lasting longer than 7 days, extremely heavy bleeding, 
                  severe pain that interferes with daily activities, irregular cycles after the first year of menstruation, 
                  or if you haven't started menstruating by age 16.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More CTA Section */}
      <section className="py-16 bg-[#F58220]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Learn More?</h2>
            <p className="text-xl text-white mb-8 opacity-90">
              Access comprehensive resources, join our workshops, or get involved in spreading menstrual health awareness in your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-[#F58220] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Download Resources
              </Link>
              <Link
                to="/volunteer"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#F58220] transition-colors"
              >
                Join Our Workshops
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Topics */}
      <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Other Learning Topics
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our other educational resources to gain a comprehensive understanding of important social issues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link
              to="/learn/gender-equality"
              className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">Gender Equality</h3>
              <p className="text-gray-600 mb-4">
                Learn about creating a more equitable society for everyone
              </p>
              <span className="text-[#fd8f45] font-semibold">Learn More →</span>
            </Link>

            <Link
              to="/learn/child-abuse-prevention"
              className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">Child Sexual Abuse Prevention</h3>
              <p className="text-gray-600 mb-4">
                Learn about protecting children and creating safe environments
              </p>
              <span className="text-[#fd8f45] font-semibold">Learn More →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenstrualHygiene; 