import { assetsUrl } from '@/constants/urlConstants';
import HeroCard from './HeroCard';

const HeroSec = () => {
  return (
    <section className="sec-container overflow-x-hidden">
      <div className="h-[92vh] lg:h-[88vh]">
        <div className="absolute top-0 left-0 -z-50 h-screen w-full overflow-hidden opacity-75">
          <img
            src={`${assetsUrl.imagesUrl}dottedBG.png`}
            alt="background image"
            className="h-full w-full"
          />
        </div>
        <div className="flex justify-center">
          <div className="relative -z-40 mt-4 h-fit px-8">
            <img src={`${assetsUrl.imagesUrl}HomeText.png`} alt="" />
            <div className="absolute -bottom-6 left-8 w-1/3">
              <p className="font-Sora text-sm" lang="de">
                From brand identity to high-impact ads, Sologate <br />
                Transforms your ideas into campaigns that don’t <br /> just Look
                good - they drive results.
              </p>
            </div>
          </div>
          <div className="absolute top-0 z-0 h-screen overflow-hidden">
            <img
              className="relative top-4 h-full scale-[1.1]"
              src={`${assetsUrl.imagesUrl}heroImage.png`}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 z-10 flex w-full gap-7 bg-gradient-to-t from-black from-20% to-transparent to-30% px-16 pb-8">
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
