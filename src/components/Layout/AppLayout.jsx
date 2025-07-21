import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ScrollToTop } from "./ScrollToTop";
import { ScrollToTopButton } from "./ScrollToTopButton";

const AppLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default AppLayout;
