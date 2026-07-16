import { Link } from "react-router-dom";
import { site, navLinks } from "../data/site";

export default function Footer() {
  const socials = site.socials.filter((s) => s.href);
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h2 className="footer-title">About</h2>
            <p className="footer-text">{site.footerBlurb}</p>
          </div>

          <div>
            <h2 className="footer-title">Explore</h2>
            <div className="footer-links">
              {navLinks.map((link) => (
                <Link key={link.href} to={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="footer-title">Contact</h2>
            <div className="footer-meta">
              <span>{site.location}</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={`tel:${site.phone.replace(/\s|-/g, "")}`}>{site.phone}</a>
              {socials.length > 0 && (
                <div className="footer-links" style={{ marginTop: "0.75rem" }}>
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
