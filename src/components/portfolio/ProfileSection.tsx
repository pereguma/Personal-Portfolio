import AnimatedSection from "./AnimatedSection";
import { profileText } from "@/data/portfolio-data";

const ProfileSection = () => {
  return (
    <section id="profile" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 gold-underline pb-3">
            {profileText.heading}
          </h2>
        </AnimatedSection>

        <div className="mt-10 space-y-6">
          {profileText.paragraphs.map((paragraph, i) => (
            <AnimatedSection key={i} delay={0.15 * (i + 1)}>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
