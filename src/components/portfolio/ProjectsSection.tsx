import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, AlertTriangle, Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useTranslations } from "@/i18n/useTranslations";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectStandardization from "@/assets/project-standardization.jpg";
import projectTraining from "@/assets/project-training.jpg";

const projectImages: Record<string, string> = {
  "project-ecommerce": projectEcommerce,
  "project-standardization": projectStandardization,
  "project-training": projectTraining,
};

// Data Science project: gradient placeholder
const DataSciencePlaceholder = () => (
  <div className="w-full h-full bg-gradient-to-br from-primary via-primary/70 to-accent/50 flex flex-col items-center justify-center gap-3">
    <div className="flex items-center gap-2">
      <span className="text-primary-foreground/70 font-mono text-xs font-semibold tracking-wider">Python · ML · Stats</span>
    </div>
    <div className="flex items-end gap-1.5">
      {[0.9, 0.6, 0.8, 0.4, 1, 0.7, 0.5, 0.85, 0.3].map((h, i) => (
        <div key={i} className="w-3 rounded-sm bg-primary-foreground/40" style={{ height: `${h * 28}px` }} />
      ))}
    </div>
    <Github size={28} className="text-primary-foreground/50 mt-1" />
  </div>
);

const ProjectCard = ({ project, index, labels }: {
  project: { title: string; subtitle: string; description: string; skills: string[]; image: string; details: string; link?: string; isPrototype: boolean; isGithub?: boolean };
  index: number;
  labels: { viewDetails: string; viewLess: string; visitProject: string; prototypeWarning: string; viewOnGithub: string };
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimatedSection delay={0.15 * index}>
      <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
        <div className="md:flex">
          <div className="md:w-2/5 h-48 md:h-auto relative overflow-hidden">
            {project.image === "project-datascience" ? (
              <DataSciencePlaceholder />
            ) : (
              <>
                <img
                  src={projectImages[project.image]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20" />
              </>
            )}
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
                <span>{labels.prototypeWarning}</span>
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
                {expanded ? labels.viewLess : labels.viewDetails}
                <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown size={16} />
                </motion.span>
              </button>

              {project.link && project.isGithub && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:brightness-110 transition-all"
                >
                  <Github size={15} />
                  {labels.viewOnGithub}
                </a>
              )}

              {project.link && !project.isGithub && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:brightness-110 transition-all"
                >
                  {labels.visitProject}
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
  const t = useTranslations();

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 gold-underline pb-3">
            {t.projects.heading}
          </h2>
        </AnimatedSection>

        <div className="mt-12 space-y-8">
          {t.projects.entries.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              labels={{
                viewDetails: t.projects.viewDetails,
                viewLess: t.projects.viewLess,
                visitProject: t.projects.visitProject,
                viewOnGithub: t.projects.viewOnGithub,
                prototypeWarning: t.projects.prototypeWarning,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
