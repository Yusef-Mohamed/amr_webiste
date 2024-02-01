import AboutMe from "@/components/Sections/AboutMe";
import Career from "@/components/Sections/Career";
import CaseStudies from "@/components/Sections/CaseStudies";
import CompanyMainSlider from "@/components/Sections/CompanyMainSlider";
import ContactForm from "@/components/Sections/ContactForm";
import LetsWorkTogether from "@/components/Sections/LetsWorkTogether";
import Process from "@/components/Sections/Process";
import SkillSet from "@/components/Sections/SkillSet";
import dynamic from "next/dynamic";

const ProjectsSlider = dynamic(
  () => import("@/components/Sliders/ProjectsSlider"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <>
      <CompanyMainSlider />
      <SkillSet />
      <Process />
      <ProjectsSlider />
      <Career />
      <AboutMe />
      <CaseStudies />
      <LetsWorkTogether />
      <ContactForm />
    </>
  );
}
