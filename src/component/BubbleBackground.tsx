"use client";

import React from "react";

const NUM_BUBBLES = 25;

function randomRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

// Metallic gradients
const bubbleColors = [
  "linear-gradient(135deg, #D4AF37, #FFD700)", // gold
  "linear-gradient(135deg, #C0C0C0, #E0E0E0)", // silver
  "linear-gradient(135deg, #B8860B, #DAA520)", // darker gold
];

export default function BubbleBackground({ children }: { children: React.ReactNode }) {
  const bubbles = Array.from({ length: NUM_BUBBLES }).map((_, i) => {
    const size = randomRange(100, 300);
    const style: React.CSSProperties = {
      width: size,
      height: size,
      left: `${randomRange(0, 100)}%`,
      top: `${randomRange(0, 100)}%`,
      animationDuration: `${randomRange(8, 20)}s`,
      opacity: randomRange(0.05, 0.2),
      background: bubbleColors[Math.floor(Math.random() * bubbleColors.length)],
    };

    return <div key={i} className="bubble" style={style} />;
  });

  return (
    <div className="bubble-container">
      {bubbles}
      <div className="bubble-content">{children}</div>
    </div>
  );
}
