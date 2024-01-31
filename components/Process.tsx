import { processList } from "@/data/data";

const Process = () => {
  return (
    <section id="process" className="container py-16">
      <h2
        className="text-4xl lg:text-5xl font-semibold"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        Process
        <span className="text-primary text-2xl lg:text-3xl px-2">+</span>
      </h2>
      <div className="sm:grid-cols-2 lg:grid-cols-3 grid">
        {processList.map((item, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay={`${100 * index}`}
            data-aos-duration={`${750 + 100 * index}`}
            key={index}
            className="relative p-8"
          >
            <h2 className="font-bold text-7xl lg:text-8xl absolute top-10 lg:top-5 left-0 lg:-left-8 leading-10 text-shadow ">
              0{index + 1}
            </h2>
            <h4 className="text-xl font-semibold my-4 relative">
              {item.title}
            </h4>
            <ul>
              {item.steps.map((item, index) => (
                <li key={index} className="relative text-lg py-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
