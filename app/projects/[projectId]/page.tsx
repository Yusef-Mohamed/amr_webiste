import { projects } from "@/data/data";
import Image from "next/image";

interface IProjectPageProps {
  params: {
    projectId: string;
  };
}
const ProjectPage = ({ params }: IProjectPageProps) => {
  const { projectId } = params;
  const project = projects.find((project) => project.id === projectId);
  return (
    <section className="min-h-[90vh] py-12 container">
      {project ? (
        <>
          <div className="aspect-[1.4/1] w-full relative mb-10 rounded-xl overflow-hidden group">
            <Image
              alt={project?.title}
              src={project?.image}
              fill
              className="group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 group-hover:animate-pulse"
            />
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold">
            {project?.title}
            <span className="text-primary text-2xl lg:text-3xl px-2">+</span>
          </h2>
          <p className="text-lg mt-10">{project?.description}</p>
        </>
      ) : (
        <></>
      )}
    </section>
  );
};

export default ProjectPage;
