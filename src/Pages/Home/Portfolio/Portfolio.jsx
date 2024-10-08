import port1 from "../../../../src/assets/images/screencapture-hostelhub-75eaf-web-app-2024-10-06-19_07_55.png";
import port2 from "../../../../src/assets/images/port2.png";
import port3 from "../../../../src/assets/images/port3.png";
import port4 from "../../../../src/assets/images/port4.png";
import SectionTitle from "../../../Components/SectionTitle";

const Portfolio = () => {
  return (
    <div className="my-8 bg-base-100 py-6">
      <SectionTitle main={"Portfolio"} sub={"Some of my works"} />
      <div className="lg:mx-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="relative h-72 overflow-hidden rounded-sm">
          <img
            src={port1}
            alt=""
            className="absolute top-0 left-0 h-auto w-full transition-all duration-[4500ms] ease-in-out hover:transform hover:translate-y-[-71%]"
          />
        </div>
        <div className="relative h-72 overflow-hidden rounded-sm">
          <img
            src={port2}
            alt=""
            className="absolute top-0 left-0 h-auto w-full transition-all duration-[4500ms] ease-in-out hover:transform hover:translate-y-[-71%]"
          />
        </div>
        <div className="relative h-72 overflow-hidden rounded-sm">
          <img
            src={port3}
            alt=""
            className="absolute top-0 left-0 h-auto w-full transition-all duration-[4500ms] ease-in-out hover:transform hover:translate-y-[-71%]"
          />
        </div>
        <div className="relative h-72 overflow-hidden rounded-sm">
          <img
            src={port4}
            alt=""
            className="absolute top-0 left-0 h-auto w-full transition-all duration-[4500ms] ease-in-out hover:transform hover:translate-y-[-71%]"
          />
        </div>
      </div>
      <div className="flex justify-center my-4">
        <button className="btn btn-outline border-text-Color font-bold text-text-Color hover:bg-text-Color">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
