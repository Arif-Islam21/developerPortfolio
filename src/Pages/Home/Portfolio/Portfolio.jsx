import port1 from "../../../../src/assets/images/port1.png";

const Portfolio = () => {
  return (
    <div className="my-8">
      <div>
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-text-Color my-6">
          Portfolio
        </h2>
      </div>
      <div>
        <div className="relative w-80 h-64 overflow-hidden">
          <img src={port1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
