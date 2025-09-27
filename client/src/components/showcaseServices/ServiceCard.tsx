// src/components/ServiceCard.tsx

import { cn } from '@/lib/utils'; // Assuming you have a utility for classnames
import React from 'react';

interface ServiceCardProps {
  text: string;
  icon: React.ReactNode;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ text, icon, index }) => {
  // Check if the card is on the right side
  const isRightSide = index >= 3;

  // Define a mirrored clip-path for the right-side cards
  const clipPathStyle = isRightSide
    ? 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%, 0% 30%)' // Mirrored shape
    : 'polygon(0% 0%, 90% 0%, 100% 30%, 100% 100%, 0% 100%)';

  return (
    // Outer div for glow effect
    <div
      className="p-[1px]"
      style={{
        clipPath: clipPathStyle,
        background:
          'linear-gradient(90deg,var(--color-Main) 0%, var(--color-Secondary) 50%, var(--color-Highlight) 100%)',
      }}
    >
      {/* Inner div for content */}
      <div
        className={cn(
          'bg-Bg-Primary flex items-center',
          'px-2 py-2 md:px-3',
          'gap-1 md:gap-2',
          isRightSide ? 'justify-start' : 'justify-end' // Correct alignment
        )}
        style={{
          clipPath: clipPathStyle,
        }}
      >
        {/* Conditional rendering for correct text/icon order */}
        {!isRightSide ? (
          <>
            <span className="text-right">{text}</span>
            <div className="h-4 md:h-5 xl:h-6">{icon}</div>
          </>
        ) : (
          <>
            <div className="h-4 md:h-5 xl:h-6">{icon}</div>
            <span className="text-left">{text}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
