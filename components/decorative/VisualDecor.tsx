import { cn } from "@/lib/utils";

type DotGridProps = {
  className?: string;
  variant?: "light" | "dark" | "violet";
};

const dotColors = {
  light: "rgba(110, 97, 255, 0.12)",
  dark: "rgba(255, 255, 255, 0.08)",
  violet: "rgba(110, 97, 255, 0.18)",
};

export function DotGrid({ className, variant = "light" }: DotGridProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, ${dotColors[variant]} 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
}

type BrandBlobProps = {
  className?: string;
  color?: "violet" | "violet-soft" | "white";
  size?: "sm" | "md" | "lg";
};

const blobSizes = {
  sm: "h-32 w-32",
  md: "h-48 w-48",
  lg: "h-72 w-72",
};

const blobColors = {
  violet: "bg-violet/20",
  "violet-soft": "bg-violet-soft/25",
  white: "bg-white/10",
};

export function BrandBlob({
  className,
  color = "violet",
  size = "md",
}: BrandBlobProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        blobSizes[size],
        blobColors[color],
        className,
      )}
      aria-hidden
    />
  );
}

type DecorativeRingProps = {
  className?: string;
  variant?: "light" | "dark";
};

export function DecorativeRing({ className, variant = "light" }: DecorativeRingProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute rounded-full border",
        variant === "light" ? "border-violet/15" : "border-white/10",
        className,
      )}
      aria-hidden
    />
  );
}

export function SectionDivider() {
  return (
    <div className="container-main" aria-hidden>
      <div className="flex items-center gap-4 py-0">
        <div className="h-px flex-1 bg-gray" />
        <div className="h-2 w-2 rounded-full bg-violet/40" />
        <div className="h-px flex-1 bg-gray" />
      </div>
    </div>
  );
}
