import AboutMe from "@/components/Sections/AboutMe";
import Career from "@/components/Sections/Career";
import CaseStudies from "@/components/Sections/CaseStudies";
import ContactForm from "@/components/Sections/ContactForm";
import HeroSection from "@/components/Sections/HeroSection";
import LetsWorkTogether from "@/components/Sections/LetsWorkTogether";
import Process from "@/components/Sections/Process";
import SkillSet from "@/components/Sections/SkillSet";
import ProjectSlider from "@/components/Sliders/ProjectsSlider";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillSet />
      <Process />
      <ProjectSlider />
      <Career />
      <AboutMe />
      <CaseStudies />
      <LetsWorkTogether />
      <ContactForm />
    </>
  );
}
