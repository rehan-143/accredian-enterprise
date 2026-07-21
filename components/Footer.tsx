import { navLinks } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr_1fr]">
          <div>
            <span className="font-display text-xl font-semibold">
              Accredian
            </span>
            <span className="ml-2 font-mono text-[11px] uppercase tracking-[0.2em] text-gold-soft">
              Enterprise
            </span>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              Cohort-based upskilling programs for teams, delivered with
              academic partners.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/50">
              Explore
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/70 hover:text-paper">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/50">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-white/70">
              <li>enterprise@accredian-demo.com</li>
              <li>+91 11 4567 8900</li>
              <li>New Delhi, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Accredian Enterprise. Demo clone for assignment purposes only.</span>
          <span>Not affiliated with the real Accredian website.</span>
        </div>
      </div>
    </footer>
  );
}
