interface FooterLinksProps {
  title: string;
  links: string[];
}

const FooterLinks = ({ title, links }: FooterLinksProps) => (
  <div
    className={`col-span-1 flex flex-col gap-2`}
  >
    <h5 className="text-Secondary mb-0.5 font-semibold">{title}</h5>
    {links.map((link) => (
      <a key={link} href="#" className="hover:text-Secondary">
        <p>{link}</p>
      </a>
    ))}
  </div>
);

export default FooterLinks;
