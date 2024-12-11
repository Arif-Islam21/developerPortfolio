const Card = ({ text, icons }) => {
  return (
    <div className="" data-aos="zoom-in" data-aos-duration="1500">
      <div className="card my-4 bg-base-100 hover:bg-text-Color hover:text-black hover:scale-110 transition hover:shadow-xl duration-1000 shadow-xl">
        <figure className="min-w-64 ">
          <div className="min-w-60 pt-6  flex justify-center">{icons}</div>
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title font-merriWeather">{text}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
