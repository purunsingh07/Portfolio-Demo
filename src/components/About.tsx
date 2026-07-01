import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-28 md:px-10">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <Reveal from="left">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">
              (About)
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-paper md:text-5xl">
              Builder first,
              <br />
              student second.
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-muted md:text-xl">
              I&apos;m a final-year Computer Engineering student at{" "}
              <span className="text-paper">
                G.H. Raisoni College of Engineering &amp; Management, Pune
              </span>{" "}
              (CGPA 8.7/10), seeking internship and full-time roles where I can
              turn AI research into products people actually use.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">
              I&apos;m proficient across{" "}
              <span className="text-lime">C++, Python, React.js, Node.js</span>{" "}
              and <span className="text-lime">PostgreSQL</span>, with
              hands-on experience integrating AI/ML models and automating
              complex workflows — plus a national win at Smart India
              Hackathon 2024.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { k: "Programming", v: "C++ · Python · JavaScript" },
              { k: "Frontend", v: "React.js · HTML5 · CSS3" },
              { k: "Backend", v: "Node.js · Express.js" },
              { k: "Databases", v: "MongoDB · SQL · Postgres · Firebase" },
            ].map((row) => (
              <div key={row.k} className="border-t border-white/10 pt-3">
                <p className="font-mono text-[11px] uppercase tracking-widest text-coral">
                  {row.k}
                </p>
                <p className="mt-1 text-sm text-muted">{row.v}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
