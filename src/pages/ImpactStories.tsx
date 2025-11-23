import React from 'react';
import StoryCard from '../components/StoryCard';

const ImpactStories = () => {
  const stories = [
    {
      id: '1',
      title: 'Tables Turned: A Transgender Supports Normal People\'s Menstrual Woes',
      excerpt: 'Meet Sarah, a transgender woman who started a menstrual hygiene support group in her community. Her unique perspective and compassionate approach has helped break down barriers and create safe spaces for open discussions about menstruation.',
      image: '/images/cleaning-with-children-2.png',
      slug: 'transgender-menstrual-support'
    },
    {
      id: '2',
      title: 'From Shame to Strength: A Girl\'s Journey to Menstrual Advocacy',
      excerpt: 'Priya was 12 when she first experienced menstruation and felt ashamed. Today, she runs workshops in rural schools, helping young girls understand their bodies and empowering them to continue their education without fear or stigma.',
      image: '/images/draw-with-child.png',
      slug: 'shame-to-strength'
    },
    {
      id: '3',
      title: 'Breaking the Silence: How One Mother Changed Her Village',
      excerpt: 'When Lakshmi\'s daughter started menstruating, she realized how little she knew about menstrual health. Her journey of learning and advocacy transformed not just her family, but her entire village\'s approach to menstrual hygiene.',
      image: '/images/rakhi-1.png',
      slug: 'breaking-the-silence'
    },
    {
      id: '4',
      title: 'The Teacher Who Revolutionized Period Education',
      excerpt: 'Ms. Sharma noticed her female students frequently absent from school. Her investigation led to a comprehensive menstrual education program that increased attendance by 40% and changed hundreds of young lives.',
      image: '/images/cleaning-with-childrens.png',
      slug: 'teacher-revolution'
    },
    {
      id: '5',
      title: 'Economic Empowerment Through Menstrual Product Manufacturing',
      excerpt: 'A group of women in rural Maharashtra learned to manufacture biodegradable sanitary pads. Their small business not only provides affordable menstrual products but also creates economic opportunities for women in their community.',
      image: '/images/rakhi-2.png',
      slug: 'economic-empowerment'
    },
    {
      id: '6',
      title: 'From Dropout to Graduate: Education Beyond Periods',
      excerpt: 'Anita dropped out of school at 14 due to menstrual challenges. With support from our programs, she not only completed her education but became a menstrual health advocate, ensuring other girls don\'t face the same barriers.',
      image: '/images/rakhi-on-hand.png',
      slug: 'dropout-to-graduate'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#F58220]/10 to-[#F58220]/5">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">Impact Stories</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-600">
              Real stories of transformation, empowerment, and hope from our community
            </p>
            <div className="mt-8 w-24 h-1 bg-[#F58220] mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stories Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Stories of Change</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Every story represents a life transformed, a barrier broken, and a step towards a more equitable world. 
                These are the voices of those who refused to let circumstances define their future.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stories.map((story) => (
                <StoryCard
                  key={story.id}
                  id={story.id}
                  title={story.title}
                  excerpt={story.excerpt}
                  image={story.image}
                  slug={story.slug}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Your Story Matters</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Do you have a story of transformation, empowerment, or hope to share? We believe every voice deserves to be heard, 
              and your experience could inspire others in their journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-[#F58220] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e67c3a] transition-colors"
              >
                Share Your Story
              </a>
              <a 
                href="/volunteer" 
                className="bg-white text-[#F58220] px-8 py-3 rounded-lg font-semibold border-2 border-[#F58220] hover:bg-[#F58220] hover:text-white transition-colors"
              >
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImpactStories; 