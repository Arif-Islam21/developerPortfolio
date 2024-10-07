import { RxHamburgerMenu } from "react-icons/rx";

const Sidebar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button px-4 text-2xl"
            >
              <RxHamburgerMenu />
            </label>
            {/* <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
            <p>Your content goes here...</p> */}
          </div>
          <div className="lg:translate-x-0 drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 lg:w-80 min-h-screen bg-base-100">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal lg:pr-24">
          <li>
            <a>Link</a>
          </li>
          <li>
            <a>Link</a>
          </li>
          <li>
            <a>Link</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
