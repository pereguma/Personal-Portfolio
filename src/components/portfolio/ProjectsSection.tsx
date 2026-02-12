import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, AlertTriangle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { projects } from "@/data/portfolio-data";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectStandardization from "@/assets/project-standardization.jpg";
import projectTraining from "@/assets/project-training.jpg";

const projectImages: Record<string, string> = {
  "project-ecommerce": projectEcommerce,
  "project-standardization": projectStandardization,
  "project-training": projectTraining,
};

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimatedSection delay={0.15 * index}>
      <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
        <div className="md:flex">
          <div className="md:w-2/5 h-48 md:h-auto relative overflow-hidden">
            <img
              src={projectImages[project.image]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/20" />
          </div>
          <div className="md:w-3/5 p-6 md:p-8">
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
              {project.title}
            </h3>
            <p className="text-sm text-accent font-medium mt-1">{project.subtitle}</p>

            <p className="text-muted-foreground mt-4 text-sm leading-relaxed text-justify">{project.description}</p>

            {project.isPrototype && (
              <div className="mt-3 flex items-center gap-2 text-xs text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 px-3 py-2 rounded-lg border border-amber-200 dark:border-amber-800">
                <AlertTriangle size={14} />
                <span>Actualmente es un prototipo. No se puede jugar ni realizar compras online.</span>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mt-4">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:brightness-110 transition-all"
              >
                {expanded ? "Ver menos" : "Ver detalles"}
                <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown size={16} />
                </motion.span>
              </button>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:brightness-110 transition-all"
                >
                  Visitar proyecto
                  <ExternalLink size={14} />
                </a>
              )}
            </div>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 pt-4 border-t border-border text-muted-foreground text-sm leading-relaxed text-justify">
                    {project.details}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 gold-underline pb-3">
            Proyectos Seleccionados
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
