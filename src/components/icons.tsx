import type { SVGProps } from "react";
import { brand } from "@/lib/constants";

type IconProps = SVGProps<SVGSVGElement>;

function Line({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

function Brand({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

export const Phone = (p: IconProps) => (
  <Line {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </Line>
);

export const Mail = (p: IconProps) => (
  <Line {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2.5" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </Line>
);

export const MapPin = (p: IconProps) => (
  <Line {...p}>
    <path d="M20 10c0 4.99-5.5 10.2-7.4 11.8a1 1 0 0 1-1.2 0C9.5 20.2 4 14.99 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </Line>
);

export const Clock = (p: IconProps) => (
  <Line {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </Line>
);

export const Menu = (p: IconProps) => (
  <Line {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Line>
);

export const Close = (p: IconProps) => (
  <Line {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </Line>
);

export const ArrowRight = (p: IconProps) => (
  <Line {...p}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </Line>
);

export const ArrowUpRight = (p: IconProps) => (
  <Line {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Line>
);

export const ChevronDown = (p: IconProps) => (
  <Line {...p}>
    <path d="m6 9 6 6 6-6" />
  </Line>
);

export const Check = (p: IconProps) => (
  <Line {...p}>
    <path d="M20 6 9 17l-5-5" />
  </Line>
);

export const Plus = (p: IconProps) => (
  <Line {...p}>
    <path d="M5 12h14M12 5v14" />
  </Line>
);

export const Globe = (p: IconProps) => (
  <Line {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </Line>
);

export const Star = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 2.2l2.95 5.98 6.6.96-4.78 4.66 1.13 6.57L12 17.27l-5.9 3.1 1.13-6.57L2.45 9.14l6.6-.96z" />
  </svg>
);

/* ---- Service icons ---- */
export const Building = (p: IconProps) => (
  <Line {...p}>
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18" />
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
    <path d="M9 6h3M9 10h3M9 14h3M9 18h3" />
  </Line>
);

export const KeyRound = (p: IconProps) => (
  <Line {...p}>
    <path d="M2.6 17.4A2 2 0 0 0 2 18.83V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.17a2 2 0 0 0 1.42-.59l.81-.81a6.5 6.5 0 1 0-4-4z" />
    <circle cx="16.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
  </Line>
);

export const Tag = (p: IconProps) => (
  <Line {...p}>
    <path d="M12.6 2.6A2 2 0 0 0 11.2 2H4a2 2 0 0 0-2 2v7.2a2 2 0 0 0 .6 1.4l8.7 8.7a2.4 2.4 0 0 0 3.4 0l6.6-6.6a2.4 2.4 0 0 0 0-3.4z" />
    <circle cx="7.5" cy="7.5" r="1.1" fill="currentColor" stroke="none" />
  </Line>
);

export const TrendingUp = (p: IconProps) => (
  <Line {...p}>
    <path d="M16 7h6v6" />
    <path d="m22 7-8.5 8.5-5-5L2 17" />
  </Line>
);

export const Gavel = (p: IconProps) => (
  <Line {...p}>
    <path d="m14.5 12.5-8 8a2.12 2.12 0 1 1-3-3l8-8" />
    <path d="m16 16 6-6M8 8l6-6M9 7l8 8M21 11l-8-8" />
  </Line>
);

export const Lightbulb = (p: IconProps) => (
  <Line {...p}>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6M10 22h4" />
  </Line>
);

/* ---- Why / values icons ---- */
export const Award = (p: IconProps) => (
  <Line {...p}>
    <circle cx="12" cy="8" r="6" />
    <path d="M15.5 12.9 17 22l-5-3-5 3 1.5-9.1" />
  </Line>
);

export const ShieldCheck = (p: IconProps) => (
  <Line {...p}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </Line>
);

export const Eye = (p: IconProps) => (
  <Line {...p}>
    <path d="M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0" />
    <circle cx="12" cy="12" r="3" />
  </Line>
);

export const Zap = (p: IconProps) => (
  <Line {...p}>
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
  </Line>
);

export const Sparkles = (p: IconProps) => (
  <Line {...p}>
    <path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.14-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.14a.5.5 0 0 1 .96 0l1.58 6.14a2 2 0 0 0 1.44 1.44l6.14 1.58a.5.5 0 0 1 0 .96l-6.14 1.58a2 2 0 0 0-1.44 1.44l-1.58 6.14a.5.5 0 0 1-.96 0z" />
    <path d="M20 3v4M22 5h-4M4 17v2M5 18H3" />
  </Line>
);

export const Heart = (p: IconProps) => (
  <Line {...p}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z" />
  </Line>
);

export const Gem = (p: IconProps) => (
  <Line {...p}>
    <path d="M6 3h12l4 6-10 13L2 9z" />
    <path d="M11 3 8 9l4 13 4-13-3-6" />
    <path d="M2 9h20" />
  </Line>
);

export const Users = (p: IconProps) => (
  <Line {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </Line>
);

export const Quote = (p: IconProps) => (
  <Brand {...p}>
    <path d="M7.5 5C5 5 3 7 3 9.6 3 12.2 5 14 7.4 14c.2 0 .4 0 .6-.05C7.5 16 6 17.4 4 18.1l.9 1.9c3.4-1.2 6-4.3 6-9C10.9 7.4 9.5 5 7.5 5zm9 0C14 5 12 7 12 9.6c0 2.6 2 4.4 4.4 4.4.2 0 .4 0 .6-.05C16.5 16 15 17.4 13 18.1l.9 1.9c3.4-1.2 6-4.3 6-9C19.9 7.4 18.5 5 16.5 5z" />
  </Brand>
);

/* ---- Brand / social ---- */
export const WhatsApp = (p: IconProps) => (
  <Brand {...p}>
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.12-.27-.2-.57-.34M12.05 21.78h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.43 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.33.16 11.89c0 2.1.55 4.14 1.59 5.94L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.17-3.49-8.42" />
  </Brand>
);

export const Facebook = (p: IconProps) => (
  <Brand {...p}>
    <path d="M24 12.07C24 5.45 18.63.07 12 .07S0 5.45 0 12.07c0 5.99 4.39 10.95 10.13 11.85v-8.38H7.08v-3.47h3.05V9.43c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.69.24 2.69.24v2.95h-1.52c-1.49 0-1.95.93-1.95 1.87v2.25h3.33l-.53 3.47h-2.8v8.38C19.61 23.02 24 18.06 24 12.07" />
  </Brand>
);

export const Instagram = (p: IconProps) => (
  <Brand {...p}>
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0m0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8m6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88" />
  </Brand>
);

export const TikTok = (p: IconProps) => (
  <Brand {...p}>
    <path d="M12.53.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </Brand>
);

/* ---- Brand logo emblem + wordmark ---- */
export function Logo({
  className = "",
  mark = 40,
  light = false,
}: {
  className?: string;
  mark?: number;
  light?: boolean;
}) {
  if (brand.logoUrl) {
    return (
      <span className={`inline-flex items-center ${className}`}>
        <img
          src={brand.logoUrl}
          alt="Sâhi Portföy"
          className="h-9 w-auto object-contain sm:h-10"
        />
      </span>
    );
  }
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width={mark} height={mark} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect width="40" height="40" rx="11" fill="#0F172A" />
        <path d="M20 7.5 L30 16 L20 32.5 L10 16 Z" stroke="#C9A227" strokeWidth="1.4" opacity="0.9" />
        <path d="M20 12.5 L25.5 17 L20 27 L14.5 17 Z" fill="#C9A227" />
        <circle cx="20" cy="15.8" r="1.7" fill="#0F172A" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.05rem] font-bold tracking-tight ${
            light ? "text-white" : "text-navy"
          }`}
        >
          Sâhi <span className="text-gold">Portföy</span>
        </span>
        <span
          className={`mt-1 text-[0.6rem] font-semibold italic tracking-[0.04em] ${
            light ? "text-white/55" : "text-muted"
          }`}
        >
          {brand.tagline}
        </span>
      </span>
    </span>
  );
}

export const ICONS = {
  building: Building,
  key: KeyRound,
  tag: Tag,
  chart: TrendingUp,
  scale: Gavel,
  headset: Lightbulb,
  award: Award,
  shield: ShieldCheck,
  eye: Eye,
  zap: Zap,
  sparkles: Sparkles,
  heart: Heart,
  gem: Gem,
  handshake: Users,
} as const;

export type IconName = keyof typeof ICONS;
