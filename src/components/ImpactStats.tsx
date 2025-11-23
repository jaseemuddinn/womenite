
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const ImpactStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    women: 0,
    pads: 0,
    trained: 0,
    leaders: 0
  });

  const sectionRef = useRef(null);

  const stats = [
    { key: 'women', label: 'Women and Girls Helped', target: 25000, suffix: '+', color: 'text-[#fd8f45]' },
    { key: 'pads', label: 'Sanitary Pads Distributed', target: 1500000, suffix: '+', color: 'text-pink-500' },
    { key: 'trained', label: 'Women Trained in Skills', target: 5000, suffix: '+', color: 'text-blue-500' },
    { key: 'leaders', label: 'Youth Changemakers Created', target: 20000, suffix: '+', color: 'text-green-500' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat) => {
      let currentCount = 0;
      const increment = stat.target / steps;

      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= stat.target) {
          currentCount = stat.target;
          clearInterval(timer);
        }

        setCounts(prev => ({
          ...prev,
          [stat.key]: Math.floor(currentCount)
        }));
      }, interval);
    });
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative py-16 text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/our-impact-so-far.png')`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Impact <span className="text-[#fd8f45]">So Far</span>
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Numbers that tell the story of transformation, hope, and empowerment across communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                {counts[stat.key].toLocaleString()}{stat.suffix}
              </div>
              <div className="text-gray-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-200 text-lg mb-6">
            Every number represents a life changed, a dream realized, and a future empowered.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-[#fd8f45] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e67c3a] transition-colors"
          >
            Join Our Mission Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
