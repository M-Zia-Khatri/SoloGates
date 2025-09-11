// components/sections/OwnerMessagesSec.tsx
import { assetsUrl } from '@/constants/urlConstants';
import IntroMessage from './IntroMessage';
import PersonMessage from './PersonMessage';

const OwnerMessagesSec = () => {
  return (
    <section className="sec-container my-6 flex flex-col gap-16 overflow-hidden md:my-8 lg:my-10 lg:gap-20 xl:my-12 2xl:my-14">
      <IntroMessage />

      {/* Founder */}
      <PersonMessage
        role="Founder"
        name="SYED MUHAMMAD OMAR"
        image={`${assetsUrl.imagesUrl}founder.png`}
        paragraphs={[
          "Every brand has a story — but very few know how to tell it. That's why I started Sologate. Not just to create campaigns, but to spark conversations. Not just to sell products, but to build presence and purpose.",
          "To my team — know this: We are not marketers. We are architects of trust, clarity, and impact. When we write, we write to connect. When we strategize, we do it with intention. Let's always remember that behind every brief is a business dream waiting to be realized.",
          "To our clients — you're not hiring a service: you're gaining a partner who believes in your vision as fiercely as you do. We will turn your value into visibility, your message into momentum.",
          "Sologate was never built to blend in. It was built to make brands unforgettable and we're just getting started.",
        ]}
        reverse={false}
      />

      {/* Co-Founder */}
      <PersonMessage
        role="Co-Founder"
        name="SYED MUBAHAT ALI"
        image={`${assetsUrl.imagesUrl}coFounder.png`}
        paragraphs={[
          "Creativity isn't about colors and shapes. It's about emotion. At Sologate, we turn raw ideas into bold visuals that stop the scroll, stir emotion, and stay in the mind.",
          "To our creative warriors — don't just design to look good. Design to move people. Our work speaks before we do, so let's make every pixel, frame, and layout matter. We don't chase trends we shape them.",
          "To our clients — your brand deserves more than a template. It deserves personality, power, and polish. We'll turn your imagination into a visual identity that tells your story before anyone reads a word.",
          "In a world full of noise, we craft the visuals that speak loudest. Let's make creativity unforgettable and build legacies, not just logos.",
        ]}
        reverse={true} // ✅ swaps image/text order
      />
    </section>
  );
};

export default OwnerMessagesSec;
