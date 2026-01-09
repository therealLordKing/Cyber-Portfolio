import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CyberPortfolio from "./pages/CyberPortfolio";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WebsiteDesigns from "./pages/WebsiteDesigns";

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <Navbar />
        <main className="mx-auto max-w-5xl px-4 py-10">
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
    </HashRouter>
  );
}
