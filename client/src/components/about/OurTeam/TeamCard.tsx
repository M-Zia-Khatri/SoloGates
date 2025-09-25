import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Heading } from '@/components/ui/Heading';
import { cn } from '@/lib/utils';
import type { TeamMember } from '@/types/aboutTypes';

const TeamCard = ({ item, key }: { item: TeamMember; key: number }) => {
  return (
    <div
      className="relative flex h-full shrink-0 flex-col items-center justify-end"
      key={key}
    >
      {/* image & background */}
      <div className="relative h-full">
        {/* bg */}
        <svg
          className="absolute top-0 left-0 -z-10 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="shapeGradient"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#00000000" />
              <stop offset="100%" stop-color="#178A8B99" />
            </linearGradient>
            <linearGradient
              id="strokeGradient"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="25%" stop-color="#178A8B99" />
              <stop offset="100%" stop-color="#00000000" />
            </linearGradient>
          </defs>

          <polygon
            points="0,0 75,0 100,15 100,100 0,100"
            fill="url(#shapeGradient)"
            stroke="url(#strokeGradient)"
            stroke-width=""
          />
        </svg>

        {/* image */}
        <div
          className={cn(
            'h-full w-[40vw] md:w-[28vw] lg:w-[25vw] xl:w-[20vw]',
            'px-2 pt-6'
          )}
        >
          <AspectRatio ratio={3 / 4}>
            <img className="h-full w-full" src={`${item.imageUrl}`} />
          </AspectRatio>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="font-BebasKai font-medium tracking-widest mt-1">
          {item.name}
        </h3>
        <Heading hdSize={'h6'} asChild>
          <h6>{item.role}</h6>
        </Heading>
      </div>
    </div>
  );
};

export default TeamCard;
