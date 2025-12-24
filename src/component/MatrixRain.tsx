"use client";

import { useEffect, useRef } from "react";

type Drop = {
  y: number;
  speed: number;
  depth: number;
};

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const isMobile = window.innerWidth < 768;
    const baseSize = isMobile ? 22 : 18;
    const chars = "RUST FLUTTER TYPESCRIPT REACT NEXTJS ONYX TECH ";

    let width = 0;
    let height = 0;
    let columns = 0;
    let drops: Drop[] = [];

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / baseSize);

      drops = Array.from({ length: columns }, () => ({
        y: Math.random() * height,
        speed: Math.random() * 0.8 + 0.4,
        depth: Math.random() * 0.8 + 0.2, // Z-depth
      }));
    };

    resize();
    window.addEventListener("resize", resize);

    let raf = 0;

    const draw = () => {

      // Soft cinematic fade
      ctx.fillStyle = "rgba(3, 10, 18, 0.08)";
      ctx.fillRect(0, 0, width, height);

      ctx.textAlign = "center";

      for (let i = 0; i < columns; i++) {
        const drop = drops[i];

        const scale = drop.depth;
        const x = i * baseSize;
        const y = drop.y;

        ctx.save();
        ctx.setTransform(
          scale, 0, 0, scale,
          x + baseSize / 2,
          y
        );

        ctx.font = `${baseSize}px monospace`;
        ctx.fillStyle = `rgba(47,217,255,${0.3 + scale})`;
        ctx.shadowColor = "rgba(47,217,255,0.6)";
        ctx.shadowBlur = 12 * scale;

        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, 0, 0);

        ctx.restore();

        drop.y += drop.speed * 14 * scale;

        if (drop.y > height + 100) {
          drop.y = -Math.random() * height * 0.3;
        }
      }
    };

    const animate = () => {
      draw();
      raf = requestAnimationFrame(animate);
    };

    // Pause when tab inactive (performance win)
    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else animate();
    };

    document.addEventListener("visibilitychange", onVisibility);
    animate();

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="matrix-3d"
    />
  );
}
