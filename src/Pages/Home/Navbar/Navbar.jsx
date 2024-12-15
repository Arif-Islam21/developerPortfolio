import img from "/portfolio.png";
import img2 from "/portfolio2.jpeg";

const Navbar = () => {
  const links = (
    <>
      <button className="btn btn-sm btn-outline border-text-Color text-text-Color mt-2 md:mt-0 md:mr-2">
        <a href="#about" className="font-merriWeather">
          About
        </a>
      </button>
      <button className="btn btn-sm btn-outline border-text-Color text-text-Color mt-2 md:mt-0 md:mr-2">
        <a href="#skills" className="font-merriWeather">
          Skills
        </a>
      </button>
      <button className="btn btn-sm btn-outline border-text-Color text-text-Color mt-2 md:mt-0 md:mr-2">
        <a href="#portfolio" className="font-merriWeather">
          Portfolio
        </a>
      </button>
      <button className="btn btn-sm btn-outline border-text-Color text-text-Color mt-2 md:mt-0 md:mr-2">
        <a href="#experience" className="font-merriWeather">
          Experience
        </a>
      </button>
    </>
  );

  return (
    // responsive navbr
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn hidden md:flex btn-ghost text-xl">
          {/* <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src={img2} />
            </div>
          </div> */}
          <h2 className="text-2xl font-semibold text-[#8F9094]">
            &#123; <span className="text-white">A</span> &#125;
          </h2>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-sm btn-outline border-text-Color text-text-Color">
          <a href="#contact" className="font-merriWeather">
            Contact
          </a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
