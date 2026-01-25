import { useState, useEffect } from "react";
import customScriptsImage from "../assets/images/home/custom-scripts.jpeg";
import customScriptsLightImage from "../assets/images/home/custom-scripts-light.jpeg";

function useTheme() {
  const [isLight, setIsLight] = useState(() => {
    if (typeof document === "undefined") return false;
    return document.documentElement.classList.contains("theme-light");
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLight(document.documentElement.classList.contains("theme-light"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return isLight;
}

export default function CustomScripts() {
  const isLightTheme = useTheme();
  const heroImage = isLightTheme ? customScriptsLightImage : customScriptsImage;

  return (
    <section className="space-y-8">
      <div className="frosted-panel overflow-hidden rounded-2xl">
        <img
          src={heroImage}
          alt="Custom scripts illustration"
          className="h-48 w-full object-contain sm:h-64"
        />
        <div className="space-y-2 px-6 py-6 text-center sm:px-8">
          <p className="font-plex-mono text-sm uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
            Cyber Solutions
          </p>
          <h1 className="font-orbitron text-4xl font-semibold tracking-wide text-[color:var(--text-strong)] sm:text-5xl">
            Custom Scripts
          </h1>
        </div>
      </div>

      <p className="text-center text-lg leading-relaxed text-[color:var(--text-soft)] sm:text-xl">
        A collection of custom security scripts and automation tools for various cybersecurity tasks. From reconnaissance to reporting, these scripts streamline common security workflows.
      </p>

      <div className="frosted-card rounded-2xl p-8 text-center">
        <p className="text-[color:var(--text-muted)]">
          Content coming soon...
        </p>
      </div>
    </section>
  );
}
