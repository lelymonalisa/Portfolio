import imgLogoBniSyariah2 from "figma:asset/f6318efd7adeb4a0895c7aa6eecf4b853f665336.png";
import imgShadow from "figma:asset/e775f84b16c3f64c63b215472bb0b1bbd978a817.png";
import imgMain from "figma:asset/f0b05030c1e24ff649c9df1d3a249c6516708210.png";
import imgIPhone12Pro61MockupLabel from "figma:asset/8a2b97d7eaaef25cd4b9d9f7e29533f1fec24bd9.png";
import imgShadow1 from "figma:asset/ccfc6bc798a58648df26ad552340887ff154e003.png";
import imgMain1 from "figma:asset/4ae1d9ea12edd645a35ee3cf129ea301b86d1d59.png";
import imgIPhone12Pro61MockupLabel1 from "figma:asset/96573623f0eb361184ca69b51975ef2deb20bdf8.png";
import imgUnnamed11 from "figma:asset/ae49bbe140da231d44cca62c69c8284ae0917b1f.png";
import imgShadow5 from "figma:asset/a544f34df995678e95156b6dd36349feaef0a526.png";
import imgMain5 from "figma:asset/42d42c58e35edd0f45283c6786770f59f50deace.png";
import imgIPhoneXFlyingLabel1 from "figma:asset/7b74149fff52658fd7da0ee26cd1f86db90e1e3a.png";
import imgPolytronPolytronLogo2 from "figma:asset/619b38dbc49cc88fbf55b287523f292320d4a4e8.png";
import imgShadow14 from "figma:asset/bab3c34bfe20d7c68e987f4b6bb9817f5be74cb3.png";
import imgMain15 from "figma:asset/8413e4fe1d486d66219d121ea143d82890c1e12e.png";
import imgAppleIMac27MockupLabel from "figma:asset/de2c9b0ef49230e6bceee7ab8854ada8562b6472.png";
import svgPaths from "../../imports/svg-vsrvhepri9";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const projectData = [
  {
    color: "#98d9c3",
    textColor: "#002d1e",
    logo: imgLogoBniSyariah2,
    mockup: "phone-dual"
  },
  {
    color: "#ffb180",
    textColor: "#b44500",
    logo: imgLogoBniSyariah2,
    mockup: "laptop-phone"
  },
  {
    color: "#99c9ff",
    textColor: "#004696",
    mockup: "laptop-simple"
  },
  {
    color: "#6fcbff",
    textColor: "#004c77",
    logo: imgUnnamed11,
    mockup: "phone-multi"
  },
  {
    color: "#2db6ae",
    textColor: "#8a0100",
    mockup: "phone-kawis"
  },
  {
    color: "#ffb4a4",
    textColor: "#8a0100",
    logo: imgPolytronPolytronLogo2,
    mockup: "imac"
  }
];

export function Projects() {
  const { language } = useLanguage();
  const t = translations[language].projects;

  return (
    <section className="py-16" id="projects">
      <div className="mb-8">
        <h2 className="text-[#ccc] text-xl tracking-[2px] mb-4">{t.title}</h2>
        <div className="relative w-24 ml-8">
          <svg className="absolute w-full h-14" fill="none" preserveAspectRatio="none" viewBox="0 0 89.9999 58">
            <path d={svgPaths.p2d6bd820} stroke="#6FFFCE" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, idx) => (
          <div 
            key={idx}
            className="rounded-[10px] h-[450px] overflow-hidden relative"
            style={{ backgroundColor: project.color }}
          >
            {project.logo && (
              <div className="absolute left-3 top-3 h-10 z-10">
                <img 
                  src={project.logo} 
                  alt="" 
                  className="h-full w-auto object-contain" 
                />
              </div>
            )}
            
            <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
              <p 
                className="text-base" 
                style={{ color: project.textColor }}
              >
                {t.items[idx].category}
              </p>
              <h3 className="text-[#333] text-xl font-medium leading-tight">
                {t.items[idx].title}
              </h3>
            </div>

            {/* Mockup illustrations */}
            {project.mockup === "phone-dual" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div 
                    className="absolute"
                    style={{ 
                      left: "44px", 
                      top: "90px",
                      transform: "rotate(-26.76deg)" 
                    }}
                  >
                    <div className="relative w-[81.655px] h-[200.323px]">
                      <img src={imgShadow1} alt="" className="absolute inset-0 opacity-70" />
                      <img src={imgMain1} alt="" className="absolute inset-0" />
                      <img 
                        src={imgIPhone12Pro61MockupLabel1} 
                        alt="" 
                        className="absolute left-[9.31px] top-[4.37px] w-[68.868px] h-[190.901px]" 
                      />
                    </div>
                  </div>
                  <div 
                    className="absolute"
                    style={{ 
                      left: "177px", 
                      top: "90px",
                      transform: "rotate(15.18deg)" 
                    }}
                  >
                    <div className="relative w-[57.112px] h-[140px]">
                      <img src={imgShadow} alt="" className="absolute inset-0 opacity-70" />
                      <img src={imgMain} alt="" className="absolute inset-0" />
                      <img 
                        src={imgIPhone12Pro61MockupLabel} 
                        alt="" 
                        className="absolute left-[2.04px] top-[3.13px] w-[48.181px] h-[133.419px]" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {project.mockup === "phone-multi" && (
              <div className="absolute inset-0 flex items-center justify-center pt-16">
                <div className="relative">
                  <div className="relative w-[178.376px] h-[185.5px]">
                    <img src={imgShadow5} alt="" className="absolute inset-0 opacity-70" />
                    <img 
                      src={imgMain5} 
                      alt="" 
                      className="absolute left-[24.22px] top-0 w-[154.156px] h-[164.414px]" 
                    />
                    <img 
                      src={imgIPhoneXFlyingLabel1} 
                      alt="" 
                      className="absolute left-[27.07px] top-[0.85px] w-[144.753px] h-[154.726px]" 
                    />
                  </div>
                </div>
              </div>
            )}

            {project.mockup === "imac" && (
              <div className="absolute inset-0 flex items-center justify-center pt-8">
                <div className="relative w-[263.141px] h-[214px]">
                  <img src={imgShadow14} alt="" className="absolute inset-0 opacity-70" />
                  <img src={imgMain15} alt="" className="absolute inset-0" />
                  <img 
                    src={imgAppleIMac27MockupLabel} 
                    alt="" 
                    className="absolute left-[12px] top-[11.78px] w-[237.551px] h-[132.023px]" 
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div 
        className="mt-16 rounded-[20px] backdrop-blur-[100px] p-12 text-center"
        style={{ backgroundColor: "rgba(219, 255, 242, 0.05)" }}
      >
        <h3 className="text-2xl text-white font-light leading-relaxed">
          {t.checkDribbble}{" "}
          <a 
            href="https://dribbble.com/lelymonalisa" 
            className="text-[#db7979] font-bold underline hover:opacity-80 transition-opacity"
          >
            Dribbble
          </a>
          {" "}{t.account}
        </h3>
        <p className="text-2xl text-white font-light mt-2">{t.enjoy}</p>
      </div>
    </section>
  );
}
