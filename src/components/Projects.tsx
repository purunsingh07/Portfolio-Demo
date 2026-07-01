import Reveal from "./Reveal";

const PROJECTS = [
  {
    index: "01",
    name: "CareerNext",
    tagline: "AI-driven career coach",
    stack: ["Next.js", "Gemini API", "Inngest", "NeonDB"],
    duration: "3-month build",
    points: [
      "AI-powered resume analysis tool using the Gemini API — evaluated 50+ resumes, raising candidate scores by 42% on average",
      "Real-time mock interview simulator supporting 20+ concurrent users, sub-2-second average response times",
      "Automated role-specific question generation — 15+ tailored questions across 15+ job categories per session",
    ],
    color: "lime",
    demo: "https://carernext.vercel.app/",
  },
  {
    index: "02",
    name: "Imposter",
    tagline: "AI fraud detection system",
    stack: ["React", "Python", "TensorFlow", "RapidAPI"],
    duration: "4-month build",
    points: [
      "Django-based profile verification system for ITBP, scanning Instagram, Facebook, Twitter and LinkedIn via RapidAPI",
      "Neural network classifier reaching 78% precision across 250+ analyzed social profiles",
      "Cut backend latency by 65% with Redis caching and Firebase, sustaining 10+ real-time requests/hour",
    ],
    color: "coral",
    demo: "https://imposter-r3q6.onrender.com/",
  },
  {
    index: "03",
    name: "Cogno Solutions",
    tagline: "Healthcare / therapy platform",
    stack: ["React.js", "Node.js", "Jitsi API", "Firebase"],
    duration: "3-month build",
    points: [
      "Therapy platform with 12 interactive cognitive games, tracking 180+ patient sessions weekly",
      "NLP-powered chatbot managing 100+ conversations at an 89% user-satisfaction rating",
      "WebRTC video consultation system connecting 10+ healthcare providers with 12 patients monthly",
    ],
    color: "cyan",
    demo: "https://cogno-solutions.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">
              (Selected work)
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-paper md:text-5xl">
              Things I&apos;ve shipped
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted">
            Three products, three problem spaces — hiring, trust &amp; safety,
            and healthcare — all built end to end.
          </p>
        </Reveal>

        <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
          {PROJECTS.map((project, i) => (
            <Reveal
              key={project.name}
              delay={i * 0.08}
              className="group grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:items-center md:gap-4"
            >
              <span className="font-mono text-sm text-muted md:col-span-1">
                {project.index}
              </span>

              <div className="md:col-span-4">
                <h3 className="font-display text-2xl font-semibold text-paper transition-colors group-hover:text-lime md:text-3xl">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{project.tagline}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted/70">
                  {project.duration}
                </p>
              </div>

              <ul className="space-y-2 md:col-span-5">
                {project.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-coral" />
                    {point}
                  </li>
                ))}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </ul>

              <div className="flex md:col-span-2 md:justify-end">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:border-lime hover:text-lime"
                >
                  Live demo
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
