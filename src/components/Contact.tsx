import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 px-6 py-28 md:px-10"
    >
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-lime/10 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal from="scale">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">
            (Let&apos;s talk)
          </p>
          <h2 className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-paper md:text-7xl">
            Got a role in mind?
            <br />
            <span className="text-lime">Let&apos;s build it.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted">
            Open to internship and full-time software engineering, AI/ML, and
            full-stack roles. I reply fast.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:purunsingh07@gmail.com"
              className="rounded-full bg-lime px-8 py-4 font-mono text-sm uppercase tracking-widest text-ink transition-transform hover:-translate-y-0.5"
            >
              purunsingh07@gmail.com
            </a>
            <a
              href="tel:+918788079850"
              className="rounded-full border border-white/20 px-8 py-4 font-mono text-sm uppercase tracking-widest text-paper transition-colors hover:border-lime hover:text-lime"
            >
              +91 87880 79850
            </a>
          </div>

          <div className="mt-12 flex justify-center gap-8 font-mono text-xs uppercase tracking-widest text-muted">
            <a href="https://www.linkedin.com/in/purunsingh/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-cyan">
              LinkedIn ↗
            </a>
            <a href="https://github.com/purunsingh07" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-cyan">
              GitHub ↗
            </a>
          </div>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-24 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-muted md:flex-row">
        <p>© 2026 Puru Singh. Built with Next.js, Three.js &amp; GSAP.</p>
        <p>+ Pune, Maharashtra, India</p>
      </div>
    </section>
  );
}
