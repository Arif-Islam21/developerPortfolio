import port1 from "../../../../src/assets/images/screencapture-hostelhub-75eaf-web-app-2024-10-06-19_07_55.png";
import port2 from "../../../../src/assets/images/port2.png";
import port3 from "../../../../src/assets/images/port3.png";
import port4 from "../../../../src/assets/images/port4.png";
import port5 from "../../../assets/images/assignment1.png";
import port6 from "../../../assets/images/assignment2.png";
import port7 from "../../../assets/images/assignment3.png";
import port8 from "../../../assets/images/assignment5.png";
import port9 from "../../../assets/images/assignment6.png";
import port10 from "../../../assets/images/assignment7.png";
import port11 from "../../../assets/images/assignment9.png";
import port12 from "../../../assets/images/11ManageMeal.png";
import port13 from "../../../assets/images/Cool-Wave.png";
import port14 from "../../../assets/images/Cool-Wave-products.png";
import SectionTitle from "../../../Components/SectionTitle";
import PortfolioCard from "../../../Components/PortfolioCard";
import { useState } from "react";

const Portfolio = () => {
  const [showItem, setShowItem] = useState(6);

  const portfolioData = [
    {
      image: port1,
      websiteName: "Hostel Hub",
      description:
        "Hostel Hub is a modern web application designed to streamline hostel management for universities. It offers features like online room booking, payment tracking, and role-based access for admins and students. Built with the MERN stack, Hostel Hub simplifies operations, enhances efficiency, and provides a seamless experience for users.",
      liveSite: "https://hostelhub-75eaf.web.app",
      github: "https://github.com/Arif-Islam21/hostel-Hub",
      technologys: [
        "React",
        "javascript",
        "node",
        "mongoDB",
        "express.js",
        "firebase",
        "tailwind",
        "Tan stack query",
      ],
    },
  ];

  const port = [
    port1,
    port13,
    port3,
    port4,
    port5,
    port6,
    port7,
    port8,
    port9,
    port10,
    port11,
    port12,
    port2,
    port14,
  ];

  return (
    <div className="my-8 bg-base-100 py-8 " id="portfolio">
      <SectionTitle main={"Portfolio"} sub={"Some of my works"} />
      <div className="lg:mx-16 grid transition-opacity ease-out delay-700 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* {port.slice(0, showItem).map((item, idx) => {
          return <PortfolioCard key={idx} img={`${item}`} />;
        })} */}
        {portfolioData?.map((item, idx) => {
          return <PortfolioCard key={idx} item={item} />;
        })}
      </div>
      <div className="flex justify-center my-6">
        {showItem === 6 ? (
          <button
            onClick={() => setShowItem(port.length)}
            className="btn btn-outline border-text-Color font-bold text-text-Color hover:bg-text-Color"
          >
            Show More
          </button>
        ) : (
          <button
            onClick={() => setShowItem(6)}
            className="btn btn-outline border-text-Color font-bold text-text-Color hover:bg-text-Color"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
