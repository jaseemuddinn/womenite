import React from 'react';
import { Link } from 'react-router-dom';

const ChildAbusePrevention = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/child-abuse-bg.png')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Child Sexual Abuse Prevention</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white">
              Protecting children and creating safe environments through education and awareness
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
                Child sexual abuse prevention is a critical component of child protection that requires community-wide 
                awareness and action. By educating ourselves about warning signs, prevention strategies, and appropriate 
                responses, we can create safer environments where children can grow and thrive. This education empowers 
                adults to recognize, report, and prevent abuse while supporting survivors with compassion and resources.
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
                <h3 className="text-xl font-bold text-gray-800 mb-4">Prevention Guides</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#F58220] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Child Sexual Abuse Prevention: A Complete Guide (PDF)
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#F58220] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Recognizing Warning Signs: Behavioral Indicators
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#F58220] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Safe Environment Guidelines for Organizations
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#F58220] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Supporting Survivors: Trauma-Informed Care Approaches
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Training Materials</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#F58220] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    "Protecting Our Children" - Educational Video Series
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#F58220] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Age-Appropriate Body Safety Education Materials
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#F58220] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Legal Framework and Reporting Procedures
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#F58220] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Community Mobilization Toolkit
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
                Our child protection workshops provide essential knowledge and skills to parents, educators, healthcare 
                professionals, and community leaders. We offer evidence-based training programs that cover prevention 
                strategies, recognition techniques, appropriate responses, and creating protective environments for children 
                in various settings including homes, schools, and community spaces.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-800 mb-2">Parent Education</h4>
                  <p className="text-gray-600 text-sm">Teaching protective strategies and communication skills</p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-800 mb-2">Professional Training</h4>
                  <p className="text-gray-600 text-sm">For educators, healthcare workers, and social services</p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-800 mb-2">Community Programs</h4>
                  <p className="text-gray-600 text-sm">Building protective community networks</p>
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
                Understanding the scope of child sexual abuse helps us recognize the urgent need for prevention 
                education and community action to protect our children.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-[#F58220] mb-2">1 in 4</div>
                <p className="text-gray-600 text-sm">girls and 1 in 6 boys experience sexual abuse before age 18</p>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-[#F58220] mb-2">90%</div>
                <p className="text-gray-600 text-sm">of child sexual abuse is perpetrated by someone known to the child</p>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-[#F58220] mb-2">38%</div>
                <p className="text-gray-600 text-sm">of child victims never disclose abuse to anyone</p>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-[#F58220] mb-2">68%</div>
                <p className="text-gray-600 text-sm">of children first disclose abuse to a family member or friend</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Need Immediate Help?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                If you suspect a child is in immediate danger, please contact the authorities immediately. 
                Early intervention can save lives and prevent further harm.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Emergency Services</h3>
                <p className="text-gray-600 mb-2">Call 100 (Police Emergency)</p>
                <p className="text-gray-600">Call 1098 (Childline India)</p>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Our Support Line</h3>
                <p className="text-gray-600 mb-2">24/7 Helpline: +91 98765 43210</p>
                <p className="text-gray-600">Email: Hr@womenite.com</p>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-3">National Resources</h3>
                <p className="text-gray-600 mb-2">Women Helpline: 181</p>
                <p className="text-gray-600">NCPCR Helpline: 1800-121-2830</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More CTA Section */}
      <section className="py-16 bg-[#F58220]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Protect Our Children</h2>
            <p className="text-xl text-white mb-8 opacity-90">
              Join our mission to create safer communities for children. Access prevention resources, attend training 
              workshops, or become a child protection advocate in your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-[#F58220] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Prevention Resources
              </Link>
              <Link
                to="/volunteer"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#F58220] transition-colors"
              >
                Join Training Program
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

export default ChildAbusePrevention; 