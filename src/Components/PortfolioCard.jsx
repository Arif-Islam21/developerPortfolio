const PortfolioCard = ({ item }) => {
  const { image, technologys, github, liveSite, description, websiteName } =
    item;
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

    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className=" image-full shadow-xl"
    >
      <div className="relative h-72 overflow-hidden rounded-sm">
        <img
          src={image}
          alt="portfolio cards"
          className="absolute top-0 left-0 h-auto w-full transition-all duration-[4500ms] ease-in-out hover:transform hover:translate-y-[-71%]"
        />
      </div>
      <div className="card-body border-2 border-t-0 rounded-b-md border-text-Color">
        <h2 className="card-title">{websiteName}</h2>
        <p>
          {description.length > 75
            ? description.slice(0, 75) + "..."
            : description}
        </p>
        <div className="flex justify-around">
          <button className="btn btn-sm btn-outline px-6">
            <a href={liveSite} target="_blank">
              Livesite
            </a>
          </button>
          <button className="btn btn-sm btn-outline px-6">
            <a href={github} target="_blank">
              Github
            </a>
          </button>
        </div>
        <div>
          {technologys.map((item, idx) => {
            return (
              <button
                key={idx}
                className="btn btn-sm mr-2 mt-1 btn-outline px-3 border-text-Color text-text-Color"
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
