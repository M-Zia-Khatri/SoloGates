import TrustedBy from '@/components/TrustedBy';
import WhySoloGateSec from '@/components/WhySoloGateSec';
import HeroSec from '@/components/home/HeroSec/HeroSec';
import IntroSec from '@/components/home/IntroSec';
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
      <section className="sec-container my-4">
        <TrustedBy items={items} gap={50} direction={'horizontal'} reverse />
      </section>
    </>
  );
}
