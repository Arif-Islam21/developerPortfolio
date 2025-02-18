import { BiLogoGmail } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaGithub, FaPhoneAlt } from "react-icons/fa";
import {
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const socialLinks = [
    {
      href: "https://www.facebook.com/Ariful.arif2020",
      icon: <FaFacebook />,
      color: "text-blue-600 hover:text-blue-800",
    },
    {
      href: "https://github.com/Arif-Islam21",
      icon: <FaGithub />,
      color: "text-white hover:text-white",
    },
    {
      href: "https://www.linkedin.com/in/ar-arif-903363210",
      icon: <FaLinkedin />,
      color: "text-blue-700 hover:text-blue-900",
    },
    {
      href: "https://wa.me/qr/ELOQYSOXGWN6H1",
      icon: <FaWhatsapp />,
      color: "text-green-500 hover:text-green-600",
    },
    {
      href: "mailto:arif.sojib2020@gmail.com",
      icon: <BiLogoGmail />,
      color: "text-red-500 hover:text-red-600",
    },
    {
      href: "tel:+8801833668024",
      icon: <FaPhone />,
      color: "text-green-700 hover:text-green-900",
    },
  ];

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
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                className={link.color}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </h2>
        <div className=" bg-text-Color rounded-box grid h-1 flex-grow place-items-center"></div>
      </div>
    </div>
  );
};

export default Contact;
