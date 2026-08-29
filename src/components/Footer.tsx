import { Link } from "react-router-dom";
import { site, navLinks } from "../data/site";
import {
  EmailIcon,
  LocationIcon,
  PhoneIcon,
  SocialIcon,
} from "./Icons";

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
              <span className="meta-row">
                <LocationIcon size={14} />
                <span>{site.location}</span>
              </span>
              <a className="meta-row" href={`mailto:${site.email}`}>
                <EmailIcon size={14} />
                <span>{site.email}</span>
              </a>
              <a
                className="meta-row"
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PhoneIcon size={14} />
                <span>{site.phone}</span>
              </a>
              {socials.length > 0 && (
                <div className="footer-socials">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      className="meta-row"
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SocialIcon label={s.label} size={14} />
                      <span>{s.label}</span>
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
