
import React from 'react';
import HeroBanner from '../components/HeroBanner';
import MissionVision from '../components/MissionVision';
import SuccessStories from '../components/SuccessStories';
import FeaturedPrograms from '../components/FeaturedPrograms';
import ImpactStats from '../components/ImpactStats';
import PhotoGallery from '../components/PhotoGallery';
import GetInvolved from '../components/GetInvolved';
import Testimonials from '../components/Testimonials';
import MediaMentions from '../components/MediaMentions';
import OurPartners from '../components/OurPartners';
import YouTubeVideos from '../components/YouTubeVideos';
import LatestNews from '../components/LatestNews';

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <MissionVision />
      <SuccessStories />
      <FeaturedPrograms />
      <ImpactStats />
      <PhotoGallery />
      <GetInvolved />
      <Testimonials />
      <MediaMentions />
      {/* <OurPartners /> */}
      <YouTubeVideos />
      {/* <LatestNews /> */}
    </div>
  );
};

export default Home;
