import { useMemo } from 'react';
import { Heading } from '@//components/ui/Heading';
import { assetsUrl } from '@/constants/urlConstants';
import type { TeamMember } from '@/types/aboutTypes';
import { InfiniteSlider } from '@/motion-primitives/infinite-slider';
import TeamCard from './TeamCard';
import Glow from '@/components/ui/Glow';

const OurTeamSec = () => {
  const teamData = useMemo<TeamMember[]>(
    () => [
      {
        name: 'SABOOR ALI',
        role: 'MARKETER HEAD',
        imageUrl: `${assetsUrl.imagesUrl}teamImages/person1.png`,
      },
      {
        name: 'SUMAN KHAN',
        role: 'UI/UX DESINGER',
        imageUrl: `${assetsUrl.imagesUrl}teamImages/person2.png`,
      },
      {
        name: 'Zia khatri',
        role: 'Full stack developer',
        imageUrl: `${assetsUrl.imagesUrl}teamImages/person3.png`,
      },
      {
        name: 'Hashir Azeem',
        role: 'Content writer',
        imageUrl: `${assetsUrl.imagesUrl}teamImages/person4.png`,
      },
    ],
    []
  );

  return (
    <section className="sec-container relative my-4 md:my-6 lg:my-8 xl:my-10 2xl:my-12">
      <div className="flex flex-col items-center gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7">
        {/* decoration */}
        <Glow className="top-1/2 left-1/2 -z-10 h-[80%] w-[50%] -translate-1/2 opacity-75 blur-[50px]" />

        {/* heading */}
        <div className="z-10">
          <Heading asChild hdSize="h3">
            <h3>Our Team</h3>
          </Heading>
        </div>

        {/* team cards */}
        <InfiniteSlider
          gap={20}
          speed={50}
          direction="horizontal"
          className="z-10 w-full overflow-hidden"
        >
          {teamData.map((it, idx) => (
            <TeamCard item={it} key={idx} />
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
};

export default OurTeamSec;
