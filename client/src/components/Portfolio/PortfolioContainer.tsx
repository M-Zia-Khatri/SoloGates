import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { useMemo } from 'react';
import type { PortfolioDataInt } from './PortfolioSection';
import { cn } from '@/lib/utils';

interface PortfolioContainerProps {
  data: PortfolioDataInt[];
}

const PortfolioContainer = ({ data }: PortfolioContainerProps) => {
  const { reels, others } = useMemo(() => {
    const reels = data.filter(
      (item) => item.category === 'reels & video editing'
    );
    const others = data.filter(
      (item) => item.category !== 'reels & video editing'
    );
    return { reels, others };
  }, [data]);

  return (
    <div
      className={cn(
        'flex flex-col',
        'my-4 md:my-6 lg:my-8 xl:my-10 2xl:my-12',
        'gap-8 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24'
      )}
    >
      {/* Reels Grid */}
      {reels.length > 0 && (
        <div
          className={cn(
            'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5',
            'gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12'
          )}
        >
          {reels.map((item) => (
            <AspectRatio ratio={2 / 3} key={item.id}>
              <img
                src={item.imageUrl}
                alt={item.category}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </AspectRatio>
          ))}
        </div>
      )}

      {/* Other Categories */}
      {others.map((item) => (
        <AspectRatio ratio={16 / 9} key={item.id}>
          <img
            src={item.imageUrl}
            alt={item.category}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </AspectRatio>
      ))}
    </div>
  );
};

export default PortfolioContainer;
