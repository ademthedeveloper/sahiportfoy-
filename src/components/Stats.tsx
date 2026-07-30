import { useI18n } from "@/lib/i18n";
import { images } from "@/lib/constants";
import { Reveal, AnimatedCounter } from "./ui";

export function Stats() {
  const { t } = useI18n();
  const stats = t.stats.items;

  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-28">
      {/* Backdrop */}
      <div className="absolute inset-0">
        <img
          src={images.aboutSkyline}
          alt="Istanbul skyline"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/70" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      </div>

      <div className="container-x relative">
        <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 120}
              className={`text-center ${i !== 0 ? "lg:border-l lg:border-white/10" : ""}`}
            >
              <div className="font-display text-5xl font-bold tracking-tight sm:text-6xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} className="text-gradient-gold" />
              </div>
              <div className="mx-auto mt-4 h-px w-10 bg-gold/60" />
              <div className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-white/70">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
