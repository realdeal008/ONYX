"use client";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding */}
        <div className="footer-branding" aria-label="Branding">
          <a href="#hero" className="footer-logo">
            ONYX
          </a>
          <p className="footer-tagline">
            Crafting digital excellence with passion & precision.
          </p>
        </div>

        {/* Navigation */}
        <nav className="footer-nav" aria-label="Footer Navigation">
          <ul>
            <li>
              <a href="#about" tabIndex={0}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" tabIndex={0}>
                Skills
              </a>
            </li>
            <li>
              <a href="#portfolio" tabIndex={0}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" tabIndex={0}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Links */}
        <div className="footer-social" aria-label="Social Media Links">
          <a
            href="#"
            aria-label="GitHub"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            🐙
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            💼
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            🐦
          </a>
          <a
            href="#"
            aria-label="Dribbble"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            🎨
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="footer-bottom">
        <p>© 2025 ONYX. All rights reserved.</p>
      </div>
    </footer>
  );
}
