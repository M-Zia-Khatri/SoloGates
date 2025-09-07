import { assetsUrl } from "@/constants/urlConstants";

const MissionVisionSec = () => {
  return (
    <section className="">
      {/* top */}
      <div className="">
        <div
          className="bg-Secondary h-[125px]"
          style={{
            clipPath:
              "polygon(0 0, 61% 0, 71% 99%,  100% 99%, 100% 100%, 70.99% 100%, 60.99% 1%, 0 1%, 0 0)",
          }}
        />
      </div>
      {/* content */}
      <div className="sec-container grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="">
          <h2>Our Mission</h2>
          <p>
            To empower growing businesses with purpose-driven digital strategies
            that combine design, storytelling, and performance, helping them
            scale with clarity, confidence, and creative impact.
          </p>
        </div>
        <div className="px-8">
          <img
            className="w-full"
            src={`${assetsUrl.imagesUrl}missionVisionFace.png`}
          />
        </div>
        <div className="flex flex-col justify-end">
          <h2>Our Vision</h2>
          <p>
            To become the go-to global agency for businesses ready to evolve
            from just a name into bold, unforgettable brands through world-class
            digital execution and human- centric marketing.
          </p>
        </div>
      </div>
      {/* bottom */}
      <div>
        <div
          className="bg-Secondary h-[125px]"
          style={{
            clipPath:
              "polygon(0 0, 31% 0, 41% 99%,  100% 99%, 100% 100%, 40.99% 100%, 30.99% 1%, 0 1%, 0 0)",
          }}
        />
      </div>
    </section>
  );
};

export default MissionVisionSec;
