const About = () => {
  return (
    <div id="about" className="my-8  md:px-12">
      <h2
        data-aos="fade-right"
        data-aos-duration="1000"
        className="text-4xl font-bold text-text-Color"
      >
        About
      </h2>
      <div className="flex mt-2">
        <div className="min-w-16  border-t-4 "></div>
        <div className="flex-grow max-w-3xl mt-2">
          <p data-aos="zoom-in" data-aos-duration="1500" className="text-white">
            Hey! I'm Ariful Islam, and my journey with technology started early,
            <span className="text-[#32CC91]"> sparking a passion </span> that
            has only grown over the{" "}
            <span className="text-[#32CC91]">years</span> .
          </p>
          <br />
          <p data-aos="zoom-in" data-aos-duration="1500" className="text-white">
            I began experimenting with basic tools and projects back in the day,
            and that curiosity led me to{" "}
            <span className="text-[#32CC91]">dive deeper</span> into the world
            of programming. Fast-forward to today, I’ve{" "}
            <span className="text-[#32CC91]">honed my skills</span> across
            various technologies and had the opportunity to work on projects for
            my own. I’m passionate about creating
            <span className="text-[#32CC91]">impactful web applications</span>,
            exploring open-source contributions, and automating repetitive tasks
            with code. Right now, my focus is on mastering Web Development, Open
            Source projects, and sharpening my problem-solving skills through
            Competitive Programming.
          </p>
          <br />
          <p data-aos="zoom-in" data-aos-duration="1500" className="text-white">
            When <span className="text-[#32CC91]">I'm not coding</span>, you can
            find me gaming with friends, catching up on the latest Netflix
            shows, or enjoying the outdoors, whether that’s a walk or a good
            game of <span className="text-[#32CC91]">cricket or Football</span>!
            ⚽🏏
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
