import React from 'react';
import EventDetail from './EventDetail';

const MenstrualHygieneWorkshop = () => {
  const content = (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">About This Workshop</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        Our upcoming Menstrual Hygiene Workshop aims to break down the barriers that prevent girls from attending school during their menstrual cycle. This comprehensive educational program will reach out to rural schools where awareness about menstrual health is often limited due to cultural taboos and lack of resources.
      </p>
      
      <p className="text-lg text-gray-700 leading-relaxed">
        The workshop will cover essential topics including understanding the menstrual cycle, proper hygiene practices, nutrition during menstruation, and debunking common myths. We'll also provide practical demonstrations on how to use different menstrual products safely and effectively.
      </p>
      
      <h3 className="text-xl font-bold text-gray-800 mt-8">What to Expect</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
        <li>Interactive sessions on menstrual health education</li>
        <li>Distribution of free menstrual hygiene products</li>
        <li>Myth-busting activities and open discussions</li>
        <li>Training for teachers and school staff</li>
        <li>Installation of menstrual hygiene facilities</li>
      </ul>
      
      <h3 className="text-xl font-bold text-gray-800 mt-8">Impact Goals</h3>
      <p className="text-lg text-gray-700 leading-relaxed">
        Through this workshop, we aim to reach at least 500 girls across 10 rural schools. Our goal is to ensure that every participant leaves with the knowledge and resources needed to manage their menstrual health with dignity and confidence. We also plan to establish sustainable support systems within schools to continue this important work.
      </p>
      
      <p className="text-lg text-gray-700 leading-relaxed">
        This initiative is part of our broader mission to ensure that no girl misses school due to her period. By providing education, resources, and support, we're working to create a future where menstruation is no longer a barrier to education and empowerment.
      </p>
    </div>
  );

  const quote = {
    text: "Education is the most powerful weapon which you can use to change the world. When we educate girls about their bodies and their rights, we empower them to reach their full potential.",
    author: "Dr. Priya Sharma, Program Director"
  };

  return (
    <EventDetail
      title="Menstrual Hygiene Workshop for Rural Schools"
      subtitle="Breaking barriers through education and awareness"
      heroImage="/images/event-upcoming1.svg"
      date="March 15, 2024"
      time="10:00 AM - 4:00 PM"
      location="Community Center, Rajasthan"
      content={content}
      quote={quote}
      isUpcoming={true}
    />
  );
};

export default MenstrualHygieneWorkshop; 