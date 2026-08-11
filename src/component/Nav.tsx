"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav id="navbar" className={scrolled ? "scrolled" : ""}>
        <div className="logo">
          Onyx<span>Tech</span>
        </div>

        {/* Desktop links */}
        <ul className="nav-links">
          <li><a href="" onClick={(e) => { e.preventDefault(); handleNavClick("about"); }}>About</a></li>
          <li><a href="" onClick={(e) => { e.preventDefault(); handleNavClick("projects"); }}>Projects</a></li>
          <li><a href="" onClick={(e) => { e.preventDefault(); handleNavClick("skills"); }}>Skills</a></li>
          <li><a href="" onClick={(e) => { e.preventDefault(); handleNavClick("contact"); }}>Contact</a></li>
        </ul>

        <button
          className="nav-cta desktop-cta"
          onClick={() => handleNavClick("contact")}
        >
          Let's Talk
        </button>

        {/* Mobile hamburger */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul className="mobile-nav-links">
          <li><a href="" onClick={(e) => { e.preventDefault(); handleNavClick("about"); }}>About</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick("projects"); }}>Projects</a></li>
          <li><a href="" onClick={(e) => { e.preventDefault(); handleNavClick("skills"); }}>Skills</a></li>
          <li><a href="" onClick={(e) => { e.preventDefault(); handleNavClick("contact"); }}>Contact</a></li>
        </ul>
        <button
          className="nav-cta mobile-cta"
          onClick={() => handleNavClick("contact")}
        >
          Let's Talk
        </button>
      </div>
    </>
  );
}