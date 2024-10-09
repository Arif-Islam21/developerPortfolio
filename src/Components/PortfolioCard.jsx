const PortfolioCard = ({ img }) => {
  return (
    <div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <img
          src={img}
          alt=""
          className="absolute top-0 left-0 h-auto w-full transition-all duration-[4500ms] ease-in-out hover:transform hover:translate-y-[-71%]"
        />
      </div>
    </div>
  );
};

export default PortfolioCard;
