import { RxHamburgerMenu } from "react-icons/rx";

const Sidebar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <div className="drawer relative drawer-mobile">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div
            className={`flex-none absolute min-w-[calc(100vw-23rem)] py-2  right-0 bg-primary justify-end flex`}
          >
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
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn btn-primary lg:hidden drawer-button"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side lg:relative lg:block lg:w-80 border-2 border-white">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="lg:hidden drawer-overlay"
            ></label>
            <ul className="menu bg-base-100 text-white min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
