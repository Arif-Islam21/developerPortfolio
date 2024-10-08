import { FaGitAlt, FaGithubSquare, FaNodeJs, FaReact } from "react-icons/fa";
import Card from "../../../Components/Card";
import { RiFirebaseLine, RiJavascriptFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa6";
import {
  SiCss3,
  SiExpress,
  SiMongodb,
  SiReactquery,
  SiReactrouter,
} from "react-icons/si";
import SectionTitle from "../../../Components/SectionTitle";

const MySkills = () => {
  return (
    <div id="skills" className="my-6">
      <div>
        <SectionTitle main={"My skills"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4 lg:px-16">
        <Card text={"HTML"} icons={<FaHtml5 size={72} color="#DD4B25" />} />
        <Card text={"CSS"} icons={<SiCss3 size={72} color="#0577AA" />} />
        <Card
          text={"JavaScript"}
          icons={<RiJavascriptFill size={72} color="#FFFF00" />}
        />
        <Card text={"React js"} icons={<FaReact size={72} color="#00FFFF" />} />
        <Card text={"Node js"} icons={<FaNodeJs size={72} color="#00FFFF" />} />
        <Card
          text={"Express js"}
          icons={<SiExpress size={72} color="#F7F7F7" />}
        />
        <Card
          text={"MongoDB"}
          icons={<SiMongodb size={72} color="#419432" />}
        />
        <Card
          text={"Firebase"}
          icons={<RiFirebaseLine size={72} color="#EE7B16" />}
        />
        <Card text={"Git"} icons={<FaGitAlt size={72} color="#D74935" />} />
        <Card
          text={"Github"}
          icons={<FaGithubSquare size={72} color="#000000" />}
        />
        <div className="">
          <Card
            text={"React Router Dom"}
            icons={<SiReactrouter size={72} color="#EC404F" />}
          />
        </div>
        <Card
          text={"Tan Stack Query"}
          icons={<SiReactquery size={72} color="#EC404F" />}
        />
      </div>
    </div>
  );
};

export default MySkills;
