import { assetsUrl } from "@/constants/urlConstants";

const OwnerMessagesSec = () => {
  return (
    <section className="sec-container my-20 flex flex-col gap-20">
      <div className="">
        <h1>Message.</h1>
        <p>
          Every brand has a story — but very few know how to tell it. That's why
          I started Sologate. Not just to create campaigns. but to spark
          conversations. Not just to sell products. but to build presence and
          purpose.
        </p>
        <p>
          To my team — know this: We are not marketers. We are architects of
          trust, clarity, and impact. When we write, we write to connect. When
          we strategize, we do it with intention. Let's always remember that
          behind every brief is a business dream waiting to be realized.
        </p>
      </div>
      {/* founder message */}
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2 flex flex-col items-center justify-center">
          {/* heading */}
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="">
              <h2 className="">Founder</h2>
            </div>
            <div className="">
              <h2>SYED MUHAMMAD OMAR</h2>
            </div>
          </div>
          {/* content */}
          <div className="flex flex-col gap-5 text-right">
            <p className="">
              Every brand has a story — but very few know how to tell it. That's
              why I started Sologate. Not just to create campaigns, but to spark
              conversations. Not just to sell products, but to build presence
              and purpose.
            </p>
            <p className="">
              To my team — know this: We are not marketers. We are architects of
              trust, clarity, and impact. When we write, we write to connect.
              When we strategize, we do it with intention. Let's always remember
              that behind every brief is a business dream waiting to be
              realized.
            </p>
            <p className="">
              To our clients — you're not hiring a service: you're gaining a
              partner who believes in your vision as fiercely as you do. We will
              turn your value into visibility, your message into momentum.
            </p>
            <p className="">
              Sologate was never built to blend in. It was built to make brands
              unforgettable and we're just getting started.
            </p>
          </div>
          {/* bg heading*/}
          <div className="" >
            <h1 className="">Founder</h1>
          </div>
        </div>
        {/* image */}
        <div className="">
          <img src={`${assetsUrl.imagesUrl}founder.png`} />
        </div>
      </div>

      {/* co-founder message */}
      <div className="flex flex-col gap-10 lg:flex-row">
        <div className="flex flex-col items-center justify-center gap-2 lg:order-2">
          {/* heading */}
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="">
              <h2 className="">Co-Founder</h2>
            </div>
            <div className="">
              <h2>SYED MUBAHAT ALI</h2>
            </div>
          </div>
          {/* content */}
          <div className="flex flex-col gap-5">
            <p className="">
              Creativity isn't about colors and shapes. It's about emotion. At
              Sologate, we turn raw ideas into bold visuals that stop the
              scroll, stir emotion, and stay in the mind.
            </p>
            <p>
              To our creative warriors — don't just design to look good. Design
              to move people. Our work speaks before we do, so let's make every
              pixel, frame, and layout matter. We don't chase trends we shape
              them.
            </p>
            <p className="">
              To our clients — your brand deserves more than a template. It
              deserves personality, power, and polish. We'll turn your
              imagination into a visual identity that tells your story before
              anyone reads a word.
            </p>
            <p className="">
              In a world full of noise, we craft the visuals that speak loudest.
              Let's make creativity unforgettable and build legacies, not just
              logos.
            </p>
          </div>
          {/* bg heading*/}
          <div className="">
            <h1 className="">Co-Founder</h1>
          </div>
        </div>
        {/* image */}
        <div className="">
          <img src={`${assetsUrl.imagesUrl}coFounder.png`} />
        </div>
      </div>
    </section>
  );
};

export default OwnerMessagesSec;
