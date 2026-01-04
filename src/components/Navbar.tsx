import { NavLink } from "react-router-dom";

const linkBase =
  "rounded-md px-3 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
const linkInactive = "text-zinc-700 hover:text-zinc-950";
const linkActive = "text-zinc-950 underline underline-offset-8";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <NavLink
          to="/"
          className="text-sm font-semibold tracking-tight text-zinc-950"
          aria-label="Go to home"
        >
          Cyber Portfolio
        </NavLink>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-1">
            {[
              { to: "/", label: "Home" },
              { to: "/projects", label: "Projects" },
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
