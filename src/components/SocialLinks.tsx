import { social } from "@/lib/constants";
import { cn } from "@/utils/cn";
import { Facebook, Instagram, TikTok } from "./icons";

const items = [
  { url: social.facebook, Icon: Facebook, label: "Facebook" },
  { url: social.instagram, Icon: Instagram, label: "Instagram" },
  { url: social.tiktok, Icon: TikTok, label: "TikTok" },
];

export function SocialLinks({
  tone = "onLight",
  className,
  size = "md",
}: {
  tone?: "onLight" | "onDark";
  className?: string;
  size?: "md" | "lg";
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {items.map(({ url, Icon, label }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={cn(
            "group inline-flex items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-0.5",
            size === "lg" ? "h-12 w-12" : "h-10 w-10",
            tone === "onDark"
              ? "border-white/20 text-white/80 hover:border-gold hover:bg-gold hover:text-navy"
              : "border-navy/10 text-navy/70 hover:border-gold hover:bg-gold hover:text-navy"
          )}
        >
          <Icon
            className={cn(
              "transition-transform duration-300 group-hover:scale-110",
              size === "lg" ? "h-5 w-5" : "h-[18px] w-[18px]"
            )}
          />
        </a>
      ))}
    </div>
  );
}
