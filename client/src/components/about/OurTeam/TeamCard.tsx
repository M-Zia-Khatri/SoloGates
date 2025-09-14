import { Heading } from '@/components/ui/Heading';
import type { TeamMember } from '@/types/aboutTypes';

const TeamCard = ({ item, key }: { item: TeamMember; key: number }) => {
  return (
    <div
      className="flex w-1/2 shrink-0 flex-col items-center md:w-1/3 lg:w-1/4 justify-end"
      key={key}
    >
      {/* image & background */}
      <div className="relative">
        {/* background */}
        <></>

        {/* image */}
        <div className="">
          <img alt="" src={`${item.imageUrl}`} />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="">{item.name}</h3>
        <Heading hdSize={'h4'} asChild>
          <h4>{item.role}</h4>
        </Heading>
      </div>
    </div>
  );
};

export default TeamCard;
