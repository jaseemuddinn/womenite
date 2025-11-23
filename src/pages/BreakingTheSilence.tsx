import React from 'react';
import StoryDetail from './StoryDetail';

const BreakingTheSilence = () => {
  const content = (
    <div className="space-y-6">
      <p className="text-lg text-gray-700 leading-relaxed">
        When Lakshmi's 13-year-old daughter Kavya got her first period, Lakshmi realized with horror that she 
        had no idea how to help her. In her village, periods were never discussed openly. Girls were expected 
        to figure things out on their own, often using rags or newspapers in place of proper sanitary products.
      </p>
      
      <p className="text-lg text-gray-700 leading-relaxed">
        "I saw my daughter's confusion and fear, and I recognized it from my own experience decades ago," 
        Lakshmi remembers. "I promised myself that I would learn everything I could so that I could help 
        her and prevent other girls from going through the same struggle."
      </p>
      
      <p className="text-lg text-gray-700 leading-relaxed">
        Lakshmi began attending menstrual health workshops in the neighboring town, traveling two hours each 
        way by bus. She learned about proper hygiene, nutrition during menstruation, and how to make 
        affordable cloth pads. Most importantly, she learned how to talk about periods without shame or 
        embarrassment.
      </p>
      
      <p className="text-lg text-gray-700 leading-relaxed">
        Armed with this knowledge, Lakshmi started small. She organized informal gatherings with other mothers 
        in her village, sharing what she had learned. Initially, many women were reluctant to participate, 
        but gradually, as they saw the benefits of open discussion, more joined in.
      </p>
      
      <p className="text-lg text-gray-700 leading-relaxed">
        The breakthrough came when Lakshmi suggested starting a small business making reusable cloth pads. 
        Not only did this provide affordable menstrual products for the village, but it also created income 
        opportunities for women. The success of this venture gave Lakshmi the credibility to expand her 
        education efforts.
      </p>
      
      <p className="text-lg text-gray-700 leading-relaxed">
        Today, Lakshmi's village has one of the highest school attendance rates for girls in the region. 
        They have established a women's cooperative that produces and sells menstrual products to surrounding 
        villages. Most importantly, periods are no longer a taboo topic – mothers openly discuss menstrual 
        health with their daughters, and the village school has implemented comprehensive menstrual education.
      </p>
      
      <p className="text-lg text-gray-700 leading-relaxed">
        "Change starts with one person being willing to break the silence," Lakshmi reflects. "When we talk 
        openly about menstruation, we remove the power of shame and secrecy. We give our daughters the 
        knowledge and confidence they need to thrive."
      </p>
    </div>
  );

  const quote = {
    text: "Change starts with one person being willing to break the silence. When we talk openly about menstruation, we remove the power of shame and secrecy.",
    author: "Lakshmi, Village Women's Cooperative Leader"
  };

  return (
    <StoryDetail
      title="Breaking the Silence: How One Mother Changed Her Village"
      subtitle="A mother's journey from ignorance to advocacy transforms an entire community"
      heroImage="/images/rakhi-1.png"
      content={content}
      quote={quote}
    />
  );
};

export default BreakingTheSilence; 