import React from 'react';
import EventDetail from './EventDetail';

const WomenEmpowermentSummit = () => {
  const content = (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Summit Overview</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        The Women Empowerment Summit 2024 is our flagship annual event that brings together women leaders, activists, entrepreneurs, and change-makers from across the country. This year's summit focuses on celebrating achievements while strategically planning for the future of women's empowerment in India.
      </p>
      
      <p className="text-lg text-gray-700 leading-relaxed">
        The summit will feature inspiring keynote speeches from renowned women leaders, interactive panel discussions on current challenges, skill-building workshops, and extensive networking opportunities. This is a platform where ideas are shared, partnerships are formed, and the future of women's empowerment is shaped.
      </p>
      
      <h3 className="text-xl font-bold text-gray-800 mt-8">Key Highlights</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
        <li>Keynote by Dr. Vandana Shiva, Environmental Activist</li>
        <li>Panel discussion on "Women in Leadership: Breaking Glass Ceilings"</li>
        <li>Workshop on "Digital Literacy for Women Entrepreneurs"</li>
        <li>Networking lunch with industry leaders</li>
        <li>Awards ceremony recognizing outstanding contributions</li>
        <li>Launch of new women empowerment initiatives</li>
      </ul>
      
      <h3 className="text-xl font-bold text-gray-800 mt-8">Who Should Attend</h3>
      <p className="text-lg text-gray-700 leading-relaxed">
        This summit is ideal for women leaders, aspiring entrepreneurs, activists, students, professionals, and anyone passionate about advancing women's rights and empowerment. Whether you're just starting your journey or are an experienced advocate, this summit offers valuable insights and connections.
      </p>
      
      <h3 className="text-xl font-bold text-gray-800 mt-8">Registration Information</h3>
      <p className="text-lg text-gray-700 leading-relaxed">
        Early bird registration is now open with special discounts for students and non-profit organizations. The summit includes all sessions, materials, lunch, and networking opportunities. Limited scholarships are available for participants from rural areas and underserved communities.
      </p>
    </div>
  );

  const quote = {
    text: "When women support each other, incredible things happen. This summit is about creating a network of empowered women who will shape the future of our society.",
    author: "Meera Patel, Summit Organizer"
  };

  return (
    <EventDetail
      title="Women Empowerment Summit 2024"
      subtitle="Celebrating achievements and planning for the future"
      heroImage="/images/event-upcoming2.svg"
      date="April 22, 2024"
      time="9:00 AM - 6:00 PM"
      location="Convention Center, Mumbai"
      content={content}
      quote={quote}
      isUpcoming={true}
    />
  );
};

export default WomenEmpowermentSummit; 