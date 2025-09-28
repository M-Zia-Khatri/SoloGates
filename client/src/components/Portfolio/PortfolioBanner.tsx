import { assetsUrl } from '@/constants/urlConstants';

const PortfolioBanner = () => {
  return (
    <section
      className="sec-container flex h-[94vh] items-center justify-center lg:h-[90vh]"
      style={{}}
    >
      {/* banner image */}
      <img
        className="absolute top-0 -z-50 h-full w-full opacity-20"
        src={`${assetsUrl.imagesUrl}banner.jpg`}
      />

      {/* background */}
      <div className="bg-Secondary/5 absolute top-0 -z-40 h-full w-full" />

      {/* decoration */}
      <div className="absolute top-0 -z-30 h-full w-full overflow-hidden">
        <div className="from-Secondary absolute bottom-1/2 left-1/2 h-[calc(80vw*0.8)] w-[80%] shrink-0 bg-radial to-[#00000000] to-80% opacity-40 blur-[10vw] md:to-65% lg:blur-[10vh]" />
        <div className="from-Secondary absolute top-1/2 right-1/2 h-[80vw] w-full shrink-0 bg-radial to-[#00000000] to-80% opacity-70 blur-[10vw] md:to-65% lg:blur-[10vh]" />
        <img
          className={`absolute -top-[2.5%] -left-[12.5%] lg:-top-[10%] lg:-left-[25%] ${window.innerWidth < 1024 ? 'w-full' : 'h-full'} `}
          src={`${assetsUrl.iconsUrl}sharpe1.svg`}
        />
        <img
          className={`absolute -right-[12.5%] -bottom-[2.5%] lg:-right-[25%] lg:-bottom-[10%] ${window.innerWidth < 1024 ? 'w-full' : 'h-full'} shrink-0 rotate-z-180`}
          src={`${assetsUrl.iconsUrl}sharpe1.svg`}
        />
      </div>

      {/* text */}
      <div className="w-[85%] md:w-[75%] lg:w-[65%] 2xl:w-[60%] flex flex-col items-center">
        <img
          className="w-full"
          src={`${assetsUrl.imagesUrl}PortfolioText.png`}
        />
      </div>
    </section>
  );
};

export default PortfolioBanner;
