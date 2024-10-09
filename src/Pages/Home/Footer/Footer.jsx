import { FaArrowAltCircleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer relative footer-center bg-base-100 text-base-content p-4">
      <aside className="">
        <h2 className="text-3xl font-merriWeather text-text-Color font-bold">
          Thanks For Scrolling
        </h2>
        <a
          className="lg:absolute gap-2 items-center text-white py-2 flex right-0"
          href="#"
        >
          <FaArrowAltCircleUp size={24} />
          Back To Top
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
