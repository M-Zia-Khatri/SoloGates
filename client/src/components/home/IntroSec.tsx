import { assetsUrl } from '@/constants/urlConstants';
import { AspectRatio } from '../ui/aspect-ratio';
import { Heading } from '../ui/Heading';
import Glow from '../ui/Glow';

const IntroSec = () => {
  return (
    <section className="sec-container relative flex flex-col items-center gap-8 overflow-x-hidden py-8">
      {/* decoration */}
      <Glow className="top-[5%] -left-[10%] opacity-80" />
      <Glow className="-right-[10%] bottom-[2%] opacity-80" />

      <Heading asChild hdSize="h2">
        <h2>About Sologate</h2>
      </Heading>

      <div className="h-fit w-[90%] drop-shadow-[0_5px_15px_rgba(23,138,139,0.5)]">
        <AspectRatio ratio={16 / 9}>
          <img src={`${assetsUrl.imagesUrl}dome-img.png`} />
        </AspectRatio>
      </div>
    </section>
  );
};

export default IntroSec;
