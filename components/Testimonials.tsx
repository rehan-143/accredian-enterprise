import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-teal">
          From L&amp;D teams
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
          What comes back after a cohort ends.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-sm border border-line p-6"
            >
              <blockquote className="font-display text-lg leading-snug text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-4 text-sm">
                <div className="font-medium text-ink">{t.name}</div>
                <div className="text-ink-soft">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
