import { assetsUrl } from "@/constants/urlConstants";

const FooterDivider = () => (
  <div className="my-6 border-b-2 border-Secondary">
    <img
      src={`${assetsUrl.imagesUrl}soloGateFooterText.png`}
      alt="Sologate Footer Text"
      className="mx-auto"
    />
  </div>
);

export default FooterDivider;
