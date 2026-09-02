import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { navLinks } from "../data/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNavigation = () => {
    setOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container nav-inner">
        <Link
          className="brand"
          to="/"
          onClick={handleNavigation}
          aria-label="EZY — Eh Zhong Yu home"
        >
          <span className="brand-mark" aria-hidden="true">
            <span>E</span>
            <span>Z</span>
            <span>Y</span>
          </span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-controls="nav-panel"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle-bars" aria-hidden="true" />
        </button>

        <nav
          className={`nav-panel${open ? " is-open" : ""}`}
          id="nav-panel"
          aria-label="Primary"
        >
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  className={({ isActive }) =>
                    `nav-link${isActive ? " is-active" : ""}`
                  }
                  to={link.href}
                  end={link.href === "/"}
                  onClick={handleNavigation}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
