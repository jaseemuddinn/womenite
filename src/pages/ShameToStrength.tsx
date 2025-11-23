import React from 'react';
import StoryDetail from './StoryDetail';

const ShameToStrength = () => {
  const content = (
    <div className="space-y-6">
      <p className="text-lg text-gray-700 leading-relaxed">
        Priya was just 12 years old when she experienced her first period during a math class. The confusion, 
        embarrassment, and whispered jokes from classmates left her feeling isolated and ashamed. For months, 
        she would skip school whenever her period arrived, falling behind in her studies and losing confidence 
        in herself.
      </p>
      
      <p className="text-lg text-gray-700 leading-relaxed">
        "I thought there was something wrong with me," Priya recalls. "My mother had never talked to me about 
        periods, and the older girls at school just seemed to manage somehow. I felt like I was failing at 
        something basic that everyone else understood."
      </p>
      
      <p className="text-lg text-gray-700 leading-relaxed">
        Everything changed when a menstrual health program was introduced at her school. For the first time, 
        Priya learned that periods were normal, healthy, and nothing to be ashamed of. The program provided 
        free sanitary products and taught practical management techniques. More importantly, it created a 
        supportive community where girls could ask questions and share experiences.
      </p>
      
      <p className="text-lg text-gray-700 leading-relaxed">
        Priya not only returned to regular school attendance but began excelling in her studies. She became 
        a peer mentor in the program, helping younger girls navigate their own menstrual journeys. Her confidence 
        grew as she realized the power of knowledge and community support.
      </p>
      
      <p className="text-lg text-gray-700 leading-relaxed">
        By the time she graduated high school, Priya had decided to dedicate her life to menstrual health 
        advocacy. She studied public health in college and now runs workshops in rural schools across three 
        states. Her programs have reached over 2,000 girls, many of whom face similar challenges to what she 
        experienced.
      </p>
      
      <p className="text-lg text-gray-700 leading-relaxed">
        "Every girl deserves to feel proud of her body and confident in her abilities," Priya says. "My mission 
        is to ensure that no girl has to experience the shame and isolation that I felt. When we educate and 
        empower girls about menstruation, we're not just improving their health – we're changing their entire 
        trajectory in life."
      </p>
    </div>
  );

  const quote = {
    text: "When we educate and empower girls about menstruation, we're not just improving their health – we're changing their entire trajectory in life.",
    author: "Priya, Menstrual Health Educator"
  };

  return (
    <StoryDetail
      title="From Shame to Strength: A Girl's Journey to Menstrual Advocacy"
      subtitle="How proper education and support transformed fear into empowerment"
      heroImage="/images/draw-with-child.png"
      content={content}
      quote={quote}
    />
  );
};

export default ShameToStrength; 