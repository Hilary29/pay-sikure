import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

interface MovingGradientProps extends ComponentPropsWithoutRef<"div"> {
  animated?: boolean;
  gradientClassName?: string;
}

export default function MovingGradient({
  children,
  className,
  animated = true,
  gradientClassName,
  ...props
}: MovingGradientProps) {
  const backgroundClassName = "pointer-events-none absolute h-full w-full";
  return (
    <div {...props} className={cn("relative overflow-hidden bg-white", className)}>
      <div
        className={cn(
          "bg-size bg-gradient-to-r from-[#74f8e2] from-30% via-secondary-500 via-50% to-white to-80% opacity-15",
          {
            [backgroundClassName]: true,
            "animate-bg-position bg-[length:300%_auto]": animated,
          },
          gradientClassName,
        )}
      />
      <div className={cn(backgroundClassName, "z-10 blur-lg")} />
      {children}
    </div>
  );
}
