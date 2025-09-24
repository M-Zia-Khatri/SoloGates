import TestimonialContainer from '@/components/Testimonial/TestimonialContainer';
import TrustedBy from '@/components/TrustedBy';
import WhySoloGateSec from '@/components/WhySoloGateSec';
import HeroSec from '@/components/home/HeroSec/HeroSec';
import IntroSec from '@/components/home/IntroSec';
import { Heading } from '@/components/ui/Heading';
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
export default function Home() {
  return (
    <>
      <HeroSec />
      <IntroSec />
      <WhySoloGateSec />
      <section className="w-full overflow-hidden sec-container my-8 space-y-4 md:space-y-6">
        <div className="flex flex-col items-center gap-0.5 md:gap-1 lg:gap-4">
          <Heading asChild hdSize="h4">
            <h4>Trusted by Clients, Loved by Audiences</h4>
          </Heading>
          <div className="mt-2 flex items-center justify-center gap-1.5 lg:mt-4">
            <HrLine className="h-[3px] w-[4vw]" />
            <h5 className="flex shrink-0 font-semibold">
              What Our &nbsp;
              <h5 className="font-thin italic">Partners Say About Us.</h5>
            </h5>
            <HrLine className="h-[3px] w-[4vw]" isRotate />
          </div>
          <p className="text-center">
            From startups to established businesses, our clients trust Sologate
            to deliver creativity, consistency, and results.
          </p>
        </div>
        <TestimonialContainer />
      </section>
      <section className="sec-container my-4 md:my-6 lg:my-8">
        <TrustedBy
          speed={50}
          items={items}
          gap={50}
          direction={'horizontal'}
          reverse
        />
      </section>
    </>
  );
}
