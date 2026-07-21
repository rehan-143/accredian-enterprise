import { processSteps } from "@/lib/content";

export default function Process() {
  return (
    <section id="process" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-teal">
          How an engagement runs
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
          Four stages, from audit to impact report.
        </h2>

        <ol className="mt-12 grid grid-cols-1 gap-0 md:grid-cols-4">
          {processSteps.map((item, i) => (
            <li
              key={item.step}
              className={`relative py-6 pr-6 ${
                i !== 0 ? "border-t md:border-t-0 md:border-l border-line md:pl-8" : ""
              }`}
            >
              <span className="font-mono text-sm text-gold">{item.step}</span>
              <h3 className="mt-3 font-display text-xl font-medium text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {item.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
