import { cn } from "@/lib/utils";

type AvatarInitialsProps = {
  name: string;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "h-8 w-8 text-xs",
  md: "h-11 w-11 text-sm",
  lg: "h-14 w-14 text-base",
};

export function AvatarInitials({ name, className, size = "md" }: AvatarInitialsProps) {
  const initial = name.trim().charAt(0).toUpperCase();

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full border-2 border-violet bg-violet/10 font-heading font-bold text-violet",
        sizes[size],
        className,
      )}
      aria-hidden
    >
      {initial}
    </div>
  );
}

type AvatarStackProps = {
  initials: string[];
  className?: string;
};

export function AvatarStack({ initials, className }: AvatarStackProps) {
  return (
    <div className={cn("flex -space-x-2", className)} aria-hidden>
      {initials.map((letter, index) => (
        <div
          key={`${letter}-${index}`}
          className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-violet/15 text-[10px] font-bold text-violet"
        >
          {letter}
        </div>
      ))}
    </div>
  );
}
