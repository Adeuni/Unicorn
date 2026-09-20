"use client";

import {
  ArrowRight,
  Feather,
  Layout,
  Mail,
  Megaphone,
  MessageCircle,
  Monitor,
  Palette,
  PenTool,
  ArrowUpRight,
} from "lucide-react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "X", href: "https://x.com/Bees_Crypt" },
  {
    label: "in",
    href: "https://www.linkedin.com/in/adesewa-ademola-58194a381/",
  },
  { label: "f", href: "https://www.facebook.com/share/1EgvY1Hy7Y/" },
  { label: "Fv", href: "#" },
  { label: "Up", href: "https://www.upwork.com/freelancers/~01eea2fb12be60fd29" },
];

const services = [
  {
    number: "01",
    icon: Layout,
    title: "Web Design",
    text: "Websites and landing pages designed around your brand, audience, and goals.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Graphic Design",
    text: "Visuals that give your brand a clear, memorable, and polished presence.",
  },
  {
    number: "03",
    icon: Feather,
    title: "Content Writing",
    text: "Clear, engaging content that communicates your ideas and connects with people.",
  },
  {
    number: "04",
    icon: Megaphone,
    title: "Copywriting",
    text: "Strategic words designed to capture attention and move people to action.",
  },
];

const skillTags = [
  "Web Design",
  "Brand Identity",
  "UI/UX",
  "Content Writing",
  "Copywriting",
  "SEO Basics",
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "Understanding your brand, audience, and goals so every decision has a purpose.",
    tilt: "-rotate-2",
    shift: "lg:mt-0",
  },
  {
    number: "02",
    title: "Design",
    text: "Concepts take shape — layouts, visuals, and words that reflect your brand's voice.",
    tilt: "rotate-1",
    shift: "lg:mt-14",
  },
  {
    number: "03",
    title: "Build",
    text: "Designs become real, working pages and polished assets ready for the world.",
    tilt: "-rotate-1",
    shift: "lg:mt-4",
  },
  {
    number: "04",
    title: "Deliver",
    text: "Final files, clean handoff, and support whenever you need a refresh.",
    tilt: "rotate-2",
    shift: "lg:mt-20",
  },
];

const capabilities = [
  {
    icon: Layout,
    title: "Web Design",
    text: "Responsive sites and landing pages built around your brand and goals.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    text: "Logos, color systems, and a visual language that make you memorable.",
  },
  {
    icon: Monitor,
    title: "UI/UX Design",
    text: "Clean, intuitive interfaces people enjoy using.",
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    text: "Social, print, and marketing visuals with a polished finish.",
  },
  {
    icon: Feather,
    title: "Content Writing",
    text: "Clear, engaging copy that communicates and connects.",
  },
  {
    icon: Megaphone,
    title: "Copywriting",
    text: "Strategic words written to capture attention and drive action.",
  },
];

const projects = [
  {
    tag: "Web Design",
    title: "Featured website project",
    note: "Case study coming next.",
    dark: false,
  },
  {
    tag: "Graphic Design",
    title: "Selected visual work",
    note: "Your strongest graphic projects will live here.",
    dark: true,
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#19151f]/12 bg-white/50 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[#5d3c8d]">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f4ec] text-[#19151f]">
      <Navbar />
      <WhatsAppButton />
      <Hero />

      {/* SERVICES STRIP */}
      <div className="relative z-20 mx-4 -mb-10 rounded-3xl border border-white/60 bg-[#f8f4ec]/95 shadow-xl backdrop-blur-md lg:mx-auto lg:max-w-7xl">
        <div className="grid divide-y divide-[#19151f]/10 md:grid-cols-4 md:divide-x md:divide-y-0">
          {services.map((service) => (
            <div key={service.number} className="p-6 lg:p-7">
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d9c7f3]/60 text-[#7654a8]">
                  <service.icon size={16} />
                </span>
                <span className="text-xs text-[#7654a8]">
                  {service.number}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#6b6270]">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="px-6 pb-28 pt-36 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
            <div>
              <Badge>About Me</Badge>
              <h2 className="mt-5 max-w-lg text-4xl font-extrabold uppercase leading-[1.02] tracking-[-0.02em] md:text-5xl">
                Your design &amp; content partner
              </h2>
              <p className="mt-6 max-w-md text-base leading-7 text-[#4c4355]">
                I&apos;m not just a designer — I&apos;m a problem-solver and a
                storyteller. From brand visuals to seamless web experiences
                and the words that tie it all together, I bring your ideas to
                life with care and clarity.
              </p>

              <a
                href="#work"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#19151f]/25 px-7 py-3.5 text-sm font-medium transition hover:border-[#7654a8] hover:text-[#7654a8]"
              >
                See how I work
                <ArrowRight size={15} />
              </a>
            </div>

            <div className="rounded-[2rem] bg-[#19151f] p-8 text-white lg:p-10">
              <p className="text-sm uppercase tracking-[0.25em] text-[#c9a7ff]">
                What I bring
              </p>
              <h3 className="mt-3 max-w-sm text-3xl font-semibold leading-tight">
                One creative partner, four disciplines.
              </h3>

              <div className="mt-8 flex flex-wrap gap-3">
                {skillTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="bg-[#efe7f9] px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Badge>How I Work</Badge>
          <h2 className="mt-5 max-w-2xl text-4xl font-extrabold uppercase leading-[1.02] tracking-[-0.02em] md:text-5xl">
            Let&apos;s show you how I bring your brand to life
          </h2>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.number}
                className={`${step.shift} ${step.tilt} relative rounded-2xl border border-[#19151f]/10 bg-white p-6 shadow-lg shadow-black/5 transition hover:rotate-0`}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#19151f] text-xs font-semibold text-white">
                  {step.number}
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#6b6270]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-14 text-right font-serif text-xl italic text-[#7654a8]">
            Ready to launch!
          </p>
        </div>
      </section>

      {/* CAPABILITIES (DARK) */}
      <section className="bg-[#19151f] px-6 py-28 text-white lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <Badge>What I Do</Badge>
              <h2 className="mt-5 max-w-xl text-4xl font-extrabold uppercase leading-[1.02] tracking-[-0.02em] text-white md:text-5xl">
                I design meaningful, not just quick impressions
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/50">
              Every project starts with a question: what does your brand
              actually need? The answer shapes everything I make next.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div key={item.title} className="bg-[#19151f] p-8">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15">
                  <item.icon size={18} />
                </span>
                <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/50">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <Badge>Selected Work</Badge>
              <h2 className="mt-5 max-w-2xl text-4xl font-extrabold uppercase leading-[1.02] tracking-[-0.02em] md:text-5xl">
                Projects that speak for themselves
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#6b6270]">
              A growing collection of websites, visual identities, graphics,
              content and creative work.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`group relative flex min-h-[320px] items-end overflow-hidden rounded-[2rem] p-8 transition hover:-translate-y-1 ${
                  project.dark
                    ? "bg-[#19151f] text-white"
                    : "bg-[#d9c7f3] text-[#19151f]"
                }`}
              >
                <span
                  className={`absolute right-8 top-8 flex h-10 w-10 items-center justify-center rounded-full transition group-hover:rotate-45 ${
                    project.dark ? "bg-white/10" : "bg-white/50"
                  }`}
                >
                  <ArrowUpRight size={17} />
                </span>
                <div>
                  <span
                    className={`text-xs uppercase tracking-widest ${
                      project.dark ? "text-[#c9a7ff]" : "text-[#7654a8]"
                    }`}
                  >
                    {project.tag}
                  </span>
                  <h3 className="mt-2 text-3xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm ${
                      project.dark ? "text-white/60" : "text-[#5c5364]"
                    }`}
                  >
                    {project.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="px-6 pb-8 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#19151f] px-8 py-16 text-center text-white lg:px-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c9a7ff]">
            Let&apos;s work together
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-extrabold uppercase leading-[1.05] tracking-[-0.02em] md:text-5xl">
            Have an idea? Let&apos;s make it work.
          </h2>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/2348144587303"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#c9a7ff] px-6 py-3.5 text-sm font-medium text-[#19151f]"
            >
              WhatsApp
              <MessageCircle size={17} />
            </a>

            <a
              href="mailto:AdesewaAdemola398@gmail.com"
              className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm"
            >
              Email Me
              <Mail size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="px-6 pb-12 pt-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-[#19151f]/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <span className="text-lg font-semibold tracking-[-0.03em]">
                Adesewa.
              </span>
              <p className="mt-3 max-w-xs text-sm leading-6 text-[#6b6270]">
                Web and graphic designer, and content creative helping
                businesses turn ideas into clear, compelling digital
                experiences.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#7654a8]">
                Quick Links
              </p>
              <div className="mt-4 flex flex-col gap-2 text-sm text-[#4c4355]">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="transition hover:text-[#7654a8]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#7654a8]">
                Get In Touch
              </p>
              <div className="mt-4 flex flex-col gap-2 text-sm text-[#4c4355]">
                <a
                  href="mailto:AdesewaAdemola398@gmail.com"
                  className="transition hover:text-[#7654a8]"
                >
                  AdesewaAdemola398@gmail.com
                </a>
                <a
                  href="https://wa.me/2348144587303"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-[#7654a8]"
                >
                  0814 458 7303
                </a>
                <div className="mt-1 flex flex-wrap gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href !== "#" ? "_blank" : undefined}
                      rel="noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-[#19151f]/15 bg-white/30 text-xs font-medium transition hover:border-[#7654a8] hover:text-[#7654a8]"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-7 text-sm text-[#6b6270]">
            © {new Date().getFullYear()} Adesewa Ademola. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
