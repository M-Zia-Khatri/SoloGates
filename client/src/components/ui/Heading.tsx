import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const headingVariants = cva(
  "text-white font-semibold tracking-wide shrink-0 px-2 md:px-2.5 lg:px-3 xl:px-3.5 2xl:px-4",
  {
    variants: {
      hdVariant: {
        default: "",
      },
      hdSize: {
        h1: "text-2xl md:text-3xl lg:text:4xl xl:text-5xl ",
        h2: "text-xl md:text-2xl lg:text-3xl xl:text-4xl ",
        h3: "text-lg md:text-xl lg:text-2xl xl:text-3xl ",
        h4: "text-base md:text-lg lg:text-xl xl:text-2xl ",
        h5: "text-sm md:text-base lg:text-lg xl:text-xl ",
        h6: "text-xm md:text-sm lg:text-base xl:text-lg ",
      },
    },
    defaultVariants: {
      hdVariant: "default",
      hdSize: "h1",
    },
  },
);

const bgVariants = cva(
  "w-full absolute -z-10 bg-gradient-to-r from-Main via-Secondary to-Highlight",
  {
    variants: {
      bgVariant: {
        default: "h-1/2 top-1/2",
      },
    },
    defaultVariants: {
      bgVariant: "default",
    },
  },
);

function Heading({
  hdVariant,
  hdSize,
  bgVariant,
  asChild = false,
  hdClassName,
  bgClassName,
  ...props
}: React.ComponentProps<"h1"> &
  VariantProps<typeof bgVariants> &
  VariantProps<typeof headingVariants> & {
    asChild?: boolean;
    hdClassName?: string;
    bgClassName?: string;
  }) {
  const Comp = asChild ? Slot : "h1";
  const ref = React.useRef<HTMLDivElement>(null);
  const [clipPath, setClipPath] = React.useState("");

  React.useEffect(() => {
    if (ref.current) {
      const { offsetWidth, offsetHeight } = ref.current;

      setClipPath(
        `polygon(
          0% 0%,
          ${offsetWidth - offsetHeight * 0.2}px 0%,
          100% 30%,
          100% 100%,
          0% 100%,
          0 0
        )`,
      );
    }
  }, []);

  return (
    <div className="relative flex w-fit" ref={ref}>
      <Comp
        data-slot="h1"
        className={cn(
          headingVariants({ hdVariant, hdSize, className: hdClassName }),
        )}
        {...props}
      />
      <div
        className={cn(bgVariants({ bgVariant, className: bgClassName }))}
        style={{ clipPath }}
      />
      {/* <h2 className="font-semibold tracking-wide text-xl"> test</h2> */}
    </div>
  );
}

export { Heading, headingVariants, bgVariants };
