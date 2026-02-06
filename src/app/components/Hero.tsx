import imgIntersect from "figma:asset/761035c26e426cb6f3942651a55d3caa5a32a4f4.png";
import svgPaths from "../../imports/svg-vsrvhepri9";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;
  
  return (
    <section className="py-16" id="about">
      <div className="mb-8">
        <h2 className="text-[#ccc] text-xl tracking-[2px] mb-4">{t.title}</h2>
        <div className="relative w-24">
          <svg className="absolute w-full h-1" fill="none" preserveAspectRatio="none" viewBox="0 0 81.0225 4.40864">
            <path d={svgPaths.p78ba380} stroke="#DB7979" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg className="absolute w-full h-1.5 top-[-2px]" fill="none" preserveAspectRatio="none" viewBox="0 0 97.5788 5.94786">
            <path d={svgPaths.p33260e00} stroke="#DB7979" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-12">
        <div className="w-[169px] h-[169px] flex-shrink-0">
          <img 
            alt="Profile" 
            className="w-full h-full object-cover rounded-full" 
            src={imgIntersect} 
          />
        </div>

        <div className="flex-1">
          <p 
            className="text-3xl leading-relaxed bg-clip-text text-transparent"
            style={{ 
              backgroundImage: "linear-gradient(90.48deg, rgb(186, 126, 207) 2.9023%, rgb(241, 158, 208) 23.104%, rgb(148, 141, 242) 44.993%, rgb(185, 194, 255) 75.219%, rgb(251, 206, 165) 101.86%)" 
            }}
          >
            {t.description}
          </p>
        </div>
      </div>
    </section>
  );
}