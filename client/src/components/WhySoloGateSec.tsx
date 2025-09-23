import { Heading } from '@/components/ui/Heading';
import WhySoloGateCard from './WhySoloGateCard';
import { useEffect, useRef, useState } from 'react';
import Glow from './ui/Glow';

const WhySoloGateSec = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const [clipPaths, setClipPaths] = useState<{ base: string; offset: string }>({
    base: '',
    offset: '',
  });

  useEffect(() => {
    const updateClipPath = () => {
      if (bgRef.current) {
        const { offsetWidth, offsetHeight } = bgRef.current;

        const base = `polygon(
            0% 0%,
            ${
              offsetHeight < offsetWidth
                ? offsetWidth - offsetHeight * 0.25
                : offsetWidth - offsetHeight * 0.1
            }px 0%,
            100% ${offsetHeight < offsetWidth ? '25%' : '10%'},
            100% 100%,
            0% 100%,
            0 0
          )`;

        const offset = `polygon(
            0% 0%,
            ${
              offsetHeight < offsetWidth
                ? offsetWidth - offsetHeight * 0.25 + 2
                : offsetWidth - offsetHeight * 0.1 + 2
            }px 0%,
            100% ${offsetHeight < offsetWidth ? '25%' : '10%'},
            100% 100%,
            0% 100%,
            0 0
          )`;

        setClipPaths({ base, offset });
      }
    };

    updateClipPath();
    window.addEventListener('resize', updateClipPath);

    return () => window.removeEventListener('resize', updateClipPath);
  }, []);

  return (
    <section className="sec-container overflow-hidden py-8">
      <div className="relative flex items-center justify-center">
        {/* background */}
        <>
          {/* Gradient outer border */}
          <div className="absolute top-1/2 left-1/2 -z-40 h-[100%] w-full -translate-1/2 rotate-y-180 md:w-[95%]">
            <div
              className="from-Main to-Secondary h-full w-full bg-gradient-to-r"
              style={{ clipPath: clipPaths.offset }}
            />
          </div>

          {/*background middle layer */}
          <div
            className="bg-Bg-Primary absolute top-1/2 left-1/2 -z-30 h-[calc(100%-4px)] w-[calc(100%-4px)] -translate-1/2 rotate-y-180 md:w-[calc(95%-4px)]"
            style={{ clipPath: clipPaths.base }}
          />

          {/* Background overlay*/}
          <div className="absolute top-1/2 left-1/2 -z-20 h-[calc(100%-4px)] w-[calc(100%-4px)] -translate-1/2 rotate-y-180 md:w-[calc(95%-4px)]">
            <div
              ref={bgRef}
              className="h-full w-full bg-gradient-to-t from-black/75 from-5% to-[#dddcdc30]"
              style={{ clipPath: clipPaths.base }}
            />
          </div>
        </>

        {/* decoration */}
        <Glow className="top-0 z-50 h-[2.5%] w-[50%] -translate-y-1/12 from-0% to-90% opacity-90 blur-[5px]" />
        <Glow className="bottom-0 z-50 h-[2%] w-[80%] translate-y-1/12 from-0% to-90% opacity-50 blur-[5px]" />

        {/* Content  */}
        <div className="flex w-full flex-col gap-4 px-3.5 py-4 md:w-[95%] md:gap-5 md:px-5 md:py-6 lg:gap-6 lg:px-6 lg:py-7 xl:gap-7 xl:px-7 xl:py-8 2xl:px-8 2xl:py-9">
          {/* Heading or Subtitle */}
          <div className="flex flex-col items-center justify-center gap-1 text-center md:gap-2">
            <Heading hdSize="h2" asChild>
              <h2>Why Sologate</h2>
            </Heading>
            <h3 className="font-Sora mt-2 text-base font-medium tracking-wide md:mt-3 md:text-lg lg:mt-3.5 lg:text-xl xl:text-2xl">
              Strategy, Execution, Results.
            </h3>
            <p className="">
              Not just another agency we are your competitive edge.
            </p>
          </div>

          {/* Cards */}
          <WhySoloGateCard />
        </div>
      </div>
    </section>
  );
};

export default WhySoloGateSec;
