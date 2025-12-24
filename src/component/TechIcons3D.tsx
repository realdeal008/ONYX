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

  useEffect(() => {
    if ("ontouchstart" in window) return;

    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * -10;

      setMousePos({ x, y });
      
      const el = ref.current;
      if (!el?.style) return;

      el.style.transform = `
        perspective(1200px)
        rotateX(${y}deg)
        rotateY(${x}deg)
        translateZ(0)
      `;
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
            top: `${Math.random() * 70 + 15}%`,
            left: `${Math.random() * 70 + 15}%`,
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
