"use client";

import { motion } from "motion/react";
import { Feather, Megaphone } from "lucide-react";

export function WebDesignAnim() {
  return (
    <div className="h-16 w-20 overflow-hidden rounded-md border-2 border-[#19151f] bg-white/40">
      <div className="flex h-4 items-center gap-1 border-b-2 border-[#19151f] px-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#19151f]/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#19151f]/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#19151f]/70" />
      </div>
      <div className="flex flex-col gap-2 p-2.5">
        <motion.div
          className="h-2 rounded-full bg-[#19151f]"
          animate={{ width: ["0%", "75%", "75%", "0%"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            times: [0, 0.35, 0.8, 1],
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="h-2 rounded-full bg-[#7654a8]/60"
          animate={{ width: ["0%", "50%", "50%", "0%"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0.35,
            times: [0, 0.35, 0.8, 1],
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}

export function GraphicDesignAnim() {
  const dots = [
    { cx: 24, cy: 22, colors: ["#7654a8", "#b89452", "#19151f", "#7654a8"] },
    { cx: 36, cy: 20, colors: ["#b89452", "#19151f", "#7654a8", "#b89452"] },
    { cx: 30, cy: 32, colors: ["#19151f", "#7654a8", "#b89452", "#19151f"] },
  ];

  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <path
        d="M28 6C15.85 6 6 14.95 6 26c0 8 5 12 10 12h3a3.5 3.5 0 0 1 3.5 3.5v2c0 2.5 1.8 5.5 5.5 5.5 12 0 22-10 22-22C50 15 40.15 6 28 6Z"
        stroke="#19151f"
        strokeWidth="2"
      />
      {dots.map((dot, i) => (
        <motion.circle
          key={i}
          cx={dot.cx}
          cy={dot.cy}
          r="3.4"
          animate={{ fill: dot.colors }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}

export function ContentWritingAnim() {
  return (
    <div className="flex h-16 w-20 flex-col items-center justify-center gap-3">
      <motion.div
        animate={{ x: [-8, 8, -8], rotate: [-10, 10, -10] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Feather size={26} strokeWidth={1.5} className="text-[#19151f]" />
      </motion.div>
      <svg width="52" height="10" viewBox="0 0 52 10">
        <motion.path
          d="M2 5 Q 13 1, 26 5 T 50 5"
          fill="none"
          stroke="#19151f"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            times: [0, 0.45, 0.85, 1],
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}

export function CopywritingAnim() {
  return (
    <div className="relative flex h-16 w-20 items-center justify-center">
      <Megaphone size={28} strokeWidth={1.5} className="z-10 text-[#19151f]" />
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border-2 border-[#b89452]"
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: [0, 0.8, 0], scale: [0.4, 1.8, 1.8] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
