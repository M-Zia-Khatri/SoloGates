import Content from "./Content";
import Footer from "./Footer";
import Topbar from "./Topbar";

export default function AuthenticatedAppRoot() {
  return (
    <>
      <Topbar />
      <Content />
      <Footer />
    </>
  );
}
