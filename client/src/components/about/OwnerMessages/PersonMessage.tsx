import { Heading } from '@/components/ui/Heading';
import { useEffect, useRef, useState } from 'react';

// components/sections/owner-messages/PersonMessage.tsx
interface PersonMessageProps {
  role: string;
  name: string;
  image: string;
  paragraphs: string[];
  reverse?: boolean;
}

const PersonMessage = ({
  role,
  name,
  image,
  paragraphs,
  reverse,
}: PersonMessageProps) => {
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
                  ? offsetWidth - offsetHeight * 0.15
                  : offsetWidth - offsetHeight * 0.15
              }px 0%,
              100% ${offsetHeight < offsetWidth ? '15%' : '15%'},
              100% 100%,
              0% 100%,
              0 0
            )`;

        const offset = `polygon(
              0% 0%,
              ${
                offsetHeight < offsetWidth
                  ? offsetWidth - offsetHeight * 0.15 + 2
                  : offsetWidth - offsetHeight * 0.15 + 2
              }px 0%,
              100% ${offsetHeight < offsetWidth ? '15%' : '15%'},
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
    <div
      className={`${reverse ? 'lg:mb-10 xl:mb-12 2xl:mb-16' : ''} grid grid-cols-1 lg:grid-cols-3`}
    >
      {/* Content */}
      <div
        className={`relative order-1 col-span-1 flex flex-col items-center justify-center lg:col-span-2 ${
          reverse ? 'lg:items-start' : 'lg:order-0 lg:items-end'
        }`}
      >
        {/* Heading */}
        <div>
          <div
            className={`relative -top-1/2 flex flex-col items-center justify-center gap-2 ${reverse ? 'lg:left-[24px]' : 'lg:-left-[24px]'}`}
          >
            <div className="absolute bottom-[75%] z-10 scale-[0.6]">
              <Heading
                bgVariant="fullBg"
                hdClassName="text-Secondary"
                isDropShadow={true}
                isRotate={reverse}
                hdSize="h2"
              >
                <h2>{role}</h2>
              </Heading>
            </div>
            <Heading
              bgVariant="fullBgGradient"
              hdSize="h1"
              isDropShadow={true}
              isRotate={reverse}
              hdClassName="font-normal"
            >
              <h1>{name}</h1>
            </Heading>
          </div>
        </div>

        {/* Paragraphs */}
        <div
          className={`my-2 flex flex-col gap-2 p-4 text-center md:gap-2.5 md:p-6 ${
            reverse ? 'lg:text-left' : 'lg:text-right'
          }`}
        >
          {/* decoration */}
          <>
            {/* Gradient outer border with shadow */}
            <div className="absolute top-1/2 left-1/2 -z-40 h-[100%] w-[100%] -translate-1/2">
              <div
                className={`from-Main/10 to-Secondary h-full w-full bg-gradient-to-r lg:scale-x-[130%] ${
                  !reverse
                    ? 'rotate-y-180 lg:translate-x-[15%]'
                    : 'lg:-translate-x-[15%]'
                }`}
                style={{ clipPath: clipPaths.offset }}
              />
            </div>

            {/* Background overlay with shadow */}
            <div
              className={`absolute top-1/2 -z-20 h-[calc(100%-4px)] w-[calc(100%-2.5px)] -translate-y-1/2 lg:scale-x-[130%] ${
                !reverse
                  ? 'right-0 rotate-y-180 lg:translate-x-[calc(15%+2px)]'
                  : 'left-0 lg:-translate-x-[calc(15%+2px)]'
              }`}
            >
              <div
                ref={bgRef}
                className={`bg-Bg-Primary h-full w-full`}
                style={{ clipPath: clipPaths.base }}
              />
            </div>
          </>

          {paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Background Heading */}
        <h2 className="BgHeading absolute bottom-0 z-40">{role}</h2>
      </div>

      {/* Image */}
      <div className="relative h-full w-full">
        <img
          className="xl-translate-[0 %] top-1/2 left-1/2 w-full -translate-[0.35%] scale-135 md:-translate-[0.25%] md:scale-125 lg:absolute lg:-translate-1/2 lg:scale-150 xl:scale-125 2xl:scale-105 "
          src={image}
          alt={name}
        />
      </div>
    </div>
  );
};

export default PersonMessage;
