import { ledgerStats } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-14 md:pt-24 md:pb-20">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-teal">
          Workforce upskilling, run like a program — not a subscription
        </p>

        <h1 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-6xl">
          Give your team a skill roadmap, not another course library.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
          Accredian Enterprise designs cohort-based learning engagements for
          companies, co-built with academic partners and tracked against the
          outcomes your L&amp;D team actually reports on.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#lead-form"
            className="rounded-sm bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-slate"
          >
            Book a consultation
          </a>
          <a
            href="#programs"
            className="rounded-sm border border-ink px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            View program tracks
          </a>
        </div>

        {/* Signature element: enterprise "ledger" stat strip */}
        <div className="mt-16 overflow-hidden rounded-sm border border-line-dark bg-ink text-paper">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-2.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold-soft">
              Program Ledger
            </span>
            <span className="font-mono text-[11px] text-white/40">
              Updated quarterly
            </span>
          </div>
          <dl className="grid grid-cols-2 md:grid-cols-4">
            {ledgerStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-5 py-6 ${i !== 0 ? "border-t md:border-t-0 md:border-l border-white/10" : ""} ${
                  i === 2 ? "border-t md:border-t-0" : ""
                }`}
              >
                <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/50">
                  {stat.unit}
                </dt>
                <dd className="mt-1 font-display text-3xl font-medium text-paper">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-xs text-white/60">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
