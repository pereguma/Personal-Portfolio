import AnimatedSection from "./AnimatedSection";
import { useTranslations } from "@/i18n/useTranslations";
import runningPhoto from "@/assets/running.jpg";

const AboutSection = () => {
  const t = useTranslations();

  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 gold-underline pb-3">
            {t.about.heading}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-10 flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <img
                src={runningPhoto}
                alt="Pere Gumà corriendo"
                className="w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover border-2 border-border shadow-md"
              />
            </div>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground text-justify">
              {t.about.paragraph}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
