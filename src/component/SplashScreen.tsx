"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface SplashScreenProps {
  children?: React.ReactNode;
}

export default function SplashScreen({ children }: SplashScreenProps) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const particlesContainer = document.getElementById("particles");
    if (particlesContainer) {
      particlesContainer.innerHTML = ""; // Clear existing particles to restart animation on reload
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.left = Math.random() * 100 + "%";
        const size = Math.random() * 10 + 5 + "px";
        particle.style.width = size;
        particle.style.height = size;
        particle.style.animationDelay = Math.random() * 8 + "s";
        particle.style.animationDuration = "8s";
        particlesContainer.appendChild(particle);
      }
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
             className="splash-container splash-3d"
          >
            {/* Hero image */}
            <div className="w-full max-w-md mb-4">
              <Image
                src="/image/onyx.png"
                alt="Futuristic gold ornate logo design for a 2025 tech company featuring sleek metallic curves with glowing edges on a dark cosmic background, symbolizing innovation and elegance"
                width={500}
                height={500}
                className="sp-image"
                loading="eager"
                priority
              />
            </div>

            <div className="particles" id="particles"></div>
            {/* Logo + tagline */}
            <h1 className="splash-logo">Welcome to ONYX</h1>
            <p className="tagline">Innovating the Future, One Spark at a Time</p>

            {/* Particles */}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Render children after splash disappears */}
      {!showSplash && children}
    </>
  );
}
