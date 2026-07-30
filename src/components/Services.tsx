import { useI18n } from "@/lib/i18n";
import { ICONS, ArrowRight } from "./icons";
import { Reveal, SectionHeading } from "./ui";

export function Services() {
  const { t } = useI18n();
  const s = t.services;

  return (
    <section id="services" className="relative bg-white py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {s.items.map((item, i) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS];
            return (
              <Reveal key={item.title} delay={(i % 3) * 110}>
                <article className="grad-border group relative h-full overflow-hidden rounded-3xl border border-navy/10 bg-cream/60 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:bg-white hover:shadow-[0_30px_70px_-30px_rgba(15,23,42,0.35)]">
                  <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold to-gold-light transition-transform duration-500 group-hover:scale-x-100" />
                  <span className="absolute right-7 top-6 font-display text-6xl font-bold text-navy/[0.05] transition-colors duration-500 group-hover:text-gold/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-gold shadow-lg shadow-navy/20 transition-all duration-500 group-hover:scale-105 group-hover:bg-gold group-hover:text-navy">
                    {Icon ? <Icon className="h-8 w-8" /> : null}
                  </span>

                  <h3 className="relative mt-7 font-display text-2xl font-bold text-navy">{item.title}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-muted">{item.desc}</p>

                  <div className="relative mt-6 flex items-center gap-2 text-sm font-semibold text-gold-dark opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <span>{t.common.langName === "EN" ? "Learn more" : "Detaylar"}</span>
                    <ArrowRight className="h-4 w-4 -translate-x-2 transition-transform duration-500 group-hover:translate-x-0" />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
