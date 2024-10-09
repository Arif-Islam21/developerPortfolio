import img from "/portfolio.png";
import background from "/bgimage.png";
import resume from "/resume.jpg";

const Hero = () => {
  return (
    <div className="bg-[#34353A]  min-h-[70vh]">
      <div className="hero-content gap-24 flex-col-reverse lg:flex-row">
        <div
          data-aos="fade-down"
          data-aos-duration="2000"
          className="max-w-sm "
        >
          <h1 className="text-3xl font-bold">
            I'm___
            <span className="text-5xl font-merriWeather text-text-Color">
              Ariful Islam
            </span>
          </h1>
          <p className="py-6">
            <span className="text-2xl font-merriWeather text-text-Color">
              MERN
            </span>{" "}
            stack developer &{" "}
            <span className="text-2xl font-merriWeather text-text-Color">
              Front-End
            </span>{" "}
            expert
          </p>
          <div className="justify-center flex-col lg:flex-row gap-3 md:justify-end flex">
            <button
              data-aos="fade-up"
              data-aos-duration="1000"
              onClick={() => document.getElementById("my_modal_1").showModal()}
              className="btn btn-outline border-text-Color font-bold text-text-Color hover:bg-text-Color"
            >
              Preview Resume
            </button>
            <a
              data-aos="fade-up"
              data-aos-duration="1000"
              className="btn btn-outline border-text-Color font-bold text-text-Color hover:bg-text-Color"
              href="/resume.jpg"
              download={true}
            >
              <button>Download Resume </button>
            </a>

            <dialog id="my_modal_1" className="modal">
              <div className="modal-box bg-base-100 max-h-screen">
                <img src={resume} className="rounded-md" alt="" />
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>

        <img
          src={img}
          style={{
            borderRadius: "54% 46% 63% 37% / 50% 31% 69% 50%",
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
          }}
          className={`object-cover animate-border-radius-move border-4 rounded-lg bg-white`}
        />
      </div>
    </div>
  );
};

export default Hero;
