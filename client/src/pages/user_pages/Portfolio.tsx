import HrLine from '@/components/ui/HrLine';
import PortfolioBanner from '../../components/Portfolio/PortfolioBanner';
import TrustedBy from '@/components/TrustedBy';
import { assetsUrl } from '@/constants/urlConstants';
import TestimonialContainer from '@/components/Testimonial/TestimonialContainer';
import { Heading } from '@/components/ui/Heading';
import PortfolioSection from '../../components/Portfolio/PortfolioSection';

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

const Portfolio = () => {
  return (
    <>
      <PortfolioBanner />
      <PortfolioSection />
      {/* Testimonial */}
      <section className="sec-container my-8 w-full space-y-4 overflow-hidden text-center md:space-y-6">
        <div className="flex flex-col items-center gap-1 md:gap-1.5 lg:gap-2">
          <Heading asChild hdSize="h4">
            <h4>Testimonial</h4>
          </Heading>
          <h6 className="mt-3">
            We've designed flexible service packages to fit your needs and
            budget.
          </h6>
          <h6 className="text-center">
            Whether you're a small business or a growing brand, we've got the
            perfect solution for you.
          </h6>
        </div>
        <TestimonialContainer />
      </section>
      {/* Trust by company */}
      <section className="sec-container">
        <div className="mt-6 mb-2 space-y-4 md:mt-7 md:mb-3 md:space-y-5 lg:mt-8 lg:mb-4 lg:space-y-6 xl:mt-9 xl:mb-5 xl:space-y-7 2xl:mt-10 2xl:mb-6 2xl:space-y-8">
          {/* heading & underline */}
          <div className="mt-2 flex items-center justify-center gap-1.5 lg:mt-4">
            <HrLine className="h-[3px] w-[4vw]" />
            <h3 className="flex shrink-0 font-semibold">
              Trusted by&nbsp;
              <span className="text-lg font-thin italic md:text-xl lg:text-2xl xl:text-3xl">
                Visionaries
              </span>
            </h3>
            <HrLine className="h-[3px] w-[4vw]" isRotate />
          </div>
          {/* content */}
          <TrustedBy speed={50} items={items} gap={50} reverse />
        </div>
      </section>
    </>
  );
};

export default Portfolio;
