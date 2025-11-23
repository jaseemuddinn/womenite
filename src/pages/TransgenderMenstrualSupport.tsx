import React from 'react';
import StoryDetail from './StoryDetail';

const TransgenderMenstrualSupport = () => {
  const content = (
    <div className="space-y-6">
      <p className="text-lg text-gray-700 leading-relaxed">
        When Sarah first joined our community support group, she never imagined she would become one of the most 
        influential voices in menstrual health advocacy. As a transgender woman, Sarah brought a unique perspective 
        that challenged conventional approaches to menstrual education and support.
      </p>
      
      <p className="text-lg text-gray-700 leading-relaxed">
        "I realized that many cisgender women were struggling with the same shame and lack of knowledge that I had 
        witnessed in my own journey," Sarah explains. "My experience navigating gender identity gave me tools to 
        approach these conversations with empathy and without judgment."
      </p>
      
      <p className="text-lg text-gray-700 leading-relaxed">
        Sarah started by volunteering at local schools, where she noticed that traditional menstrual education 
        programs often failed to address the emotional and psychological aspects of menstruation. Her inclusive 
        approach, which focused on creating safe spaces for all students regardless of gender identity, proved 
        remarkably effective.
      </p>
      
      <p className="text-lg text-gray-700 leading-relaxed">
        Within six months, Sarah had established support groups in three schools and two community centers. 
        Her innovative approach included peer-to-peer mentoring, where older students would support younger ones 
        through their first menstrual experiences. She also introduced mindfulness techniques to help manage 
        period-related anxiety and stress.
      </p>
      
      <p className="text-lg text-gray-700 leading-relaxed">
        Today, Sarah's program has reached over 500 young people in her district. School attendance rates among 
        menstruating students have increased by 35%, and feedback from participants consistently highlights the 
        non-judgmental, supportive environment she creates. Her work has been recognized by the local education 
        department, which is now considering implementing her model district-wide.
      </p>
      
      <p className="text-lg text-gray-700 leading-relaxed">
        "Every person deserves to understand their body and feel supported during times of change," Sarah says. 
        "My goal is to ensure that no one feels alone or ashamed about something as natural as menstruation."
      </p>
    </div>
  );

  const quote = {
    text: "My experience navigating gender identity gave me tools to approach these conversations with empathy and without judgment.",
    author: "Sarah, Community Health Advocate"
  };

  return (
    <StoryDetail
      title="Tables Turned: A Transgender Supports Normal People's Menstrual Woes"
      subtitle="Sarah's unique perspective and compassionate approach transforms menstrual education"
      heroImage="/images/cleaning-with-children-2.png"
      content={content}
      quote={quote}
    />
  );
};

export default TransgenderMenstrualSupport; 