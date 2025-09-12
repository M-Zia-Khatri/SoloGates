import Content from './Content';
import Footer from './Footer/Footer';
import Topbar from './Topbar';

export default function AuthenticatedAppRoot() {
  return (
    <>
      <Topbar />
      <Content />
      <Footer />
    </>
  );
}
