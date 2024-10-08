import image from "../../src/assets/images/express.jfif";
import image2 from "../../src/assets/images/bootstrap.png";

const Card = () => {
  return (
    <div className="card my-4 bg-base-100 shadow-xl">
      <figure>
        <img src={image} className="w-full" alt="Shoes" />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title">Shoes!</h2>
      </div>
    </div>
  );
};

export default Card;
