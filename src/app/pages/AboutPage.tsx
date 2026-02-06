import { Hero } from "../components/Hero";
import { Contact } from "../components/Contact";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <div className="py-16">
      <Hero />
      
      <div className="mt-16 space-y-12">
        {/* Philosophy */}
        <div 
          className="rounded-[20px] backdrop-blur-[100px] p-12"
          style={{ backgroundColor: "rgba(219, 255, 242, 0.05)" }}
        >
          <h2 className="text-3xl text-white font-bold mb-6">{t.philosophy}</h2>
          <p className="text-[#ccc] text-xl leading-relaxed">
            {t.philosophyText}
          </p>
        </div>

        {/* What I Do */}
        <div 
          className="rounded-[20px] backdrop-blur-[100px] p-12"
          style={{ backgroundColor: "rgba(219, 255, 242, 0.05)" }}
        >
          <h2 className="text-3xl text-white font-bold mb-6">{t.whatIDo}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.services.map((service: any, idx: number) => (
              <div key={idx}>
                <h3 className="text-2xl text-white font-semibold mb-3">{service.title}</h3>
                <p className="text-[#ccc] text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div 
          className="rounded-[20px] backdrop-blur-[100px] p-12"
          style={{ backgroundColor: "rgba(219, 255, 242, 0.05)" }}
        >
          <h2 className="text-3xl text-white font-bold mb-6">{t.beyondDesign}</h2>
          <p className="text-[#ccc] text-xl leading-relaxed">
            {t.beyondDesignText}
          </p>
        </div>
      </div>

      <div className="mt-16">
        <Contact />
      </div>
    </div>
  );
}
