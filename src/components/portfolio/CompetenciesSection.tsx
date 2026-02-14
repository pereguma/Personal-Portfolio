import { motion } from "framer-motion";
import { Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useTranslations } from "@/i18n/useTranslations";

const CompetenciesSection = () => {
  const t = useTranslations();

  return (
    <section id="competencies" className="section-padding section-alt">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 gold-underline pb-3">
            {t.competencies.heading}
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid md:grid-cols-3 gap-6 lg:gap-8">
          {t.competencies.categories.map((category, ci) => (
            <AnimatedSection key={category.title} delay={0.15 * ci}>
              <div className="bg-card rounded-xl p-6 lg:p-8 shadow-sm border border-border h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-sm font-bold gold-text">{String(ci + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground leading-tight">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill, si) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.05 * si + 0.15 * ci }}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <Check size={14} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetenciesSection;
