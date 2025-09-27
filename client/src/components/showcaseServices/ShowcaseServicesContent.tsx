// src/components/ShowcaseServicesContent.tsx

import React from 'react';
import ServiceCard from './ServiceCard'; // Aapka pehle se banaya hua card component

import { AspectRatio } from '../ui/aspect-ratio';
import { assetsUrl } from '@/constants/urlConstants';

const services = [
  // Left Column
  {
    text: 'Reels Production',
    icon: <img src={`${assetsUrl.gifUrl}camera.gif`} className="h-full" />,
  },
  {
    text: 'Brand Identity Design',
    icon: (
      <img src={`${assetsUrl.gifUrl}brand_design.gif`} className="h-full" />
    ),
  },
  {
    text: 'Website development',
    icon: (
      <img src={`${assetsUrl.gifUrl}web_development.gif`} className="h-full" />
    ),
  },
  // Right Column
  {
    text: 'Social Media Management',
    icon: (
      <img
        src={`${assetsUrl.gifUrl}social_media_marketing.gif`}
        className="h-full"
      />
    ),
  },
  {
    text: 'Content Creation',
    icon: (
      <img src={`${assetsUrl.gifUrl}content_creation.gif`} className="h-full" />
    ),
  },
  {
    text: 'Video Editing',
    icon: <img src={`${assetsUrl.gifUrl}video.gif`} className="h-full" />,
  },
];

const ShowcaseServicesContent: React.FC = () => {
  // =================================================================
  // == ADJUSTMENT CONTROLS (Updated for Responsiveness) ==
  // =================================================================

  // --- POSITION CONTROLS ---
  let horizontalOffset = 77.5;
  let verticalSpacing = 75;
  let startY = -75;

  // --- TILT CONTROLS ---
  let tiltIntensity = 20;
  let verticalTiltOffset = 30;

  if (window.innerWidth >= 767 && window.innerWidth < 1024) {
    // --- POSITION CONTROLS ---
    horizontalOffset = 200;
    verticalSpacing = 100;
    startY = -100;

    // --- TILT CONTROLS ---
    tiltIntensity = 60; //  par tilt effect re-enabled
    verticalTiltOffset = 30;
  } else if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
    // --- POSITION CONTROLS ---
    horizontalOffset = 280;
    verticalSpacing = 125;
    startY = -125;

    // --- TILT CONTROLS ---
    tiltIntensity = 60; //  par tilt effect re-enabled
    verticalTiltOffset = 30;
  } else if (window.innerWidth >= 1280) {
    // --- POSITION CONTROLS ---
    horizontalOffset = 350;
    verticalSpacing = 150;
    startY = -150;

    // --- TILT CONTROLS ---
    tiltIntensity = 60; //  par tilt effect re-enabled
    verticalTiltOffset = 30;
  }

  // =================================================================

  const numServices = services.length;
  const itemsPerSide = numServices / 2;

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden p-4">
      {/* Container ko flexible banaya gaya hai */}
      <div className="relative flex h-[250px] w-full max-w-sm items-center justify-center md:h-[350px] lg:h-[450px]">
        <AspectRatio
          ratio={0.5 / 0.5}
          className="scale-[0.75] opacity-50 md:scale-[0.5] lg:scale-[0.75] xl:scale-100"
        >
          <img src={`${assetsUrl.imagesUrl}Earth.png`} />
        </AspectRatio>

        {services.map((service, index) => {
          const isLeftSide = index < itemsPerSide;
          const groupIndex = isLeftSide ? index : index - itemsPerSide;

          const x = isLeftSide ? -horizontalOffset : horizontalOffset;

          const y = startY + groupIndex * verticalSpacing;

          const rotationFactor =
            (y - verticalTiltOffset) / (verticalSpacing * itemsPerSide);
          let rotation = rotationFactor * tiltIntensity;
          if (isLeftSide) {
            rotation *= -1;
          }

          // Mobile ke liye simplified rotation

          return (
            <div
              key={service.text}
              className="absolute drop-shadow-[0_0_5px_rgba(23,138,139,1)]"
              style={{
                '--x': `${x}px`,
                '--y': `${y}px`,
                '--rotation': `${rotation}deg`,
                transform: `translate(var(--x), var(--y)) rotate(var(--rotation))`,
                transition: 'transform 0.5s ease-out',
              }}
            >
              {/* BUG FIX: 'index' prop ab pass ho raha hai */}
              <ServiceCard
                text={service.text}
                icon={service.icon}
                index={index}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowcaseServicesContent;
