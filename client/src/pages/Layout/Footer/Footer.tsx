import { assetsBaseUrl, assetsUrl } from '@/constants/urlConstants';
import FooterBottom from './FooterBottom';
import FooterDivider from './FooterDivider';
import FooterLeft from './FooterLeft';
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <footer className="sec-container overflow-hidden">
      {/* Top Content */}
      <div className="flex flex-col gap-10 py-4 lg:flex-row lg:justify-between">
        {/* Left Section */}
        <FooterLeft />

        {/* Right Section */}
        <div className="flex flex-wrap gap-20">
          <FooterLinks
            title="Company"
            links={[
              'About Us',
              'Our Services',
              'Careers',
              'Blog',
              'Testimonials',
              'Contact Us',
            ]}
          />
          <FooterLinks
            title="Quick Links"
            links={[
              'About Us',
              'Our Services',
              'Careers',
              'Blog',
              'Testimonials',
              'Contact Us',
            ]}
          />
        </div>
      </div>

      {/* Divider */}
      <FooterDivider />
      {/* Bottom Section */}
      <FooterBottom />
    </footer>
  );
};

export default Footer;
