import * as React from 'react';

import { cn } from '@/lib/utils';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'border-light-gray/25 placeholder:text-light-gray/50 flex field-sizing-content border bg-transparent shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50',
        'min-h-16 w-full',
        'text-[10px] sm:text-xs md:text-sm lg:text-base 2xl:text-lg',
        'px-3 py-2',
        'focus-visible:border-Secondary focus-visible:border-2',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
