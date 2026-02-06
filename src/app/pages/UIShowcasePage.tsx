import { Projects } from "../components/Projects";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export function UIShowcasePage() {
  const { language } = useLanguage();
  const t = translations[language].uiShowcase;

  return (
    <div className="py-16">
      <div className="mb-12">
        <h1 
          className="text-5xl font-bold mb-4 bg-clip-text text-transparent"
          style={{ 
            backgroundImage: "linear-gradient(90.667deg, rgb(186, 126, 207) 2.9023%, rgb(241, 158, 208) 23.104%, rgb(148, 141, 242) 44.993%, rgb(185, 194, 255) 75.219%, rgb(251, 206, 165) 101.86%)" 
          }}
        >
          {t.title}
        </h1>
        <p className="text-[#ccc] text-xl">{t.subtitle}</p>
      </div>
      <Projects />
    </div>
  );
}
