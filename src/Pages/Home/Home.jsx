import About from "./About/About";
import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
import Hero from "./Hero/Hero";
import SkillMarquee from "./Marquee/SkillMarquee";
import MySkills from "./MySkills/MySkills";
import Portfolio from "./Portfolio/Portfolio";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <SkillMarquee />
      <MySkills />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
};

export default Home;
