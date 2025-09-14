import { useMemo } from 'react';
import { Heading } from '@//components/ui/Heading';
import { assetsUrl } from '@/constants/urlConstants';
import TeamCard from './TeamCard';
import type { TeamMember } from '@/types/aboutTypes';

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
    <section className="sec-container">
      <div className="flex flex-col gap-4 items-center">
        <Heading asChild hdSize="h2">
          <h2>Our Team</h2>
        </Heading>
        {/* team cards */}
        <div className="flex flex-row gap-1.5">
          {teamData.map((it, idx) => (
            <TeamCard item={it} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamSec;
