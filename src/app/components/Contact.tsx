import svgPaths from "../../imports/svg-vsrvhepri9";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <section className="py-16">
      <div className="mb-8">
        <h2 className="text-[#ccc] text-xl tracking-[2px]">{t.title}</h2>
      </div>

      <div 
        className="rounded-[20px] backdrop-blur-[100px] p-8"
        style={{ backgroundColor: "rgba(219, 255, 242, 0.05)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <a 
            href="mailto:Lelymonalisa.work@gmail.com"
            className="flex items-center gap-4 group"
          >
            <div className="w-8 h-8 flex-shrink-0">
              <svg className="w-full h-full" fill="none" viewBox="0 0 30 30">
                <path d={svgPaths.pa7a6180} fill="#ECEFF1" />
                <path d={svgPaths.p22818780} fill="#CFD8DC" />
                <path d={svgPaths.pd954a00} fill="#F44336" />
              </svg>
            </div>
            <span className="text-white text-sm underline group-hover:opacity-80 transition-opacity">
              Lelymonalisa.work@gmail.com
            </span>
          </a>

          <a 
            href="https://medium.com/@lelymonalisa"
            className="flex items-center gap-4 group"
          >
            <div className="w-8 h-8 flex-shrink-0">
              <svg className="w-full h-full" fill="none" viewBox="0 0 30 30">
                <path d={svgPaths.p87b5e00} fill="#2FFC8D" />
                <path d={svgPaths.p1acbe00} fill="#03E370" />
                <path d={svgPaths.p377d7780} fill="#10C767" />
                <path d={svgPaths.p205eeb00} fill="#00AB6C" />
              </svg>
            </div>
            <span className="text-white text-sm underline group-hover:opacity-80 transition-opacity">
              medium
            </span>
          </a>

          <a 
            href="https://dribbble.com/lelymonalisa"
            className="flex items-center gap-4 group"
          >
            <div className="w-8 h-8 flex-shrink-0">
              <svg className="w-full h-full" fill="none" viewBox="0 0 30 30">
                <path d={svgPaths.p19964400} fill="#EC407A" />
                <path d={svgPaths.p2e017b50} fill="#C2185B" />
              </svg>
            </div>
            <span className="text-white text-sm underline group-hover:opacity-80 transition-opacity">
              dribbble
            </span>
          </a>

          <a 
            href="https://github.com/lelymonalisa"
            className="flex items-center gap-4 group"
          >
            <div className="w-8 h-8 flex-shrink-0">
              <svg className="w-full h-full" fill="none" viewBox="0 0 30 30">
                <path d={svgPaths.p35035b00} fill="#5C6BC0" />
              </svg>
            </div>
            <span className="text-white text-sm underline group-hover:opacity-80 transition-opacity">
              github
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
