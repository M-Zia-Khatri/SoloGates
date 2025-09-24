import { assetsUrl } from '@/constants/urlConstants';
import { InfiniteSlider } from '@/motion-primitives/infinite-slider';
import TestimonialCard from './TestimonialCard';
export interface TestimonialInt {
  name: string;
  role: string;
  imageUrl: string;
  paragraphs: string;
  rating: number;
}

const Testimonial: TestimonialInt[] = [
  {
    name: 'Ahsan Khan',
    role: 'Collage, Student',
    imageUrl: `${assetsUrl.imagesUrl}testimonial/person1.png`,
    paragraphs:
      'We don’t start with Canva. We start with questions.What’s your business goal? What do your customers want? What emotion should your rand leave behind?',
    rating: 5,
  },
  {
    name: 'Ahsan Khan',
    role: 'Collage, Student',
    imageUrl: `${assetsUrl.imagesUrl}testimonial/person1.png`,
    paragraphs:
      'We don’t start with Canva. We start with questions.What’s your business goal? What do your customers want? What emotion should your rand leave behind?',
    rating: 4,
  },
  {
    name: 'Ahsan Khan',
    role: 'Collage, Student',
    imageUrl: `${assetsUrl.imagesUrl}testimonial/person1.png`,
    paragraphs:
      'We don’t start with Canva. We start with questions.What’s your business goal? What do your customers want? What emotion should your rand leave behind?',
    rating: 3,
  },
  {
    name: 'Ahsan Khan',
    role: 'Collage, Student',
    imageUrl: `${assetsUrl.imagesUrl}testimonial/person1.png`,
    paragraphs:
      'We don’t start with Canva. We start with questions.What’s your business goal? What do your customers want? What emotion should your rand leave behind?',
    rating: 2,
  },
  {
    name: 'Ahsan Khan',
    role: 'Collage, Student',
    imageUrl: `${assetsUrl.imagesUrl}testimonial/person1.png`,
    paragraphs:
      'We don’t start with Canva. We start with questions.What’s your business goal? What do your customers want? What emotion should your rand leave behind?',
    rating: 5,
  },
  {
    name: 'Ahsan Khan',
    role: 'Collage, Student',
    imageUrl: `${assetsUrl.imagesUrl}testimonial/person1.png`,
    paragraphs:
      'We don’t start with Canva. We start with questions.What’s your business goal? What do your customers want? What emotion should your rand leave behind?',
    rating: 4,
  },
  {
    name: 'Ahsan Khan',
    role: 'Collage, Student',
    imageUrl: `${assetsUrl.imagesUrl}testimonial/person1.png`,
    paragraphs:
      'We don’t start with Canva. We start with questions.What’s your business goal? What do your customers want? What emotion should your rand leave behind?',
    rating: 5,
  },
  {
    name: 'Ahsan Khan',
    role: 'Collage, Student',
    imageUrl: `${assetsUrl.imagesUrl}testimonial/person1.png`,
    paragraphs:
      'We don’t start with Canva. We start with questions.What’s your business goal? What do your customers want? What emotion should your rand leave behind?',
    rating: 3,
  },
];

const [firstHalf, secondHalf] = [
  Testimonial.slice(0, Testimonial.length / 2),
  Testimonial.slice(Testimonial.length / 2),
];

console.log(firstHalf, secondHalf);
const TestimonialContainer = () => {
  return (
    <div className="grid w-full gap-6 py-2.5 md:h-[60vw] md:grid-cols-3 md:gap-3 md:py-3 lg:h-[52.5vw] xl:h-[45vw]">
      <div className="hidden overflow-hidden md:block">
        <InfiniteSlider
          className="px-4"
          speed={40}
          gap={25}
          reverse
          direction="vertical"
        >
          {firstHalf.map((item, index) => (
            <TestimonialCard key={index} item={item} />
          ))}
        </InfiniteSlider>
      </div>
      <div className="from-Main via-Secondary to-Highlight relative -z-30 h-fit w-[80%] justify-self-center bg-gradient-to-r px-4 py-6 drop-shadow-[0_2.5px_7.5px_rgba(23,138,139,1)] md:w-full md:px-2 md:py-4 lg:px-3 lg:py-5">
        <>
          <div className="bg-Bg-Primary absolute top-1/2 left-1/2 -z-20 h-[calc(100%-3px)] w-[calc(100%-3px)] -translate-1/2" />
          <div className="absolute top-1/2 left-1/2 -z-10 h-[calc(100%-3px)] w-[calc(100%-3px)] -translate-1/2 bg-gradient-to-t from-black/75 from-5% to-[#dddcdc30]" />
        </>

        <img className="w-full" src={`${assetsUrl.imagesUrl}dome-img2.png`} />

        <div className="mt-4 flex flex-col items-center justify-center px-1 text-center">
          <p>
            We don't start with Canva, We start with questions. What's your
            business goal? What do your customers want? What emotion Should your
            brand leave
          </p>
          <h4 className="mt-2">Leo Donovan</h4>
          <p className="text-Secondary">Collage, Student</p>
        </div>
      </div>
      <div className="overflow-hidden">
        <InfiniteSlider
          className="py-4 md:px-4"
          speed={40}
          gap={25}
          direction={`${window.innerWidth < 768 ? 'horizontal' : 'vertical'}`}
        >
          {(window.innerWidth < 768 ? Testimonial : firstHalf).map(
            (item, index) => (
              <TestimonialCard key={index} item={item} />
            )
          )}
        </InfiniteSlider>
      </div>
    </div>
  );
};

export default TestimonialContainer;
