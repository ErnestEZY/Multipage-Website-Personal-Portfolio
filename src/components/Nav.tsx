import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { navLinks } from "../data/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container nav-inner">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          Zhong <span>Yu</span>
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
                  onClick={() => setOpen(false)}
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
