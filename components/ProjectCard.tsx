import { IProject } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

interface IProjectCardProps {
  project: IProject;
  isShown: boolean;
}
const ProjectCard = ({ project, isShown }: IProjectCardProps) => {
  return (
    <Link
      href={project?.id ? `/projects/${project.id}` : "/"}
      data-aos="fade-up"
      data-aos-duration="800"
      className="w-full block cursor-pointer group  relative bg-shadow aspect-[1.4/1] rounded-xl overflow-hidden"
    >
      {isShown && (
        <>
          <Image alt={project.title} fill src={project.image[0]} />
          <div className="caseOverLay">
            <h2 className="text-xl mb-20 px-4 ml-12 border-l-2 border-l-primary">
              {project.title}
            </h2>
          </div>
        </>
      )}
    </Link>
  );
};

export default ProjectCard;
