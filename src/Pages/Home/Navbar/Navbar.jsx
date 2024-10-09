import { Link, NavLink } from "react-router-dom";
import img from "/portfolio.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex justify-between items-center">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="avatar py-3 lg:pl-12 drawer-button"
            >
              <div className="ring-lime-200  ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
                <img src={img} />
              </div>
            </label>
            <div className="flex-none lg:pr-12">
              <ul className="menu hidden lg:flex menu-horizontal px-1">
                <li>
                  <a href="#about" className="font-merriWeather">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="font-merriWeather">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="font-merriWeather">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#experience" className="font-merriWeather">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#contact" className="font-merriWeather">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu custom-ul bg-base-100 text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <ul className="menu text-white flex lg:hidden flex-col menu-horizontal px-1">
                <li>
                  <a href="#about" className="font-merriWeather">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="font-merriWeather">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="font-merriWeather">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#experience" className="font-merriWeather">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#contact" className="font-merriWeather">
                    Contact
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
