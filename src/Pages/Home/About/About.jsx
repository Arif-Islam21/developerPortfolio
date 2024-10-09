const About = () => {
  return (
    <div id="about" className="my-8 md:px-12">
      <h2
        data-aos="fade-right"
        data-aos-duration="1000"
        className="text-4xl font-bold text-text-Color"
      >
        About
      </h2>
      <div className="flex mt-2">
        <div className="min-w-16  border-t-4 "></div>
        <div className="flex-grow">
          <p data-aos="zoom-in" data-aos-duration="1500" className="text-white">
            Hello, I am a MERN stack web developer. I have skill on HTML, CSS ,
            javascript, Tailwind CSS, Bootstrap, React js, Node js, express js
            and MongoDB to make a highly scaleable mern stack web application. I
            use git and github as version control system. I also have knowledge
            and skill on different library and framework like react-router-dom,
            API and so on. I used my knowledge and skill to create some web
            applications like: Hostel Hub, bookHeaven, soloSphere , bistro bos
            and so on. If you want me as your web developer don't hesitate to
            let me know
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
