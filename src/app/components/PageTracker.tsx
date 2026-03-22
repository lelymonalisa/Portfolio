import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

const PAGE_TITLES: Record<string, string> = {
  "/": "Resume",
  "/ui-showcase": "UI Showcase",
  "/case-study": "Case Study",
  "/about": "About",
  "/portfolio": "Portfolio PDF",
};

export function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;

    const title = PAGE_TITLES[location.pathname] ?? location.pathname;

    // Gunakan 'config' agar GA4 otomatis membaca UTM params dari URL
    window.gtag("config", "G-J96XQVQ3HG", {
      page_title: title,
      page_location: window.location.href,
      page_path: location.pathname,
    });
  }, [location.pathname]);

  return null;
}
