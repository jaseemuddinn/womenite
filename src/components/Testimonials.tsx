
import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sunita Kumari",
      role: "Program Beneficiary",
      quote: "womenite changed my life completely. From being financially dependent to running my own business, I never thought this was possible. The skill training program gave me not just technical skills but the confidence to dream big.",
      rating: 5,
      type: "beneficiary"
    },
    {
      name: "Dr. Saema Jafri",
      role: "Secretary",
      organization: "New Delhi District Legal Services Authority",
      quote: "The New Delhi District Legal Services Authority appreciated Womenite for its impactful work in promoting menstrual hygiene. Through awareness campaigns and education, Womenite has helped break the stigma around menstruation and empowered women to live healthier, dignified lives.",
      rating: 5,
      type: "government"
    },
    {
      name: "Neha Bansal, I.A.S.",
      role: "District Magistrate (West)",
      organization: "Government of NCT of Delhi",
      quote: "The District Administration of West Delhi recognized Womenite for its exceptional humanitarian work during the COVID-19 pandemic. Their efforts in distributing essential supplies were praised for strategic planning and efficient execution.",
      rating: 5,
      type: "government"
    },
    {
      name: "Rajesh Sharma",
      role: "Corporate Volunteer",
      quote: "Volunteering with womenite has been incredibly fulfilling. Seeing the transformation in women's lives and being part of their journey is something money can't buy. This organization truly walks the talk.",
      rating: 5,
      type: "volunteer"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What People <span className="text-[#fd8f45]">Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from beneficiaries, volunteers, and supporters who have experienced our work firsthand.
          </p>
          <div className="w-24 h-1 bg-[#fd8f45] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                {/* <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                /> */}
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  {testimonial.organization && (
                    <p className="text-gray-500 text-xs mt-1">{testimonial.organization}</p>
                  )}
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to read more testimonials from our partners and stakeholders?</p>
          <Link 
            to="/testimonials"
            className="bg-[#fd8f45] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#e67c3a] transition-colors inline-block"
          >
            View Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
