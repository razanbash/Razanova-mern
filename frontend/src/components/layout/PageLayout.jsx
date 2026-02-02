import Header from "./Header";
import Footer from "./Footer";

export default function PageLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
