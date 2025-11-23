import React from 'react';
import EventDetail from './EventDetail';

const WomensDayEvent = () => {
  const content = (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">A Memorable Celebration</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        Our International Women's Day celebration was a vibrant and inspiring event that brought together women from all walks of life to honor achievements, share stories, and strengthen our community bonds. The day was filled with cultural performances, motivational speeches, and meaningful conversations about women's rights and empowerment.
      </p>
      
      <p className="text-lg text-gray-700 leading-relaxed">
        The event featured performances by local artists, including traditional dance, music, and poetry readings that celebrated the diverse talents of women in our community. We also had the privilege of hearing from several inspiring speakers who shared their personal journeys of overcoming challenges and achieving success.
      </p>
      
      <h3 className="text-xl font-bold text-gray-800 mt-8">Event Highlights</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
        <li>Opening ceremony with traditional lamp lighting</li>
        <li>Keynote address by women entrepreneurs from the community</li>
        <li>Cultural performances showcasing women's talents</li>
        <li>Interactive workshops on women's health and rights</li>
        <li>Recognition ceremony for outstanding women achievers</li>
        <li>Community networking and resource sharing</li>
      </ul>
      
      <h3 className="text-xl font-bold text-gray-800 mt-8">Community Impact</h3>
      <p className="text-lg text-gray-700 leading-relaxed">
        The celebration reached over 300 women from different backgrounds, ages, and professions. Many participants expressed how the event inspired them to pursue their dreams and connect with like-minded women in their community. The networking opportunities led to several collaborations and mentorship relationships that continue to flourish.
      </p>
      
      <p className="text-lg text-gray-700 leading-relaxed">
        Several local businesses and organizations pledged support for women's empowerment initiatives, and we successfully launched a mentorship program that now serves 50 women in our community. The event also helped raise awareness about various women's issues and available resources.
      </p>
      
      <h3 className="text-xl font-bold text-gray-800 mt-8">Looking Forward</h3>
      <p className="text-lg text-gray-700 leading-relaxed">
        The success of this celebration has motivated us to make it an annual tradition. We're already planning next year's event, which will include more interactive workshops, a larger exhibition of women-led businesses, and expanded programming for young girls to inspire the next generation of women leaders.
      </p>
    </div>
  );

  const quote = {
    text: "This celebration reminded me that every woman's story matters. When we come together to share our experiences and support each other, we create a powerful force for positive change.",
    author: "Rajeshwari Devi, Community Leader"
  };

  const photos = [
    '/images/womens-day-photo1.svg',
    '/images/womens-day-photo2.svg',
    '/images/womens-day-photo3.svg',
    '/images/womens-day-photo4.svg',
    '/images/womens-day-photo5.svg',
    '/images/womens-day-photo6.svg'
  ];

  return (
    <EventDetail
      title="International Women's Day Celebration"
      subtitle="A memorable celebration honoring women's achievements"
      heroImage="/images/event-past1.svg"
      date="March 8, 2024"
      time="2:00 PM - 8:00 PM"
      location="Community Center, Delhi"
      content={content}
      photos={photos}
      quote={quote}
      isUpcoming={false}
    />
  );
};

export default WomensDayEvent; 