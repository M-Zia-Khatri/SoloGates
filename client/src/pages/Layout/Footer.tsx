import { assetsUrl } from "@/constants/urlConstants";

const Footer = () => {
  return (
    <footer className="sec-container">
      {/* content */}
      <div className="flex justify-between py-4">
        {/* left */}
        <div className="max-w-[440px]">
          <img
            className="w-1/2"
            src={`${assetsUrl.logosUrl}LogoBlackBG.png`}
            alt=""
          />
          <p>
            We don't start with Canva. We start with questions. What's your
            business goal? What do your customers want? What emotion should your
            brand leave behind? Then we craft solutions that are not just
            creative but commercially sharp.
          </p>
          <div className="mt-4 flex h-[50px] items-center gap-3">
            <img
              className="h-full"
              src={`${assetsUrl.iconsUrl}facebookBorder.svg`}
              alt=""
            />

            <img
              className="h-full"
              src={`${assetsUrl.iconsUrl}instagramBorder.svg`}
              alt=""
            />

            <img
              className="h-full"
              src={`${assetsUrl.iconsUrl}linkedinBorder.svg`}
              alt=""
            />

            <img
              className="h-full"
              src={`${assetsUrl.iconsUrl}whatsappBorder.svg`}
              alt=""
            />

            <img
              className="h-full"
              src={`${assetsUrl.iconsUrl}mailBorder.svg`}
              alt=""
            />
          </div>
        </div>

        {/* right */}
        <div className="flex gap-20">
          <div className="flex flex-col gap-4">
            <h4 className="text-3xl">Company</h4>
            <a href="#">About Us</a>
            <a href="#">Our Services</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Testimonials</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-3xl">Quick Links</h4>
            <a href="#">About Us</a>
            <a href="#">Our Services</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Testimonials</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="flex items-center justify-between">
        <p>Copyrights@ 2025. All Rights Reserved. Developed by Sologate.</p>
        <div className="">Terms of Service | Privacy Policy</div>
      </div>
    </footer>
  );
};

export default Footer;
