import { assetsUrl } from '@/constants/urlConstants';
import HeroCard from './HeroCard';
import Glow from '@/components/ui/Glow';

const HeroSec = () => {
  return (
    <section className="sec-container overflow-x-hidden">
      <div className="h-[94vh] md:h-[84vh] lg:h-[90vh]">
        {/* background */}
        <div className="absolute top-0 left-0 -z-50 h-screen w-full overflow-hidden opacity-75 md:h-[90vh] lg:h-screen">
          <img
            src={`${assetsUrl.imagesUrl}dottedBG.png`}
            alt="background image"
            className="h-full w-full"
          />
        </div>

        {/* decoration */}
        <div className="absolute top-0 left-0 -z-40 h-full w-full overflow-x-hidden md:h-[90vh] lg:h-screen">
          <Glow className="top-[5%] -left-[15%] z-[-55] opacity-85" />
          <img
            className="absolute top-[25%] -left-[8%] h-16 rotate-z-[-50deg] md:top-[30%] md:-left-[5%] md:h-20 lg:top-[35%] lg:-left-[2%]"
            src={`${assetsUrl.imagesUrl}triangle-shape.png`}
          />
          <Glow className="-right-[15%] bottom-[5%] z-[-55] opacity-85" />
          <img
            className="absolute -right-[5%] bottom-[25%] h-16 rotate-z-[120deg] md:-right-[5%] md:bottom-[30%] md:h-20 lg:-right-[2%] lg:bottom-[35%]"
            src={`${assetsUrl.imagesUrl}triangle-shape.png`}
          />
        </div>

        <div className="flex h-full flex-col justify-between overflow-hidden">
          {/* text */}
          <div className="mt-4 h-fit px-0 md:mt-6 lg:relative lg:-z-40 lg:px-8">
            <img src={`${assetsUrl.imagesUrl}HomeText.png`} alt="" />
            <div className="absolute bottom-0 left-0 z-40 flex h-1/2 w-full items-end bg-gradient-to-t from-black from-20% to-transparent to-[100%] text-center md:bottom-[calc(10vh-2.5px)] md:h-1/3 lg:-bottom-4 lg:left-9 lg:h-fit lg:w-[30%] 2xl:w-[40%] lg:bg-none lg:text-left xl:-bottom-2 xl:left-12 2xl:-bottom-1 2xl:left-16">
              <p
                className="font-Sora px-8 py-4 text-[10px] md:px-[20%] md:py-6 lg:px-0 lg:py-0 2xl:text-lg"
                lang="de"
              >
                From brand identity to high-impact ads, Sologate
                <br className="hidden lg:block" />
                Transforms your ideas into campaigns that don’t
                <br className="lg :block hidden" /> just Look good - they drive
                results.
              </p>
            </div>
          </div>
          {/* img */}
          <div className="top-0 z-10 h-full scale-[1.2] md:scale-[1] lg:absolute lg:left-1/2 lg:h-screen lg:-translate-x-1/2 lg:scale-[0.9] lg:overflow-hidden">
            <img
              className="relative -z-40 h-full w-fit md:-top-[12%] lg:top-4"
              src={`${assetsUrl.imagesUrl}heroImage.png`}
            />
          </div>
        </div>
      </div>
      {/* hook */}
      <div className="bottom-0 left-0 z-10 my-4 grid w-full grid-cols-2 gap-3 from-black from-20% to-transparent to-[102%] md:my-6 md:flex lg:absolute lg:my-0 lg:gap-7 lg:bg-gradient-to-t lg:px-8 lg:pt-[10%] lg:pb-10">
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
