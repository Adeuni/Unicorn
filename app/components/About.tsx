"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="px-6 pb-28 pt-36 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-[family-name:var(--font-display)] text-6xl font-extrabold uppercase leading-[0.95] tracking-tight text-[#19151f] md:text-7xl lg:text-8xl">
          About Me
        </h2>

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="max-w-lg text-lg font-semibold text-[#7654a8] md:text-xl">
              Your design &amp; content partner
            </p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="mt-6 max-w-md text-base font-bold leading-7 text-[#4c4355]"
            >
              I&apos;m Adesewa Ademola, a web designer, graphic designer,
              content writer, and copywriter, currently studying at LAUTECH.
              I&apos;ve spent the last three years mastering graphic design
              and two building websites, because I believe design is one of
              the clearest ways to get an idea across. I bring the same
              curiosity and care to every project I touch. I&apos;m just
              getting started, and I&apos;d love for yours to be next.
            </motion.p>

            <a
              href="#work"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#19151f]/25 px-7 py-3.5 text-sm font-medium transition hover:border-[#7654a8] hover:text-[#7654a8]"
            >
              See how I work
              <ArrowRight size={15} />
            </a>
          </div>

          <div className="relative flex items-center justify-center py-6">
            {/* Soft brand-colored backdrop so the flat-cutout illustration
                doesn't float on bare page background. */}
            <div className="absolute h-[85%] w-[85%] rounded-[3rem] bg-gradient-to-br from-[#d9c7f3]/60 to-[#b89452]/20 blur-2xl" />

            {/* Static illustration. mix-blend-multiply drops the image's
                flat white background into the page's cream tone since the
                source PNG has no alpha channel. */}
            <div className="relative aspect-[1437/1095] w-full max-w-lg">
              <Image
                src="/adesewa-avatar.png"
                alt="Illustrated avatar of Adesewa Ademola waving, laptop on her lap"
                fill
                className="object-contain mix-blend-multiply"
                sizes="(max-width: 1024px) 90vw, 520px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
