// DotPattern — adapted from Cult UI (https://www.cult-ui.com)
// Cult UI components are distributed as source ("copy the source and adapt").
// MIT — used per the library's intended workflow.
import { useId } from "react";
import { cn } from "@/utils/cn";

interface DotPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  className?: string;
  [key: string]: unknown;
}

export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  ...props
}: DotPatternProps) {
  const id = useId();
  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-navy/[0.06] [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          {cx === 0 || cy === 0 ? null : (
            <circle cx={cx} cy={cy} r={cr} />
          )}
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}
