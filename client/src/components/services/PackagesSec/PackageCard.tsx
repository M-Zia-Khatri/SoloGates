import HrLine from '@/components/ui/HrLine';
import type { PackageData } from './MainPackagesSec';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
// A simple SVG icon component for the button
const PhoneIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    style={{ transform: 'rotate(90deg)' }}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

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
        `border-2 bg-gradient-to-b ${
          title.toLowerCase() === 'platinum package'
            ? 'from-Secondary/40 border-Highlight to-[#062525]/40 md:w-[40%] md:shrink-0 md:grow md:scale-y-[1.1]'
            : `border-Secondary from-[#BCBEC0]/20 to-[#062525]/20 ${
                title.toLowerCase() === 'silver package'
                  ? 'md:border-r-0'
                  : 'md:border-l-0'
              }`
        } `,
        `px-4 py-6`
      )}
      key={key}
    >
      {/* Package Title */}
      <h2 className="mb-4 font-bold tracking-wider uppercase">{title}</h2>

      {/* Price Section */}
      <div className="mb-4 flex items-baseline text-center">
        <span className="font-bold">${price}</span>
        <span className="ml-2">/ Month</span>
      </div>

      {/* Description */}
      <div className="mb-6">
        <p className="text-gray-300">{desc}</p>
        {/* Decorative line below description */}
        <div className="flex w-full items-center justify-center">
          <HrLine className="h-[3px] w-1/2" />
          <HrLine className="h-[3px] w-1/2" isRotate />
        </div>
      </div>

      {/* Features List */}
      <ul className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <div className="mr-2 h-[3px] w-[3px] bg-white" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Get Started Button */}
      <div className='w-full flex justify-center items-center'>

      <Button className="flex items-center gap-2">
        <PhoneIcon />
        <span>Get Started</span>
      </Button>
      </div>
    </div>
  );
}
