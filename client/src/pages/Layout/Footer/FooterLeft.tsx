import { assetsUrl } from '@/constants/urlConstants';

const FooterLeft = () => (
  <div className="max-w-[440px]">
    <img
      className="w-1/2"
      src={`${assetsUrl.logosUrl}LogoBlackBG.png`}
      alt="Sologate Logo"
    />
    <p className="mt-4 text-sm leading-relaxed">
      We don't start with Canva. We start with questions. What's your business
      goal? What do your customers want? What emotion should your brand leave
      behind? Then we craft solutions that are not just creative but
      commercially sharp.
    </p>

    {/* Social Icons */}
    <div className="mt-4 flex h-[50px] items-center gap-3">
      {[
        'facebookBorder',
        'instagramBorder',
        'linkedinBorder',
        'whatsappBorder',
        'mailBorder',
      ].map((icon) => (
        <img
          key={icon}
          className="h-full cursor-pointer transition hover:scale-110"
          src={`${assetsUrl.iconsUrl}${icon}.svg`}
          alt={icon}
        />
      ))}
    </div>
  </div>
);

export default FooterLeft;
