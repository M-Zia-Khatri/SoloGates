const FooterBottom = () => (
  <div className="flex flex-col items-center justify-between gap-x-4 lg:flex-row p-1 md:p-1.5">
    <p>Copyright © 2025. All Rights Reserved. Developed by Sologate.</p>
    <div className="flex gap-x-1">
      <a href="#" className="hover:text-Secondary">
        <p>Terms of Service</p>
      </a>
      <span>|</span>
      <a href="#" className="hover:text-Secondary">
        <p>Privacy Policy</p>
      </a>
    </div>
  </div>
);

export default FooterBottom;
