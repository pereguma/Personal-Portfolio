import { GraduationCap, BookOpen, Sparkles } from "lucide-react";
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

        {/* Timeline */}
        <div className="mt-12 relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-8">
            {t.education.academic.map((item, i) => (
              <AnimatedSection key={item.degree} delay={0.08 * i}>
                <div className="flex gap-5">
                  <div className="relative flex-shrink-0">
                    <div
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 relative ${
                        item.highlight
                          ? "bg-accent border-accent"
                          : "bg-card border-accent/30 bg-accent/10"
                      }`}
                    >
                      {item.highlight ? (
                        <Sparkles size={16} className="text-accent-foreground" />
                      ) : (
                        <GraduationCap size={16} className="text-accent" />
                      )}
                    </div>
                  </div>

                  <div className={`flex-1 pb-2 rounded-xl border p-5 ${
                    item.highlight
                      ? "bg-accent/5 border-accent/40 shadow-sm"
                      : "bg-card border-border"
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <h3 className={`font-display text-base font-semibold leading-snug ${
                        item.highlight ? "text-foreground" : "text-foreground"
                      }`}>
                        {item.degree}
                        {item.highlight && (
                          <span className="ml-2 inline-block text-[10px] font-bold uppercase tracking-wider text-accent-foreground bg-accent px-1.5 py-0.5 rounded align-middle">
                            AI
                          </span>
                        )}
                      </h3>
                      <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-sm text-accent font-medium mt-1">{item.institution}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Complementary training */}
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
