import { assetsUrl } from "@/constants/urlConstants";
import { Heading } from "../ui/Heading";
import { useEffect, useRef, useState } from "react";

const AboutUsSec = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const [clipPaths, setClipPaths] = useState<{ base: string; offset: string }>({
    base: "",
    offset: "",
  });

  useEffect(() => {
    const updateClipPath = () => {
      if (bgRef.current) {
        const { offsetWidth, offsetHeight } = bgRef.current;

        const base = `polygon(
          0% 0%,
          ${
            offsetHeight < offsetWidth
              ? offsetWidth - offsetHeight * 0.25
              : offsetWidth - offsetHeight * 0.15
          }px 0%,
          100% ${offsetHeight < offsetWidth ? "25%" : "15%"},
          100% 100%,
          0% 100%,
          0 0
        )`;

        const offset = `polygon(
          0% 0%,
          ${
            offsetHeight < offsetWidth
              ? offsetWidth - offsetHeight * 0.25 + 2
              : offsetWidth - offsetHeight * 0.15 + 2
          }px 0%,
          100% ${offsetHeight < offsetWidth ? "25%" : "15%"},
          100% 100%,
          0% 100%,
          0 0
        )`;

        setClipPaths({ base, offset });
      }
    };

    updateClipPath();
    window.addEventListener("resize", updateClipPath);

    return () => window.removeEventListener("resize", updateClipPath);
  }, []);

  return (
    <section className="sec-container py-8 md:py-10 lg:px-14 lg:py-12 xl:px-18 xl:py-14 2xl:py-16 2xl:px-20">
      <div className="relative">
        {/* decoration */}
        <>
          {/* Gradient outer border with shadow */}
          <div className="absolute top-1/2 left-1/2 -z-40 h-[100%] w-[100%] -translate-1/2">
            <div
              className="from-Main to-Secondary h-full w-full bg-gradient-to-r"
              style={{ clipPath: clipPaths.offset }}
            />
          </div>

          {/* White border with shadow */}
          <div
            className="absolute top-1/2 left-1/2 -z-30 h-[calc(100%-4px)] w-[calc(100%-4px)] -translate-1/2"
            style={{
              filter: `drop-shadow(0px 0px ${
                window.innerWidth < 768
                  ? "15px"
                  : window.innerWidth < 1024
                    ? "25px"
                    : "35px"
              } rgba(23,138,139))`,
            }}
          >
            <div
              className="bg-Bg-Primary h-full w-full"
              style={{ clipPath: clipPaths.base }}
            />
          </div>

          {/* Background overlay with shadow */}
          <div className="absolute top-1/2 left-1/2 -z-20 h-[calc(100%-4px)] w-[calc(100%-4px)] -translate-1/2">
            <div
              ref={bgRef}
              className="h-full w-full bg-gradient-to-t from-black/75 from-5% to-[#dddcdc30]"
              style={{ clipPath: clipPaths.base }}
            />
          </div>
        </>

        {/* Content */}
        <div className="mx-auto grid h-[100%] w-[100%] grid-cols-1 gap-2 p-4 md:grid-cols-4 md:p-5 lg:gap-3 lg:p-6 xl:p-8 2xl:p-12">
          {/* text */}
          <div className="order-1 flex flex-col justify-center space-y-2.5 md:order-0 md:col-span-3 md:space-x-3 lg:space-x-4 xl:space-x-5">
            <Heading hdSize="h2" asChild>
              <h2>About Us</h2>
            </Heading>
            <p className="" lang="de">
              At Sologate, we don't just deliver services—we deliver results
              that scale. Born from a relentless passion for creativity and
              growth, Sologate is a digital marketing agency built to serve
              startups and businesses ready to make their mark. We've been where
              you are: struggling with inconsistent content, unclear messaging,
              and agencies that promise but don't perform. That's why we created
              Sologate: a strategic partner that blends creativity with
              conversion and vision with velocity.
            </p>
            <p className="" lang="de">
              Our team masters the eight pillars of digital success: social
              media management, graphic design, video editing, reels creation,
              copywriting, website design, ad strategy, and storytelling. But
              what sets us apart is how we use them not as services, but as
              synchronized tools to build momentum and trust for your brand.
            </p>
          </div>

          {/* image */}
          <div className="col-span-1 flex items-center justify-center px-3 md:px-0 lg:px-2 xl:px-4 2xl:px-8">
            <img
              src={`${
                window.innerWidth < 768
                  ? `${assetsUrl.imagesUrl}handAboutUsRotate.png`
                  : `${assetsUrl.imagesUrl}handAboutUs.png`
              }`}
              alt="Creative hand illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSec;
