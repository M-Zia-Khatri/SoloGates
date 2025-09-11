import { assetsUrl } from '@/constants/urlConstants';
import MsnVsnCard from './MsnVsnCard';

const MissionVisionSec = () => {
  return (
    <section className="border-Secondary relative h-fit max-h-screen border-y-2 py-3 md:border-0 md:py-0">
      {/* top */}
      <div className="relative text-center md:text-left">
        <div
          className="bg-Secondary hidden h-[90px] md:block md:h-[100px] 2xl:h-[120px]"
          style={{
            clipPath:
              'polygon(0 0, 61% 0, 71% 99%,  100% 99%, 100% 100%, 70.99% 100%, 60.99% 1%, 0 1%, 0 0)',
          }}
        />
        <p className="BgHeading top-1/2 left-[2.5%] -z-50 md:absolute md:-translate-y-1/2">
          Our Mission
        </p>
      </div>

      {/* decoration */}
      <div className="from-Secondary absolute top-1/2 left-1/2 -z-30 h-[calc(75vw*0.5)] w-[80%] shrink-0 -translate-1/2 bg-radial to-[#00000000] to-70% opacity-50 blur-3xl" />

      {/* content */}
      <div className="sec-container my-4 grid grid-cols-1 gap-2 gap-y-4 md:my-2 md:flex lg:my-4 2xl:my-6">
        <MsnVsnCard
          headingText="Our Mission"
          textContent="To empower growing businesses with purpose-driven digital strategies that combine design, storytelling, and performance, helping them scale with clarity, confidence, and creative impact."
        />

        {/* image */}
        <div className="flex shrink-0 items-center justify-center md:w-fit">
          <img
            className="w-full max-w-2xs md:h-[35vh] md:max-h-[400px] md:w-fit md:max-w-none lg:h-[50vh] lg:max-h-none"
            src={`${assetsUrl.imagesUrl}missionVisionFace.png`}
          />
        </div>

        <MsnVsnCard
          headingText="Our Vision"
          textContent="To become the go-to global agency for businesses ready to evolve from just a name into bold, unforgettable brands through world-class digital execution and human-centric marketing."
        />
      </div>
      {/* bottom */}
      <div className="relative text-center md:text-left">
        <p className="BgHeading top-1/2 right-[2.5%] -z-50 md:absolute md:-translate-y-1/2">
          Our Vision
        </p>
        <div
          className="bg-Secondary hidden h-[90px] md:block md:h-[100px] 2xl:h-[120px]"
          style={{
            clipPath:
              'polygon(0 0, 31% 0, 41% 99%,  100% 99%, 100% 100%, 40.99% 100%, 30.99% 1%, 0 1%, 0 0)',
          }}
        />
      </div>
    </section>
  );
};

export default MissionVisionSec;
