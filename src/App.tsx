import { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CyberPortfolio from "./pages/CyberPortfolio";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WebsiteDesigns from "./pages/WebsiteDesigns";
import Thanks from "./pages/Thanks";
import OnePageBrandSite from "./pages/templates/OnePageBrandSite";
import PortfolioGrid from "./pages/templates/PortfolioGrid";
import ServiceStudio from "./pages/templates/ServiceStudio";
import ProductRelease from "./pages/templates/ProductRelease";
import ContentHub from "./pages/templates/ContentHub";
import ComingSoon from "./pages/templates/ComingSoon";
import StartupSaaS from "./pages/templates/StartupSaaS";
import EcommerceStorefront from "./pages/templates/EcommerceStorefront";
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
                  <Route path="/" element={<Home />} />
                  <Route path="/cyber-portfolio" element={<CyberPortfolio />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/website-designs" element={<WebsiteDesigns />} />
                  <Route
                    path="/website-designs/one-page-brand-site"
                    element={<OnePageBrandSite />}
                  />
                  <Route
                    path="/website-designs/portfolio-grid"
                    element={<PortfolioGrid />}
                  />
                  <Route
                    path="/website-designs/service-studio"
                    element={<ServiceStudio />}
                  />
                  <Route
                    path="/website-designs/product-release"
                    element={<ProductRelease />}
                  />
                  <Route
                    path="/website-designs/content-hub"
                    element={<ContentHub />}
                  />
                  <Route
                    path="/website-designs/startup-saas"
                    element={<StartupSaaS />}
                  />
                  <Route
                    path="/website-designs/ecommerce-storefront"
                    element={<EcommerceStorefront />}
                  />
                  <Route
                    path="/website-designs/event-landing"
                    element={<EventLanding />}
                  />
                  <Route
                    path="/website-designs/coming-soon"
                    element={<ComingSoon />}
                  />
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
