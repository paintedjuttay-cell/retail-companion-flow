import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedDrop from '@/components/sections/FeaturedDrop';
import ArtistSpotlight from '@/components/sections/ArtistSpotlight';
import BrandStory from '@/components/sections/BrandStory';
import ProcessTeaser from '@/components/sections/ProcessTeaser';
import Newsletter from '@/components/sections/Newsletter';
import SocialProof from '@/components/sections/SocialProof';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedDrop />
        <ArtistSpotlight />
        <BrandStory />
        <ProcessTeaser />
        <SocialProof />
        <Newsletter />
      </main>
    </div>
  );
};

export default Index;