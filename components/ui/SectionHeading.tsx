import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-violet">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl font-bold leading-tight text-graphite sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-graphite/70 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
