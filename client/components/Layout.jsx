import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="px-5 py-5">{children}</main>
      <Footer />
    </>
  );
}
