import { useI18n } from "@/lib/i18n";
import { images } from "@/lib/constants";
import { ArrowUpRight, Check } from "./icons";
import { Reveal, SectionHeading } from "./ui";

export function Portfolio() {
  const { t } = useI18n();
  const p = t.portfolio;

  return (
    <section id="portfolio" className="relative bg-cream py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {p.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 110}>
              <article className="group relative block aspect-[4/5] overflow-hidden rounded-3xl shadow-lg shadow-navy/5">
                <img
                  src={images.portfolio[i % images.portfolio.length]}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
                {/* Permanent gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                <div className="absolute inset-0 bg-navy/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Top badges */}
                <div className="absolute inset-x-5 top-5 flex items-center justify-between">
                  <span className="rounded-full bg-white/15 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    {item.tag}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-gold/90 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-navy backdrop-blur-md">
                    <Check className="h-3 w-3" />
                    {p.tagDone}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="translate-y-0 transition-transform duration-500">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl font-bold text-white">{item.title}</h3>
                      <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white opacity-0 transition-all duration-500 group-hover:bg-gold group-hover:text-navy group-hover:opacity-100">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-wider text-gold-light">
                      {item.loc}
                    </div>
                    <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-white/75 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Gallery marquee */}
      <div className="mt-20">
        <Reveal className="container-x mb-6 flex items-center justify-between">
          <h3 className="font-display text-2xl font-bold text-navy">{p.galleryTitle}</h3>
          <div className="hidden h-px flex-1 mx-6 bg-navy/10 sm:block" />
        </Reveal>

        <div className="mask-fade-x overflow-hidden">
          <div className="flex w-max animate-marquee gap-5 hover:[animation-play-state:paused]">
            {[...images.gallery, ...images.gallery].map((src, i) => (
              <div
                key={i}
                className="relative h-56 w-80 shrink-0 overflow-hidden rounded-2xl shadow-lg shadow-navy/5"
              >
                <img
                  src={src}
                  alt="Project gallery"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
