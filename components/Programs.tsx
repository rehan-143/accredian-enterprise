import { programs } from "@/lib/content";

export default function Programs() {
  return (
    <section id="programs" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-teal">
            Program tracks
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
            Six tracks, one delivery model.
          </h2>
          <p className="mt-4 text-ink-soft">
            Every track runs as a live cohort with mentor-reviewed work,
            adapted to your team&apos;s tools and datasets.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <article key={program.code} className="flex flex-col bg-paper p-6">
              <span className="font-mono text-[11px] text-gold">
                {program.code}
              </span>
              <h3 className="mt-3 font-display text-xl font-medium text-ink">
                {program.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {program.outcome}
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-line pt-4 text-xs text-ink-soft">
                <span>{program.format}</span>
                <span className="font-mono">{program.duration}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
