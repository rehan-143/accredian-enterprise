import { whyUsRows } from "@/lib/content";

export default function WhyUs() {
  return (
    <section id="why-us" className="border-b border-line bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,320px)_1fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold-soft">
              Why enterprises choose us
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">
              Built for L&amp;D teams, not individual learners.
            </h2>
          </div>

          <div className="divide-y divide-white/10 border-t border-white/10">
            {whyUsRows.map((row) => (
              <div
                key={row.title}
                className="grid grid-cols-1 gap-2 py-6 md:grid-cols-[220px_1fr] md:gap-8"
              >
                <h3 className="font-display text-lg font-medium text-paper">
                  {row.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {row.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
