import type { TestimonialInt } from './TestimonialContainer';
import { MdStar } from 'react-icons/md';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useEffect, useRef, useState } from 'react';

const TestimonialCard = ({ item }: { item: TestimonialInt }) => {
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
    <div className="relative flex w-full max-w-md flex-col gap-6 p-6 shadow-lg">
      {/* Background */}
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
            filter: `drop-shadow(0px 0px 7.5px rgba(23,138,139))`,
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

      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <MdStar key={i} className="h-5 w-5 fill-cyan-400 text-cyan-400" />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-base leading-relaxed font-medium text-white" lang="de">
        {item.paragraphs}
      </p>

      {/* User Info */}
      <div className="mt-2 flex items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={item.imageUrl} alt={item.name} />
          <AvatarFallback>
            {item.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="text-lg font-semibold text-white">{item.name}</div>
          <div className="text-sm text-gray-400">{item.role}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
