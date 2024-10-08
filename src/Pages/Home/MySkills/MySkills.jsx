import Card from "../../../Components/Card";

const MySkills = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-text-Color my-6">
          My Skills
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 lg:px-16">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default MySkills;
