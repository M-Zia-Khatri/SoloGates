import { Heading } from '@/components/ui/Heading';
import type { PackageData } from './MainPackagesSec';
import PackageCard from './PackageCard';
import { cn } from '@/lib/utils';
import { assetsUrl } from '@/constants/urlConstants';

const PackagesSec = ({
  title,
  data,
}: {
  title: string;
  data: PackageData[];
}) => {
  return (
    <div
      className={cn(
        'relative flex w-[95%] flex-col items-center md:w-full',
        'gap-6 md:gap-10 lg:gap-14 xl:gap-16 2xl:gap-12'
      )}
    >
      <div className="absolute h-full w-screen overflow-hidden">
        <img
          className="absolute top-[0%] -left-[2.5%] h-12 rotate-z-[-30deg] md:top-[0%] md:-left-[3%] md:h-16 md:rotate-z-[-30deg] lg:top-[1%] lg:-left-[1%] lg:h-[4.5rem] lg:rotate-z-[-25deg] xl:h-20 2xl:top-[0%] 2xl:-left-[1%] 2xl:h-24 2xl:rotate-z-[-35deg]"
          src={`${assetsUrl.imagesUrl}triangle-shape.png`}
        />
        <img
          className="absolute -right-[2.5%] bottom-[0%] h-12 rotate-z-[-30deg] md:-right-[3%] md:bottom-[0%] md:h-16 md:rotate-z-[-30deg] lg:-right-[1%] lg:bottom-[1%] lg:h-[4.5rem] lg:rotate-z-[-25deg] xl:h-20 2xl:bottom-[0%] 2xl:h-24 2xl:rotate-z-[-35deg]"
          src={`${assetsUrl.imagesUrl}triangle-shape.png`}
        />
      </div>

      <Heading asChild hdSize="h2">
        <h2>{title}</h2>
      </Heading>

      <div className="flex h-fit w-full flex-col justify-center gap-y-4 md:flex-row">
        {data.map((item, index) => (
          <PackageCard key={index} data={item} />
        ))}
      </div>

      <div className="hidden md:block w-full py-1" />
    </div>
  );
};

export default PackagesSec;
