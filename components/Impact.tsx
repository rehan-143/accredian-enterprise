const impactBlocks = [
  {
    value: "3.4x",
    label: "internal mobility",
    detail:
      "Average increase in internal role transitions for teams completing a full track.",
  },
  {
    value: "6 wks",
    label: "avg. time-to-launch",
    detail:
      "From kickoff call to first cohort session, once scope is signed off.",
  },
  {
    value: "94%",
    label: "manager satisfaction",
    detail:
      "Managers rating post-program skill application as meeting or exceeding expectations.",
  },
];

export default function Impact() {
  return (
    <section id="impact" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-teal">
          Impact
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
          Numbers L&amp;D teams bring to their own leadership.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {impactBlocks.map((block) => (
            <div key={block.label} className="border-t-2 border-gold pt-5">
              <div className="font-display text-4xl font-medium text-ink">
                {block.value}
              </div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-soft">
                {block.label}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {block.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
