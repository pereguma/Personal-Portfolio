import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { projects } from "@/data/portfolio-data";

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimatedSection delay={0.15 * index}>
      <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                {project.title}
              </h3>
              <p className="text-sm text-accent font-medium mt-1">{project.subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.metrics.map((m) => (
                <div key={m.label} className="text-center px-4 py-2 rounded-lg bg-secondary">
                  <div className="font-display text-lg font-bold gold-text">{m.value}</div>
                  <div className="text-xs text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-muted-foreground mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
              >
                {skill}
              </span>
            ))}
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:brightness-110 transition-all"
          >
            {expanded ? "Show less" : "View details"}
            <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown size={16} />
            </motion.span>
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="mt-4 pt-4 border-t border-border text-muted-foreground text-sm leading-relaxed">
                  {project.details}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </AnimatedSection>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 gold-underline pb-3">
            Selected Projects
          </h2>
        </AnimatedSection>

        <div className="mt-12 space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
