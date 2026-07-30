import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useI18n } from "@/lib/i18n";
import { images, WHATSAPP_URL } from "@/lib/constants";
import { ArrowRight, WhatsApp, ChevronDown } from "./icons";
import { Reveal } from "./ui";
import { DotPattern } from "./ui/DotPattern";
import { Magnetic } from "./motion";

export function Hero() {
  const { t } = useI18n();
  const bgRef = useRef<HTMLDivElement>(null);

  // Soft parallax on the hero backdrop (GSAP ScrollTrigger scrub).
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.to(bgRef.current, {
        yPercent: 14,
        ease: "none",
        scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: true },
      });
    },
    { scope: bgRef }
  );

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-navy">
      {/* Parallax backdrop */}
      <div ref={bgRef} className="absolute -top-[12%] left-0 h-[128%] w-full will-change-transform">
        <img
          src={images.hero}
          alt="Luxury modern villa illuminated at dusk"
          className="h-full w-full scale-110 object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-navy/50" />
        <DotPattern className="fill-white/[0.05]" />
      </div>

      {/* Watermelon ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-gold/25 blur-[130px] animate-aurora" />
        <div className="absolute right-6 top-1/3 h-96 w-96 rounded-full bg-gold/10 blur-[140px] animate-float-slow" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-navy-600/40 blur-[120px] animate-float" />
      </div>

      {/* Content */}
      <div className="container-x relative z-10 flex min-h-[100svh] flex-col justify-center pb-24 pt-32">
        <div className="max-w-3xl">
          <Reveal>
            <span className="glass-dark inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              {t.hero.eyebrow}
            </span>
          </Reveal>

          <h1 className="mt-7 font-display text-[2.9rem] font-bold leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-[5.2rem]">
            <span className="block overflow-hidden pb-[0.08em]">
              <span className="animate-lineUp" style={{ animationDelay: "0.15s" }}>
                {t.hero.titleTop}
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <span className="animate-lineUp" style={{ animationDelay: "0.32s" }}>
                <span className="text-shimmer-gold">{t.hero.titleGold}</span>{" "}
                <span className="text-white/95">{t.hero.titleBottom}</span>
              </span>
            </span>
          </h1>

          <Reveal delay={0.45}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              {t.hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Magnetic>
                <a
                  href="#contact"
                  className="btn btn-gold btn-sheen group px-8 py-4 text-sm font-semibold"
                >
                  {t.hero.contact}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sheen group border border-white/25 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md hover:border-white/50 hover:bg-white/10"
                >
                  <WhatsApp className="h-[18px] w-[18px] text-[#25D366]" />
                  {t.hero.whatsapp}
                </a>
              </Magnetic>
            </div>
          </Reveal>

          {/* Metal glass stat panel */}
          <Reveal delay={0.78}>
            <div className="glass-dark mt-12 grid grid-cols-3 gap-4 rounded-2xl p-5 sm:max-w-xl">
              {t.hero.stats.map((s, i) => (
                <div key={s.label} className={i !== 0 ? "border-l border-white/10 pl-4" : ""}>
                  <div className="font-display text-2xl font-bold text-white sm:text-3xl">{s.value}</div>
                  <div className="mt-1 text-[0.7rem] font-medium uppercase tracking-wider text-white/55">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 transition-colors hover:text-white md:flex"
        aria-label={t.hero.scroll}
      >
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.3em]">{t.hero.scroll}</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/30 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-gold" />
        </span>
        <ChevronDown className="h-4 w-4" />
      </a>
    </section>
  );
}
