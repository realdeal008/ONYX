"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      updateHtmlTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      updateHtmlTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const updateHtmlTheme = (theme: "light" | "dark") => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
  };

  // New toggle with transition animation
  const toggleTheme = () => {
    if (isTransitioning) return; // prevent spamming

    setIsTransitioning(true);

    // Animate overlay fade in (0 → 1)
    // After 300ms, switch theme, then fade out overlay
    setTimeout(() => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      updateHtmlTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    }, 300);

    // End transition after 600ms total
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  return (
    <>
      {/* Transition overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            key="theme-transition-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`theme-transition-overlay ${theme === "light" ? "light" : "dark"}`}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

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

          {/* Right controls: Theme toggle + Mobile toggle */}
          <div className="navbar-controls">
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              className="theme-toggle-btn"
              disabled={isTransitioning}
            >
              <AnimatePresence initial={false}>
                {theme === "light" ? (
                  <motion.span
                    key="moon"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon size={24} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="sun"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun size={24} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            

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