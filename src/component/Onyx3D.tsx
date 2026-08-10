"use client";

import { useEffect, useRef } from "react";

const LETTERS = "ONYXTECH".split("");
const LAYER_COUNT = 18;
const ARC_DEGREES = 56;

export default function Onyx3D() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current!;
    if (!el) return;

    const BASE_TILT = 16;

    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 14;
      const y = (e.clientY / window.innerHeight - 0.5) * -14;

      el.style.transform = `
        rotateX(${BASE_TILT + y}deg)
        rotateY(${x}deg)
        translateZ(60px)
      `;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const getArc = (i: number) => {
    const mid = (LETTERS.length - 1) / 2;
    const dist = (i - mid) / mid;
    const angle = dist * (ARC_DEGREES / 2);
    const lift = -Math.pow(Math.abs(dist), 1.6) * 26;
    return { rotateX: angle, translateY: lift };
  };

  return (
    <div className="onyx-3d-stage">
      <div ref={ref} className="onyx-3d">
        {LETTERS.map((letter, i) => {
          const arc = getArc(i);
          return (
            <div
              key={i}
              className="letter-group"
              style={{
                transform: `rotateX(${arc.rotateX}deg) translateY(${arc.translateY}px)`,
              }}
            >
              {Array.from({ length: LAYER_COUNT }).map((_, j) => (
                <span
                  key={j}
                  className="onyx-layer"
                  style={{
                    transform: `translateX(-50%) translateY(-50%) translateZ(${-j * 3}px)`,
                    opacity: j === 0 ? 1 : 0.12,
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}