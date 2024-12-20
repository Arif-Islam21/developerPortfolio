import { BiLogoGmail } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaGithub, FaPhoneAlt } from "react-icons/fa";
import {
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div id="contact" className="py-8 bg-base-100">
      <div className="flex w-full items-center">
        <div className=" bg-text-Color rounded-box grid h-1 flex-grow place-items-center"></div>
        <h2 className="px-6 text-3xl uppercase lg:text-5xl font-bold text-center text-white">
          Contact Me
        </h2>
        <div className=" bg-text-Color rounded-box grid h-1 flex-grow place-items-center"></div>
      </div>
      <div className="flex justify-center items-center">
        <div className="lg:py-12 inline-block ">
          <div className="grid grid-cols-1 gap-6 py-4 md:grid-cols-2">
            <div
              data-aos="zoom-out-up"
              data-aos-duration="1000"
              className="inline-block"
            >
              <div className=" flex items-center py-4 bg-primary rounded-lg px-8 gap-2">
                <span className="text-2xl">
                  <MdEmail />
                </span>{" "}
                <p>arif.sojib2020@gmail.com</p>
              </div>
            </div>
            <div
              data-aos="zoom-out-up"
              data-aos-duration="1200"
              className="inline-block"
            >
              <div className=" flex items-center py-4 bg-primary rounded-lg px-8 gap-2">
                <span className="text-2xl">
                  <FaPhoneAlt />
                </span>{" "}
                <p>+08801833668024</p>
              </div>
            </div>
            <div
              data-aos="zoom-out-up"
              data-aos-duration="1300"
              className="inline-block lg:col-span-2 lg:mx-auto"
            >
              <div className=" flex items-center py-4 bg-primary rounded-lg px-8 gap-2">
                <span className="text-2xl">
                  <FaLocationDot />
                </span>{" "}
                <p>Nilphamari sadar, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center">
        <div className=" bg-text-Color rounded-box grid h-1 flex-grow place-items-center"></div>
        <h2 className="px-6 text-xl uppercase lg:text-3xl font-bold text-center text-white">
          <div className="flex gap-3">
            <a target="_blank" href="https://www.facebook.com/Ariful.arif2020">
              <FaFacebook />
            </a>
            <a target="_blank" href="https://github.com/Arif-Islam21">
              <FaGithub />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ar-arif-903363210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            >
              <FaLinkedin />
            </a>
            <a target="_blank" href="https://wa.me/qr/ELOQYSOXGWN6H1">
              <FaWhatsapp />
            </a>
            <a target="_blank" href="mailto:arif.sojib2020@gmail.com">
              <BiLogoGmail />
            </a>{" "}
            <a target="_blank" href="tel:+8801833668024">
              <FaPhone />
            </a>{" "}
          </div>
        </h2>
        <div className=" bg-text-Color rounded-box grid h-1 flex-grow place-items-center"></div>
      </div>
    </div>
  );
};

export default Contact;
