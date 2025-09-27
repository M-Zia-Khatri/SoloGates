import { cn } from '@/lib/utils';
import { useMemo } from 'react';

export default function HrLine({
  isRotate = false,
  variant = 'default',
  className,
}: {
  isRotate?: boolean;
  className?: string;
  variant?: 'default' | 'center';
}) {
  const clipPath: string = useMemo(
    () =>
      variant === 'center'
        ? 'polygon(0 50%, 50% 0, 100% 50%, 50% 100% )'
        : 'polygon(0 50%, 100% 0, 100% 100%)',
    [variant]
  );

  return (
    <div
      style={{ clipPath }}
      className={cn(
        'bg-Secondary h-1 w-full',
        isRotate && 'rotate-z-180',
        className
      )}
    />
  );
}
