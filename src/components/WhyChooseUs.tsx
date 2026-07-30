import { useI18n } from "@/lib/i18n";
import { ICONS } from "./icons";
import { Reveal, SectionHeading } from "./ui";
import { DotPattern } from "./ui/DotPattern";

export function WhyChooseUs() {
  const { t } = useI18n();
  const w = t.why;

  return (
    <section className="relative overflow-hidden bg-navy py-24 lg:py-32">
      {/* Decorative */}
      <DotPattern className="fill-white/10" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/15 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-gold/10 blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy via-transparent to-navy" />

      <div className="container-x relative">
        <SectionHeading eyebrow={w.eyebrow} title={w.title} subtitle={w.subtitle} light align="center" />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {w.items.map((item, i) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS];
            return (
              <Reveal key={item.title} delay={(i % 3) * 110}>
                <div className="grad-border group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-white/[0.07]">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold ring-1 ring-gold/20 transition-all duration-500 group-hover:bg-gold group-hover:text-navy">
                    {Icon ? <Icon className="h-7 w-7" /> : null}
                  </span>
                  <h3 className="relative mt-6 font-display text-xl font-bold text-white">{item.title}</h3>
                  <p className="relative mt-2.5 text-sm leading-relaxed text-white/60">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
