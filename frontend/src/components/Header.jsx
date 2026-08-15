import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home", id: "home" },
  { to: "/assetti-societari", label: "Assetti societari", id: "assetti-societari" },
  { to: "/processi", label: "Processi", id: "processi" },
  { to: "/finanza", label: "Finanza", id: "finanza" },
  { to: "/percorso", label: "Percorso", id: "percorso" },
  { to: "/referenze", label: "Referenze", id: "referenze" },
  { to: "/contatti", label: "Contatti", id: "contatti" },
];

const linkClass = ({ isActive }) =>
  `text-[15px] transition-colors duration-300 ${
    isActive ? "text-navy" : "text-gray-500 hover:text-navy"
  }`;

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      data-testid="site-header"
      className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          data-testid="brand-link"
          onClick={() => setOpen(false)}
          className="text-[15px] font-semibold tracking-tight text-navy"
        >
          Alessandro Immobile
        </Link>

        <nav className="hidden md:flex items-center gap-9" data-testid="desktop-nav">
          {NAV.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              end={item.to === "/"}
              className={linkClass}
              data-testid={`nav-${item.id}-link`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden text-gray-900"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          data-testid="mobile-menu-toggle"
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <nav
          className="md:hidden border-t border-gray-200 bg-white px-6 py-6 flex flex-col gap-5"
          data-testid="mobile-nav"
        >
          {NAV.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setOpen(false)}
              className={linkClass}
              data-testid={`mobile-nav-${item.id}-link`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};
