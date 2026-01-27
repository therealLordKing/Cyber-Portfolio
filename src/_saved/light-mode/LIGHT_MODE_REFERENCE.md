# Light Mode - Saved Reference

All light mode code was removed to simplify development.
Below is everything needed to restore it.

---

## 1. index.css — Add these blocks back

### After `html { color-scheme: dark; }`

```css
html.theme-light {
  color-scheme: light;
}
```

### After the `:root { ... }` block

```css
html.theme-light {
  --bg: #f3e7dd;
  --surface-1: rgba(244, 224, 241, 0.7);
  --surface-2: rgba(235, 214, 240, 0.74);
  --surface-3: rgba(226, 204, 238, 0.78);
  --dropdown-bg: rgb(235, 214, 240);
  --text: #1b2235;
  --text-strong: #141a2c;
  --text-soft: #3b4660;
  --text-muted: #59627a;
  --border: rgba(86, 96, 136, 0.2);
  --border-strong: rgba(86, 96, 136, 0.3);
  --accent: #7a6ee6;
  --accent-strong: #5f55cc;
  --accent-soft: rgba(122, 110, 230, 0.18);
  --accent-shadow: rgba(122, 110, 230, 0.3);
  --shadow: rgba(61, 69, 99, 0.14);
  --grid-line: rgba(61, 69, 99, 0.05);
  --brand-glow: rgba(202, 142, 255, 0.3);
  --bg-gradient: linear-gradient(180deg, #f0c1d4 0%, #dcb3ea 52%, #b2c9ff 100%);
}
```

### After template-preview--outline dark block

```css
html.theme-light .template-preview--solid,
html.theme-light .template-preview--outline {
  --text-strong: #111111;
  --text: #1a1a1a;
  --text-soft: #4b4b4b;
  --text-muted: #6b6b6b;
  --border: rgba(0, 0, 0, 0.12);
  --border-strong: rgba(0, 0, 0, 0.2);
  --accent: #111111;
  --accent-soft: rgba(0, 0, 0, 0.08);
  --accent-shadow: rgba(0, 0, 0, 0.18);
  --surface-1: #ffffff;
  --surface-2: #f6f6f6;
  --surface-3: #efefef;
  --template-panel-bg: #ffffff;
  --template-panel-border: rgba(0, 0, 0, 0.14);
  --template-panel-shadow: 0 10px 24px -18px rgba(0, 0, 0, 0.2);
  --template-card-bg: #ffffff;
  --template-card-border: rgba(0, 0, 0, 0.14);
  --template-card-shadow: 0 8px 18px -12px rgba(0, 0, 0, 0.18);
  --template-outline-style: solid;
  --template-outline-border: rgba(0, 0, 0, 0.26);
}

html.theme-light .template-preview--glass {
  --text-strong: #1a1a1a;
  --text: #222222;
  --text-soft: #4b4b4b;
  --text-muted: #6b6b6b;
  --border: rgba(255, 255, 255, 0.5);
  --border-strong: rgba(255, 255, 255, 0.68);
  --accent: #111111;
  --accent-soft: rgba(0, 0, 0, 0.1);
  --accent-shadow: rgba(0, 0, 0, 0.18);
  --surface-1: rgba(255, 255, 255, 0.55);
  --surface-2: rgba(255, 255, 255, 0.38);
  --surface-3: rgba(255, 255, 255, 0.22);
  --template-panel-bg: linear-gradient(
    140deg,
    rgba(255, 255, 255, 0.62),
    rgba(255, 255, 255, 0.22)
  );
  --template-panel-border: rgba(255, 255, 255, 0.52);
  --template-panel-shadow: 0 18px 42px -28px rgba(61, 69, 99, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.55);
  --template-card-bg: linear-gradient(
    140deg,
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.26)
  );
  --template-card-border: rgba(255, 255, 255, 0.48);
  --template-card-shadow: 0 14px 30px -22px rgba(61, 69, 99, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  --template-outline-style: dashed;
  --template-outline-border: rgba(0, 0, 0, 0.26);
}

html.theme-light .template-preview--outline {
  --surface-1: transparent;
  --surface-2: transparent;
  --surface-3: rgba(0, 0, 0, 0.05);
  --template-panel-bg: transparent;
  --template-panel-border: rgba(0, 0, 0, 0.42);
  --template-panel-shadow: none;
  --template-card-bg: transparent;
  --template-card-border: rgba(0, 0, 0, 0.42);
  --template-card-shadow: none;
  --template-outline-style: dashed;
  --template-outline-border: rgba(0, 0, 0, 0.48);
}
```

---

## 2. App.tsx — Theme state and toggle

```tsx
// State (replace hardcoded "dark" with this)
const [theme, setTheme] = useState<"dark" | "light">(() => {
  if (typeof window === "undefined") {
    return "light";
  }
  const saved = window.localStorage.getItem("theme");
  return saved === "dark" ? "dark" : "light";
});

// Effect to apply class
useEffect(() => {
  document.documentElement.classList.toggle("theme-light", theme === "light");
  window.localStorage.setItem("theme", theme);
}, [theme]);

// Pass to Navbar
<Navbar
  theme={theme}
  onToggleTheme={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
/>
```

---

## 3. Navbar.tsx — Toggle button and props

```tsx
// Props type
type NavbarProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

// Toggle button (place inside nav area)
<button
  type="button"
  onClick={onToggleTheme}
  aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
  className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface-2)] text-[color:var(--text-soft)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--text-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface-1)]"
>
  {theme === "dark" ? (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 3.5v2.2M12 18.3v2.2M4.2 12h2.2M17.6 12h2.2M6.1 6.1l1.6 1.6M16.3 16.3l1.6 1.6M6.1 17.9l1.6-1.6M16.3 7.7l1.6-1.6" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M21 14.5a8.5 8.5 0 0 1-11.5-11 9.5 9.5 0 1 0 11.5 11Z" />
    </svg>
  )}
</button>
```

---

## 4. useTheme hook (used in CustomScripts.tsx, SecurityTools.tsx)

```tsx
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
```

---

## 5. Light image assets (keep the files, just not imported)

- `src/assets/images/home/custom-scripts-light.jpeg`
- `src/assets/images/home/security-tools-light.jpeg`
- `src/assets/images/home/case-studies-light.jpeg`
- `src/assets/images/home/security-checklists-light.jpeg`
- `src/assets/images/home/Custom scripts light (base).jpeg`
