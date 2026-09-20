"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const marqueeItems = [
  "Web Design",
  "Brand Identity",
  "UI/UX",
  "Graphic Design",
  "Content Writing",
  "Copywriting",
];

function AvailabilityBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7ee08a] opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#7ee08a]" />
      </span>
      Available for new projects
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const springX = useSpring(glowX, { stiffness: 60, damping: 20, mass: 0.6 });
  const springY = useSpring(glowY, { stiffness: 60, damping: 20, mass: 0.6 });

  useEffect(() => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect) {
      glowX.set(rect.width * 0.15);
      glowY.set(rect.height * 0.88);
    }
  }, [glowX, glowY]);

  function handlePointerMove(e: React.PointerEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    glowX.set(e.clientX - rect.left);
    glowY.set(e.clientY - rect.top);
  }

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="relative overflow-hidden bg-[#19151f] text-white"
    >
      {/* GRADIENT BLOBS */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(201,167,255,0.55),transparent_70%)] blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Gold glow follows the cursor, with a soft spring lag so it trails
          rather than snapping straight to the pointer. */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 -ml-60 -mt-60 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(184,148,82,0.35),transparent_70%)] blur-3xl"
        style={{ x: springX, y: springY }}
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-4 lg:px-6">
        {/* HERO CONTENT */}
        <div className="relative grid items-center pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:pt-28">
          <div className="relative z-10 pb-10 pt-10 lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <AvailabilityBadge />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="relative mt-8 max-w-2xl origin-left font-[family-name:var(--font-display)] text-[clamp(2.8rem,7vw,5.2rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.03em]"
            >
              Your idea.
              <br />
              <span className="relative inline-block text-[#c9a7ff]">
                Thoughtfully
                <svg
                  aria-hidden
                  viewBox="0 0 200 20"
                  className="absolute -bottom-3 left-0 h-4 w-full text-[#b89452]"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 14 Q 50 2, 100 12 T 198 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              designed.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-9 max-w-xl text-base leading-7 text-white/60 md:text-lg"
            >
              I&apos;m Adesewa Ademola — a web and graphic designer shaping
              considered digital experiences for ambitious brands. From
              interface to identity to the words that tie it together, I
              craft work that feels as refined as it performs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <a
                href="#work"
                className="group flex items-center gap-3 rounded-full bg-[#c9a7ff] px-6 py-3.5 text-sm font-medium text-[#19151f] transition hover:-translate-y-1"
              >
                View My Work
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#19151f] text-[#c9a7ff] transition group-hover:rotate-45">
                  <ArrowUpRight size={15} />
                </span>
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white transition hover:border-[#c9a7ff] hover:text-[#c9a7ff]"
              >
                Let&apos;s Work Together
              </a>
            </motion.div>
          </div>

          {/* PORTRAIT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative flex h-[360px] items-center justify-center sm:h-[440px] lg:h-[680px] lg:-translate-y-6 lg:justify-end"
          >
            {/* Wrapper sized exactly to the portrait — every ring/badge below
                anchors to this box, so they stay concentric no matter how the
                outer flex container sizes itself. Sized down on small
                screens so the ring never clips off the edge of the phone. */}
            <div className="relative h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] lg:h-[440px] lg:w-[440px]">
              {/* Layered soft halo instead of a hard ring — a quiet glow
                  bleeding outward rather than a drawn outline. */}
              <motion.div
                aria-hidden
                className="absolute -inset-16 rounded-full bg-[radial-gradient(circle,rgba(184,148,82,0.28),transparent_65%)] blur-3xl"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(201,167,255,0.4),transparent_65%)] blur-2xl" />
              <div className="absolute inset-0 rounded-full bg-[#b99aef]/30 blur-[2px]" />

              <div className="relative z-10 h-full w-full overflow-hidden rounded-full ring-1 ring-white/10">
                <Image
                  src="/adesewa-portrait.png"
                  alt="Adesewa Ademola"
                  fill
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 440px"
                  className="object-cover object-[50%_18%]"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -right-6 top-[30%] z-20 hidden max-w-[160px] rounded-2xl border border-white/15 bg-white/10 p-3 shadow-xl backdrop-blur-md sm:block sm:max-w-[190px] sm:p-4 lg:-right-12"
              >
                <p className="text-sm italic leading-snug text-white sm:text-base">
                  Design is a way
                  <br />
                  of solving problems.
                </p>
                <div className="mt-3 h-0.5 w-8 bg-[#b89452]" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* MARQUEE */}
        <div className="relative overflow-hidden border-t border-white/10 py-6">
          <div className="flex w-max animate-marquee gap-10 text-sm font-medium uppercase tracking-[0.15em] text-white/50">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={`${item}-${i}`} className="flex items-center gap-10">
                {item}
                <span className="text-[#b89452]">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
