import { useI18n } from "@/lib/i18n";
import { images } from "@/lib/constants";
import { cn } from "@/utils/cn";
import { ICONS, ArrowRight, Sparkles, ShieldCheck } from "./icons";
import { Reveal, SectionHeading, Eyebrow } from "./ui";

export function About() {
  const { t } = useI18n();
  const v = t.about;

  return (
    <section id="about" className="relative overflow-hidden bg-cream py-24 lg:py-32">
      <div className="container-x">
        {/* Intro */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Collage */}
          <Reveal className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-gold/15 to-transparent blur-2xl" />
              <div className="overflow-hidden rounded-[2rem] shadow-2xl">
                <img
                  src={images.aboutMain}
                  alt="Luxury Bosphorus Bridge at sunset, Istanbul"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>

              {/* Inset */}
              <div className="absolute -bottom-8 -left-6 w-40 overflow-hidden rounded-2xl border-4 border-cream shadow-xl sm:w-48">
                <img
                  src={images.aboutInset}
                  alt="Luxury modern interior"
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="glass absolute -right-4 top-8 flex items-center gap-3 rounded-2xl p-3.5 shadow-xl">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display text-lg font-bold leading-none text-navy">10+</div>
                  <div className="mt-1 text-[0.65rem] font-medium uppercase tracking-wider text-muted">
                    {t.common.langName === "EN" ? "Years" : "Yıl Deneyim"}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div>
            <Reveal>
              <Eyebrow>{v.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 font-display text-[2.1rem] font-bold leading-[1.1] tracking-tight text-navy sm:text-4xl lg:text-[3.1rem]">
                {v.title}
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 text-lg font-medium leading-relaxed text-navy-700">{v.lead}</p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 leading-relaxed text-muted">{v.p1}</p>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-4 leading-relaxed text-muted">{v.p2}</p>
            </Reveal>

            {/* Mission & Vision */}
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {[
                { Icon: ShieldCheck, title: v.missionTitle, text: v.missionText },
                { Icon: Sparkles, title: v.visionTitle, text: v.visionText },
              ].map((card, i) => (
                <Reveal key={card.title} delay={320 + i * 90}>
                  <div className="group h-full rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold-dark transition-colors duration-500 group-hover:bg-gold group-hover:text-navy">
                      <card.Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-xl font-bold text-navy">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{card.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={500}>
              <a
                href="#services"
                className="btn group mt-8 bg-navy px-7 py-3.5 text-sm font-semibold text-white hover:bg-gold hover:text-navy"
              >
                {v.cta}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>
        </div>

        {/* Core values */}
        <div className="mt-28">
          <SectionHeading eyebrow={v.eyebrow} title={v.valuesTitle} align="center" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {v.values.map((item, i) => {
              const Icon = ICONS[item.icon as keyof typeof ICONS];
              return (
                <Reveal key={item.title} delay={i * 110}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-navy/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl">
                    <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold to-gold-light transition-transform duration-500 group-hover:scale-x-100" />
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-navy">
                      {Icon ? <Icon className="h-7 w-7" /> : null}
                    </span>
                    <h3 className="mt-6 font-display text-xl font-bold text-navy">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-28">
          <Reveal>
            <div className="text-center">
              <div className="mx-auto mb-5 h-px w-16 bg-gold/50" />
              <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
                {v.timelineTitle}
              </h2>
            </div>
          </Reveal>

          <div className="relative mt-16">
            <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-gold via-navy/20 to-transparent md:left-1/2 md:-translate-x-1/2" />
            <div className="space-y-7">
              {v.timeline.map((entry, i) => {
                const right = i % 2 === 0;
                return (
                  <Reveal key={entry.year} delay={i * 90}>
                    <div className="relative md:grid md:grid-cols-2 md:gap-14">
                      <span className="absolute left-5 top-6 z-10 -translate-x-1/2 md:left-1/2 md:top-7">
                        <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-gold/40" />
                        <span className="relative block h-4 w-4 rounded-full border-4 border-cream bg-gold shadow-md" />
                      </span>
                      <div
                        className={cn(
                          "ml-14 rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl md:ml-0",
                          right ? "md:col-start-2 md:pl-12" : "md:col-start-1 md:pr-12 md:text-right"
                        )}
                      >
                        <div className="font-display text-3xl font-bold text-gradient-gold">{entry.year}</div>
                        <div className="mt-1 font-semibold text-navy">{entry.title}</div>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{entry.text}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
