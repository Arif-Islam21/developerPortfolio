import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";

const Main = () => {
  return (
    <div className="bg-primary text-textColor min-h-screen">
      <Navbar />
      <Outlet />
      <p>footer</p>
    </div>
  );
};

export default Main;