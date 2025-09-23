import { assetsUrl } from '@/constants/urlConstants';
import { AspectRatio } from '../ui/aspect-ratio';
import { Heading } from '../ui/Heading';
import Glow from '../ui/Glow';

const IntroSec = () => {
  return (
    <section className="sec-container relative flex flex-col items-center gap-4 overflow-x-hidden py-4 md:gap-6 md:py-6 lg:gap-8 lg:py-8 xl:gap-10 xl:py-10 2xl:gap-12 2xl:py-12">
      {/* decoration */}
      <Glow className="top-[5%] -left-[10%] hidden opacity-80 md:block" />
      <Glow className="-right-[10%] bottom-[2%] hidden opacity-80 md:block" />

      <Heading asChild hdSize="h2">
        <h2>About Sologate</h2>
      </Heading>

      <div
        className={`h-fit w-full drop-shadow-[0_${window.innerWidth < 1024 ? '1px_8px' : '5px_15px'}_rgba(23,138,139,0.5)]`}
      >
        <AspectRatio ratio={16 / 9}>
          <img src={`${assetsUrl.imagesUrl}dome-img.png`} />
        </AspectRatio>
      </div>
    </section>
  );
};

export default IntroSec;
