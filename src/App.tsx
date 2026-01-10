import { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CyberPortfolio from "./pages/CyberPortfolio";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WebsiteDesigns from "./pages/WebsiteDesigns";

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") {
      return "dark";
    }
    const saved = window.localStorage.getItem("theme");
    return saved === "light" ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("theme-light", theme === "light");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
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
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}
