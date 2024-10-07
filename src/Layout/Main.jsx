import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <p>Navbar</p>
      <Outlet />
      <p>footer</p>
    </div>
  );
};

export default Main;
