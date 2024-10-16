import img from "/portfolio.png";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between py-4 items-center bg-base-100">
      <div
        data-aos="fade-zoom-in"
        data-aos-offset="300"
        data-aos-duration="500"
        data-aos-easing="ease-in-back"
        className="ring-lime-200 lg:ml-16  ring-offset-base-100 w-14 rounded-full ring ring-offset-2"
      >
        <img src={img} />
      </div>
      <div
        data-aos="fade-zoom-in"
        data-aos-offset="300"
        data-aos-duration="500"
        data-aos-easing="ease-in-back"
        className="flex-none  lg:pr-12"
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
  );
};

export default Navbar;
