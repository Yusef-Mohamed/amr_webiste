import { careerPath } from "@/data/data";
import { RiFileUserLine } from "react-icons/ri";

const Career = () => {
  return (
    <section id="career" className="container py-12">
      <div className="flex justify-between flex-col  my-8 sm:flex-row items-center">
        <h2 className="text-4xl lg:text-5xl font-semibold">
          Career{" "}
          <span className="text-primary text-2xl lg:text-3xl px-2">+</span>
        </h2>
        <a href="" className="btn flex items-center gap-16 ">
          Get Cv <RiFileUserLine />
        </a>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {careerPath.map((item, idx) => (
          <div key={idx} className="relative pb-8 px-4">
            <div className="absolute w-full h-2 border-l border-l-primary right-0 top-2" />
            <h4 className="text-2xl">{item.company}</h4>
            <h3 className="mb-2">{item.position}</h3>
            <span className="text-fade text-sm">{item.date}</span>
          </div>
        ))}
      </div>{" "}
    </section>
  );
};

export default Career;
