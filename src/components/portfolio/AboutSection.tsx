import AnimatedSection from "./AnimatedSection";
import { aboutText } from "@/data/portfolio-data";
import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 gold-underline pb-3">
            {aboutText.heading}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-10 flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <img
                src={profilePhoto}
                alt="Pere Gumà"
                className="w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover border-2 border-border shadow-md"
              />
            </div>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              {aboutText.paragraph}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
