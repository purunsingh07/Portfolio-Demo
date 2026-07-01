"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-ink/80 backdrop-blur-md border-b border-white/5" : "py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-paper"
        >
          Puru<span className="text-lime">.</span>Singh
        </a>

        <ul className="hidden gap-8 font-mono text-xs uppercase tracking-widest text-muted md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-lime"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:purunsingh07@gmail.com"
          className="rounded-full border border-lime/40 px-4 py-2 font-mono text-xs uppercase tracking-widest text-lime transition-colors hover:bg-lime hover:text-ink"
        >
          Hire me
        </a>
      </nav>
    </header>
  );
}
