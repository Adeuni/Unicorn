"use client";

import { motion, type Variants } from "motion/react";

interface TypewriterTextProps {
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

export default function TypewriterText({
  text,
  className,
  once = false,
  speed = 0.02,
}: TypewriterTextProps) {
  const characters = Array.from(text);

  return (
    <span aria-label={text} className={className}>
      <motion.span
        aria-hidden="true"
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
    </span>
  );
}
