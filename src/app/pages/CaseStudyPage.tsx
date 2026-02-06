import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export function CaseStudyPage() {
  const { language } = useLanguage();
  const t = translations[language].caseStudy;

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

      <div className="space-y-12">
        {t.studies.map((study: any, idx: number) => (
          <div 
            key={idx}
            className="rounded-[20px] backdrop-blur-[100px] p-12"
            style={{ backgroundColor: "rgba(219, 255, 242, 0.05)" }}
          >
            <h2 className="text-3xl text-white font-bold mb-4">{study.title}</h2>
            <p className="text-[#ccc] text-lg mb-6">{study.description}</p>
            
            <div className="space-y-4 text-white/90">
              <div>
                <h3 className="text-xl font-semibold mb-2">{study.challenge}</h3>
                <p className="text-[#ccc]">{study.challengeText}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">{study.solution}</h3>
                <p className="text-[#ccc]">{study.solutionText}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">{study.impact}</h3>
                <p className="text-[#ccc]">{study.impactText}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
