import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function PageLayout({ children }) {
  const token = localStorage.getItem("token");

  return (
    <>
      <Header />
      {token && <Sidebar />}
      {children}
      <Footer />
    </>
  );
}
