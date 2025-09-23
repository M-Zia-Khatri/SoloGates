import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const headingVariants = cva(
  'relative z-10 shrink-0 px-2 font-semibold tracking-[0.01em] text-white md:px-2.5 lg:px-3 xl:px-3.5 2xl:px-4',
  {
    variants: {
      hdVariant: {
        default: '',
      },
      hdSize: {
        h1: 'text-2xl md:text-3xl lg:text-4xl xl:text-5xl',
        h2: 'text-xl md:text-2xl lg:text-3xl xl:text-4xl',
        h3: 'text-lg md:text-xl lg:text-2xl xl:text-3xl',
        h4: 'text-base md:text-lg lg:text-xl xl:text-2xl',
        h5: 'text-sm md:text-base lg:text-lg xl:text-xl',
        h6: 'text-xs md:text-sm lg:text-base xl:text-lg',
      },
    },
    defaultVariants: {
      hdVariant: 'default',
      hdSize: 'h1',
    },
  }
);

const bgVariants = cva('absolute h-full w-full bg-gradient-to-r', {
  variants: {
    bgVariant: {
      default: 'from-Main via-Secondary to-Highlight top-1/2 h-1/2',
      fullBgGradient: 'from-Main via-Secondary to-Highlight',
      fullBg: 'bg-white',
    },
  },
  defaultVariants: {
    bgVariant: 'default',
  },
});

function Heading({
  hdVariant,
  hdSize,
  bgVariant,
  asChild = false,
  hdClassName,
  bgClassName,
  dropShadow,
  isDropShadow = false,
  isRotate = false,
  ...props
}: React.ComponentProps<'h1'> &
  VariantProps<typeof bgVariants> &
  VariantProps<typeof headingVariants> & {
    asChild?: boolean;
    hdClassName?: string;
    bgClassName?: string;
    dropShadow?: string;
    isDropShadow?: boolean;
    isRotate?: boolean;
  }) {
  const Comp = asChild ? Slot : 'h1';
  const ref = React.useRef<HTMLDivElement>(null);
  const [clipPath, setClipPath] = React.useState('');

  React.useEffect(() => {
    if (ref.current) {
      const { offsetWidth, offsetHeight } = ref.current;

      setClipPath(
        `polygon(
          0% 0%,
          ${offsetWidth - offsetHeight * 0.225}px 0%,
          100% 20%,
          100% 100%,
          0% 100%,
          0 0
        )`
      );
    }
  }, []);

  return (
    <div className="relative flex w-fit" ref={ref}>
      <Comp
        data-slot="h1"
        className={cn(
          headingVariants({ hdVariant, hdSize, className: hdClassName })
        )}
        {...props}
      />
      <div
        className={`absolute h-full w-full ${isDropShadow && 'drop-shadow-[0_2px_1px_rgba(23,138,139,1)]'} ${dropShadow}`}
      >
        <div
          className={
            cn(bgVariants({ bgVariant, className: bgClassName })) +
            `${isRotate ? ' rotate-y-180' : ''}`
          }
          style={{ clipPath }}
        />
      </div>
    </div>
  );
}

export { Heading, headingVariants, bgVariants };
