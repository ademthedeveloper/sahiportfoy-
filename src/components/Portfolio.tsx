import { useI18n } from "@/lib/i18n";
import { images } from "@/lib/constants";
import { Reveal, SectionHeading } from "./ui";

export function Portfolio() {
  const { t } = useI18n();
  const p = t.portfolio;
  const en = t.common.langName === "EN";

  return (
    <section id="portfolio" className="relative overflow-hidden bg-cream py-24 lg:py-32">
      {/* soft decor */}
      <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-navy/5 blur-[120px]" />

      <div className="container-x relative">
        <SectionHeading eyebrow={p.eyebrow} title={p.galleryTitle} subtitle={p.gallerySubtitle} />

        <div className="mt-16 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:gap-4 lg:grid-cols-3 lg:auto-rows-[220px]">
          {images.gallery.map((src, i) => {
            const isDeal = i >= 3;
            const feature = i === 0;
            return (
              <Reveal
                key={i}
                delay={(i % 3) * 90}
                className={feature ? "lg:col-span-2 lg:row-span-2" : ""}
              >
                <figure className="group relative h-full w-full overflow-hidden rounded-2xl shadow-lg shadow-navy/5">
                  <img
                    src={src}
                    alt={isDeal ? (en ? "Deal closed" : "Anlaşma sağlandı") : en ? "Flagship project" : "Büyük proje"}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />

                  {/* caption badge */}
                  <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                    <span className="rounded-full bg-white/15 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                      {isDeal ? (en ? "Deal Closed 🛎️" : "Anlaşma 🛎️") : en ? "Project" : "Proje"}
                    </span>
                    {feature && (
                      <span className="hidden rounded-full bg-navy/40 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-white/80 backdrop-blur-md sm:inline-block">
                        {en ? "Flagship" : "Önemli Proje"}
                      </span>
                    )}
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 text-center text-sm text-muted">
            {en
              ? "Photos from our flagship project and the deals we celebrate."
              : "Büyük projemizden ve kutladığımız anlaşmalardan kareler."}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
