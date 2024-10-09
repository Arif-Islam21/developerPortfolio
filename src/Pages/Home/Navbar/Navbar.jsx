import img from "/portfolio.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <div className="drawer ">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex justify-between items-center">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="avatar py-3 lg:pl-12 drawer-button"
            >
              <div
                data-aos="fade-zoom-in"
                data-aos-offset="300"
                data-aos-duration="500"
                data-aos-easing="ease-in-back"
                className="ring-lime-200  ring-offset-base-100 w-14 rounded-full ring ring-offset-2"
              >
                <img src={img} />
              </div>
            </label>
            <div
              data-aos="fade-zoom-in"
              data-aos-offset="300"
              data-aos-duration="500"
              data-aos-easing="ease-in-back"
              className="flex-none lg:pr-12"
            >
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
