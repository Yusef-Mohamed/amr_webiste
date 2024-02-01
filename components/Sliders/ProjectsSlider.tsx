"use client";
import { projects } from "@/data/data";
import ProjectCard from "../ProjectCard";
import Link from "next/link";
import Image from "next/image";
import Slider from "./Slider";

const SLIDES_COUNT: number = Math.ceil(projects.length / 3);
const ProjectSlider = () => {
  return (
    <section className="relative overflow-hidden py-16 border-y border-y-shadow">
      <div className="container lg:absolute top-16 left-[50%] lg:translate-x-[-50%]">
        <h2
          className="text-4xl  lg:text-5xl font-semibold z-[105]"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          Recent <br className="hidden lg:block" /> projects
          <span className="text-primary text-2xl lg:text-3xl px-2">+</span>
        </h2>
      </div>

      <div className="hidden lg:block">
        <Slider
          slidesCount={SLIDES_COUNT}
          withArrow={true}
          withDots={true}
          autoScrollInSec={5}
        >
          <RenderSlides />
        </Slider>
      </div>

      <div className="grid pt-16 md:grid-cols-2 container gap-4 lg:hidden">
        {projects.map((project, idx) => (
          <div
            data-aos="fade-up"
            data-aos-duration="750"
            data-aos-delay={`${idx * 100}`}
            key={idx}
            className="bg-shadow group overflow-hidden rounded-xl"
          >
            <Link
              href={project?.id ? `/projects/${project.id}` : "/"}
              className="w-full block cursor-pointer group  relative bg-shadow aspect-[1.4/1] overflow-hidden"
            >
              <Image
                alt={project.title}
                className=" transition-all group-hover:scale-110 group-hover:rotate-3"
                fill
                src={project.image[0]}
              />
            </Link>
            <div className="p-6">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="line-clamp-2 px-0 my-2">{project.description}</p>
              <Link
                href={project?.id ? `/projects/${project.id}` : "/"}
                className="px-4 py-2 mt-4 mx-auto font-semibold block w-fit border-b-primary border-b  hover:bg-fadePrimary transition-all"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const RenderSlides = () => {
  return (
    <>
      {Array.from({ length: SLIDES_COUNT }).map((_, idx) => {
        return (
          <div key={idx} className="w-screen shrink-0">
            <div className="container grid grid-cols-2 items-center gap-4">
              <ProjectCard
                project={projects[idx * 3]}
                isShown={projects.length > idx * 3}
              />
              <div className="space-y-4 ">
                <ProjectCard
                  project={projects[idx * 3 + 1]}
                  isShown={projects.length > idx * 3 + 1}
                />
                <ProjectCard
                  project={projects[idx * 3 + 2]}
                  isShown={projects.length > idx * 3 + 2}
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectSlider;
