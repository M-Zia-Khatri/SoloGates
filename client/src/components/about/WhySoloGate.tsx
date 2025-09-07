import { assetsUrl } from "@/constants/urlConstants";
import { useMemo } from "react";

const WhySoloGate = () => {
  const data = useMemo(
    () => [
      {
        heading: "Strategic Thinking",
        textContent: `We don't start with Canva. We start with questions. What's your business goal? What do your customers want? What emotion should your brand leave behind? Then we craft solutions that are not just creative but commercially sharp.`,
        gifUrl: `${assetsUrl.imagesUrl}StrategicThinking.gif`,
      },
      {
        heading: "Creative with Purpose",
        textContent: `Designs that convert. Videos that connect. Campaigns that sell. We blend emotion with execution, ensuring every piece of content has one job to bring results.`,
        gifUrl: `${assetsUrl.imagesUrl}CreativeWithPurpose.gif`,
      },
      {
        heading: "In-House Talent No Outsourcing",
        textContent: `Every project is handled by our internal team of experts from ideation to execution. No freelancers. No communication gaps. One agency. One standard.`,
        gifUrl: `${assetsUrl.imagesUrl}In-HouseTalentNoOutsourcing.gif`,
      },
      {
        heading: "Contracts That Build Relationships",
        textContent: `We believe in long-term impact — not one-time jobs. That's why our clients sign annual contracts. It's not just a service, It's a partnership built on performance.`,
        gifUrl: `${assetsUrl.imagesUrl}ContractsThatBuildRelationships.gif`,
      },
    ],
    [],
  );
  return (
    <section className="sec-container">
      <div className="relative flex flex-col justify-center items-center gap-10 md:flex-row lg:gap-20">
        {/* background */}
        <img
          className="absolute top-1/2 left-1/2 -z-10 h-[100%] -translate-1/2 rotate-y-180"
          src={`${assetsUrl.iconsUrl}aboutUsBg.svg`}
        />

        {/* Content  */}
        <div className="w-[80%]">
          {/* Heading or Subtitle */}
          <div className="flex flex-col items-center gap-3 justify-center text-center">
            <h2 className="">Why Sologate</h2>
            <h3 className="">Strategy, Execution, Results.</h3>
            <p className="">
              Not just another agency we are your competitive edge.
            </p>
          </div>
          {/* Cards */}
          <div className="flex gap-5 px-5">
            {data.map((it, idx) => (
              <div className="flex-4" key={idx}>
                <div className="flex h-[50px] justify-between">
                  <img src={it.gifUrl} alt="" />
                  <p>0{idx + 1}</p>
                </div>
                <h4>{it.heading}</h4>
                <p>{it.textContent}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySoloGate;
