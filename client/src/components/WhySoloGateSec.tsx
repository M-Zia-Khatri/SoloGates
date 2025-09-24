import { Heading } from '@/components/ui/Heading';
import { useEffect, useRef, useState } from 'react';
import WhySoloGateCard from './WhySoloGateCard';
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
                ? offsetWidth - offsetHeight * 0.2
                : offsetWidth - offsetHeight * 0.075
            }px 0%,
            100% ${offsetHeight < offsetWidth ? '20%' : '7.5%'},
            100% 100%,
            0% 100%,
            0 0
          )`;

        const offset = `polygon(
            0% 0%,
            ${
              offsetHeight < offsetWidth
                ? offsetWidth - offsetHeight * 0.2 + 2
                : offsetWidth - offsetHeight * 0.075 + 2
            }px 0%,
            100% ${offsetHeight < offsetWidth ? '20%' : '7.5%'},
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
    <section className="sec-container my-4 overflow-hidden md:my-6 lg:my-8">
      <div className="relative my-2 flex items-center justify-center md:my-3">
        {/* background */}
        <>
          {/* Gradient outer border */}
          <div className="absolute top-1/2 left-1/2 -z-40 h-full w-full -translate-1/2 rotate-y-180">
            <div
              className="from-Main to-Secondary h-full w-full bg-gradient-to-r"
              style={{ clipPath: clipPaths.offset }}
            />
          </div>

          {/*background middle layer */}
          <div
            className="bg-Bg-Primary absolute top-1/2 left-1/2 -z-30 h-[calc(100%-4px)] w-[calc(100%-4px)] -translate-1/2 rotate-y-180"
            style={{ clipPath: clipPaths.base }}
          />

          {/* Background overlay*/}
          <div className="absolute top-1/2 left-1/2 -z-20 h-[calc(100%-4px)] w-[calc(100%-4px)] -translate-1/2 rotate-y-180">
            <div
              ref={bgRef}
              className="h-full w-full bg-gradient-to-t from-black/75 from-5% to-[#dddcdc30]"
              style={{ clipPath: clipPaths.base }}
            />
          </div>
        </>

        {/* decoration */}
        <>
          <Glow className="top-0 z-50 h-[10px] -translate-y-1/12 from-0% to-90% opacity-90 blur-[5px] lg:w-[50%]" />
          <Glow className="bottom-0 z-50 h-[5px] w-[80%] translate-y-1/12 from-0% to-90% opacity-50 blur-[5px]" />
        </>

        {/* Content  */}
        <div className="flex w-full flex-col gap-4 px-3.5 py-4 md:gap-5 md:px-5 md:py-6 lg:gap-6 lg:px-6 lg:py-7 xl:gap-7 xl:px-7 xl:py-8 2xl:px-8 2xl:py-9">
          {/* Heading or Subtitle */}
          <div className="flex flex-col items-center justify-center gap-1 text-center lg:gap-1.5">
            <Heading hdSize="h3" asChild>
              <h3>Why Sologate</h3>
            </Heading>
            <h4 className="font-Sora mt-2 font-medium">
              Strategy | Execution | Results.
            </h4>
            <p>Not just another agency we are your competitive edge.</p>
          </div>

          {/* Cards */}
          <WhySoloGateCard />
        </div>
      </div>
    </section>
  );
};

export default WhySoloGateSec;
