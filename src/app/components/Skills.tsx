import svgPaths from "../../imports/svg-vsrvhepri9";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export function Skills() {
  const { language } = useLanguage();
  const t = translations[language].skills;

  return (
    <section className="py-16">
      <div className="mb-8">
        <h2 className="text-[#ccc] text-xl tracking-[2px] mb-4">{t.title}</h2>
        <div className="relative w-32">
          <svg className="absolute w-full h-1" fill="none" preserveAspectRatio="none" viewBox="0 0 139 4.48211">
            <path d={svgPaths.pce62900} stroke="#BC79DB" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg className="absolute w-full h-4 top-[-8px]" fill="none" preserveAspectRatio="none" viewBox="0 0 139 16.1381">
            <path d={svgPaths.p20623e40} stroke="#DB7991" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {t.categories.map((category: any, idx: number) => (
          <div 
            key={idx}
            className="rounded-[20px] backdrop-blur-[100px] p-12 space-y-3"
            style={{ backgroundColor: "rgba(219, 255, 242, 0.05)" }}
          >
            <h3 className="text-white text-2xl font-bold mb-6">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill: string, sidx: number) => (
                <li key={sidx} className="text-white/90 text-xl font-light">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
