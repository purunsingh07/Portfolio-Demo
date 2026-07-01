const STACK = [
  "C++",
  "Python",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "Git & GitHub",
  "Selenium",
  "TensorFlow",
];

export default function Marquee() {
  const items = [...STACK, ...STACK];
  return (
    <div className="relative border-y border-white/10 bg-surface py-5">
      <div className="marquee-track">
        {items.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="flex items-center gap-6 px-6 whitespace-nowrap"
          >
            <span className="font-display text-xl font-medium text-muted md:text-2xl">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
          </div>
        ))}
      </div>
    </div>
  );
}
