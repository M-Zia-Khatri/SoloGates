import { Heading } from '@/components/ui/Heading';
import type { PackageData } from './MainPackagesSec';
import PackageCard from './PackageCard';
import { cn } from '@/lib/utils';

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
        'flex  flex-col items-center',
        'gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12',
        'my-4 md:my-6 lg:my-8 xl:my-10 2xl:my-12',
      )}
    >
      <Heading asChild hdSize="h2">
        <h2>{title}</h2>
      </Heading>
      <div className="flex w-full flex-col justify-center md:flex-row">
        {data.map((item, index) => (
          <PackageCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default PackagesSec;
