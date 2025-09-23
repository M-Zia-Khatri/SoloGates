import { InfiniteSlider } from '@/motion-primitives/infinite-slider';

export interface TrustedByItem {
  src: string;
  alt?: string;
}

interface TrustedByProps
  extends Omit<React.ComponentProps<typeof InfiniteSlider>, 'children'> {
  items: TrustedByItem[];
}

const TrustedBy = ({ items, ...props }: TrustedByProps) => {
  return (
    <InfiniteSlider {...props}>
      {items.map((it, idx) => (
        <img key={idx} src={it.src} alt={it.alt ?? 'trusted brand'} />
      ))}
    </InfiniteSlider>
  );
};

export default TrustedBy;
