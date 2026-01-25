import { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CustomScripts from "./pages/CustomScripts";
import SecurityTools from "./pages/SecurityTools";
import CaseStudies from "./pages/CaseStudies";
import MyPlaybooks from "./pages/MyPlaybooks";
import IndustryStandards from "./pages/IndustryStandards";
import VulnerableWebAppLab from "./pages/VulnerableWebAppLab";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WebsiteDesigns from "./pages/WebsiteDesigns";
import DesignHub from "./pages/DesignHub";
import Thanks from "./pages/Thanks";
import OnePageBrandSite from "./pages/templates/OnePageBrandSite";
import ServiceStudio from "./pages/templates/ServiceStudio";
import OnlineStorefront from "./pages/templates/OnlineStorefront";
import EventLanding from "./pages/templates/EventLanding";
import {
  TemplateStyleContext,
  type TemplateStyle,
} from "./context/TemplateStyleContext";

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") {
      return "light";
    }
    const saved = window.localStorage.getItem("theme");
    return saved === "dark" ? "dark" : "light";
  });
  const [templateStyle, setTemplateStyle] = useState<TemplateStyle>(() => {
    if (typeof window === "undefined") {
      return "glass";
    }
    const saved = window.localStorage.getItem("templateStyle");
    if (saved === "solid" || saved === "outline" || saved === "glass") {
      return saved;
    }
    return "glass";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("theme-light", theme === "light");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.dataset.templateStyle = templateStyle;
    window.localStorage.setItem("templateStyle", templateStyle);
  }, [templateStyle]);

  return (
    <TemplateStyleContext.Provider
      value={{ style: templateStyle, setStyle: setTemplateStyle }}
    >
      <HashRouter>
        <div className="app-shell min-h-screen text-[color:var(--text)]">
          <div className="bg-grid">
            <div className="relative">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--accent-soft),_transparent_55%)]" />
              <Navbar
                theme={theme}
                onToggleTheme={() =>
                  setTheme((prev) => (prev === "dark" ? "light" : "dark"))
                }
              />
              <main className="relative mx-auto max-w-6xl px-5 pb-16 pt-12 sm:px-8 lg:px-12">
                <Routes>
                  {/* Main pages */}
                  <Route path="/" element={<Home />} />

                  {/* Cyber Solutions */}
                  <Route path="/cyber-solutions/custom-scripts" element={<CustomScripts />} />
                  <Route path="/cyber-solutions/security-tools" element={<SecurityTools />} />

                  {/* Home Labs */}
                  <Route path="/home-labs/vulnerable-web-app" element={<VulnerableWebAppLab />} />

                  {/* Case Studies */}
                  <Route path="/case-studies" element={<CaseStudies />} />

                  {/* Response Playbooks */}
                  <Route path="/playbooks/my-playbooks" element={<MyPlaybooks />} />
                  <Route path="/playbooks/industry-standards" element={<IndustryStandards />} />

                  {/* Website Designs */}
                  <Route path="/website-designs" element={<WebsiteDesigns />} />
                  <Route path="/design-hub" element={<DesignHub />} />
                  <Route path="/website-designs/one-page-brand-site" element={<OnePageBrandSite />} />
                  <Route path="/website-designs/service-studio" element={<ServiceStudio />} />
                  <Route path="/website-designs/online-storefront" element={<OnlineStorefront />} />
                  <Route path="/website-designs/event-landing" element={<EventLanding />} />

                  {/* Other pages */}
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/thanks" element={<Thanks />} />
                </Routes>
              </main>
            </div>
          </div>
        </div>
      </HashRouter>
    </TemplateStyleContext.Provider>
  );
}
