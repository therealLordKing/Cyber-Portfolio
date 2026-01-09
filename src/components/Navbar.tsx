import { NavLink } from "react-router-dom";

const linkBase =
  "rounded-md px-3 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
const linkInactive = "text-slate-200 hover:text-sky-300";
const linkActive = "text-sky-200 underline underline-offset-8";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <NavLink
          to="/cyber-portfolio"
          className="text-sm font-semibold tracking-tight text-white"
          aria-label="Go to cyber portfolio"
        >
          Cyber Portfolio
        </NavLink>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-1">
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
        </nav>
      </div>
    </header>
  );
}
