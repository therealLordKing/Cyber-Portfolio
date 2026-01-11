import { NavLink } from "react-router-dom";

const linkBase =
  "rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface-1)]";
const linkInactive =
  "text-[color:var(--text-muted)] hover:text-[color:var(--text-strong)]";
const linkActive =
  "bg-[color:var(--accent-soft)] text-[color:var(--text-strong)] shadow-[0_0_0_1px_var(--border-strong)]";

type NavbarProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  return (
    <header className="frosted-panel sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left sm:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <NavLink
            to="/"
            className="font-orbitron brand-glow text-2xl font-semibold tracking-[0.18em] text-[color:var(--text-strong)] sm:text-3xl"
            aria-label="Go to home"
            data-text="often136"
          >
            often136
          </NavLink>
          <span className="font-plex-mono text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
            Cyber solutions studio
          </span>
        </div>

        <nav
          aria-label="Primary"
          className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
        >
          <ul className="flex w-full flex-wrap items-center justify-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-2)] px-3 py-2 shadow-[0_12px_40px_-32px_var(--shadow)] sm:w-auto">
            {[
              { to: "/", label: "Home" },
              { to: "/cyber-portfolio", label: "Cyber Portfolio" },
              { to: "/projects", label: "Projects" },
              { to: "/website-designs", label: "Website Designs" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? linkActive : linkInactive}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface-2)] text-[color:var(--text-soft)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--text-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface-1)]"
          >
            {theme === "dark" ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <circle cx="12" cy="12" r="4.5" />
                <path d="M12 3.5v2.2M12 18.3v2.2M4.2 12h2.2M17.6 12h2.2M6.1 6.1l1.6 1.6M16.3 16.3l1.6 1.6M6.1 17.9l1.6-1.6M16.3 7.7l1.6-1.6" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M21 14.5a8.5 8.5 0 0 1-11.5-11 9.5 9.5 0 1 0 11.5 11Z" />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
