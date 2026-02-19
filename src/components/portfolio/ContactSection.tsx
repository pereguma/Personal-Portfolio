import { Linkedin, Mail, Download, Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { personalInfo } from "@/data/portfolio-data";
import { useTranslations } from "@/i18n/useTranslations";

const ContactSection = () => {
  const t = useTranslations();

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.contact.heading}
          </h2>
          <p className="text-muted-foreground mb-10">
            {t.contact.subtitle}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-display font-semibold text-sm bg-accent text-accent-foreground hover:brightness-110 transition-all shadow-lg shadow-accent/20"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-display font-semibold text-sm border border-border text-foreground hover:bg-secondary hover:border-foreground/30 transition-all"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-display font-semibold text-sm border border-border text-foreground hover:bg-secondary transition-all"
            >
              <Mail size={18} />
              {personalInfo.email}
            </a>
            <a
              href={personalInfo.cvUrl}
              download="CV_Pere_Guma.pdf"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-display font-semibold text-sm border border-border text-foreground hover:bg-secondary transition-all"
            >
              <Download size={18} />
              {t.contact.downloadCv}
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <p className="mt-16 text-sm text-muted-foreground">
            © {new Date().getFullYear()} {personalInfo.name}. {t.contact.rights}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
