"use client";

import * as React from "react";
import { motion } from "framer-motion";

export default function HeroSvg() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative h-[300px] w-full md:h-[400px] lg:h-[500px]"
    >
      <svg
        viewBox="0 0 1200 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <motion.rect
          x="400"
          y="150"
          width="400"
          height="300"
          rx="20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="fill-background stroke-foreground/20 stroke-2"
        />
        
        {/* Brain Icon */}
        <motion.path
          d="M600 200 C630 180, 660 180, 690 200 C710 220, 720 240, 710 260 C720 280, 710 300, 690 320 C660 340, 630 340, 600 320 C580 300, 570 280, 580 260 C570 240, 580 220, 600 200 Z"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="stroke-primary stroke-2 fill-none"
        />
        
        {/* Connection Lines */}
        <motion.path
          d="M550 260 L450 260 M450 260 L450 200 M450 260 L450 320"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="stroke-foreground/30 stroke-2"
        />
        
        <motion.path
          d="M740 260 L850 260 M850 260 L850 200 M850 260 L850 320"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="stroke-foreground/30 stroke-2"
        />
        
        {/* Data Nodes */}
        <motion.circle
          cx="450"
          cy="200"
          r="20"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="fill-primary/20 stroke-primary stroke-2"
        />
        
        <motion.circle
          cx="450"
          cy="320"
          r="20"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="fill-primary/20 stroke-primary stroke-2"
        />
        
        <motion.circle
          cx="850"
          cy="200"
          r="20"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="fill-primary/20 stroke-primary stroke-2"
        />
        
        <motion.circle
          cx="850"
          cy="320"
          r="20"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="fill-primary/20 stroke-primary stroke-2"
        />
      </svg>
    </motion.div>
  );
} 