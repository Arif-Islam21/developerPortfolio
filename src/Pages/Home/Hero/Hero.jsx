import img from "/portfolioImage.jpeg";
import background from "/bgimage.png";
import { useState } from "react";
import AnimateCursor from "../../../Components/AnimateCursor";
import resume from "/MERN-developer-resume-of-ariful-islam.pdf (1).pdf";

const Hero = () => {
  return (
    <div className="flex justify-around gap-24 bg-[#34353A] py-12 min-h-[70vh] flex-col-reverse lg:flex-row">
      <div className="flex justify-center items-center ">
        <div data-aos="fade-down" data-aos-duration="2000" className="max-w-sm">
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
              href={resume}
              download={true}
            >
              <button>Download Resume </button>
            </a>

            <dialog id="my_modal_1" className="modal">
              <div className="modal-box bg-base-100 min-h-[90vh] max-h-[90vh] w-full max-w-[90vw]">
                <embed
                  src={resume}
                  className="h-full min-h-[80vh] min-w-[70vw] w-full"
                />
                {/* <iframe
                  src={resume}
                  style={{ width: "100%", height: "100%" }}
                ></iframe> */}
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
      </div>

      <img
        src={img}
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
        }}
        className={`object-cover animate-border-radius-move border-[#32CC91] shadow-2xl shadow-[#78dfd7] lg:w-[40vw] max-h-[70vh] border-4 rounded-lg bg-white`}
      />
    </div>
  );
};

export default Hero;
