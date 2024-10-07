import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";
import Footer from "../Pages/Home/Footer/Footer";

const Main = () => {
  return (
    <div className="bg-primary text-textColor min-h-screen">
      <Navbar />
      <div className={`min-h-[calc(100vh-155px)]`}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
