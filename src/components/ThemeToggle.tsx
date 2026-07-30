import { useTheme } from "@/lib/theme";
import { cn } from "@/utils/cn";

export function ThemeToggle({ tone = "onDark" }: { tone?: "onDark" | "onLight" }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Açık temaya geç" : "Koyu temaya geç"}
      title={isDark ? "Açık tema" : "Koyu tema"}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-0.5",
        tone === "onDark"
          ? "border-white/20 text-white/85 hover:border-gold hover:text-gold-light"
          : "border-navy/15 text-navy hover:border-gold hover:text-gold-dark"
      )}
    >
      {isDark ? (
        // Sun
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2v2.4M12 19.6V22M2 12h2.4M19.6 12H22M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M19.4 4.6l-1.7 1.7M6.3 17.7l-1.7 1.7" />
        </svg>
      ) : (
        // Moon
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  );
}
