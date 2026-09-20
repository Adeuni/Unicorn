"use client";

import { motion, type Variants } from "motion/react";
import { Sparkles } from "lucide-react";
import {
  ContentWritingAnim,
  CopywritingAnim,
  GraphicDesignAnim,
  WebDesignAnim,
} from "./ServiceIcons";
import TypewriterText from "./TypewriterText";

const services = [
  {
    number: "01",
    anim: WebDesignAnim,
    title: "Web Design",
    text: "Websites and landing pages designed around your brand, audience, and goals.",
    tags: ["Website", "UX/UI", "Responsive", "Landing Pages"],
  },
  {
    number: "02",
    anim: GraphicDesignAnim,
    title: "Graphic Design",
    text: "Visuals that give your brand a clear, memorable, and polished presence.",
    tags: ["Branding", "Social Media", "Print", "Illustration"],
  },
  {
    number: "03",
    anim: ContentWritingAnim,
    title: "Content Writing",
    text: "Clear, engaging content that communicates your ideas and connects with people.",
    tags: ["Blog", "SEO", "Editing", "Storytelling"],
  },
  {
    number: "04",
    anim: CopywritingAnim,
    title: "Copywriting",
    text: "Strategic words designed to capture attention and move people to action.",
    tags: ["Ad Copy", "Email", "Sales Pages", "Product Copy"],
  },
];

const row: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="bg-[#f8f4ec] px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="group inline-flex cursor-default items-center gap-2 rounded-full border border-[#19151f]/12 bg-white/50 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[#5d3c8d] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#19151f]/25 hover:bg-[#19151f] hover:text-white hover:shadow-lg">
              <Sparkles
                size={12}
                className="text-[#b89452] transition-transform duration-300 group-hover:rotate-45"
              />
              What I Offer
            </span>
            <h2 className="mt-5 max-w-2xl text-4xl font-extrabold uppercase leading-[1.02] tracking-[-0.02em] md:text-5xl">
              Ways I can help you
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#6b6270]">
            <TypewriterText text="From the first sketch to the final launch, these are the four core ways I bring a brand's ideas to life." />
          </p>
        </div>

        <div className="mt-16 border-t border-[#19151f]/10">
          {services.map((service) => (
            <motion.div
              key={service.number}
              variants={row}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="grid gap-6 border-b border-[#19151f]/10 py-10 lg:grid-cols-[3rem_14rem_1fr_14rem] lg:items-center lg:gap-10"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#19151f] text-sm font-semibold text-white">
                {service.number}
              </span>

              <div className="flex h-32 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-[#d9c7f3] to-[#b89452]/30 lg:h-36">
                <service.anim />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold uppercase tracking-tight lg:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-[#6b6270]">
                  <TypewriterText text={service.text} />
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7654a8]">
                  Includes
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="cursor-default rounded-full border border-[#19151f]/15 bg-white px-3 py-1 text-xs font-medium text-[#4c4355] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#7654a8] hover:bg-[#7654a8] hover:text-white hover:shadow-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
