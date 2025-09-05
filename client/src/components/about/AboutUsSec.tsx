import { assetsUrl } from "@/constants/urlConstants";

const AboutUsSec = () => {
  return (
    <section className="sec-container">
      <div className="relative flex h-full w-full items-center justify-center">
        <svg
          className="relative"
          width="100%"
          height="100%"
          viewBox="0 0 1200 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="glow" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur
                in="SourceAlpha"
                stdDeviation="40"
                result="blur"
              />
              <feFlood flood-color="#00eaff" flood-opacity="1" result="color" />
              <feComposite in="color" in2="blur" operator="in" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g transform="translate(0,0)">
            <polygon
              points="189,111.9 911,111.9 1009.5,190.605 1009.5,488.1 189,488.1"
              fill="rgb(10,10,10)"
              stroke="#00eaff"
              strokeWidth="2"
              filter="url(#glow)"
            />
          </g>
        </svg>

        <div className="absolute top-1/2 left-1/2 grid -translate-x-1/2 -translate-y-1/2 grid-cols-5">
          <div className="col-span-3 text-sm">
            <div>
              <h1>About Us</h1>
              <div />
            </div>
            <p>
              At Sologate, we don't just deliver services we deliver results
              that scale. Born from a relentless passion for creativity and
              growth, Sologate is a digital marketing agency built to serve
              startups and businesses ready to make their mark. We've been where
              you are struggling with inconsistent content, unclear
              messaging,and agencies that promise but don't perform. That's why
              we created Sologate: a strategic partner that blends creativity
              with conversion and vision with velocity.
            </p>
            <p>
              Our team masters the eight pillars of digital success: social
              media management, graphic design, video editing, reels creation,
              copywriting, website design, ad strategy, and storytelling. But
              what sets us apart is how we use them not as services, but as
              synchronized tools to build momentum and trust for your brand.
            </p>
          </div>
          <div className="grid-cols-2">
            <img src={`${assetsUrl.imagesUrl}handAboutUs.png`} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSec;
