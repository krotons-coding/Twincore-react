import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  lightText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "h-9",
  showText = true,
  lightText = false,
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Hand-crafted Vectored 'T' Logo based on Twincore IT branding */}
      <svg
        className="h-full w-auto aspect-square overflow-visible"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="topBarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" /> {/* bright blue */}
            <stop offset="50%" stopColor="#ef4444" /> {/* red */}
            <stop offset="100%" stopColor="#22c55e" /> {/* green */}
          </linearGradient>
          <linearGradient id="stemGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" /> {/* red */}
            <stop offset="40%" stopColor="#f59e0b" /> {/* orange-yellow */}
            <stop offset="80%" stopColor="#eab308" /> {/* yellow */}
            <stop offset="100%" stopColor="#22c55e" /> {/* green */}
          </linearGradient>
          {/* Subtle drop shadow to give the logo a premium depth */}
          <filter id="logoShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="#0f172a" floodOpacity="0.12" />
          </filter>
        </defs>

        <g filter="url(#logoShadow)">
          {/* Top Horizontal Rounded Capsule for the 'T' */}
          <path
            d="M 12 36 
               C 12 28, 88 28, 88 36
               C 88 44, 82 44, 75 44 
               L 25 44 
               C 18 44, 12 44, 12 36 Z"
            fill="url(#topBarGradient)"
          />

          {/* Vertical Stem 'U' loop connected to the center bottom of top bar */}
          <path
            d="M 38 41
               L 38 68
               C 38 78, 62 78, 62 68
               L 62 41"
            stroke="url(#stemGradient)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      </svg>

      {showText && (
        <div className="flex flex-col justify-center select-none leading-none">
          <span
            className={`font-sans font-extrabold tracking-tight text-xl ${
              lightText ? "text-white" : "text-slate-900"
            }`}
          >
            Twincore <span className="text-blue-600">IT</span>
          </span>
          <span
            className={`font-sans text-[9px] font-semibold tracking-widest mt-0.5 uppercase ${
              lightText ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Enterprise Solved
          </span>
        </div>
      )}
    </div>
  );
};
