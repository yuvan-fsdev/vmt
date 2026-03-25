import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
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
  const [isMobileView, setIsMobileView] = useState(() =>
    window.matchMedia("(max-width: 980px)").matches
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useRevealOnScroll();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 980px)");

    function handleViewportChange(event) {
      setIsMobileView(event.matches);
      if (!event.matches) {
        setMenuOpen(false);
      }
    }

    setIsMobileView(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleViewportChange);

    return () => mediaQuery.removeEventListener("change", handleViewportChange);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!menuOpen || !isMobileView) {
      document.body.style.removeProperty("overflow");
      return undefined;
    }

    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.removeProperty("overflow");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileView, menuOpen]);

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className={`header-shell ${menuOpen ? "menu-open" : ""}`}>
          <Link className="brand" to="/" aria-label="VMT home">
            <BrandMark alt="VMT logo" />
            <span className="brand-copy">
              <strong>VMT</strong>
              <span>AI engineering company</span>
            </span>
          </Link>

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <div
            className={`header-menu-backdrop ${menuOpen ? "is-visible" : ""}`}
            onClick={() => setMenuOpen(false)}
          />

          <div id="site-menu" className={`header-menu ${menuOpen ? "is-open" : ""}`}>
            <nav className="nav-links" aria-label="Primary">
              {navItems.map((item) => (
                <Link key={item.hash} to={`/#${item.hash}`} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link className="header-cta" to="/#contact" onClick={() => setMenuOpen(false)}>
              Build With Us
            </Link>
          </div>
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
