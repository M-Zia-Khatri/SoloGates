import { cn } from '@/lib/utils';

export default function HrLine({
  isRotate = false,
  className,
}: {
  isRotate?: boolean;
  className?: string;
}) {
  return (
    <div
      style={{ clipPath: 'polygon(0 50%, 100% 0, 100% 100%)' }}
      className={cn(
        'bg-Secondary h-1 w-full',
        isRotate && 'rotate-z-180',
        className
      )}
    />
  );
}
