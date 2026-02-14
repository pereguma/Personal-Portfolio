import { useLanguage } from "./LanguageContext";
import { es } from "./es";
import { en } from "./en";

const translations = { es, en } as const;

export const useTranslations = () => {
  const { locale } = useLanguage();
  return translations[locale];
};
