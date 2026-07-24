import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type GridBackgroundDemoProps = {
  className?: string;
  children?: ReactNode;
};

/**
 * Aceternity-style grid background.
 * Thinner grid strokes; stronger visibility in the center, fading toward corners.
 */
export default function GridBackgroundDemo({
  className,
  children,
}: GridBackgroundDemoProps) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden bg-body dark:bg-darkmode-body",
        className,
      )}
    >
      {/* Grid lines — thin stroke */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          "[background-size:48px_48px]",
          "[background-image:linear-gradient(to_right,rgba(0,0,0,0.07)_0.5px,transparent_0.5px),linear-gradient(to_bottom,rgba(0,0,0,0.07)_0.5px,transparent_0.5px)]",
          "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_0.5px,transparent_0.5px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_0.5px,transparent_0.5px)]",
        )}
      />
      {/* Radial fade: grid strong in center, soft / hidden at corners */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-body dark:bg-darkmode-body",
          "[mask-image:radial-gradient(ellipse_75%_60%_at_center,transparent_0%,transparent_35%,black_78%)]",
          "[-webkit-mask-image:radial-gradient(ellipse_75%_60%_at_center,transparent_0%,transparent_35%,black_78%)]",
        )}
      />
      {children ? (
        <div className="relative z-10 w-full">{children}</div>
      ) : null}
    </div>
  );
}
