import { assetsUrl } from '@/constants/urlConstants';
import HeroCard from './HeroCard';
import Glow from '@/components/ui/Glow';

const HeroSec = () => {
  return (
    <section className="sec-container overflow-x-hidden">
      <div className="h-[94vh] lg:h-[90vh]">
        {/* background */}
        <div className="absolute top-0 left-0 -z-50 h-screen w-full overflow-hidden opacity-75">
          <img
            src={`${assetsUrl.imagesUrl}dottedBG.png`}
            alt="background image"
            className="h-full w-full"
          />
        </div>

        {/* decoration */}
        <div className="absolute top-0 left-0 -z-40 h-full w-full overflow-x-hidden">
          <Glow className="top-[5%] -left-[15%] z-[-55] opacity-85" />
          <img
            className="absolute top-[25%] -left-[8%] h-16 rotate-z-[-50deg]"
            src={`${assetsUrl.imagesUrl}triangle-shape.png`}
          />
          <Glow className="-right-[15%] bottom-[5%] z-[-55] opacity-85" />
          <img
            className="absolute -right-[5%] bottom-[25%] h-16 rotate-z-[120deg]"
            src={`${assetsUrl.imagesUrl}triangle-shape.png`}
          />
        </div>

        <div className="flex h-full flex-col justify-between">
          {/* text */}
          <div className="mt-4 h-fit px-0 md:relative md:-z-40 md:px-8">
            <img src={`${assetsUrl.imagesUrl}HomeText.png`} alt="" />
            <div className="absolute bottom-0 left-0 z-40 w-full bg-gradient-to-t from-black from-10% to-transparent to-[110%] py-4 text-center md:-bottom-6 md:left-8 md:w-1/3 md:bg-none">
              <p className="font-Sora text-[10px]" lang="de">
                From brand identity to high-impact ads, Sologate{' '}
                <br className="hidden md:block" />
                Transforms your ideas into campaigns that don’t{' '}
                <br className="hidden md:block" /> just Look good - they drive
                results.
              </p>
            </div>
          </div>
          {/* img */}
          <div className="top-0 z-10 h-full overflow-hidden md:absolute md:h-screen">
            <img
              className="relative -z-40 h-full md:top-4"
              src={`${assetsUrl.imagesUrl}heroImage.png`}
            />
          </div>
        </div>
      </div>
      {/* hook */}
      <div className="bottom-0 left-0 z-10 my-4 grid w-full grid-cols-2 gap-3 from-black from-20% to-transparent to-30% md:absolute md:flex md:gap-7 md:bg-gradient-to-t md:px-16 md:pb-8">
        <HeroCard
          heading="Branding:"
          subtitle={['Your visual story', 'made unforgettable.']}
        />
        <HeroCard
          heading="Social Media Marketing:"
          subtitle={['Crafting scroll-stopping', 'posts that speak.']}
        />
        <HeroCard
          heading="Meta Ads:"
          subtitle={['Reach more, spend', 'smarter, convert better.']}
        />
        <HeroCard
          heading="Creative Content:"
          subtitle={['Movement, sound, story', 'content that connects.']}
        />
      </div>
    </section>
  );
};

export default HeroSec;

{
  /* 
      <div className="font-BebasKai mt-10 h-1/2 items-center justify-center font-medium uppercase">
        <p className="text-5xl">where</p>
        <p className="text-[275px]/52.5">Creativity</p>
        <div>
          <p className="text-5xl">where</p>
        </div>
      </div> 
      */
}
