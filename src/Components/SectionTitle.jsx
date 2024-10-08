const SectionTitle = ({ main, sub }) => {
  return (
    <div>
      <h2 className="text-3xl uppercase lg:text-5xl font-bold text-center text-text-Color mt-6">
        {main}
      </h2>
      <p className="text-center mb-6 font-merriWeather">{sub}</p>
    </div>
  );
};

export default SectionTitle;
