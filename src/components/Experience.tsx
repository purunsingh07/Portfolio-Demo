import Reveal from "./Reveal";

const HIGHLIGHTS = [
  {
    title: "WhatsApp automation suite",
    detail:
      "Architected end-to-end outreach tools using Selenium and ChromeDriver, cutting manual outreach time by 40%.",
    metric: "-40%",
    metricLabel: "manual effort",
  },
  {
    title: "AI calling agent",
    detail:
      "Launched a voice agent via Vapi that autonomously resolved customer inquiries.",
    metric: "90%",
    metricLabel: "success rate",
  },
  {
    title: "Lead extraction system",
    detail:
      "Delivered a full-stack tool using Selenium and Streamlit, aggregating verified leads for sales teams.",
    metric: "100+",
    metricLabel: "verified leads",
  },
  {
    title: "Workflow consolidation",
    detail:
      "Streamlined operations by consolidating automation scripts across the team.",
    metric: "+30%",
    metricLabel: "faster processing",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-white/10 bg-surface/40 px-6 py-28 md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">
              (Experience)
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-paper md:text-5xl">
              Software Developer Intern
            </h2>
            <p className="mt-2 text-muted">
              Yuvaan Technologies — Automation &amp; AI Development Team
            </p>
          </div>
          <p className="font-mono text-sm text-lime">
            Jun 2025 — Dec 2025 · 6 months
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.08}
              className="group relative bg-surface p-7 transition-colors hover:bg-surface-2"
            >
              <p className="font-display text-3xl font-semibold text-lime">
                {item.metric}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                {item.metricLabel}
              </p>
              <h3 className="mt-6 font-display text-lg font-semibold text-paper">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.detail}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
