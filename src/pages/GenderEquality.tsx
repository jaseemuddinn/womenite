import React from 'react';
import { Link } from 'react-router-dom';

const GenderEquality = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/equality-bg.png')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Gender Equality</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white">
              Understanding the importance of gender equality and creating a more equitable society
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
                Gender equality is not just a women's issue—it's a fundamental human right that benefits everyone. 
                Achieving gender equality means ensuring that women, men, and all gender identities have equal rights, 
                opportunities, and treatment in all spheres of life. Understanding and promoting gender equality is 
                essential for creating a just, prosperous, and sustainable world for all.
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
                <h3 className="text-xl font-bold text-gray-800 mb-4">Policy Guides & Research</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#F58220] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Understanding Gender Equality: A Comprehensive Guide (PDF)
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#F58220] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Women's Rights in the Workplace: Legal Framework
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#F58220] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Gender Equality in Education: Best Practices
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#F58220] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Economic Empowerment of Women: Case Studies
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Interactive Learning</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#F58220] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    "Breaking Barriers" - Documentary Series on Gender Equality
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#F58220] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Gender Bias Recognition Training Modules
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#F58220] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    "Voices of Change" - Leadership Stories Collection
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#F58220] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Community Action Planning Toolkit
                  </li>
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
                Our gender equality workshops focus on building awareness, challenging unconscious bias, and 
                developing practical skills for creating inclusive environments. We offer customized training 
                programs for schools, corporations, community groups, and government organizations to promote 
                gender equality at all levels of society.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-800 mb-2">Leadership Training</h4>
                  <p className="text-gray-600 text-sm">Empowering women and marginalized genders in leadership roles</p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-800 mb-2">Workplace Equality</h4>
                  <p className="text-gray-600 text-sm">Creating inclusive and equitable work environments</p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-800 mb-2">Community Advocacy</h4>
                  <p className="text-gray-600 text-sm">Grassroots organizing for gender equality initiatives</p>
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
                Understanding the current state of gender equality helps us identify areas for improvement and measure our progress toward a more equitable world.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-[#F58220] mb-2">48%</div>
                <p className="text-gray-600 text-sm">of women in India participate in the labor force compared to 78% of men</p>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-[#F58220] mb-2">14%</div>
                <p className="text-gray-600 text-sm">of leadership positions in Indian companies are held by women</p>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-[#F58220] mb-2">77¢</div>
                <p className="text-gray-600 text-sm">for every rupee earned by men, women earn 77 paise in India</p>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-[#F58220] mb-2">132</div>
                <p className="text-gray-600 text-sm">years to close the global gender gap at the current rate of progress</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More CTA Section */}
      <section className="py-16 bg-[#F58220]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Champion Gender Equality</h2>
            <p className="text-xl text-white mb-8 opacity-90">
              Join us in creating a world where everyone has equal opportunities regardless of gender. Access resources, attend workshops, or become an advocate for change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-[#F58220] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Access Resources
              </Link>
              <Link
                to="/volunteer"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#F58220] transition-colors"
              >
                Become an Advocate
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
              to="/learn/child-abuse-prevention"
              className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">Child Sexual Abuse Prevention</h3>
              <p className="text-gray-600 mb-4">
                Learn about protecting children and creating safe environments
              </p>
              <span className="text-[#fd8f45] font-semibold">Learn More →</span>
            </Link>

            <Link
              to="/learn/menstrual-hygiene"
              className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">Menstrual Hygiene</h3>
              <p className="text-gray-600 mb-4">
                Break the stigma and learn about proper menstrual health practices
              </p>
              <span className="text-[#fd8f45] font-semibold">Learn More →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GenderEquality; 