import port1 from "../../../../src/assets/images/screencapture-hostelhub-75eaf-web-app-2024-10-06-19_07_55.png";
import port2 from "../../../../src/assets/images/port2.png";
import port3 from "../../../../src/assets/images/port3.png";
import port4 from "../../../../src/assets/images/port4.png";
import SectionTitle from "../../../Components/SectionTitle";
import PortfolioCard from "../../../Components/PortfolioCard";

const Portfolio = () => {
  return (
    <div className="my-8 bg-base-100 py-8" id="portfolio">
      <SectionTitle main={"Portfolio"} sub={"Some of my works"} />
      <div className="lg:mx-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PortfolioCard img={port1} />
        <PortfolioCard img={port2} />
        <PortfolioCard img={port3} />
        <PortfolioCard img={port4} />
      </div>
      <div className="hidden justify-center my-4">
        <button className="btn btn-outline border-text-Color font-bold text-text-Color hover:bg-text-Color">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
