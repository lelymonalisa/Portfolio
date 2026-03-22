import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="py-12 mt-16 border-t border-[#c4c4c4]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white text-xl font-medium">{t.header.name}</p>
        
        <div className="flex gap-8 text-base">
          <a 
            href="https://dribbble.com/lelymonalisa" 
            className="text-white underline hover:opacity-80 transition-opacity"
          >
            Dribbble
          </a>
          <a 
            href="https://github.com/lelymonalisa" 
            className="text-white underline hover:opacity-80 transition-opacity"
          >
            Github
          </a>
          <a 
            href="https://www.linkedin.com/in/lely-monalisa-050811/" 
            className="text-white underline hover:opacity-80 transition-opacity"
          >
            Linkedin
          </a>
          <a 
            href="https://medium.com/@lelymonce_" 
            className="text-white underline hover:opacity-80 transition-opacity"
          >
            Medium
          </a>
        </div>

        <p className="text-white/80 text-base italic">{t.footer.lastUpdated}</p>
      </div>
    </footer>
  );
}
