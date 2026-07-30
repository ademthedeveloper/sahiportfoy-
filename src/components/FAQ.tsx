import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/utils/cn";
import { Plus, WhatsApp } from "./icons";
import { Reveal, Eyebrow as EyebrowLabel } from "./ui";

export function FAQ() {
  const { t } = useI18n();
  const f = t.faq;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-cream py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <EyebrowLabel>{f.eyebrow}</EyebrowLabel>
              <h2 className="mt-5 font-display text-[2.1rem] font-bold leading-[1.1] tracking-tight text-navy sm:text-4xl lg:text-[3.1rem]">
                {f.title}
              </h2>
              <p className="mt-5 text-muted">{f.subtitle}</p>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-8 overflow-hidden rounded-3xl border border-navy/10 bg-navy p-7 text-white shadow-xl">
                <div className="pointer-events-none absolute" />
                <WhatsApp className="h-9 w-9 text-[#25D366]" />
                <h3 className="mt-4 font-display text-xl font-bold">
                  {t.common.langName === "EN" ? "Still have questions?" : "Hâlâ sorularınız mı var?"}
                </h3>
                <p className="mt-2 text-sm text-white/65">
                  {t.contact.whatsappNote}
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn mt-5 bg-gold px-5 py-3 text-sm font-semibold text-navy hover:brightness-105"
                >
                  <WhatsApp className="h-4 w-4" />
                  {t.contact.whatsappCta}
                </a>
              </div>
            </Reveal>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {f.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={i} delay={i * 70}>
                  <div
                    className={cn(
                      "overflow-hidden rounded-2xl border bg-white transition-all duration-300",
                      isOpen ? "border-gold/40 shadow-lg shadow-navy/5" : "border-navy/10"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-display text-lg font-semibold text-navy">{item.q}</span>
                      <span
                        className={cn(
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                          isOpen ? "rotate-45 bg-gold text-navy" : "bg-navy/5 text-navy"
                        )}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                    <div
                      className={cn(
                        "grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 leading-relaxed text-muted">{item.a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
