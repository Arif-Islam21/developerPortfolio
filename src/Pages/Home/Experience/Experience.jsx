import SectionTitle from "../../../Components/SectionTitle";

const Experience = () => {
  return (
    <div id="experience" className="lg:px-12">
      <SectionTitle main={"experience"} />
      <div className="flex flex-col md:flex-row justify-around">
        <div className="flex justify-center py-6 gap-4">
          <div className="w-3 border-l-2 h-auto flex justify-center items-start border-yellow-600 "></div>
          <div className="">
            <h2 className="text-3xl mb-1 font-bold text-white">
              MERN Stack web developer
            </h2>
            <h3 className="text-xl flex justify-between text-text-Color font-bold mb-3">
              Self Employed <span>2023 – Present</span>
            </h3>
            <ul className="max-w-96 space-y-1 list-disc text-gray-400">
              <li>
                Developed several full-stack applications using MongoDB,
                Express.js, React.js, and Node.js (MERN stack).
              </li>
              <li>
                Built a university hostel management system using MERN stack,
                implementing role-based authentication and CRUD operations.
              </li>
              <li>
                Integrated Stripe payment gateway for seamless and secure
                transaction processing in a React e-commerce project.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center py-6 gap-4">
          <div className="w-3 border-l-2 h-auto flex justify-center items-start border-yellow-600 "></div>
          <div className="">
            <h2 className="text-3xl mb-1 font-bold text-white">
              Personal Projects
            </h2>
            <h3 className="text-xl flex justify-between text-text-Color font-bold mb-3">
              <span></span> <span>2023 – Present</span>
            </h3>
            <ul className="max-w-96 list-disc space-y-1 text-gray-400">
              <li>
                Created a personal portfolio using React, showcasing web
                development skills and freelance projects. Integrated Tailwind
                CSS and implemented a responsive, modern design.
              </li>
              <li>
                Developed a MERN stack app with MongoDB aggregation pipelines to
                perform complex search queries based on meal prices and
                categories.
              </li>
              <li>
                Built a like functionality for a MongoDB collection
                (upcomingMeal), allowing users to like meals and dynamically
                update the UI.
              </li>
              <li>
                Contributed to various open-source MERN stack projects on
                GitHub, collaborating with other developers and improving my
                skills in version control and project management.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
