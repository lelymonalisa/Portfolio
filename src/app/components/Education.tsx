import svgPaths from "../../imports/svg-vsrvhepri9";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export function Education() {
  const { language } = useLanguage();
  const t = translations[language].education;

  return (
    <section className="py-16">
      <div className="mb-8">
        <h2 className="text-[#ccc] text-xl tracking-[2px] mb-4">{t.title}</h2>
        <div className="relative w-32">
          <svg className="absolute w-full h-3" fill="none" preserveAspectRatio="none" viewBox="0 0 140 14.0002">
            <path d={svgPaths.p21f72e80} stroke="#BC79DB" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg className="absolute w-full h-7 top-[-8px]" fill="none" preserveAspectRatio="none" viewBox="0 0 137 28.5068">
            <path d={svgPaths.p39c5580} stroke="#BC79DB" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div 
        className="rounded-[20px] backdrop-blur-[100px] p-16"
        style={{ backgroundColor: "rgba(219, 255, 242, 0.05)" }}
      >
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <h3 className="text-white text-2xl font-medium">{t.school}</h3>
          <span className="text-white/90 text-2xl font-light">{t.period}</span>
        </div>
        <p className="text-white text-2xl font-medium mt-4 ml-0 md:ml-20">{t.major}</p>
      </div>
    </section>
  );
}
