import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/utils/cn";
import { WhatsApp } from "./icons";

export function FloatingWhatsApp() {
  const { t } = useI18n();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.hero.whatsapp}
      className={cn(
        "group fixed bottom-6 right-6 z-40 flex items-center gap-3 transition-all duration-500",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      )}
    >
      <span className="hidden rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-navy/30 sm:block">
        {t.hero.whatsapp}
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-transform duration-300 group-hover:scale-110">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
        <WhatsApp className="relative h-7 w-7" />
      </span>
    </a>
  );
}
