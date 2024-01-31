import { FaInstagram } from "react-icons/fa";
const AboutMe = () => {
  return (
    <section id="about_me" className=" border-y border-y-shadow">
      <div className="container flex text-center lg:text-start flex-col gap-8 lg:flex-row py-12">
        <div className="lg:w-1/2 ">
          <h4 className=" text-primary">ABOUT ME</h4>
          <h2 className="text-4xl mb-8 mt-6 font-semibold ">
            Designing with
            <br />
            passion for Problem <br />
            Solving
          </h2>
          <a href="" className="btn flex items-center gap-4 w-fit">
            Follow me instagram <FaInstagram />
          </a>
        </div>
        <div className="lg:w-1/2">
          <p>
            I&apos;ve always been passionate about pixels and design projects
            and haven&apos;t stopped working and learning about new technologies
            . Other than sitting in from of my display I enjoy myself in casual
            sports, such as bowling or playing football with friends.
          </p>
          <p className="my-5">
            I&apos;m grateful that my job allows me to work from anywhere.
            I&apos;m active on Instagram where I share most of the and all info
            about my upcoming projects.
          </p>
          <p>I also like sharing my experiences on instagram</p>
        </div>{" "}
      </div>
    </section>
  );
};

export default AboutMe;
