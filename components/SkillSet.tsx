import dynamic from "next/dynamic";
const ScrollBtn = dynamic(() => import("./ScrollBtn"), { ssr: false });

const SkillSet = () => {
  return (
    <section id="skill_set" className=" border-y border-y-shadow">
      <div className="container flex text-center lg:text-start flex-col gap-8 lg:flex-row py-12">
        <div className="lg:w-1/2 ">
          <h4 className=" mb-4 text-primary  font-semibold">MY SKILLSET</h4>
          <h2 className="text-4xl font-semibold ">
            Graphic Design,
            <br /> Interface Design &<br /> User Experience
          </h2>
          <ScrollBtn id="process" value="My Process" />
        </div>
        <div className="lg:w-1/2">
          <p>
            I specialize in building complex web applications, leading front-end
            teams, digital product design and developing visual design systems.
            I enjoy creating effortless user experience and designing delightful
            digital products. The entire process of going from a concept to
            release and gathering user&apos;s feedback on either client&apos;s
            or my own products is what makes me wake up everyday!
          </p>
          <p>
            I worked with numerous clients from all around the world from early
            startups to well-established companies. I always seek new
            opportunities for cooperation on projects around interesting
            dashboards, design systems or landing pages. Let&apos;s create
            something awesome together!
          </p>
        </div>{" "}
      </div>
    </section>
  );
};

export default SkillSet;
