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
    {
      image: port13,
      websiteName: "Cool Wave",
      description:
        "Cool Wave is a sleek and dynamic platform that brings modern solutions to life with a refreshing touch of innovation. Whether it's a web application or a unique digital experience, Cool Wave is designed to deliver efficiency, style, and functionality. Built with cutting-edge technologies, it ensures seamless performance and a user-friendly interface, making it a wave of coolness in the tech world.",
      liveSite: "https://cool-wave-11900.web.app/",
      github: "https://github.com/Arif-Islam21/coolWave",
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
    {
      image: port3,
      websiteName: "Bistro boss",
      description:
        "Bistro Boss is a modern and stylish website designed for food enthusiasts and restaurant owners. It provides an engaging platform to explore delicious cuisines, manage menu items, and offer seamless online ordering. With a user-friendly interface and responsive design, Bistro Boss delivers a top-notch experience, making dining and management easier and more enjoyable. Built using the latest technologies, it ensures smooth functionality and a visually appealing experience for users.",
      liveSite: "https://bistro-boss-224ea.web.app/",
      github: "https://github.com/Arif-Islam21/bistro-boss-client",
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
    {
      image: port4,
      websiteName: "Woodify",
      description:
        "Woodify is a creative and sustainable platform dedicated to all things wood. Whether you're a woodworking enthusiast, artisan, or someone looking for high-quality wood products, Woodify offers a wide range of wooden items, from furniture to decor. The website features expert craftsmanship, sustainable sourcing, and a seamless shopping experience, bringing the beauty and versatility of wood into your home or business. With a focus on quality and craftsmanship, Woodify is your go-to destination for unique, handmade wooden pieces.",
      liveSite: "https://woodify-b7999.web.app/",
      github: "https://github.com/Arif-Islam21/woodify",
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
    {
      image: port5,
      websiteName: "New year",
      description:
        "This is a simple webpage designed with html and css. It have Navbar, header , banner, body footer and so on.",

      github: "https://github.com/Arif-Islam21/New-year-new-mission",
      technologys: ["html", "css", "javascript", "tailwind"],
    },
    {
      image: port6,
      websiteName: "Wrold Explorer",
      description:
        "World Explorer is a visually captivating static website designed to take users on a virtual journey across the globe. Built using HTML and CSS, it showcases stunning imagery and informative content about various countries, cultures, landmarks, and travel destinations. The website offers an immersive, easy-to-navigate experience, allowing users to explore diverse places through intuitive layouts and engaging design. Perfect for travel enthusiasts, World Explorer is your digital gateway to discovering the wonders of the world, all within a beautifully crafted and responsive interface.",
      github: "https://github.com/Arif-Islam21/world-explorer",
      technologys: ["html", "css", "javascript", "tailwind", "daisyUI"],
    },
    // hockeys
    // {
    //   image: port7,
    //   websiteName: "Wrold Explorer",
    //   description:
    //     "World Explorer is a visually captivating static website designed to take users on a virtual journey across the globe. Built using HTML and CSS, it showcases stunning imagery and informative content about various countries, cultures, landmarks, and travel destinations. The website offers an immersive, easy-to-navigate experience, allowing users to explore diverse places through intuitive layouts and engaging design. Perfect for travel enthusiasts, World Explorer is your digital gateway to discovering the wonders of the world, all within a beautifully crafted and responsive interface.",
    //   github: "https://github.com/Arif-Islam21/world-explorer",
    //   technologys: ["html", "css", "javascript", "tailwind", "daisyUI"],
    // },
    // {
    //   image: port8,
    //   websiteName: "Wrold Explorer",
    //   description:
    //     "World Explorer is a visually captivating static website designed to take users on a virtual journey across the globe. Built using HTML and CSS, it showcases stunning imagery and informative content about various countries, cultures, landmarks, and travel destinations. The website offers an immersive, easy-to-navigate experience, allowing users to explore diverse places through intuitive layouts and engaging design. Perfect for travel enthusiasts, World Explorer is your digital gateway to discovering the wonders of the world, all within a beautifully crafted and responsive interface.",
    //   github: "https://github.com/Arif-Islam21/world-explorer",
    //   technologys: ["html", "css", "javascript", "tailwind", "daisyUI"],
    // },
    // {
    //   image: port9,
    //   websiteName: "Wrold Explorer",
    //   description:
    //     "World Explorer is a visually captivating static website designed to take users on a virtual journey across the globe. Built using HTML and CSS, it showcases stunning imagery and informative content about various countries, cultures, landmarks, and travel destinations. The website offers an immersive, easy-to-navigate experience, allowing users to explore diverse places through intuitive layouts and engaging design. Perfect for travel enthusiasts, World Explorer is your digital gateway to discovering the wonders of the world, all within a beautifully crafted and responsive interface.",
    //   github: "https://github.com/Arif-Islam21/world-explorer",
    //   technologys: ["html", "css", "javascript", "tailwind", "daisyUI"],
    // },
    // {
    //   image: port10,
    //   websiteName: "Wrold Explorer",
    //   description:
    //     "World Explorer is a visually captivating static website designed to take users on a virtual journey across the globe. Built using HTML and CSS, it showcases stunning imagery and informative content about various countries, cultures, landmarks, and travel destinations. The website offers an immersive, easy-to-navigate experience, allowing users to explore diverse places through intuitive layouts and engaging design. Perfect for travel enthusiasts, World Explorer is your digital gateway to discovering the wonders of the world, all within a beautifully crafted and responsive interface.",
    //   github: "https://github.com/Arif-Islam21/world-explorer",
    //   technologys: ["html", "css", "javascript", "tailwind", "daisyUI"],
    // },
    // {
    //   image: port11,
    //   websiteName: "Wrold Explorer",
    //   description:
    //     "World Explorer is a visually captivating static website designed to take users on a virtual journey across the globe. Built using HTML and CSS, it showcases stunning imagery and informative content about various countries, cultures, landmarks, and travel destinations. The website offers an immersive, easy-to-navigate experience, allowing users to explore diverse places through intuitive layouts and engaging design. Perfect for travel enthusiasts, World Explorer is your digital gateway to discovering the wonders of the world, all within a beautifully crafted and responsive interface.",
    //   github: "https://github.com/Arif-Islam21/world-explorer",
    //   technologys: ["html", "css", "javascript", "tailwind", "daisyUI"],
    // },
    // {
    //   image: port12,
    //   websiteName: "Wrold Explorer",
    //   description:
    //     "World Explorer is a visually captivating static website designed to take users on a virtual journey across the globe. Built using HTML and CSS, it showcases stunning imagery and informative content about various countries, cultures, landmarks, and travel destinations. The website offers an immersive, easy-to-navigate experience, allowing users to explore diverse places through intuitive layouts and engaging design. Perfect for travel enthusiasts, World Explorer is your digital gateway to discovering the wonders of the world, all within a beautifully crafted and responsive interface.",
    //   github: "https://github.com/Arif-Islam21/world-explorer",
    //   technologys: ["html", "css", "javascript", "tailwind", "daisyUI"],
    // },
    // {
    //   image: port2,
    //   websiteName: "Wrold Explorer",
    //   description:
    //     "World Explorer is a visually captivating static website designed to take users on a virtual journey across the globe. Built using HTML and CSS, it showcases stunning imagery and informative content about various countries, cultures, landmarks, and travel destinations. The website offers an immersive, easy-to-navigate experience, allowing users to explore diverse places through intuitive layouts and engaging design. Perfect for travel enthusiasts, World Explorer is your digital gateway to discovering the wonders of the world, all within a beautifully crafted and responsive interface.",
    //   github: "https://github.com/Arif-Islam21/world-explorer",
    //   technologys: ["html", "css", "javascript", "tailwind", "daisyUI"],
    // },
  ];

  return (
    <div className="my-8 bg-base-100 py-8 " id="portfolio">
      <SectionTitle main={"Portfolio"} sub={"Some of my works"} />
      <div className="lg:mx-16 grid transition-opacity ease-out delay-700 grid-cols-1 md:grid-cols-2 gap-8">
        {/* {port.slice(0, showItem).map((item, idx) => {
          return <PortfolioCard key={idx} img={`${item}`} />;
        })} */}
        {portfolioData.slice(0, showItem).map((item, idx) => {
          return <PortfolioCard key={idx} item={item} />;
        })}
      </div>
      <div className="flex justify-center my-6">
        {showItem === 6 ? (
          <button
            onClick={() => setShowItem(portfolioData.length)}
            className={`btn ${
              portfolioData.length <= 6 && "hidden"
            } btn-outline border-text-Color font-bold text-text-Color hover:bg-text-Color`}
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
