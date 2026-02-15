import { useLanguage } from "./LanguageContext";
import { es } from "./es";
import { en } from "./en";
import { ca } from "./ca";

const translations = { es, en, ca } as const;

export const useTranslations = () => {
  const { locale } = useLanguage();
  return translations[locale];
};
