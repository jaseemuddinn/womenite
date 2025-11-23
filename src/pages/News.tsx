
import React from 'react';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

const News = () => {
  const featuredNews = {
    title: "International Women's Day 2024: Celebrating 500 Success Stories",
    excerpt: "Our biggest celebration yet brought together over 500 women to share their transformation stories and inspire the next generation of leaders.",
    date: "March 8, 2024",
    category: "Events",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    content: "This year's International Women's Day celebration was our most impactful yet, bringing together women from across our program network to celebrate achievements and share experiences."
  };

  const newsItems = [
    {
      title: "New Self-Defense Centers Open in Rural Areas",
      excerpt: "Five new training centers launched to provide self-defense training and confidence building for women in remote villages.",
      date: "Feb 15, 2024",
      category: "Programs",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Menstrual Health Awareness Week Success",
      excerpt: "Our week-long campaign reached 10,000 women across 50 villages, breaking taboos and distributing essential supplies.",
      date: "Jan 28, 2024",
      category: "Health",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Digital Skills Transform Rural Women's Lives",
      excerpt: "Meet 10 inspiring women who used our digital literacy program to start online businesses and support their families.",
      date: "Jan 10, 2024",
      category: "Success Stories",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Partnership with Local Schools Expands Reach",
      excerpt: "New collaborations with 25 schools will bring our health education programs directly to teenage girls.",
      date: "Dec 20, 2023",
      category: "Partnerships",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Skill Training Graduates Start Co-operative",
      excerpt: "20 women from our tailoring program have formed a successful co-operative, creating jobs for 50 more women.",
      date: "Nov 15, 2023",
      category: "Success Stories",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "24/7 Helpline Reaches 10,000 Call Milestone",
      excerpt: "Our women's helpline has successfully handled 10,000 calls, providing crucial support to women in need.",
      date: "Oct 30, 2023",
      category: "Milestones",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const categories = ["All", "Events", "Programs", "Health", "Success Stories", "Partnerships", "Milestones"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#fd8f45] to-[#e67c3a] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">News & Updates</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Stay updated with our latest programs, success stories, and community initiatives
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredNews.image} 
                  alt={featuredNews.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <span className="bg-[#fd8f45] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-gray-500 text-sm ml-4 flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {featuredNews.date}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{featuredNews.title}</h2>
                <p className="text-gray-600 mb-6 text-lg">{featuredNews.excerpt}</p>
                <p className="text-gray-700 mb-6">{featuredNews.content}</p>
                <button className="flex items-center text-[#fd8f45] font-semibold hover:text-[#e67c3a] transition-colors">
                  Read Full Story <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Categories */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  index === 0 
                    ? 'bg-[#fd8f45] text-white' 
                    : 'bg-white text-gray-700 hover:bg-[#fd8f45] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <article key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-[#fd8f45] text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                      <Tag className="h-3 w-3 mr-1" />
                      {item.category}
                    </span>
                    <span className="text-gray-500 text-sm ml-3 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-[#fd8f45] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <button className="flex items-center text-[#fd8f45] font-semibold hover:text-[#e67c3a] transition-colors">
                    Read More <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-[#fd8f45] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest updates about our programs and impact stories.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-[#fd8f45] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
