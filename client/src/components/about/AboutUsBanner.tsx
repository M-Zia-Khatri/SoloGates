import { assetsUrl } from "@/constants/urlConstants";

const AboutUsBanner = () => {
  return (
    <section className="sec-container flex h-[90vh] items-center justify-center">
      <img
        className="absolute top-0 -z-50 h-screen w-full opacity-20"
        src={`${assetsUrl.imagesUrl}banner.jpg`}
      />
      <div className="bg-Bg-Primary/20 absolute top-0 -z-40 h-screen w-full" />
      <div>
        <img src={`${assetsUrl.imagesUrl}AboutUsText.png`} />
      </div>
    </section>
  );
};

export default AboutUsBanner;
