import AboutUsBanner from '@/components/about/AboutUsBanner';
import AboutUsSec from '@/components/about/AboutUsSec';
import OurTeamSec from '@/components/about/OurTeamSec';
import MissionVisionSec from '@/components/about/MissionVision/MissionVisionSec';
import OwnerMessagesSec from '@/components/about/OwnerMessages/OwnerMessagesSec';
import WhySoloGateSec from '@/components/about/WhySoloGate/WhySoloGateSec';

export default function AboutUs() {
  return (
    <>
      <AboutUsBanner />
      <AboutUsSec />
      <MissionVisionSec />
      <OwnerMessagesSec />
      <WhySoloGateSec />
      <OurTeamSec />
    </>
  );
}
