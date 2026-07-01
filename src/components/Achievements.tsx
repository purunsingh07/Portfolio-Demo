import Reveal from "./Reveal";

const ACHIEVEMENTS = [
  {
    title: "Smart India Hackathon 2024 — National Winner",
    detail:
      "Top 5 finalists out of 300+ teams, securing first place for an innovative AI solution.",
  },
  {
    title: "VESIT Hackathon — Top 10",
    detail:
      "Placed in the top 10 out of 180+ teams in a competitive programming and development challenge.",
  },
  {
    title: "Competitive programming",
    detail: "600+ LeetCode problems and 150+ CodeChef challenges solved, with a focus on algorithmic optimization.",
  },
];

const CERTS = [
  {
    title: "IBM Enterprise Data Science",
    detail: "40-hour curriculum covering ML model deployment and data pipeline best practices.",
  },
  {
    title: "Advanced DSA Certification",
    detail: "60+ hour program mastering 10+ algorithms with an O(log n) optimization focus.",
  },
];

export default function Achievements() {
  return (
    <section className="relative border-t border-white/10 bg-surface/40 px-6 py-28 md:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2">
        <div>
          <Reveal from="left">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">
              (Achievements)
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-paper md:text-4xl">
              Proof of pressure-tested work
            </h2>
          </Reveal>

          <div className="mt-10 space-y-8">
            {ACHIEVEMENTS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08} className="border-l-2 border-lime/60 pl-5">
                <h3 className="font-display text-lg font-semibold text-paper">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {item.detail}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal from="right">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral">
              (Certifications)
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-paper md:text-4xl">
              Always leveling up
            </h2>
          </Reveal>

          <div className="mt-10 space-y-8">
            {CERTS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08} className="border-l-2 border-coral/60 pl-5">
                <h3 className="font-display text-lg font-semibold text-paper">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {item.detail}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-10 rounded-2xl border border-white/10 p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              Education
            </p>
            <h3 className="mt-2 font-display text-lg font-semibold text-paper">
              B.Tech, Computer Engineering
            </h3>
            <p className="mt-1 text-sm text-muted">
              G.H. Raisoni College of Engineering &amp; Management, Pune
            </p>
            <p className="mt-1 font-mono text-sm text-lime">
              2022 – 2026 · CGPA 8.7/10.0
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
