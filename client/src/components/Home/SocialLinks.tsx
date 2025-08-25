const baseIconsUrl = "/icons/";
const socialLinks = [
  {
    iconUrl: `${baseIconsUrl}facebookBorder.svg`,
    url: "https://www.facebook.com/sologate.co/",
  },
  {
    iconUrl: `${baseIconsUrl}instagramBorder.svg`,
    url: "https://www.instagram.com/sologate.co/",
  },
  {
    iconUrl: `${baseIconsUrl}linkedinBorder.svg`,
    url: "https://www.linkedin.com/company/sologate",
  },
  {
    iconUrl: `${baseIconsUrl}whatsappBorder.svg`,
    url: "https://wa.me/123456789",
  },
];
// grid grid-cols-4 gap-2.5 px-8 md:gap-6 md:px-16 lg:gap:3 lg:px-12 xl:gap-4 xl:px-10


export default function SocialIcons({ width }: { width: number }) {
  return (
    <div
      className="absolute flex items-center justify-between"
      style={{
        width,
        gap : `${width * 0.05}px` ,
        zIndex: 10,
        padding: `0px ${width * 0.11}px`,
        top: `calc(${width * 0.3}px)`,
      }}
    >
      {socialLinks.map((item, i) => (
        <a
          className="group relative"
          style={{
            width: "100%",
            minWidth: "40px",
            maxWidth: "80px",
          }}
          key={i}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={item.iconUrl} alt="" />
        </a>
      ))}
    </div>
  );
}
