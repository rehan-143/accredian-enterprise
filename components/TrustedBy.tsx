import { partnerLogos } from "@/lib/content";

export default function TrustedBy() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
          Trusted by L&amp;D teams at
        </p>
        <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3 md:grid-cols-6">
          {partnerLogos.map((name) => (
            <span
              key={name}
              className="font-display text-sm font-medium text-ink-soft/80"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
