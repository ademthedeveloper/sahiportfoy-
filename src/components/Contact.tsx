import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/constants";
import { Phone, MapPin, Clock, WhatsApp, Check, ArrowRight } from "./icons";
import { Reveal, Eyebrow } from "./ui";
import { SocialLinks } from "./SocialLinks";
import { DotPattern } from "./ui/DotPattern";

export function Contact() {
  const { t } = useI18n();
  const c = t.contact;
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [copied, setCopied] = useState(false);

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PHONE_DISPLAY);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("sending");
    setTimeout(() => setStatus("done"), 1300);
  };

  const info = [
    { Icon: Phone, label: c.phoneLabel, value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
    { Icon: MapPin, label: c.locationLabel, value: c.location, href: "#contact" },
    { Icon: Clock, label: c.hoursLabel, value: c.hours, href: "#contact" },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-24 lg:py-32">
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-gold/10 blur-[130px]" />
      <DotPattern className="fill-white/10" />

      <div className="container-x relative">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow light>{c.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-display text-[2.1rem] font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[3.1rem]">
              {c.title}
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-white/65">{c.subtitle}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Left: info + WhatsApp */}
          <Reveal>
            <div className="flex h-full flex-col gap-5">
              <div className="grid gap-4 sm:grid-cols-2">
                {info.map((it) => (
                  <a
                    key={it.label}
                    href={it.href}
                    className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.07]"
                  >
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20 transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                      <it.Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-white/45">
                        {it.label}
                      </div>
                      <div className="mt-1 font-medium text-white">{it.value}</div>
                    </div>
                  </a>
                ))}

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                  <div className="text-xs font-semibold uppercase tracking-wider text-white/45">
                    {c.socialTitle}
                  </div>
                  <div className="mt-3">
                    <SocialLinks tone="onDark" />
                  </div>
                </div>
              </div>

              {/* Copy phone (balloons-js flourish) */}
              <button
                type="button"
                onClick={copyPhone}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left backdrop-blur-sm transition-all duration-300 hover:border-gold/40"
              >
                <span className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-white">{PHONE_DISPLAY}</span>
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                  {copied
                    ? t.common.langName === "EN"
                      ? "Copied!"
                      : "Kopyalandı!"
                    : t.common.langName === "EN"
                    ? "Copy"
                    : "Kopyala"}
                </span>
              </button>

              {/* WhatsApp CTA */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between gap-4 overflow-hidden rounded-3xl bg-gradient-to-br from-gold to-gold-dark p-6 text-navy shadow-2xl shadow-gold/20 transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="pointer-events-none absolute -right-6 -top-8 h-28 w-28 rounded-full bg-white/20 blur-2xl" />
                <div className="relative flex items-center gap-4">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-navy/10">
                    <WhatsApp className="h-7 w-7" />
                  </span>
                  <div>
                    <div className="font-display text-xl font-bold">{c.whatsappCta}</div>
                    <div className="text-sm font-medium text-navy/70">{c.whatsappNote}</div>
                  </div>
                </div>
                <ArrowRight className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Map */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10">
                <iframe
                  title={c.mapTitle}
                  src="https://www.google.com/maps?q=Istanbul&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-56 w-full grayscale-[0.25]"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={120}>
            <div className="rounded-[2rem] border border-navy/10 bg-white p-7 shadow-2xl sm:p-9">
              {status === "done" ? (
                <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                    <Check className="h-10 w-10" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold text-navy">{c.successTitle}</h3>
                  <p className="mt-3 max-w-xs text-muted">{c.successText}</p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="btn mt-7 border border-navy/15 px-6 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-white"
                  >
                    {c.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <h3 className="font-display text-2xl font-bold text-navy">{c.formTitle}</h3>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label={c.name} name="name" required />
                    <Field label={c.phoneInput} name="phone" type="tel" />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label={c.email} name="email" type="email" required />
                    <Field label={c.subject} name="subject" />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-semibold text-navy">
                      {c.message} <span className="text-gold-dark">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full resize-none rounded-xl border border-navy/10 bg-cream px-4 py-3 text-navy outline-none transition-colors placeholder:text-muted/60 focus:border-gold focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn group w-full bg-navy px-6 py-4 text-sm font-semibold text-white hover:bg-gold hover:text-navy disabled:opacity-70"
                  >
                    {status === "sending" ? c.sending : c.send}
                    {status !== "sending" && (
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    )}
                  </button>
                  <p className="text-center text-xs text-muted">{c.fieldsRequired}</p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-navy">
        {label} {required && <span className="text-gold-dark">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-navy/10 bg-cream px-4 py-3 text-navy outline-none transition-colors placeholder:text-muted/60 focus:border-gold focus:bg-white"
      />
    </div>
  );
}
