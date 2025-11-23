
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="relative">
      

      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
