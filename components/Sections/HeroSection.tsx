import dynamic from "next/dynamic";
import Image from "next/image";
const ScrollBtn = dynamic(() => import("../ScrollBtn"), { ssr: false });

const HeroSection = () => {
  return (
    <section className="container items-center relative flex flex-col-reverse gap-8 lg:flex-row hero">
      <div className="lg:w-1/2 lg:static absolute top-[50%] translate-y-[-50%] z-10 lg:translate-y-0">
        <div className="relative z-10 w-fit mx-auto lg:mx-0">
          <h1 className="font-semibold lg:translate-y-[-50%] z[1] translate-y-[40%]">
            Product Designer
          </h1>
          <div className="relative z-10">
            <h3
              data-aos="fade-up"
              data-aos-duration="500"
              className="text-2xl translate-y-4 font-semibold text-center lg:text-start"
            >
              Hello, it&apos;s me
            </h3>
            <h2
              data-aos="fade-up"
              data-aos-duration="700"
              className="flex items-center gap-1 text-8xl font-semibold "
            >
              Ojieame
              <span className="block  w-4 h-4 rounded-full bg-mainBg"></span>
            </h2>
          </div>
        </div>
        <p
          data-aos="fade-up"
          data-aos-duration="800"
          className="text-fade px-4 sm:text-lg text-justify relative z-10"
        >
          An enthusiastic product designer currently shaping the future of
          software development by designing smooth user-interfaces that promote
          user interaction with information and data. While traveling around the
          world.
        </p>

        <ScrollBtn id="skill_set" value="Scroll for more" />
      </div>

      <div className="lg:w-1/2 z-[1] relative" data-aos="zoom-in">
        <Image alt="hero" src="/my_photo.jpg" width={500} height={500} />
      </div>
    </section>
  );
};

export default HeroSection;
