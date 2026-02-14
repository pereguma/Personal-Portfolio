import { GraduationCap, BookOpen } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useTranslations } from "@/i18n/useTranslations";

const EducationSection = () => {
  const t = useTranslations();

  return (
    <section id="education" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 gold-underline pb-3">
            {t.education.heading}
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {t.education.academic.map((item, i) => (
            <AnimatedSection key={item.degree} delay={0.1 * i}>
              <div className="bg-card rounded-xl border border-border p-5 h-full flex gap-4">
                <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                  <GraduationCap size={18} className="text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-sm font-semibold text-foreground leading-snug">{item.degree}</h3>
                  <p className="text-xs text-accent font-medium mt-1">{item.institution}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.year}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-14">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <BookOpen size={20} className="text-accent" />
              {t.education.complementaryHeading}
            </h3>
            <div className="flex flex-wrap gap-3">
              {t.education.complementary.map((item) => (
                <span
                  key={item.name}
                  className="text-sm font-medium px-4 py-2 rounded-lg bg-card border border-border text-foreground"
                >
                  {item.name} ({item.year})
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default EducationSection;
