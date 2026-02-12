import AnimatedSection from "./AnimatedSection";
import { profileText } from "@/data/portfolio-data";
import profilePhoto from "@/assets/profile-photo.jpg";

const ProfileSection = () => {
  return (
    <section id="profile" className="section-padding section-alt">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 gold-underline pb-3">
            {profileText.heading}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-10 flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1 space-y-6">
              {profileText.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex-shrink-0 hidden md:block">
              <img
                src={profilePhoto}
                alt="Pere Gumà"
                className="w-44 h-56 rounded-2xl object-cover border-2 border-border shadow-md"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProfileSection;
