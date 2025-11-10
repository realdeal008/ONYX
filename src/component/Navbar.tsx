"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
        role="banner"
        aria-label="Primary Navigation"
      >
        
        <nav className="navbar-container" role="navigation" aria-label="Main menu">
          <Link href="/" className="navbar-logo" aria-label="Homepage">
            <Image
              src="/image/My-logo.avif"
              alt="Onyx Logo"
              width={48}
              height={48}
              priority
              className="navbar-logo-img"
            />
            <span className="navbar-logo-text">ONYX</span>
          </Link>

          <div className="navbar-spacer" />
          <ul className="navbar-links" role="menubar">
            {["About", "Projects", "Contact"].map((item) => (
              <li key={item} role="none">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="navbar-link"
                  role="menuitem"
                  tabIndex={0}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Right controls: Mobile toggle only */}
          <div className="navbar-controls">
            <button
              className="navbar-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu with Framer Motion */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="navbar-mobile"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              role="menu"
              aria-label="Mobile menu"
            >
              {["About", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="navbar-mobile-link"
                  role="menuitem"
                  tabIndex={0}
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}