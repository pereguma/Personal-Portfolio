import AnimatedSection from "./AnimatedSection";
import { useTranslations } from "@/i18n/useTranslations";
import profilePhoto from "@/assets/profile-photo.jpg";

const ProfileSection = () => {
  const t = useTranslations();

  return (
    <section id="profile" className="section-padding section-alt">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 gold-underline pb-3">
            {t.profile.heading}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-10 flex flex-col items-center md:flex-row md:items-start gap-8">
            <div className="flex-shrink-0 w-full max-w-[250px]">
              <img
                src={profilePhoto}
                alt="Pere Gumà"
                className="w-full h-60 rounded-2xl object-cover border-2 border-border shadow-md"
              />
            </div>
            <div className="flex-1 space-y-6">
              {t.profile.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-base md:text-lg leading-relaxed text-muted-foreground text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProfileSection;
