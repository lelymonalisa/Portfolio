import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export function Header() {
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].header;
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="pt-8 pb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-16">
          <Link to="/">
            <h1 
              className="text-2xl font-bold bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity"
              style={{ 
                backgroundImage: "linear-gradient(90.667deg, rgb(186, 126, 207) 2.9023%, rgb(241, 158, 208) 23.104%, rgb(148, 141, 242) 44.993%, rgb(185, 194, 255) 75.219%, rgb(251, 206, 165) 101.86%)" 
              }}
            >
              {t.name}
            </h1>
          </Link>
          
          <nav className="hidden md:flex gap-12 items-center">
            <Link 
              to="/" 
              className={`text-xl hover:opacity-80 transition-opacity ${
                isActive('/') ? 'text-white font-extrabold' : 'text-white/95 font-semibold'
              }`}
            >
              {t.resume}
            </Link>
            <Link 
              to="/ui-showcase" 
              className={`text-xl hover:opacity-80 transition-opacity ${
                isActive('/ui-showcase') ? 'text-white font-extrabold' : 'text-white/95 font-semibold'
              }`}
            >
              {t.uiShowcase}
            </Link>
            <Link 
              to="/case-study" 
              className={`text-xl hover:opacity-80 transition-opacity ${
                isActive('/case-study') ? 'text-white font-extrabold' : 'text-white/95 font-semibold'
              }`}
            >
              {t.caseStudy}
            </Link>
            <Link 
              to="/about" 
              className={`text-xl hover:opacity-80 transition-opacity ${
                isActive('/about') ? 'text-white font-extrabold' : 'text-white/95 font-semibold'
              }`}
            >
              {t.about}
            </Link>
          </nav>
        </div>

        <button 
          onClick={toggleLanguage}
          className="bg-white border-2 border-[#f77555] rounded-full px-4 py-1 flex items-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer"
        >
          <span className="text-xl">
            {language === "en" ? "🇺🇸" : "🇯🇵"}
          </span>
          <span className="text-black text-sm font-medium">
            {language === "en" ? "ENG" : "日本"}
          </span>
        </button>
      </div>
      <div className="mt-4 h-[3px] w-10 bg-[#f77555] rounded-full"></div>
    </header>
  );
}