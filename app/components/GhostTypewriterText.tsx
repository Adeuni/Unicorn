"use client";

import { motion, type Variants } from "motion/react";

interface GhostTypewriterTextProps {
  text: string;
  className?: string;
  once?: boolean;
  /** Seconds per character. */
  speed?: number;
}

const container: Variants = {
  hidden: {},
  show: (speed: number) => ({
    transition: { staggerChildren: speed },
  }),
};

const character: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.01 } },
};

/**
 * Renders the dim/faint text as the real, height-defining content, then
 * types a bright overlay copy on top of it in the exact same position —
 * looks like the bold text is being typed over text that was already there.
 */
export default function GhostTypewriterText({
  text,
  className,
  once = false,
  speed = 0.02,
}: GhostTypewriterTextProps) {
  const characters = Array.from(text);

  return (
    <span className={`relative block ${className ?? ""}`}>
      <span aria-hidden="true">{text}</span>

      <motion.span
        aria-hidden="true"
        className="absolute inset-0 text-white"
        initial="hidden"
        whileInView="show"
        viewport={{ once, amount: 0.3 }}
        variants={container}
        custom={speed}
      >
        {characters.map((char, i) => (
          <motion.span key={i} variants={character}>
            {char}
          </motion.span>
        ))}
      </motion.span>

      <span className="sr-only">{text}</span>
    </span>
  );
}
