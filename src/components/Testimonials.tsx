import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { images } from "@/lib/constants";
import { cn } from "@/utils/cn";
import { Quote, Star, ArrowRight } from "./icons";
import { Reveal, SectionHeading } from "./ui";

export function Testimonials() {
  const { t } = useI18n();
  const items = t.testimonials.items;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const len = items.length;

  const go = (n: number) => setIndex((n + len) % len);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((p) => (p + 1) % len), 6000);
    return () => clearInterval(id);
  }, [paused, len]);

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-gold/10 blur-[120px]" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
        />

        <Reveal className="relative mx-auto mt-14 max-w-3xl">
          <div
            className="overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {items.map((item, i) => (
                <figure key={i} className="w-full shrink-0 px-1">
                  <div className="relative rounded-[2rem] border border-navy/10 bg-cream/70 p-8 shadow-xl shadow-navy/5 sm:p-12">
                    <Quote className="absolute right-8 top-8 h-16 w-16 text-gold/15" />
                    <div className="flex gap-1 text-gold">
                      {[0, 1, 2, 3, 4].map((s) => (
                        <Star key={s} className="h-4 w-4" />
                      ))}
                    </div>
                    <blockquote className="relative mt-6 font-display text-xl font-medium italic leading-relaxed text-navy sm:text-2xl">
                      “{item.quote}”
                    </blockquote>
                    <figcaption className="mt-8 flex items-center gap-4">
                      <img
                        src={images.avatars[i % images.avatars.length]}
                        alt={item.name}
                        loading="lazy"
                        decoding="async"
                        className="h-14 w-14 rounded-full object-cover ring-2 ring-gold/40"
                      />
                      <div>
                        <div className="font-display text-lg font-bold text-navy">{item.name}</div>
                        <div className="text-sm text-muted">{item.role}</div>
                      </div>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous"
              className="inline-flex h-11 w-11 rotate-180 items-center justify-center rounded-full border border-navy/15 text-navy transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-navy"
            >
              <ArrowRight className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === index ? "w-7 bg-gold" : "w-2 bg-navy/20 hover:bg-navy/40"
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 text-navy transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-navy"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
