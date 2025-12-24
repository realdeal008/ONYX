"use client";

import React from "react";

interface SectionDividerProps {
  flip?: boolean;
}

export default function SectionDivider({ flip = false }: SectionDividerProps) {
  return (
    <div className={`section-divider ${flip ? "flip" : ""}`}>
      <svg
        viewBox="0 0 1440 100"
        className="section-divider-svg"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          {/* Gold gradient */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--gold-gradient-start)" />
            <stop offset="50%" stopColor="var(--gold-gradient-mid)" />
            <stop offset="100%" stopColor="var(--gold-gradient-end)" />
          </linearGradient>

          {/* Shimmer sweep */}
          <linearGradient id="shimmerGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.45)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>

          <mask id="shimmerMask">
            <rect
              x="-1440"
              y="0"
              width="1440"
              height="100"
              fill="url(#shimmerGradient)"
            >
              <animate
                attributeName="x"
                from="-1440"
                to="1440"
                dur="3s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;1;0"
                dur="3s"
                repeatCount="indefinite"
              />
            </rect>
          </mask>
        </defs>

        {/* Divider curve */}
        <path
          d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z"
          className="section-divider-path"
        />
      </svg>
    </div>
  );
}
