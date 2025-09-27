import HrLine from '@/components/ui/HrLine';
import type { PackageData } from './MainPackagesSec';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { assetsUrl } from '@/constants/urlConstants';
// A simple SVG icon component for the button

export default function PackageCard({
  key,
  data,
}: {
  key: number;
  data: PackageData;
}) {
  const { title, price, desc, features } = data;

  return (
    // Main container with dark background, padding, rounded corners, and a glowing border
    <div
      className={cn(
        `flex flex-col border bg-gradient-to-b ${
          title.toLowerCase() === 'platinum package'
            ? 'from-Secondary/40 border-Highlight to-[#062525]/40 shadow-[0_0_8px_rgba(111,204,221,1)] md:w-[40%] md:shrink-0 md:grow md:scale-y-[1.05] lg:scale-y-[1.075]'
            : `border-Secondary justify-between from-[#BCBEC0]/20 to-[#062525]/20 shadow-[-11px_0_20px_3px_rgba(23,138,139,0.3)] ${
                title.toLowerCase() === 'silver package'
                  ? 'shadow-[-11px_0_50px_3px_rgba(23,138,139,0.3)] md:border-r-0'
                  : 'shadow-[11px_0_50px_3px_rgba(23,138,139,0.3)] md:border-l-0'
              }`
        } `,
        `px-4 py-6 xl:px-6 xl:py-8`,
        `gap-2 md:gap-3 lg:gap-4 xl:gap-5`
      )}
      key={key}
    >
      {/* Package Title & Price Section */}
      <div className="flex flex-col gap-1 md:gap-1.5 xl:gap-2">
        {/* Package Title */}
        <h3
          className={cn(
            'font-bold tracking-wider uppercase',
            `${title.toLowerCase() === 'platinum package' ? 'text-shadow-[0_0_8px_rgba(23,138,139,1)]' : ''}`
          )}
        >
          {title}
        </h3>

        {/* Price Section */}
        <div className="flex items-baseline text-center">
          <h3 className="font-bold">${price}</h3>
          <h6 className="ml-2">/ Month</h6>
        </div>

        {/* Description */}
        <div className="">
          <p className="mb-1.5">{desc}</p>
          {/* Decorative line below description */}
          <HrLine className="h-[2px]" variant="center" />
        </div>
      </div>

      {/* Features List & btn */}
      <div className="flex h-full flex-col justify-between gap-6">
        {/* Features List */}
        <ul className="space-y-1 md:space-y-1.5">
          {features.map((feature, index) => (
            <li key={index} className="flex">
              <div className="mt-2 mr-2 h-[3px] w-[3px] shrink-0 bg-white" />
              <p>{feature}</p>
            </li>
          ))}
        </ul>

        {/* Get Started Button */}
        <div className="flex w-full items-center justify-center">
          <Button className="flex items-center gap-2">
            <img
              className="mr-2 h-3 md:h-4 xl:h-6"
              src={`${assetsUrl.gifUrl}phone.gif`}
            />
            <span>Get Started</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
