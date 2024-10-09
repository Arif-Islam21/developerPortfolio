import { Typewriter } from "react-simple-typewriter";

const SectionTitle = ({ main, sub }) => {
  return (
    <div>
      <h2 className="text-3xl uppercase lg:text-5xl font-bold text-center text-text-Color mt-6">
        {main}
      </h2>
      {sub && (
        <p className="text-center mb-6 font-merriWeather">
          <Typewriter words={[`${sub}`]} cursor cursorStyle={"_"} loop />
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
