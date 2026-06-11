import Image from "next/image";
import { BRAND_ASSETS } from "@/lib/site";
import { cn } from "@/lib/utils";

type BrandLogoBadgeProps = {
  className?: string;
  size?: "sm" | "md";
};

const sizes = {
  sm: { box: "h-16 w-16 p-2.5", logo: 44 },
  md: { box: "h-20 w-20 p-3", logo: 52 },
};

export function BrandLogoBadge({ className, size = "sm" }: BrandLogoBadgeProps) {
  const config = sizes[size];

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-2xl border-2 border-violet bg-white",
        config.box,
        className,
      )}
    >
      <Image
        src={BRAND_ASSETS.logo}
        alt=""
        width={config.logo}
        height={config.logo}
        className="h-full w-full object-contain"
      />
    </div>
  );
}
