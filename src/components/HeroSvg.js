import React from 'react';

const HeroSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 800 500"
      style={{ maxWidth: '100%', height: 'auto' }}
    >
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      
      {/* Base */}
      <rect x="100" y="350" width="600" height="30" rx="10" fill="#e5e7eb" />
      
      {/* Monitor */}
      <rect x="200" y="100" width="400" height="250" rx="15" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" />
      <rect x="210" y="110" width="380" height="220" rx="8" fill="#fff" />
      
      {/* Monitor Stand */}
      <rect x="340" y="350" width="120" height="20" rx="5" fill="#d1d5db" />
      <rect x="370" y="320" width="60" height="40" rx="5" fill="#d1d5db" />
      
      {/* Screen Content */}
      <rect x="230" y="130" width="160" height="40" rx="5" fill="url(#gradient2)" />
      <rect x="230" y="180" width="340" height="20" rx="5" fill="#f3f4f6" />
      <rect x="230" y="210" width="320" height="20" rx="5" fill="#f3f4f6" />
      <rect x="230" y="240" width="300" height="20" rx="5" fill="#f3f4f6" />
      <rect x="230" y="270" width="200" height="40" rx="5" fill="url(#gradient1)" />
      
      {/* Decorative Elements */}
      <circle cx="150" cy="200" r="40" fill="url(#gradient2)" />
      <circle cx="650" cy="220" r="30" fill="url(#gradient2)" />
      <circle cx="600" cy="150" r="25" fill="url(#gradient2)" />
      
      {/* Brain Icon */}
      <g transform="translate(500, 160) scale(0.7)">
        <path
          d="M50,25 C50,11.193 38.807,0 25,0 C11.193,0 0,11.193 0,25 C0,38.807 11.193,50 25,50 C38.807,50 50,38.807 50,25 Z"
          fill="url(#gradient1)"
        />
        <path
          d="M40,20 C40,10 32.5,7.5 25,7.5 C17.5,7.5 10,10 10,20 C10,30 17.5,42.5 25,42.5 C32.5,42.5 40,30 40,20 Z"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M25,7.5 C25,7.5 25,25 25,42.5 M10,25 L40,25 M17.5,15 C17.5,15 25,15 32.5,15 M17.5,35 C17.5,35 25,35 32.5,35"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default HeroSvg; 