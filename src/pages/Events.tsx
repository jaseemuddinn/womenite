import React from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard';
import EventCarousel from '../components/EventCarousel';

const Events = () => {
  const upcomingEvents = [
    {
      id: '1',
      title: 'Menstrual Hygiene Workshop for Rural Schools',
      subtitle: 'Breaking barriers through education and awareness',
      date: 'March 15, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'Community Center, Rajasthan',
      description: 'Join us for a comprehensive workshop aimed at educating young girls in rural areas about menstrual hygiene. This session will cover proper menstrual practices, myth-busting, and providing essential supplies to ensure no girl misses school due to her period.',
      image: '/images/event-upcoming1.svg',
      slug: 'menstrual-hygiene-workshop',
      buttonText: 'Join Now'
    },
    {
      id: '2',
      title: 'Women Empowerment Summit 2024',
      subtitle: 'Celebrating achievements and planning for the future',
      date: 'April 22, 2024',
      time: '9:00 AM - 6:00 PM',
      location: 'Convention Center, Mumbai',
      description: 'Our annual summit bringing together women leaders, activists, and change-makers from across the country. Featuring keynote speeches, panel discussions, workshops, and networking opportunities to advance women\'s rights and empowerment.',
      image: '/images/event-upcoming2.svg',
      slug: 'women-empowerment-summit',
      buttonText: 'Register Now'
    },
    {
      id: '3',
      title: 'Digital Literacy for Women Entrepreneurs',
      subtitle: 'Empowering women through technology and business skills',
      date: 'May 10, 2024',
      time: '2:00 PM - 6:00 PM',
      location: 'Tech Hub, Bangalore',
      description: 'Learn essential digital skills to grow your business online. This workshop covers social media marketing, e-commerce basics, and digital payment systems to help women entrepreneurs succeed in the digital age.',
      image: '/images/event-upcoming1.svg',
      slug: 'digital-literacy-workshop',
      buttonText: 'Enroll Now'
    }
  ];

  const pastEvents = [
    {
      id: '4',
      title: 'International Women\'s Day Celebration',
      excerpt: 'A memorable celebration honoring the achievements of women in our community with cultural performances and inspiring speeches.',
      image: '/images/event-past1.svg',
      slug: 'womens-day-celebration',
      date: 'Mar 8, 2024'
    },
    {
      id: '5',
      title: 'Skill Development Workshop',
      excerpt: 'Training session for women in digital literacy and entrepreneurship skills to help them become financially independent.',
      image: '/images/event-past2.svg',
      slug: 'skill-development-workshop',
      date: 'Feb 14, 2024'
    },
    {
      id: '6',
      title: 'Health Awareness Campaign',
      excerpt: 'Community health camp focusing on women\'s health issues with free medical checkups and health education sessions.',
      image: '/images/event-past3.svg',
      slug: 'health-awareness-campaign',
      date: 'Jan 20, 2024'
    },
    {
      id: '7',
      title: 'Girl Child Education Drive',
      excerpt: 'Initiative to promote girl child education in rural areas with scholarship distributions and awareness programs.',
      image: '/images/event-past4.svg',
      slug: 'girl-child-education-drive',
      date: 'Dec 15, 2023'
    },
    {
      id: '8',
      title: 'Self-Defense Training Program',
      excerpt: 'Comprehensive self-defense training sessions for women and girls to build confidence and ensure personal safety.',
      image: '/images/event-past5.svg',
      slug: 'self-defense-training',
      date: 'Nov 25, 2023'
    },
    {
      id: '9',
      title: 'Menstrual Product Distribution',
      excerpt: 'Distribution of free menstrual products to underprivileged women and girls in rural communities.',
      image: '/images/event-past6.svg',
      slug: 'menstrual-product-distribution',
      date: 'Oct 28, 2023'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#F58220]/10 to-[#F58220]/5">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">Events</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-600">
              Join us in creating positive change through community engagement and empowerment
            </p>
            <div className="mt-8 w-24 h-1 bg-[#F58220] mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Upcoming Events</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Don't miss these exciting opportunities to be part of our mission to empower women and create lasting change in our communities.
              </p>
            </div>

            <EventCarousel events={upcomingEvents} />
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Past Events</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Discover the impact we've made through our previous events and initiatives. Each event represents a step forward in our mission to empower women and create positive change.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <EventCard
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  excerpt={event.excerpt}
                  image={event.image}
                  slug={event.slug}
                  date={event.date}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Stay Connected</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Want to stay updated on our upcoming events and initiatives? Subscribe to our newsletter or follow us on social media to never miss an opportunity to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-[#F58220] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e67c3a] transition-colors"
              >
                Get Updates
              </Link>
              <Link 
                to="/volunteer" 
                className="bg-white text-[#F58220] px-8 py-3 rounded-lg font-semibold border-2 border-[#F58220] hover:bg-[#F58220] hover:text-white transition-colors"
              >
                Volunteer With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events; 