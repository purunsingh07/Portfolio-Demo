"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";

const Avatar3D = dynamic(() => import("./Avatar3D"), { ssr: false });

const ROLES = [
  "Software Engineer",
  "AI / Automation Builder",
  "Full-Stack Developer",
  "SIH 2024 National Winner",
];

const STATS = [
  { value: "8.7", label: "CGPA" },
  { value: "600+", label: "LeetCode solved" },
  { value: "1st", label: "SIH 2024, top 5 of 300+" },
  { value: "90%", label: "AI agent success rate" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roleRef = useRef<HTMLSpanElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!roleRef.current) return;
    gsap.fromTo(
      roleRef.current,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
  }, [roleIndex]);

  useEffect(() => {
    if (!headlineRef.current) return;
    const words = headlineRef.current.querySelectorAll(".word");
    gsap.fromTo(
      words,
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.07,
        ease: "power4.out",
        delay: 0.15,
      }
    );
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden pt-28"
    >
      {/* ambient gradient blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-violet/30 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 right-0 h-[28rem] w-[28rem] rounded-full bg-coral/20 blur-[130px]" />

      <div className="relative mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:px-10">
        {/* Left: copy */}
        <div className="relative z-10 order-2 md:order-1">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-cyan">
            + Pune, Maharashtra, India
          </p>

          <h1
            ref={headlineRef}
            className="font-display text-[13vw] leading-[0.95] font-semibold tracking-tight text-paper md:text-[4.2vw]"
          >
            <span className="block overflow-hidden">
              <span className="word inline-block">Hi, I&apos;m Puru —</span>
            </span>
            <span className="block overflow-hidden">
              <span className="word inline-block text-lime">I build</span>
            </span>
            <span className="block overflow-hidden">
              <span className="word inline-block text-outline">
                things that work.
              </span>
            </span>
          </h1>

          <div className="mt-6 flex h-8 items-center font-mono text-sm text-muted md:text-base">
            <span className="mr-3 text-coral">▹</span>
            <span ref={roleRef} className="inline-block">
              {ROLES[roleIndex]}
            </span>
          </div>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted md:text-base">
            Final-year Computer Engineering student who ships AI-driven
            products and automation systems — from resume-scoring copilots to
            fraud-detection classifiers — end to end.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-lime px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-transform hover:-translate-y-0.5"
            >
              See the work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:border-lime hover:text-lime"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Right: 3D avatar */}
        <div className="order-1 h-[46vh] md:order-2 md:h-[68vh]">
          <Avatar3D />
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative z-10 mx-auto w-full max-w-7xl border-t border-white/10 px-6 py-6 md:px-10">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl font-semibold text-paper md:text-3xl">
                {stat.value}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
