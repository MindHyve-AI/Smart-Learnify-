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
        {/* Background Elements */}
        <circle cx="300" cy="250" r="180" className="fill-primary/5" />
        <circle cx="900" cy="350" r="200" className="fill-primary/5" />
        
        {/* Main Device Frame */}
        <rect
          x="350"
          y="100"
          width="500"
          height="350"
          rx="20"
          className="fill-background stroke-border stroke-2"
        />
        
        {/* Screen */}
        <rect
          x="370"
          y="120"
          width="460"
          height="290"
          rx="8"
          className="fill-muted/30"
        />
        
        {/* Brain Visualization */}
        <circle
          cx="600"
          cy="200"
          r="60"
          className="fill-primary/10 stroke-primary stroke-[3]"
        />
        
        {/* Neural Network Nodes and Links */}
        {/* Central Node */}
        <circle cx="600" cy="200" r="15" className="fill-primary" />
        
        {/* Surrounding Nodes - Level 1 */}
        <circle cx="550" cy="160" r="10" className="fill-primary/80" />
        <circle cx="650" cy="160" r="10" className="fill-primary/80" />
        <circle cx="550" cy="240" r="10" className="fill-primary/80" />
        <circle cx="650" cy="240" r="10" className="fill-primary/80" />
        
        {/* Surrounding Nodes - Level 2 */}
        <circle cx="510" cy="130" r="8" className="fill-primary/60" />
        <circle cx="690" cy="130" r="8" className="fill-primary/60" />
        <circle cx="510" cy="270" r="8" className="fill-primary/60" />
        <circle cx="690" cy="270" r="8" className="fill-primary/60" />
        
        {/* Surrounding Nodes - Level 3 */}
        <circle cx="480" cy="110" r="6" className="fill-primary/40" />
        <circle cx="720" cy="110" r="6" className="fill-primary/40" />
        <circle cx="480" cy="290" r="6" className="fill-primary/40" />
        <circle cx="720" cy="290" r="6" className="fill-primary/40" />
        
        {/* Connections */}
        {/* Level 1 Connections */}
        <line x1="600" y1="200" x2="550" y2="160" className="stroke-primary stroke-2" />
        <line x1="600" y1="200" x2="650" y2="160" className="stroke-primary stroke-2" />
        <line x1="600" y1="200" x2="550" y2="240" className="stroke-primary stroke-2" />
        <line x1="600" y1="200" x2="650" y2="240" className="stroke-primary stroke-2" />
        
        {/* Level 2 Connections */}
        <line x1="550" y1="160" x2="510" y2="130" className="stroke-primary/80 stroke-[1.5]" />
        <line x1="650" y1="160" x2="690" y2="130" className="stroke-primary/80 stroke-[1.5]" />
        <line x1="550" y1="240" x2="510" y2="270" className="stroke-primary/80 stroke-[1.5]" />
        <line x1="650" y1="240" x2="690" y2="270" className="stroke-primary/80 stroke-[1.5]" />
        
        {/* Level 3 Connections */}
        <line x1="510" y1="130" x2="480" y2="110" className="stroke-primary/60 stroke-1" />
        <line x1="690" y1="130" x2="720" y2="110" className="stroke-primary/60 stroke-1" />
        <line x1="510" y1="270" x2="480" y2="290" className="stroke-primary/60 stroke-1" />
        <line x1="690" y1="270" x2="720" y2="290" className="stroke-primary/60 stroke-1" />
        
        {/* Course Cards */}
        <rect
          x="450"
          y="300"
          width="120"
          height="80"
          rx="8"
          className="fill-card stroke-border"
        />
        <rect
          x="460"
          y="315"
          width="80"
          height="10"
          rx="2"
          className="fill-primary/70"
        />
        <rect
          x="460"
          y="335"
          width="100"
          height="6"
          rx="1"
          className="fill-muted-foreground/30"
        />
        <rect
          x="460"
          y="350"
          width="90"
          height="6"
          rx="1"
          className="fill-muted-foreground/30"
        />
        <rect
          x="460"
          y="365"
          width="70"
          height="6"
          rx="1"
          className="fill-muted-foreground/30"
        />
        
        <rect
          x="630"
          y="300"
          width="120"
          height="80"
          rx="8"
          className="fill-card stroke-border"
        />
        <rect
          x="640"
          y="315"
          width="80"
          height="10"
          rx="2"
          className="fill-primary/70"
        />
        <rect
          x="640"
          y="335"
          width="100"
          height="6"
          rx="1"
          className="fill-muted-foreground/30"
        />
        <rect
          x="640"
          y="350"
          width="90"
          height="6"
          rx="1"
          className="fill-muted-foreground/30"
        />
        <rect
          x="640"
          y="365"
          width="70"
          height="6"
          rx="1"
          className="fill-muted-foreground/30"
        />
        
        {/* Floating Elements */}
        <circle cx="450" cy="170" r="12" className="fill-primary/20 animate-pulse" />
        <circle cx="750" cy="230" r="8" className="fill-primary/30 animate-pulse" />
        <circle cx="490" cy="260" r="5" className="fill-primary/40 animate-pulse" />
        <circle cx="710" cy="170" r="7" className="fill-primary/30 animate-pulse" />
      </svg>
      
      {/* Extra decorative elements with CSS animations */}
      <div className="absolute top-[30%] left-[10%] h-4 w-4 rounded-full bg-primary/40 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
      <div className="absolute top-[60%] left-[75%] h-6 w-6 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: "1.2s" }}></div>
      <div className="absolute top-[15%] left-[65%] h-3 w-3 rounded-full bg-primary/50 animate-pulse" style={{ animationDelay: "0.8s" }}></div>
      <div className="absolute top-[80%] left-[25%] h-5 w-5 rounded-full bg-primary/20 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
    </div>
  );
} 