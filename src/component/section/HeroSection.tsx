"use client";

import MatrixRain3D from "@/component/MatrixRain";
import TechIcons3D from "@/component/TechIcons3D";
import Onyx3D from "@/component/Onyx3D";

export default function HeroSection() {
  return (
    <section className="hero">
      {/* Background effects */}
      <div className="hero-bg">
        <MatrixRain3D />
        <TechIcons3D />
      </div>

      {/* Foreground */}
      <div className="hero-content">
        <Onyx3D />
      </div>
    </section>
  );
}
