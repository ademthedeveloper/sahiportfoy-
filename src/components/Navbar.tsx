import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { PHONE_DISPLAY, PHONE_TEL, social } from "@/lib/constants";
import { cn } from "@/utils/cn";
import { Logo, Menu, Close, ArrowRight, Phone } from "./icons";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { SocialLinks } from "./SocialLinks";

const SECTIONS = ["home", "about", "services", "portfolio", "faq", "contact"] as const;

export function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string>("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setScrolled(h.scrollTop > 24);
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? Math.min((h.scrollTop / max) * 100, 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const dark = !scrolled && !open;

  const links = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "portfolio", label: t.nav.portfolio },
    { id: "faq", label: t.nav.faq },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "glass shadow-[0_10px_40px_-18px_rgba(15,23,42,0.25)]"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div
        className="absolute inset-x-0 top-0 h-[3px] origin-left bg-gradient-to-r from-gold via-gold-light to-gold transition-opacity duration-500"
        style={{ transform: `scaleX(${progress / 100})`, opacity: scrolled ? 1 : 0 }}
      />

      <nav className="container-x flex h-[72px] items-center justify-between lg:h-[84px]">
        <a href="#home" aria-label="Sâhi Portföy — Home" className="shrink-0">
          <Logo light={dark} />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={cn(
                "group relative rounded-full px-4 py-2 text-[0.92rem] font-medium transition-colors duration-300",
                dark ? "text-white/80 hover:text-white" : "text-navy/70 hover:text-navy"
              )}
            >
              {l.label}
              <span
                className={cn(
                  "absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-gold transition-transform duration-300 group-hover:scale-x-100",
                  active === l.id ? "scale-x-100" : "scale-x-0"
                )}
              />
            </a>
          ))}
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className={cn(
              "hidden items-center gap-2 text-sm font-semibold transition-colors xl:inline-flex",
              dark ? "text-white/85 hover:text-gold-light" : "text-navy hover:text-gold-dark"
            )}
          >
            <Phone className="h-4 w-4 text-gold" />
            {PHONE_DISPLAY}
          </a>

          <div className="hidden sm:block">
            <LanguageSwitcher tone={dark ? "onDark" : "onLight"} />
          </div>

          <ThemeToggle tone={dark ? "onDark" : "onLight"} />

          <a
            href="#contact"
            className="btn btn-sheen group hidden bg-gold px-5 py-2.5 text-sm font-semibold text-navy shadow-lg shadow-gold/25 transition-all hover:-translate-y-0.5 hover:bg-gold-light sm:inline-flex"
          >
            {t.nav.cta}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden",
              dark ? "border-white/25 text-white" : "border-navy/15 text-navy"
            )}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden",
          open ? "visible" : "invisible"
        )}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-navy/50 backdrop-blur-sm transition-opacity duration-500",
            open ? "opacity-100" : "opacity-0"
          )}
        />
        <aside
          className={cn(
            "absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-cream shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between border-b border-navy/10 px-6 py-4">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy"
            >
              <Close className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-1 px-4 py-6">
            {links.map((l, i) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-medium text-navy transition-colors hover:bg-navy/5"
                style={{
                  transitionDelay: open ? `${i * 40 + 80}ms` : "0ms",
                }}
              >
                {l.label}
                <ArrowRight className="h-4 w-4 text-gold opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
              </a>
            ))}
          </nav>

          <div className="mt-auto space-y-5 border-t border-navy/10 px-6 py-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted">Dil / Language</span>
              <LanguageSwitcher tone="onLight" />
            </div>

            <a
              href={`tel:${PHONE_TEL}`}
              className="btn w-full bg-gold px-5 py-3.5 text-sm text-navy hover:brightness-105"
            >
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>

            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                {t.footer.followTitle}
              </span>
              <SocialLinks />
            </div>

            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-[0.7rem] text-muted"
            >
              @sahi_portfoy
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
