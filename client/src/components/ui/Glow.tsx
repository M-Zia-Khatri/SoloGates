import { cn } from '@/lib/utils';

const Glow = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'from-Secondary absolute -z-30 h-1/2 w-1/2 shrink-0 bg-radial to-[#00000000] to-80% opacity-50 blur-3xl',
        className
      )}
    />
  );
};

export default Glow;
