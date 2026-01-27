import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const linkBase =
  "rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface-1)]";
const linkInactive =
  "text-[color:var(--text-muted)] hover:text-[color:var(--text-strong)] hover:bg-[color:var(--accent-soft)]";
const linkActive =
  "bg-[color:var(--accent-soft)] text-[color:var(--text-strong)] shadow-[0_0_0_1px_var(--border-strong)]";

type DropdownItem = {
  to: string;
  label: string;
  disabled?: boolean;
  external?: boolean;
  section?: string;
};

type NavItem = {
  to?: string;
  label: string;
  dropdown?: DropdownItem[];
};

const navItems: NavItem[] = [
  { to: "/", label: "Home" },
  {
    label: "Cyber Solutions",
    dropdown: [
      { to: "/cyber-solutions/custom-scripts", label: "Custom Scripts" },
      { to: "/cyber-solutions/security-tools", label: "Security Tools" },
    ],
  },
  {
    label: "Home Labs",
    dropdown: [
      { to: "/home-labs/active-directory", label: "Active Directory Enterprise Lab", disabled: true },
      { to: "/home-labs/small-business", label: "Small Business Network Lab", disabled: true },
      { to: "/home-labs/soc-siem", label: "SOC/SIEM Monitoring Lab", disabled: true },
      { to: "/home-labs/vulnerable-web-app", label: "Vulnerable Web App + Internal Network Lab" },
      { to: "/home-labs/zero-trust", label: "Zero-Trust Network Lab", disabled: true },
      { to: "/home-labs/malware-analysis", label: "Malware Analysis/Isolation Lab", disabled: true },
      { to: "/home-labs/honeypot", label: "Honeypot & Deception Lab", disabled: true },
      { to: "/home-labs/incident-response", label: "Incident Response Simulation Lab", disabled: true },
    ],
  },
  { to: "/case-studies", label: "Case Studies" },
  {
    label: "Response Playbooks",
    dropdown: [
      { to: "/playbooks/my-playbooks", label: "My Playbooks" },
      { to: "/playbooks/industry-standards", label: "Industry Standard Links" },
    ],
  },
  {
    label: "Website Designs",
    dropdown: [
      { to: "/website-designs", label: "Browse All", section: "One page designs" },
      { to: "/website-designs/one-page-brand-site", label: "One-page brand site" },
      { to: "/website-designs/service-studio", label: "Service studio" },
      { to: "/website-designs/online-storefront", label: "Online storefront" },
      { to: "/website-designs/event-landing", label: "Event landing" },
    ],
  },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];


function DropdownMenu({
  item,
  isOpen,
  onToggle,
  onClose,
}: {
  item: NavItem;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isActive = item.dropdown?.some((dropItem) =>
    location.pathname.startsWith(dropItem.to)
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={onToggle}
        className={`${linkBase} ${isActive ? linkActive : linkInactive} inline-flex items-center gap-1.5`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.label}
        <span
          className={`transition-transform duration-200 text-[0.6rem] ${isOpen ? "rotate-0" : "rotate-90"}`}
          aria-hidden="true"
        >
          {isOpen ? "▲" : "▶"}
        </span>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 z-50 min-w-[240px] rounded-xl border border-[color:var(--border)] bg-[color:var(--dropdown-bg)] p-2 shadow-lg animate-dropdown">
          <ul className="flex flex-col gap-1">
            {item.dropdown?.map((dropItem, index) => (
              <li key={dropItem.to}>
                {dropItem.section && (
                  <p className={`px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--text-muted)] ${index > 0 ? "mt-2" : ""}`}>
                    {dropItem.section}
                  </p>
                )}
                {dropItem.disabled ? (
                  <span
                    className="block rounded-lg px-3 py-2 text-xs font-medium text-[color:var(--text-muted)] line-through opacity-60 cursor-not-allowed"
                  >
                    {dropItem.label}
                  </span>
                ) : dropItem.external ? (
                  <a
                    href={dropItem.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg px-3 py-2 text-xs font-medium text-[color:var(--text-soft)] transition hover:bg-[color:var(--accent-soft)] hover:text-[color:var(--text-strong)]"
                    onClick={onClose}
                  >
                    {dropItem.label}
                  </a>
                ) : (
                  <NavLink
                    to={dropItem.to}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2 text-xs font-medium transition ${
                        isActive
                          ? "bg-[color:var(--accent-soft)] text-[color:var(--text-strong)]"
                          : "text-[color:var(--text-soft)] hover:bg-[color:var(--accent-soft)] hover:text-[color:var(--text-strong)]"
                      }`
                    }
                    onClick={onClose}
                  >
                    {dropItem.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleToggle = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const handleClose = () => {
    setOpenDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)]">
      <div className="relative z-10 mx-auto flex flex-col items-center gap-4 px-5 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left sm:px-8 sm:py-8 lg:px-10">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <NavLink
            to="/"
            aria-label="Go to home"
            className="neon-sign-holder relative inline-block"
          >
            <span className="cyber-title font-orbitron text-lg font-bold uppercase tracking-[0.18em] sm:text-xl">
              one36ix studios
            </span>
            <span className="cyber-title-frame" aria-hidden="true">
              <span className="cyber-title-corner cyber-title-corner--tl" />
              <span className="cyber-title-corner cyber-title-corner--tr" />
              <span className="cyber-title-corner cyber-title-corner--bl" />
              <span className="cyber-title-corner cyber-title-corner--br" />
              <span className="cyber-title-edge cyber-title-edge--top" />
              <span className="cyber-title-edge cyber-title-edge--bottom" />
              <span className="cyber-title-edge cyber-title-edge--left" />
              <span className="cyber-title-edge cyber-title-edge--right" />
            </span>
          </NavLink>
        </div>

        <nav
          aria-label="Primary"
          className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
        >
          <div className="flex w-full flex-wrap items-center justify-center gap-2 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-2)] px-3 py-2 shadow-[0_12px_40px_-32px_var(--shadow)] sm:w-auto">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <DropdownMenu
                    item={item}
                    isOpen={openDropdown === item.label}
                    onToggle={() => handleToggle(item.label)}
                    onClose={handleClose}
                  />
                ) : (
                  <NavLink
                    to={item.to!}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `${linkBase} ${isActive ? linkActive : linkInactive}`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
