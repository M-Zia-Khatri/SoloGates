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

export default function SocialIcons() {
  return (
    <div className="absolute -translate-y-10 flex gap-6" style={{ zIndex: 10 }}>
      {socialLinks.map((item, i) => (
        <a
          key={i}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-14 h-14"
        >
          <img src={item.iconUrl} alt="" />
        </a>
      ))}
    </div>
  );
}
