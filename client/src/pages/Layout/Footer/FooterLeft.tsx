import { assetsUrl } from '@/constants/urlConstants';

const FooterLeft = () => (
  <div className="col-span-1 max-w-[440px] space-y-2 lg:col-span-2">
    <img
      className="lg:w-1/2"
      src={`${assetsUrl.logosUrl}LongLogoBlackBG.png`}
      alt="Sologate Logo"
    />
    <p className="">
      We don't start with Canva. We start with questions. What's your business
      goal? What do your customers want? What emotion should your brand leave
      behind? Then we craft solutions that are not just creative but
      commercially sharp.
    </p>

    {/* Social Icons */}
    <div className="flex h-4 items-center gap-3 md:h-6 lg:h-8">
      {['facebookBG', 'instagramBG', 'linkedinBG', 'whatsappBG', 'mailBG'].map(
        (icon) => (
          <img
            key={icon}
            className="h-full cursor-pointer transition hover:scale-110"
            src={`${assetsUrl.iconsUrl}${icon}.svg`}
            alt={icon}
          />
        )
      )}
    </div>
  </div>
);

export default FooterLeft;
