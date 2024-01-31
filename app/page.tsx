import AboutMe from "@/components/AboutMe";
import Career from "@/components/Career";
import CaseStudies from "@/components/CaseStudies";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import LetsWorkTogether from "@/components/LetsWorkTogether";
import Process from "@/components/Process";
import SkillSet from "@/components/SkillSet";
import dynamic from "next/dynamic";
import Image from "next/image";
const ProjectsSlider = dynamic(() => import("@/components/ProjectsSlider"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <HeroSection />
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
