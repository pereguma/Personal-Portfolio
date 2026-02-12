import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ProfileSection from "@/components/portfolio/ProfileSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import CompetenciesSection from "@/components/portfolio/CompetenciesSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProfileSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <CompetenciesSection />
      <ContactSection />
    </main>
  );
};

export default Index;
