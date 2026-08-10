"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const icons = [
  "/icons/nextjs.svg",
  "/icons/react.svg",
  "/icons/flutter.svg",
  "/icons/typescript.svg",
  "/icons/rust.svg",
];

export default function TechIcons3D() {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [positions, setPositions] = useState<{ top: number; left: number }[]>(
    []
  );

// Generate positions that scatter icons across the full screen
  // while keeping them fully on-screen (percentage-based safe margins)
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const margin = isMobile ? 12 : 15;

    // Position icons in corners and edges, avoiding the center where SVG and Onyx3D are
    const pos = icons.map((_, i) => {
      let top, left;
      
      // Distribute icons across 4 corners and edges
      const placement = i % 5;
      
      switch (placement) {
        case 0: // Top-left
          top = margin + Math.random() * 20;
          left = margin + Math.random() * 20;
          break;
        case 1: // Top-right
          top = margin + Math.random() * 20;
          left = 100 - margin - Math.random() * 20;
          break;
        case 2: // Bottom-left
          top = 100 - margin - Math.random() * 30;
          left = margin + Math.random() * 20;
          break;
        case 3: // Bottom-right
          top = 100 - margin - Math.random() * 30;
          left = 100 - margin - Math.random() * 20;
          break;
        case 4: // Top center or sides
          top = margin + Math.random() * 15;
          left = Math.random() > 0.5 
            ? margin + Math.random() * 20 
            : 100 - margin - Math.random() * 20;
          break;
        default:
          top = 50;
          left = 50;
      }
      
      return { top, left };
    });

    setPositions(pos);
  }, []);

  useEffect(() => {
    if ("ontouchstart" in window) return;

    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * -15;

      setMousePos({ x, y });
      
      const el = ref.current;
      if (!el?.style) return;

      // Apply 3D effect to container
      el.style.transform = `
        perspective(1200px)
        rotateX(${y * 0.3}deg)
        rotateY(${x * 0.3}deg)
        translateZ(0)
      `;

      // Apply individual 3D effects to each icon
      const icons = el.querySelectorAll(".tech-icon-wrapper");
      icons.forEach((icon: Element) => {
        const htmlIcon = icon as HTMLElement;
        htmlIcon.style.transform = `
          perspective(1000px)
          translate(-50%, -50%)
          rotateX(${y * 0.5}deg)
          rotateY(${x * 0.5}deg)
          translateZ(${50}px)
        `;
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div ref={ref} className="tech-layer" style={{ transformStyle: "preserve-3d" }}>
      {icons.map((src, i) => (
        <div
          key={i}
          className="tech-icon-wrapper"
          style={{
            top: `${positions[i]?.top ?? 50}%`,
            left: `${positions[i]?.left ?? 50}%`,
            animationDelay: `${i * 2}s`,
            transform: `translateZ(${20 + i * 15}px)`,
          }}
        >
          <Image
            src={src}
            width={120}
            height={120}
            className="tech-icon"
            alt="Tech icon"
            priority={i < 2}
          />
        </div>
      ))}
    </div>
  );
}
