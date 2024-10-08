import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="py-8 bg-base-100 border-2">
      <div className="flex w-full items-center">
        <div className=" bg-text-Color rounded-box grid h-1 flex-grow place-items-center"></div>
        <h2 className="px-6 text-3xl uppercase lg:text-5xl font-bold text-center text-white">
          Contact Me
        </h2>
        <div className=" bg-text-Color rounded-box grid h-1 flex-grow place-items-center"></div>
      </div>
      <div className="lg:py-12 px-auto inline-block border-2">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="inline-block">
            <div className=" flex items-center py-4 bg-primary rounded-lg px-8 gap-2">
              <span className="text-2xl">
                <MdEmail />
              </span>{" "}
              <p>arif.sojib2020@gmail.com</p>
            </div>
          </div>
          <div className="inline-block">
            <div className=" flex items-center py-4 bg-primary rounded-lg px-8 gap-2">
              <span className="text-2xl">
                <MdEmail />
              </span>{" "}
              <p>arif.sojib2020@gmail.com</p>
            </div>
          </div>
          <div className="inline-block">
            <div className=" flex items-center py-4 bg-primary rounded-lg px-8 gap-2">
              <span className="text-2xl">
                <MdEmail />
              </span>{" "}
              <p>arif.sojib2020@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
