import { GraduationCap, Award } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { education, certifications } from "@/data/portfolio-data";

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 gold-underline pb-3">
            Education
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {education.map((item, i) => (
            <AnimatedSection key={item.degree} delay={0.1 * i}>
              <div className="bg-card rounded-xl border border-border p-5 h-full flex gap-4">
                <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                  <GraduationCap size={18} className="text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-sm font-semibold text-foreground leading-snug">{item.degree}</h3>
                  <p className="text-xs text-accent font-medium mt-1">{item.institution}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.year}</p>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed line-clamp-3">{item.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Certifications */}
        <AnimatedSection delay={0.3}>
          <div className="mt-14">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Award size={20} className="text-accent" />
              Certifications
            </h3>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="text-sm font-medium px-4 py-2 rounded-lg bg-card border border-border text-foreground"
                >
                  {cert}
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
