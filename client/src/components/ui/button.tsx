import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          'relative h-fit w-fit overflow-hidden border-none bg-[rgb(23,138,139)] px-6 py-2 text-[0.75rem] text-white shadow-[0px_0px_2px_1px_rgb(23,138,139)] transition-all duration-500 [transition-timing-function:cubic-bezier(1,0,0,1)] ' +
          "before:absolute before:top-0 before:left-0 before:h-full before:w-full before:transition-all before:duration-300 before:ease-in-out before:content-['']" +
          'before:bg-[radial-gradient(circle_at_0%_45%,rgba(10,10,10,1)_19%,rgba(10,10,10,0.26)_46%,rgba(10,10,10,0)_100%)]' +
          "after:absolute after:top-0 after:right-0 after:h-full after:w-full after:transition-all after:duration-300 after:ease-in-out after:content-['']" +
          'after:bg-[radial-gradient(circle_at_100%_45%,rgba(10,10,10,1)_19%,rgba(10,10,10,0.26)_46%,rgba(10,10,10,0)_100%)]' +
          'hover:shadow-[0px_0px_20px_0_rgb(23,138,139)] hover:before:w-0 hover:before:opacity-0 hover:after:w-0 hover:after:opacity-0',
        outline: '',
      },

      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </Comp>
  );
}

export { Button, buttonVariants };
