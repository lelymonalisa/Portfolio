import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { Layout } from "./components/Layout";
import { ResumePage } from "./pages/ResumePage";
import { UIShowcasePage } from "./pages/UIShowcasePage";
import { CaseStudyPage } from "./pages/CaseStudyPage";
import { AboutPage } from "./pages/AboutPage";
import { Portfolio } from "./pages/Portfolio";
import { PageTracker } from "./components/PageTracker";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <PageTracker />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ResumePage />} />
            <Route path="/ui-showcase" element={<UIShowcasePage />} />
            <Route path="/case-study" element={<CaseStudyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}