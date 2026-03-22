import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const PORTFOLIO_URL = "https://drive.google.com/file/d/1Yx3jKy_Zg4hcVybclU108zJJx4ViYJxY/view?usp=sharing";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

function trackEvent(eventName: string, params: Record<string, string>) {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

function getUtmParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") ?? "direct",
    utm_medium: params.get("utm_medium") ?? "none",
    utm_campaign: params.get("utm_campaign") ?? "none",
  };
}

export function Portfolio() {
  const { language } = useLanguage();
  const t = translations[language].portfolio;

  useEffect(() => {
    const utm = getUtmParams();
    trackEvent("page_view", {
      page_title: "Portfolio PDF",
      page_location: window.location.href,
      ...utm,
    });

    const timer = setTimeout(() => {
      trackEvent("portfolio_redirect", {
        method: "auto",
        destination: PORTFOLIO_URL,
        ...utm,
      });
      window.location.href = PORTFOLIO_URL;
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  function handleClick() {
    const utm = getUtmParams();
    trackEvent("portfolio_link_click", {
      method: "manual",
      destination: PORTFOLIO_URL,
      ...utm,
    });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center">
      <p className="text-white text-lg">{t.redirecting}</p>
      <a
        href={PORTFOLIO_URL}
        onClick={handleClick}
        className="text-[#f77555] underline hover:opacity-80 transition-opacity"
      >
        {t.clickHere}
      </a>
    </div>
  );
}
