import { useI18n } from "@/lib/i18n";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";
import { Logo, Phone, MapPin, ArrowRight } from "./icons";
import { SocialLinks } from "./SocialLinks";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const navLinks = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "portfolio", label: t.nav.portfolio },
    { id: "faq", label: t.nav.faq },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#0B1120] text-white">
      <div className="pointer-events-none absolute -left-20 -top-24 h-80 w-80 rounded-full bg-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container-x relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/55">{t.footer.tagline}</p>
            <div className="mt-6">
              <SocialLinks tone="onDark" size="lg" />
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-gold-light">
              {t.footer.navTitle}
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-gold transition-all duration-300 group-hover:w-4" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-gold-light">
              {t.footer.servicesTitle}
            </h4>
            <ul className="mt-5 space-y-3">
              {t.services.items.map((s) => (
                <li key={s.title}>
                  <a
                    href="#services"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-gold-light">
              {t.footer.contactTitle}
            </h4>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="group flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-gold" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <MapPin className="h-4 w-4 text-gold" />
                {t.contact.location}
              </li>
            </ul>

            <div className="mt-6">
              <span className="block text-[0.7rem] font-semibold uppercase tracking-widest text-white/40">
                Dil / Language
              </span>
              <div className="mt-3">
                <LanguageSwitcher tone="onDark" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-center text-xs text-white/45 sm:text-left">
            © {year} ŞAHİ PORTFÖY. {t.footer.rights}
          </p>
          <p className="order-3 text-[0.7rem] text-white/30 sm:order-2">{t.footer.disclaimer}</p>
          <a
            href="#home"
            className="order-2 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/70 transition-colors hover:border-gold hover:text-white sm:order-3"
          >
            <ArrowRight className="h-3.5 w-3.5 -rotate-90" />
            {t.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
