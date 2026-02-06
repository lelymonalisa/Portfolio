import imgJustinmindLogoColor from "figma:asset/20a7ba948c0321f0af0151edd8fd4fc1983da0c8.png";
import img5A5772891C992A034569Ab8C11 from "figma:asset/3066094b83fa50a3529a7332bd8900d1bb8846dd.png";
import imgFigma1Logo from "figma:asset/b2f6ca68a26930d2f8306245d1f11f178f7c79f0.png";
import imgInvisionLogo from "figma:asset/21ece1615a63716f5136f69430cbd87df295e09d.png";
import imgAdobeXdCcIcon from "figma:asset/f16908a140a4edb701208bc4fa3e30490722075b.png";
import imgSketch2LogoPngTransparent from "figma:asset/d0f0ec090536e2ed23a5c80349289c93f3069d78.png";
import svgPaths from "../../imports/svg-vsrvhepri9";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const tools = [
  { name: "Figma", logo: imgFigma1Logo },
  { name: "Invision", logo: imgInvisionLogo },
  { name: "Adobe XD", logo: imgAdobeXdCcIcon },
  { name: "Sketch", logo: imgSketch2LogoPngTransparent },
  { name: "Just in Mind", logo: imgJustinmindLogoColor },
  { name: "Miro", logo: null, isMiro: true },
  { name: "Zeplin", logo: img5A5772891C992A034569Ab8C11 }
];

export function Tools() {
  const { language } = useLanguage();
  const t = translations[language].tools;

  return (
    <section className="py-16">
      <div className="mb-8">
        <h2 className="text-[#ccc] text-xl tracking-[2px] mb-4">{t.title}</h2>
        <div className="relative w-52">
          <svg className="absolute w-full h-3" fill="none" preserveAspectRatio="none" viewBox="0 0 209.283 14.0002">
            <path d={svgPaths.p1bef1480} stroke="#BC79DB" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div 
        className="rounded-[20px] backdrop-blur-[100px] p-16"
        style={{ backgroundColor: "rgba(219, 255, 242, 0.05)" }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {tools.map((tool, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3">
              {tool.isMiro ? (
                <div className="w-[30px] h-[30px]">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 30 30">
                    <rect width="30" height="30" fill="#FFD02F" />
                    <path d={svgPaths.pb041d00} fill="#050038" />
                  </svg>
                </div>
              ) : (
                <img 
                  src={tool.logo} 
                  alt={tool.name} 
                  className="w-[30px] h-[30px] object-contain" 
                />
              )}
              <span className="text-white text-xl font-medium text-center">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
