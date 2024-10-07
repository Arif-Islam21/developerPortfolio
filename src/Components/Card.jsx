const Card = () => {
  return (
    <div className="card my-4 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title">Shoes!</h2>
      </div>
    </div>
  );
};

export default Card;
