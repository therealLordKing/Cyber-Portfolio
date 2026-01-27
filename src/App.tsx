import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import backdrop from "./assets/images/home/backdrop.jpg";
import navbarBg from "./assets/images/home/Matching Pc Wallpapers.gif";
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
    document.documentElement.dataset.templateStyle = templateStyle;
    window.localStorage.setItem("templateStyle", templateStyle);
  }, [templateStyle]);

  return (
    <TemplateStyleContext.Provider
      value={{ style: templateStyle, setStyle: setTemplateStyle }}
    >
      <HashRouter>
        <div className="app-shell relative min-h-screen text-[color:var(--text)]">
          <div className="relative grid min-h-screen grid-cols-1 lg:grid-cols-[1fr_4fr_1fr]">
            {/* Left sidebar — blank */}
            <aside className="sticky top-0 hidden h-screen border-r border-[color:var(--border)] bg-[color:var(--bg)] lg:block">
              <div className="flex h-full flex-col items-center justify-start gap-4 p-4 pt-8">
                <p className="font-plex-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
                  Links
                </p>
              </div>
            </aside>

            {/* Main content column */}
            <div className="relative flex flex-col lg:border-x lg:border-[color:var(--border)]">
              {/* Navbar with gif behind it */}
              <div className="relative">
                <img
                  src={navbarBg}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
                />
                <Navbar />
              </div>

              {/* Page content with backdrop pattern */}
              <main className="relative flex-1">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: `url(${backdrop})`,
                    backgroundSize: "400px",
                    backgroundRepeat: "repeat",
                  }}
                />
                <div className="relative mx-auto max-w-5xl px-5 pb-16 pt-12 sm:px-8 lg:px-10">
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
                </div>
              </main>
            </div>

            {/* Right sidebar — blank */}
            <aside className="sticky top-0 hidden h-screen border-l border-[color:var(--border)] bg-[color:var(--bg)] lg:block">
              <div className="flex h-full flex-col items-center justify-start gap-4 p-4 pt-8">
                <p className="font-plex-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
                  Banners
                </p>
              </div>
            </aside>
          </div>
        </div>
      </HashRouter>
    </TemplateStyleContext.Provider>
  );
}
