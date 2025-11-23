import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Shield, Heart } from 'lucide-react';

const LearnWithUs = () => {
  const learningTopics = [
    {
      id: 'gender-equality',
      title: 'Gender Equality',
      description: 'Learn about the importance of gender equality, understanding the challenges women face, and how we can work together to create a more equitable society for everyone.',
      icon: BookOpen,
      path: '/learn/gender-equality',
      color: 'bg-blue-50',
      iconColor: 'bg-blue-500'
    },
    {
      id: 'child-abuse-prevention',
      title: 'Child Sexual Abuse Prevention',
      description: 'Understand the warning signs, prevention strategies, and how to create safe environments for children. Learn about reporting mechanisms and support systems.',
      icon: Shield,
      path: '/learn/child-abuse-prevention',
      color: 'bg-red-50',
      iconColor: 'bg-red-500'
    },
    {
      id: 'menstrual-hygiene',
      title: 'Menstrual Hygiene',
      description: 'Break the stigma around menstruation and learn about proper menstrual hygiene practices, health considerations, and how to support menstruating individuals.',
      icon: Heart,
      path: '/learn/menstrual-hygiene',
      color: 'bg-pink-50',
      iconColor: 'bg-pink-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#fd8f45] to-[#e67c3a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Learn With Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Empowering communities through education and awareness on critical social issues
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Education for <span className="text-[#fd8f45]">Empowerment</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Knowledge is power. Through our educational initiatives, we aim to create awareness 
              and understanding about critical issues affecting women and children. Join us in 
              learning about these important topics that can help create a safer, more equitable world.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Topics Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningTopics.map((topic) => {
              const IconComponent = topic.icon;
              return (
                <div key={topic.id} className={`${topic.color} rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                  <div className="p-8">
                    <div className={`${topic.iconColor} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{topic.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{topic.description}</p>
                    <Link
                      to={topic.path}
                      className="inline-block bg-[#fd8f45] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#e67c3a] transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#fd8f45] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Knowledge combined with action creates lasting change. Learn about these important 
            topics and help us spread awareness in your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/volunteer"
              className="bg-white text-[#fd8f45] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Volunteer With Us
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#fd8f45] transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnWithUs; 