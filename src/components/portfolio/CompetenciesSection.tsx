import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { competencyCategories } from "@/data/portfolio-data";

const ProgressBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <div className="mb-5">
    <div className="flex justify-between mb-1.5">
      <span className="text-sm font-medium text-foreground">{name}</span>
      <span className="text-sm text-muted-foreground">{level}%</span>
    </div>
    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        className="progress-bar-fill"
      />
    </div>
  </div>
);

const CompetenciesSection = () => {
  return (
    <section id="competencies" className="section-padding section-alt">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 gold-underline pb-3">
            Core Competencies
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid md:grid-cols-3 gap-8 lg:gap-12">
          {competencyCategories.map((category, ci) => (
            <AnimatedSection key={category.title} delay={0.15 * ci}>
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border h-full">
                <h3 className="font-display text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                  {category.title}
                </h3>
                {category.skills.map((skill, si) => (
                  <ProgressBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={0.1 * si + 0.2 * ci}
                  />
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetenciesSection;
