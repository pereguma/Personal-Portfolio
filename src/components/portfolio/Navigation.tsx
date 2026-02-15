import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage, Locale } from "@/i18n/LanguageContext";
import { useTranslations } from "@/i18n/useTranslations";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, setLocale } = useLanguage();
  const t = useTranslations();

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.profile, href: "#profile" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.education, href: "#education" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.competencies, href: "#competencies" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLocale = (l: Locale) => setLocale(l);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/90 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#"
          className={`font-display font-bold text-lg tracking-tight transition-colors ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          PG<span className="gold-text">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    scrolled ? "text-muted-foreground" : "text-primary-foreground/80"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Language toggle */}
          <div className={`flex items-center gap-1 text-xs font-semibold ${
            scrolled ? "text-muted-foreground" : "text-primary-foreground/70"
          }`}>
            {(["es", "en", "ca"] as Locale[]).map((l, i) => (
              <span key={l} className="flex items-center">
                {i > 0 && <span className="opacity-40 mx-0.5">|</span>}
                <button
                  onClick={() => toggleLocale(l)}
                  className={`px-2 py-1 rounded transition-colors ${
                    locale === l ? "bg-accent text-accent-foreground" : "hover:text-accent"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Mobile: lang toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <div className={`flex items-center gap-1 text-xs font-semibold ${
            scrolled ? "text-muted-foreground" : "text-primary-foreground/70"
          }`}>
            {(["es", "en", "ca"] as Locale[]).map((l, i) => (
              <span key={l} className="flex items-center">
                {i > 0 && <span className="opacity-40 mx-0.5">|</span>}
                <button
                  onClick={() => toggleLocale(l)}
                  className={`px-2 py-1 rounded transition-colors ${
                    locale === l ? "bg-accent text-accent-foreground" : "hover:text-accent"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              </span>
            ))}
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
