import * as React from "react";

export default function HeroSvg() {
  return (
    <div className="relative h-[300px] w-full md:h-[400px] lg:h-[500px]">
      <svg
        viewBox="0 0 1200 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <rect
          x="400"
          y="150"
          width="400"
          height="300"
          rx="20"
          className="fill-background stroke-foreground/20 stroke-2"
        />
        
        {/* Brain Icon */}
        <path
          d="M600 200 C630 180, 660 180, 690 200 C710 220, 720 240, 710 260 C720 280, 710 300, 690 320 C660 340, 630 340, 600 320 C580 300, 570 280, 580 260 C570 240, 580 220, 600 200 Z"
          className="stroke-primary stroke-2 fill-none"
        />
        
        {/* Connection Lines */}
        <path
          d="M550 260 L450 260 M450 260 L450 200 M450 260 L450 320"
          className="stroke-foreground/30 stroke-2"
        />
        
        <path
          d="M740 260 L850 260 M850 260 L850 200 M850 260 L850 320"
          className="stroke-foreground/30 stroke-2"
        />
        
        {/* Data Nodes */}
        <circle
          cx="450"
          cy="200"
          r="20"
          className="fill-primary/20 stroke-primary stroke-2"
        />
        
        <circle
          cx="450"
          cy="320"
          r="20"
          className="fill-primary/20 stroke-primary stroke-2"
        />
        
        <circle
          cx="850"
          cy="200"
          r="20"
          className="fill-primary/20 stroke-primary stroke-2"
        />
        
        <circle
          cx="850"
          cy="320"
          r="20"
          className="fill-primary/20 stroke-primary stroke-2"
        />
      </svg>
    </div>
  );
} 