import { caseStudies } from "@/data/data";
import Image from "next/image";

const CaseStudies = () => {
  return (
    <section id="case_studies" className="container py-12">
      <h2 className="text-4xl lg:text-5xl font-semibold">
        Case Studies
        <span className="text-primary text-2xl lg:text-3xl px-2">+</span>
      </h2>
      <div className="grid grid-cols-2 mt-8 gap-4">
        {caseStudies.map((caseStudy, idx) => (
          <div
            key={idx}
            className="aspect-[45/33] group relative rounded-xl overflow-hidden"
          >
            <Image alt={caseStudy.title} src={caseStudy.image} fill />
            <div className="caseOverLay">
              <h2 className="text-xl mb-20 px-4 ml-12 border-l-2 border-l-primary">
                {caseStudy.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
