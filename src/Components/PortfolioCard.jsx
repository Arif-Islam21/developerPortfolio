const PortfolioCard = ({ img }) => {
  return (
    // <div data-aos="fade-up" data-aos-duration="1000">
    //   <div className="relative h-72 overflow-hidden rounded-sm">
    //     <img
    //       src={img}
    //       alt=""
    //       className="absolute top-0 left-0 h-auto w-full transition-all duration-[4500ms] ease-in-out hover:transform hover:translate-y-[-71%]"
    //     />
    //   </div>
    // </div>

    <div className="card bg-base-100 image-full w-96 shadow-xl">
      <figure>
        <img src={img} alt="portfolio cards" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
