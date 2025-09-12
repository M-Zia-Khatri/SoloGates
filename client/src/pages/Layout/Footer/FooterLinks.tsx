interface FooterLinksProps {
  title: string;
  links: string[];
}

const FooterLinks = ({ title, links }: FooterLinksProps) => (
  <div className="flex flex-col gap-4">
    <h4 className="text-2xl font-semibold">{title}</h4>
    {links.map((link) => (
      <a key={link} href="#" className="text-sm hover:text-Secondary">
        {link}
      </a>
    ))}
  </div>
);

export default FooterLinks;
