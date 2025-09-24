import FooterBottom from './FooterBottom';
import FooterDivider from './FooterDivider';
import FooterLeft from './FooterLeft';
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <footer className="sec-container overflow-hidden">
      {/* Top Content */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 py-4">
        {/* Left Section */}
        <FooterLeft />

        {/* Right Section */}
        <FooterLinks
          title="Quick Links"
          links={[
            'About Us',
            'Our Services',
            'Portfolio',
            'Testimonial',
            'Contact Us',
          ]}
        />
        <FooterLinks
          title="Services"
          links={[
            'Reels Production',
            'Brand Identity Design',
            'Website Development',
            'Social Media Management',
            'Content Creation',
            'Video Editing',
          ]}
        />
        <FooterLinks
          title="Contact Us"
          links={[
            'Build It, 3rd Floor, Najeeb Corner,\nTariq Road, Block2, P.E.C.H.S,\nKarachi',
            'Info.Sologate.Co',
            '+92 300 3351248,',
            '+92 317 2624794,',
            '+971 56 796 8926',
          ]}
        />
      </div>

      {/* Divider */}
      <FooterDivider />
      {/* Bottom Section */}
      <FooterBottom />
    </footer>
  );
};

export default Footer;
