import Marquee from "react-fast-marquee";

const SkillMarquee = () => {
  return (
    <div className="min-h-[6vh] overflow-hidden lg:my-16">
      <div className="bg-white/5 hidden md:flex md:rotate-6 text-black/25">
        <Marquee className=" lg:text-6xl font-bold lg:py-8 z-10">
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      <div className="md:-rotate-6 bg-black/80 text-white">
        <Marquee className=" lg:text-6xl font-bold  lg:py-8 -z-10">
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </div>
  );
};

export default SkillMarquee;
