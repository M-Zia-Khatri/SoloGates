import MainPackagesSec from '@/components/services/PackagesSec/MainPackagesSec';
import ServicesBannerSec from '@/components/services/ServicesBannerSec';
import ShowcaseServicesContent from '@/components/showcaseServices/ShowcaseServicesContent';
import TrustedBy from '@/components/TrustedBy';
import HrLine from '@/components/ui/HrLine';
import { assetsUrl } from '@/constants/urlConstants';

const items = [
  {
    src: `${assetsUrl.imagesUrl}company/company1.png`,
    alt: 'company1',
  },
  {
    src: `${assetsUrl.imagesUrl}company/company2.png`,
    alt: 'company2',
  },
  {
    src: `${assetsUrl.imagesUrl}company/company3.png`,
    alt: 'company3',
  },
  {
    src: `${assetsUrl.imagesUrl}company/company4.png`,
    alt: 'company4',
  },
  {
    src: `${assetsUrl.imagesUrl}company/company5.png`,
    alt: 'company5',
  },
  {
    src: `${assetsUrl.imagesUrl}company/company6.png`,
    alt: 'company6',
  },
];

const Services = () => {
  return (
    <>
      <ServicesBannerSec />
      <section className="sec-container">
        {/* heading  */}
        <div className="mt-2 flex items-center justify-center gap-1.5">
          <HrLine className="h-[3px] w-[4vw]" />
          <h3 className="flex shrink-0 font-semibold">
            Your&nbsp;
            <h3 className="font-thin italic">Interest</h3>
          </h3>
          <HrLine className="h-[3px] w-[4vw]" isRotate />
        </div>

        <ShowcaseServicesContent />
      </section>
      <MainPackagesSec />
      <section className="sec-container">
        <div className="mt-6 mb-2 space-y-4 md:mt-7 md:mb-3 md:space-y-5 lg:mt-8 lg:mb-4 lg:space-y-6 xl:mt-9 xl:mb-5 xl:space-y-7 2xl:mt-10 2xl:mb-6 2xl:space-y-8">
          {/* heading & underline */}
          <div className="mt-2 flex items-center justify-center gap-1.5 lg:mt-4">
            <HrLine className="h-[3px] w-[4vw]" />
            <h3 className="flex shrink-0 font-semibold">
              Trusted by&nbsp;
              <h3 className="font-thin italic">Visionaries</h3>
            </h3>
            <HrLine className="h-[3px] w-[4vw]" isRotate />
          </div>
          {/* content */}
          <TrustedBy speed={50} items={items} gap={45} />
        </div>
      </section>
    </>
  );
};

export default Services;
