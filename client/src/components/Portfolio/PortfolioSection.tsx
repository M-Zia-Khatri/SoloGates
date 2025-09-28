import { useEffect, useMemo, useState } from 'react';
import HrLine from '@/components/ui/HrLine';
import PortfolioContainer from './PortfolioContainer';
import { cn } from '@/lib/utils';
import { assetsUrl } from '@/constants/urlConstants';

export type PortfolioCategoryType =
  | 'reels & video editing'
  | 'social media marketing'
  | 'content writing'
  | 'branding';

export interface PortfolioDataInt {
  id: number;
  videoUrl?: string;
  imageUrl?: string;
  category: PortfolioCategoryType;
}

// -----------------------------
// Static Portfolio Data
// -----------------------------
const portfolioData: PortfolioDataInt[] = [
  {
    id: 1,
    category: 'social media marketing',
    imageUrl: `${assetsUrl.imagesUrl}portfolio/image1.jpg`,
  },
  {
    id: 2,
    category: 'content writing',
    imageUrl: `${assetsUrl.imagesUrl}portfolio/image1.jpg`,
  },
  {
    id: 3,
    category: 'branding',
    imageUrl: `${assetsUrl.imagesUrl}portfolio/image1.jpg`,
  },
  {
    id: 4,
    category: 'reels & video editing',
    imageUrl: `${assetsUrl.imagesUrl}portfolio/image5.jpg`,
  },
  {
    id: 5,
    category: 'social media marketing',
    imageUrl: `${assetsUrl.imagesUrl}portfolio/image2.jpg`,
  },
  {
    id: 18,
    category: 'reels & video editing',
    imageUrl: `${assetsUrl.imagesUrl}portfolio/image5.jpg`,
  },
  {
    id: 6,
    category: 'content writing',
    imageUrl: `${assetsUrl.imagesUrl}portfolio/image2.jpg`,
  },
  {
    id: 7,
    category: 'branding',
    imageUrl: `${assetsUrl.imagesUrl}portfolio/image2.jpg`,
  },
  {
    id: 21,
    category: 'reels & video editing',
    imageUrl: `${assetsUrl.imagesUrl}portfolio/image5.jpg`,
  },
  {
    id: 8,
    category: 'social media marketing',
    imageUrl: `${assetsUrl.imagesUrl}portfolio/image3.jpg`,
  },
  {
    id: 9,
    category: 'content writing',
    imageUrl: `${assetsUrl.imagesUrl}portfolio/image3.jpg`,
  },
  {
    id: 25,
    category: 'reels & video editing',
    imageUrl: `${assetsUrl.imagesUrl}portfolio/image6.jpg`,
  },
  {
    id: 10,
    category: 'branding',
    imageUrl: `${assetsUrl.imagesUrl}portfolio/image3.jpg`,
  },
  {
    id: 11,
    category: 'social media marketing',
    imageUrl: `${assetsUrl.imagesUrl}portfolio/image4.jpg`,
  },
  {
    id: 20,
    category: 'reels & video editing',
    imageUrl: `${assetsUrl.imagesUrl}portfolio/image7.jpg`,
  },
  {
    id: 12,
    category: 'content writing',
    imageUrl: `${assetsUrl.imagesUrl}portfolio/image4.jpg`,
  },
  {
    id: 24,
    category: 'reels & video editing',
    imageUrl: `${assetsUrl.imagesUrl}portfolio/image7.jpg`,
  },
  {
    id: 14,
    category: 'branding',
    imageUrl: `${assetsUrl.imagesUrl}portfolio/image4.jpg`,
  },
  {
    id: 15,
    category: 'reels & video editing',
    imageUrl: `${assetsUrl.imagesUrl}portfolio/image5.jpg`,
  },
  {
    id: 16,
    category: 'reels & video editing',
    imageUrl: `${assetsUrl.imagesUrl}portfolio/image6.jpg`,
  },
  {
    id: 17,
    category: 'reels & video editing',
    imageUrl: `${assetsUrl.imagesUrl}portfolio/image7.jpg`,
  },

  {
    id: 19,
    category: 'reels & video editing',
    imageUrl: `${assetsUrl.imagesUrl}portfolio/image6.jpg`,
  },

  {
    id: 22,
    category: 'reels & video editing',
    imageUrl: `${assetsUrl.imagesUrl}portfolio/image6.jpg`,
  },
  {
    id: 23,
    category: 'reels & video editing',
    imageUrl: `${assetsUrl.imagesUrl}portfolio/image7.jpg`,
  },
];

// -----------------------------
// Constants
// -----------------------------
const SPECIAL_CATEGORY: PortfolioCategoryType = 'reels & video editing';
const ALL_CATEGORIES = [...new Set(portfolioData.map((item) => item.category))];
const CATEGORIES = [
  'See All',
  SPECIAL_CATEGORY,
  ...ALL_CATEGORIES.filter((c) => c !== SPECIAL_CATEGORY),
];

// -----------------------------
// Helpers
// -----------------------------
function createHighlightReel(
  data: PortfolioDataInt[],
  howMany: number
): PortfolioDataInt[] {
  const highlight: PortfolioDataInt[] = [];

  // 1. Reels
  const reels = data.filter((item) => item.category === SPECIAL_CATEGORY);
  if (reels.length > 0) {
    const shuffled = [...reels].sort(() => Math.random() - 0.5);
    highlight.push(...shuffled.slice(0, howMany));
  }

  // 2. Other categories (pick 1 each)
  ALL_CATEGORIES.forEach((category) => {
    if (category === SPECIAL_CATEGORY) return;
    const items = data.filter((item) => item.category === category);
    if (items.length > 0) {
      const randomItem = items[Math.floor(Math.random() * items.length)];
      highlight.push(randomItem);
    }
  });

  return highlight;
}

// -----------------------------
// Component
// -----------------------------
const PortfolioSection = () => {
  const [filter, setFilter] = useState('See All');
  const [howMany, setHowMany] = useState(4);

  // Responsive item count
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newCount = 2;
      if (width >= 1536) newCount = 5;
      else if (width >= 1024) newCount = 4;
      else if (width >= 768) newCount = 3;
      setHowMany(newCount);
    };

    handleResize();
    const onResize = () => requestAnimationFrame(handleResize);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const filteredData = useMemo(() => {
    if (filter === 'See All')
      return createHighlightReel(portfolioData, howMany);
    return portfolioData.filter((item) => item.category === filter);
  }, [filter, howMany]);

  return (
    <section className="sec-container my-6 overflow-x-hidden md:my-10 lg:my-14 xl:my-16 2xl:my-14">
      <div className="flex flex-col items-center gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7">
        {/* Heading */}
        <div className="mb-1 flex flex-col items-center md:mb-2 lg:mb-3 xl:mb-4 2xl:mb-5">
          <div className="flex items-center justify-center gap-1.5">
            <HrLine className="h-[3px] w-[4vw] max-w-[50px]" />
            <h2 className="font-Sora flex shrink-0 font-semibold">
              Designs That Build&nbsp;
              <span className="text-xl font-thin italic md:text-2xl lg:text-3xl xl:text-4xl">
                Brands
              </span>
            </h2>
            <HrLine className="h-[3px] w-[4vw] max-w-[50px]" isRotate />
          </div>
          <h6 className="mt-1 text-center md:mt-2 lg:mt-2.5 xl:mt-3 2xl:mt-4 2xl:text-2xl">
            A showcase of our work that elevates businesses and creates lasting
            impressions
          </h6>
        </div>

        {/* Category Filters */}
        <div
          className={cn(
            'flex w-full flex-wrap items-center justify-center md:justify-between',
            'gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12'
          )}
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={cn(
                'font-Sora font-semibold capitalize transition-all duration-300',
                'text-[11px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl',
                filter === category
                  ? 'text-shadow-[0_0_4px_#178A8B]'
                  : 'text-gray-300/20 hover:text-shadow-[0_0_2px_#ffffff20]'
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <PortfolioContainer data={filteredData} />
    </section>
  );
};

export default PortfolioSection;
