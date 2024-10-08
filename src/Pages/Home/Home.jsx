import About from "./About/About";
import Hero from "./Hero/Hero";
import MySkills from "./MySkills/MySkills";
import Portfolio from "./Portfolio/Portfolio";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <MySkills />
      <Portfolio />
    </div>
  );
};

export default Home;
