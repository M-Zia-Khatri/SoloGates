import { useEffect, useRef, useState } from 'react';

const HeroCard = ({
  heading,
  subtitle,
}: {
  heading: string;
  subtitle: [string, string];
}) => {
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
              : offsetWidth - offsetHeight * 0.15
          }px 0%,
          100% ${offsetHeight < offsetWidth ? '25%' : '15%'},
          100% 100%,
          0% 100%,
          0 0
        )`;

        const offset = `polygon(
          0% 0%,
          ${
            offsetHeight < offsetWidth
              ? offsetWidth - offsetHeight * 0.25 + 2
              : offsetWidth - offsetHeight * 0.15 + 2
          }px 0%,
          100% ${offsetHeight < offsetWidth ? '25%' : '15%'},
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
    <div className="relative w-full px-3.5 py-3 md:w-fit lg:px-4 lg:py-3.5">
      <>
        {/* Gradient outer border with shadow */}
        <div className="absolute top-1/2 left-1/2 -z-40 h-[100%] w-[100%] -translate-1/2">
          <div
            className="from-Main via-Secondary to-Highlight h-full w-full bg-gradient-to-r"
            style={{ clipPath: clipPaths.offset }}
          />
        </div>

        {/* White border with shadow */}
        <div
          className="absolute top-1/2 left-1/2 -z-30 h-[calc(100%-4px)] w-[calc(100%-4px)] -translate-1/2"
          style={{
            filter: `drop-shadow(0px 0px 5px rgba(23,138,139))`,
          }}
        >
          <div
            className="bg-Bg-Primary h-full w-full"
            style={{ clipPath: clipPaths.base }}
          />
        </div>

        {/* Background overlay with shadow */}
        <div className="absolute top-1/2 left-1/2 -z-20 h-[calc(100%-4px)] w-[calc(100%-4px)] -translate-1/2">
          <div
            ref={bgRef}
            className="h-full w-full bg-gradient-to-t from-black/75 from-5% to-[#dddcdc30]"
            style={{ clipPath: clipPaths.base }}
          />
        </div>
      </>

      {/* content */}
      <div>
        <p className="font-medium">{heading}</p>
        <p className="mt-1">
          {subtitle.map((it, idx) =>
            idx === 1 ? (
              it
            ) : (
              <>
                {it}
                <br />
              </>
            )
          )}
        </p>
      </div>
    </div>
  );
};

export default HeroCard;
