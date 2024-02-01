import { companyImageSlider } from "@/data/data";
import Slider from "../Sliders/Slider";
import Image from "next/image";

const CompanyMainSlider = () => {
  return (
    <section className="relative overflow-hidden py-16">
      <Slider
        slidesCount={companyImageSlider.length}
        withArrow={true}
        withDots={true}
      >
        {companyImageSlider.map((item, idx) => (
          <div key={idx} className="w-screen  shrink-0">
            <div className="container aspect-[1.4/1] relative rounded-xl overflow-hidden">
              <Image
                alt="companyImageSlider"
                className="transition-all pointer-events-auto group-hover:scale-110 group-hover:rotate-3"
                fill
                src={item}
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CompanyMainSlider;
