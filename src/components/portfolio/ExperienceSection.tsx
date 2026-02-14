import { Briefcase, MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useTranslations } from "@/i18n/useTranslations";

const ExperienceSection = () => {
  const t = useTranslations();

  return (
    <section id="experience" className="section-padding section-alt">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 gold-underline pb-3">
            {t.experience.heading}
          </h2>
        </AnimatedSection>

        <div className="mt-12 relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border md:left-[19px]" />

          <div className="space-y-10">
            {t.experience.entries.map((item, i) => (
              <AnimatedSection key={`${item.company}-${i}`} delay={0.1 * i}>
                <div className="flex gap-5">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center z-10 relative bg-card">
                      <Briefcase size={16} className="text-accent" />
                    </div>
                  </div>

                  <div className="flex-1 pb-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <h3 className="font-display text-lg font-semibold text-foreground">{item.company}</h3>
                      <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-1">
                      <MapPin size={12} className="text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{item.location}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.period}</p>

                    <div className="mt-5 space-y-6 border-l-2 border-accent/20 ml-1 pl-5">
                      {item.subRoles.map((sub) => (
                        <div key={sub.role}>
                          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                            <h4 className="font-display text-base font-semibold text-foreground">{sub.role}</h4>
                            <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">{sub.period}</span>
                          </div>
                          {sub.highlights.length > 0 && (
                            <ul className="mt-2 space-y-1.5 list-none pl-0">
                              {sub.highlights.map((h) => (
                                <li key={h} className="text-sm text-muted-foreground flex items-start gap-2 text-left">
                                  <span className="text-accent mt-1.5 flex-shrink-0 leading-none">•</span>
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
