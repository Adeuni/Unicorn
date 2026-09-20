"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 lg:px-6">
      <nav className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-[#19151f]/70 px-4 py-2.5 shadow-lg shadow-black/20 backdrop-blur-md lg:px-5">
          <a href="#" className="pl-2">
            <span className="block text-lg font-semibold leading-tight tracking-[-0.03em] text-white">
              Adesewa.
            </span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-[#c9a7ff]">
              Design • Create • Communicate
            </span>
          </a>

          <div className="hidden items-center gap-1 rounded-full bg-white/5 p-1 text-sm md:flex">
            {navLinks.map((link, i) =>
              i === 0 ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full bg-white px-4 py-2 text-[#19151f] transition"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-white/70 transition hover:text-white"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-[#c9a7ff] px-5 py-2.5 text-sm font-medium text-[#19151f] transition hover:-translate-y-0.5 md:flex"
          >
            Let&apos;s Talk
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center rounded-full text-white md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="mt-2 flex flex-col gap-1 rounded-3xl border border-white/10 bg-[#19151f]/95 p-3 shadow-lg shadow-black/20 backdrop-blur-md md:hidden">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-full px-4 py-3 text-sm font-medium transition ${
                  i === 0
                    ? "bg-white text-[#19151f]"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-[#c9a7ff] px-4 py-3 text-center text-sm font-medium text-[#19151f]"
            >
              Let&apos;s Talk
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
