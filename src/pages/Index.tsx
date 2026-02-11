import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import ProfileSection from "@/components/portfolio/ProfileSection";
import CompetenciesSection from "@/components/portfolio/CompetenciesSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProfileSection />
      <CompetenciesSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
};

export default Index;
