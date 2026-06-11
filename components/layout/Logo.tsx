import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { BRAND_ASSETS, SITE_NAME } from "@/lib/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  iconClassName?: string;
  showWordmark?: boolean;
};

export function Logo({
  className,
  iconClassName,
  showWordmark = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2.5", className)}
      aria-label={SITE_NAME}
    >
      <Image
        src={BRAND_ASSETS.logo}
        alt=""
        width={36}
        height={36}
        className={cn("h-9 w-9", iconClassName)}
        priority
      />
      {showWordmark ? (
        <span className="font-heading text-lg font-normal tracking-tight text-graphite">
          {SITE_NAME}
        </span>
      ) : null}
    </Link>
  );
}
