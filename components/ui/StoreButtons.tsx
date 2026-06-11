"use client";

import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

type StoreButtonsProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

export function StoreButtons({ className, size = "md" }: StoreButtonsProps) {
  const sizeClasses =
    size === "sm"
      ? "h-10 px-4 text-xs"
      : size === "lg"
        ? "h-14 px-8 text-base"
        : "h-12 px-5 text-sm";

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <a
        href={APP_STORE_URL}
        className={cn(
          "inline-flex items-center justify-center rounded-full border-2 border-graphite bg-graphite font-medium text-white transition-colors hover:bg-graphite/90",
          sizeClasses,
        )}
        target="_blank"
        rel="noopener noreferrer"
      >
        App Store
      </a>
      <a
        href={PLAY_STORE_URL}
        className={cn(
          "inline-flex items-center justify-center rounded-full border-2 border-violet bg-violet font-medium text-white transition-colors hover:bg-violet/90",
          sizeClasses,
        )}
        target="_blank"
        rel="noopener noreferrer"
      >
        Google Play
      </a>
    </div>
  );
}
