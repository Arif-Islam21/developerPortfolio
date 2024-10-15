import Marquee from "react-fast-marquee";
import { SlControlForward } from "react-icons/sl";

const SkillMarquee = () => {
  return (
    <div className="min-h-[6vh] overflow-hidden lg:my-16">
      <div className="bg-white/5 hidden md:flex md:rotate-6 text-black/25">
        <Marquee className=" lg:text-6xl font-bold lg:py-8 z-10">
          Node js <SlControlForward className="text-black/25 mx-2" /> React js{" "}
          <SlControlForward className="text-black/25 mx-2" /> MongoDb{" "}
          <SlControlForward className="text-black/25 mx-2" /> Express.js{" "}
          <SlControlForward className="text-black/25 mx-2" /> Firebase{" "}
          <SlControlForward className="text-black/25 mx-2" /> JavaScript{" "}
          <SlControlForward className="text-black/25 mx-2" />
        </Marquee>
      </div>
      <div className="md:-rotate-6 bg-black/80 text-white/75">
        <Marquee className=" lg:text-6xl font-bold  lg:py-8 -z-10">
          Node js <SlControlForward className="text-white/75 mx-2" /> React js{" "}
          <SlControlForward className="text-white/75 mx-2" /> MongoDb{" "}
          <SlControlForward className="text-white/75 mx-2" /> Express.js{" "}
          <SlControlForward className="text-white/75 mx-2" /> Firebase{" "}
          <SlControlForward className="text-white/75 mx-2" /> JavaScript{" "}
          <SlControlForward className="text-white/75 mx-2" />
        </Marquee>
      </div>
    </div>
  );
};

export default SkillMarquee;
