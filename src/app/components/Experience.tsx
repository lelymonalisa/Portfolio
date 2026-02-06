import svgPaths from "../../imports/svg-vsrvhepri9";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export function Experience() {
  const { language } = useLanguage();
  const t = translations[language].experience;

  return (
    <section className="py-16" id="resume">
      <div className="mb-8">
        <h2 className="text-[#ccc] text-xl tracking-[2px] mb-4">{t.title}</h2>
        <div className="relative w-24">
          <svg className="absolute w-full h-1" fill="none" preserveAspectRatio="none" viewBox="0 0 86.892 4.66586">
            <path d={svgPaths.p1358500} stroke="#A8FFA6" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p3d536c20} stroke="#A8FFA6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div 
        className="rounded-[20px] p-12 space-y-8"
        style={{ 
          backgroundImage: "linear-gradient(132.234deg, rgba(93, 242, 188, 0.1) 4.1467%, rgba(106, 104, 95, 0.1) 22.887%, rgba(108, 76, 76, 0.1) 39.745%, rgba(64, 50, 150, 0.1) 67.988%, rgba(88, 233, 189, 0.1) 94.34%, rgba(93, 242, 188, 0) 107.62%)" 
        }}
      >
        {t.jobs.map((exp: any, idx: number) => (
          <div key={idx} className="space-y-3">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <h3 className="text-white text-2xl">{exp.company}</h3>
              <span className="text-white/90 text-2xl font-light">{exp.period}</span>
            </div>
            
            <div className="pl-0 md:pl-20 space-y-2">
              <h4 className="text-white/90 text-2xl font-medium">{exp.role}</h4>
              
              {exp.description && (
                <p className="text-[#ccc] text-lg leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              )}
              
              {exp.projects && (
                <div className="space-y-2 text-[#ccc] text-lg">
                  {exp.projects.map((proj: any, pidx: number) => (
                    <div key={pidx} className="flex gap-4">
                      <span className="font-light">- {proj.name}</span>
                      <span>:</span>
                      <span className="flex-1">{proj.desc}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {exp.points && (
                <ul className="text-[#ccc] text-lg space-y-1">
                  {exp.points.map((point: string, pidx: number) => (
                    <li key={pidx}>- {point}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
