import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";
import Footer from "../Pages/Home/Footer/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-up" className="bg-primary text-white min-h-screen">
      <Navbar />
      <div className={`min-h-[calc(100vh-155px)]`}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
