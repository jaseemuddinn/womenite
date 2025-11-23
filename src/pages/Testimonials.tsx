import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Womenite was recognized by the Sub Divisional Magistrate of Patel Nagar, Delhi, for their innovative civic initiative using Virtual Reality (VR) to promote voter participation during the Delhi Legislative Assembly elections. Their VR experience at Vikaspuri served as a creative and fun incentive for voters, especially first-timers, to engage with the democratic process. The initiative not only entertained but also educated the public on the importance of voting. Womenite was praised for their impactful use of technology and advocacy to drive social change and inspire civic responsibility.",
    author: "Nitin Sshakya",
    position: "Sub Divisional Magistrate",
    organization: "Govt. of NCT of Delhi"
  },
  {
    id: 2,
    quote: "The New Delhi District Legal Services Authority appreciated Womenite for its impactful work in promoting menstrual hygiene. Through awareness campaigns, access to menstrual products, and education on hygiene management, Womenite has helped break the stigma around menstruation and empowered women from low-income backgrounds to live healthier, dignified lives. Their partnership during the International Women's Day program to distribute sanitary napkins was especially noted for its significance and generosity.",
    author: "Dr. Saema Jafri",
    position: "Secretary",
    organization: "New Delhi District Legal Services Authority, Patiala House Courts, New Delhi"
  },
  {
    id: 3,
    quote: "The Ministry of Textiles, Government of India, acknowledged Womenite for its commendable efforts in advancing menstrual hygiene awareness. By installing sanitary napkin vending machines and incinerators at the Ministry on International Women's Day 2022, Womenite played a key role in destigmatizing menstruation and contributing to the Swachh Bharat Mission. Their initiative was especially appreciated for promoting dignity, health, and sustainability in public spaces.",
    author: "Jayashree Sivakumar",
    position: "Under Secretary",
    organization: "Ministry of Textiles, Government of India"
  },
  {
    id: 4,
    quote: "The Delhi State Legal Services Authority commended Womenite for its impactful contribution to Project Durga Shakti 2.0. Held from April 2nd to 10th, 2022, the project reached over 10,000 girls and women across shelter homes and major slum areas in Delhi. Womenite's generous support in distributing over 91,000 sanitary napkins was instrumental in promoting menstrual hygiene and breaking taboos around periods. Their work was recognized as a significant step toward dignity and health for underserved communities.",
    author: "Namrita Aggarwal",
    position: "Additional District & Sessions Judge and Special Secretary",
    organization: "Delhi State Legal Services Authority"
  },
  {
    id: 5,
    quote: "Noida Lok Manch expressed gratitude to Womenite for its generous donation of 750 sanitary pads on the occasion of National Girl Child Day. The pads were distributed on 24th January 2023 at Chetram Ram Girls Inter College, Noida, benefiting schoolgirls and supporting menstrual hygiene. Recognizing Womenite's contribution as part of their 25 years of social service, the organization appreciated the collaboration and looks forward to continued support.",
    author: "Noida Lok Manch",
    position: "",
    organization: "Sector 15, Noida"
  },
  {
    id: 6,
    quote: "The Government of Manipur, through the Office of the Resident Commissioner at Manipur Bhawan, New Delhi, expressed heartfelt gratitude to Womenite for donating two oxygen concentrators during the COVID-19 crisis. Received on 10th May 2021, this contribution to the Oxygen Bank significantly supported the needy natives of Manipur residing in Delhi during a challenging time. The government acknowledged Womenite's generosity and wished them continued success in their mission.",
    author: "L.H. Ngathinghsim",
    position: "Deputy Resident Commissioner",
    organization: "Manipur Bhawan, New Delhi"
  },
  {
    id: 7,
    quote: "The District Administration of West Delhi recognized Womenite for its exceptional humanitarian work during the COVID-19 pandemic. Womenite's efforts in distributing dry ration kits and sanitary napkins in the West District were praised for their strategic planning, motivation, and efficient execution. The administration commended their commitment to serving those in need and expressed sincere gratitude for their support during a critical time.",
    author: "Neha Bansal, I.A.S.",
    position: "District Magistrate (West)",
    organization: "Government of NCT of Delhi"
  },
  {
    id: 8,
    quote: "The South West District Legal Services Authority applauded Womenite for its vital role in promoting menstrual hygiene awareness through the Durga Shakti Campaign. As a project partner in two campaign phases (Oct–Dec 2020), Womenite distributed over 76,000 free sanitary napkins, directly impacting 6,356 women and girls in South-West Delhi. The organization was also recognized for its support in data analysis through door-to-door surveys. The Authority expressed deep gratitude for Womenite's commitment to menstrual hygiene and encouraged their continued efforts.",
    author: "Manu Goel Kharb",
    position: "Secretary",
    organization: "South-West DLSA"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Testimonials
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Recognition and appreciation from our partners and stakeholders
            </p>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Trusted by Government Bodies and Organizations
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our work has been recognized and appreciated by various government agencies, 
            legal authorities, and organizations across India. These testimonials reflect 
            our commitment to creating meaningful social impact through innovative programs 
            and dedicated service.
          </p>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <Quote className="w-8 h-8 text-orange-500 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonial.author}
                    </h4>
                    {testimonial.position && (
                      <p className="text-orange-600 font-medium">
                        {testimonial.position}
                      </p>
                    )}
                    <p className="text-gray-600 text-sm mt-1">
                      {testimonial.organization}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-orange-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of our journey to create lasting social change and empower communities across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Involved
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 