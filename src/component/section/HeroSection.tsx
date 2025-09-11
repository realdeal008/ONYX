"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionDivider from "../SectionDivider";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Orb parallax transforms
  const orbGoldX = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const orbGoldY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const orbSilverX = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const orbSilverY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <div>
    <section id="hero" className="hero" ref={ref}>
      <div className="Hero-containers">
        <div className="hero-content">
          <motion.h1
            className="shimmer-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Elevating Digital Experiences with Expert Full-Stack Craftsmanship
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            Mastering React, Flutter, Rust, Node.js & More to Build Tomorrow&apos;s
            Solutions Today
          </motion.p>

          <motion.a
            href="#portfolio"
            className="cta-button luxury-btn"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Explore My Work
          </motion.a>
        </div>
      </div>

      {/* Luxury Decorations */}
      <div className="hero-decoration" />

      {/* Parallax Orbs */}
      <motion.div
        className="orb orb-gold"
        style={{ x: orbGoldX, y: orbGoldY }}
      />
      <motion.div
        className="orb orb-silver"
        style={{ x: orbSilverX, y: orbSilverY }}
      />

      
    </section>

    <SectionDivider />
    </div>
  );
}