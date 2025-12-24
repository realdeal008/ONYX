"use client";

import { useEffect, useRef } from "react";

export default function Onyx3D() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current!;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * -12;

      el.style.transform = `
        rotateX(${y}deg)
        rotateY(${x}deg)
        translateZ(60px)
      `;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="onyx-3d-stage">
      <div ref={ref} className="onyx-3d">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="onyx-layer"
            style={{ transform: `translateZ(${-i * 3}px)` }}
          >
            ONYX
          </span>
        ))}
      </div>
    </div>
  );
}
