import AOS from "aos";
import "aos/dist/aos.css";
import React, { Children, useEffect } from "react";

const ParentComponent = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4 lg:px-16">
      {Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          "data-aos": "fade-up",
        });
      })}
    </div>
  );
};

export default ParentComponent;
