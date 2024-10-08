import image from "../../src/assets/images/express.jfif";
import image2 from "../../src/assets/images/bootstrap.png";
import { FaNodeJs } from "react-icons/fa";

const Card = ({ text, icons }) => {
  return (
    <div className="card my-4 bg-base-100 hover:bg-text-Color hover:text-black hover:scale-110 transition hover:shadow-xl duration-1000 shadow-xl">
      <figure className="min-w-64 ">
        <div className="min-w-60 pt-6  flex justify-center">{icons}</div>
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title font-merriWeather">{text}</h2>
      </div>
    </div>
  );
};

export default Card;
