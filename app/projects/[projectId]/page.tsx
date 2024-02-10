import Slider from "@/components/Sliders/Slider";
import { projects } from "@/data/data";
import { getUrlFromPath } from "@/utils";
import { Metadata } from "next";
import Image from "next/image";

interface IProjectPageProps {
  params: {
    projectId: string;
  };
}
export async function generateMetadata({
  params,
}: IProjectPageProps): Promise<Metadata> {
  const { projectId } = params;
  const project = projects.find((project) => project.id === projectId);
  if (!project)
    return { title: "Project not found", description: "Project not found" };
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      images: [
        {
          url: getUrlFromPath(project.image[0]),
          alt: project.title,
        },
      ],
    },
  };
}
export async function generateStaticParams() {
  const paths = projects.map(({ id }) => id);
  return paths;
}
const ProjectPage = ({ params }: IProjectPageProps) => {
  const { projectId } = params;
  const project = projects.find((project) => project.id === projectId);
  return (
    <section className="min-h-[90vh] py-12 overflow-hidden">
      {project ? (
        <>
          <Slider
            slidesCount={project.image.length}
            withArrow={true}
            withDots={true}
          >
            {project.image.map((item, idx) => (
              <div key={idx} className="w-screen  shrink-0">
                <div className="container aspect-[1.4/1] relative rounded-xl overflow-hidden">
                  <Image
                    alt="productImage"
                    className="transition-all pointer-events-auto group-hover:scale-110 group-hover:rotate-3"
                    fill
                    src={item}
                  />
                </div>
              </div>
            ))}
          </Slider>
          <div className="container">
            <h2 className="text-4xl mt-8 lg:text-5xl font-semibold">
              {project.title}
              <span className="text-primary text-2xl lg:text-3xl px-2">+</span>
            </h2>
            <p className="text-lg mt-10">{project.description}</p>
            {project.link && project.linkLabel && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 mt-4 mx-auto font-semibold block w-fit border-b-primary border-b  hover:bg-fadePrimary transition-all"
              >
                {project.linkLabel}
              </a>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
    </section>
  );
};

export default ProjectPage;
