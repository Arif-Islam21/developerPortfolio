import img from "/portfolio.png";

const Hero = () => {
  return (
    <div className=" bg-primary min-h-[80vh]">
      <div className="hero-content gap-24 flex-col-reverse lg:flex-row">
        <div className="max-w-sm ">
          <h1 className="text-3xl font-bold">
            I'm___
            <span className="text-5xl font-merriWeather text-text-Color">
              Ariful Islam
            </span>
          </h1>
          <p className="py-6">
            <span className="text-2xl font-merriWeather text-text-Color">
              MERN
            </span>{" "}
            stack developer &{" "}
            <span className="text-2xl font-merriWeather text-text-Color">
              Front-End
            </span>{" "}
            expert
          </p>
          <div className="justify-end flex">
            <button className="btn btn-outline border-text-Color font-bold text-text-Color hover:bg-text-Color">
              Get Started
            </button>
          </div>
        </div>
        <img src={img} className=" rounded-lg" />
      </div>
    </div>
  );
};

export default Hero;
