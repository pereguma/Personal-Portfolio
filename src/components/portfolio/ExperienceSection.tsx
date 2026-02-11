import { Briefcase, MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { experience } from "@/data/portfolio-data";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding section-alt">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 gold-underline pb-3">
            Work Experience
          </h2>
        </AnimatedSection>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border md:left-[19px]" />

          <div className="space-y-10">
            {experience.map((item, i) => (
              <AnimatedSection key={`${item.role}-${item.period}`} delay={0.1 * i}>
                <div className="flex gap-5">
                  {/* Timeline dot */}
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center z-10 relative bg-card">
                      <Briefcase size={16} className="text-accent" />
                    </div>
                  </div>

                  <div className="flex-1 pb-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <h3 className="font-display text-lg font-semibold text-foreground">{item.role}</h3>
                      <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">{item.duration}</span>
                    </div>
                    <p className="text-sm font-medium text-accent">{item.company}</p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <MapPin size={12} className="text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{item.location}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.period}</p>

                    {item.description && (
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.description}</p>
                    )}

                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium"
                        >
                          {h}
                        </span>
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
