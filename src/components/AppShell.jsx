import { Link, Outlet } from "react-router-dom";
import BrandMark from "./BrandMark";
import Icon from "./icons";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import { socialLinks } from "../data/siteContent";

const navItems = [
  { label: "Capabilities", hash: "capabilities" },
  { label: "AI Core", hash: "ai-core" },
  { label: "Showcase", hash: "showcase" },
  { label: "Models", hash: "engagement" },
  { label: "Contact", hash: "contact" }
];

export default function AppShell() {
  useRevealOnScroll();

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="header-shell">
          <Link className="brand" to="/" aria-label="VMT home">
            <BrandMark alt="VMT logo" />
            <span className="brand-copy">
              <strong>VMT</strong>
              <span>AI engineering company</span>
            </span>
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {navItems.map((item) => (
              <Link key={item.hash} to={`/#${item.hash}`}>
                {item.label}
              </Link>
            ))}
          </nav>

          <Link className="header-cta" to="/#contact">
            Build With Us
          </Link>
        </div>
      </header>

      <Outlet />

      <footer className="footer">
        <div className="container">
          <div className="footer-shell" data-reveal>
            <div className="footer-branding">
              <BrandMark alt="VMT logo" />
              <div>
                <strong>VMT</strong>
                <p className="footer-copy">
                  AI engineering company building intelligent systems, scalable applications, and digital
                  infrastructure with a premium product mindset.
                </p>
              </div>
            </div>

            <div className="footer-links">
              {socialLinks.map((item) => (
                <a key={item.label} className="social-link" href={item.href} aria-label={item.label}>
                  <Icon name={item.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
