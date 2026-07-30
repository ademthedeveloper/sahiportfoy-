import { useI18n } from "@/lib/i18n";
import { cn } from "@/utils/cn";

export function LanguageSwitcher({
  tone = "onDark",
  className,
}: {
  tone?: "onDark" | "onLight";
  className?: string;
}) {
  const { lang, setLang } = useI18n();
  const isEn = lang === "en";

  return (
    <div
      className={cn(
        "relative grid grid-cols-2 rounded-full border p-1 text-[0.7rem] font-bold uppercase tracking-[0.14em]",
        tone === "onDark" ? "border-white/20 bg-white/10" : "border-navy/10 bg-navy/[0.04]",
        className
      )}
      role="group"
      aria-label="Language / Dil seçimi"
    >
      <span
        aria-hidden
        className={cn(
          "absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-gold shadow-sm shadow-gold/40 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isEn && "translate-x-full"
        )}
      />
      {(["tr", "en"] as const).map((l) => {
        const active = lang === l;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={active}
            className={cn(
              "relative z-10 rounded-full px-3.5 py-1.5 transition-colors duration-300",
              active ? "text-navy" : tone === "onDark" ? "text-white/65 hover:text-white" : "text-navy/50 hover:text-navy"
            )}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}
