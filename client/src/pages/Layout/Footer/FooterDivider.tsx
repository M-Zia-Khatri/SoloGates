import { assetsUrl } from "@/constants/urlConstants";

const FooterDivider = () => (
  <div className="my-2 md:my-3 lg:my-4 border-b-2 border-Secondary">
    <img
      src={`${assetsUrl.imagesUrl}soloGateFooterText.png`}
      alt="Sologate Footer Text"
      className="mx-auto"
    />
  </div>
);

export default FooterDivider;
