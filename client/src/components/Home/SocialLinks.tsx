import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const iconSize = "1.8rem";
const socialLinks = [
  {
    icon: <FaFacebookF size={iconSize} />,
    url: "https://www.facebook.com/sologate.co/",
  },
  {
    icon: <FaInstagram size={iconSize} />,
    url: "https://www.instagram.com/sologate.co/",
  },
  {
    icon: <FaLinkedinIn size={iconSize} />,
    url: "https://www.linkedin.com/company/sologate",
  },
  { icon: <FaWhatsapp size={iconSize} />, url: "https://wa.me/123456789" },
  { icon: <MdEmail size={iconSize} />, url: "info.sologate@gmail.com" },
];

export default function SocialIcons() {
  return (
    <div className="absolute -translate-y-10 flex gap-6" style={{ zIndex: 5 }}>
      {socialLinks.map((item, i) => (
        <a
          key={i}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-14 h-14"
        >
          {/* Gradient Border (thicker now) */}
          <div
            className="absolute inset-0 p-[4px] [clip-path:polygon(10%_0,100%_0,100%_90%,90%_100%,0_100%,0_10%)]"
            style={{
              background: "linear-gradient(135deg, #00ffff, #0066ff)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          ></div>

          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-cyan-300 text-2xl">{item.icon}</span>
          </div>
        </a>
      ))}
    </div>
  );
}
