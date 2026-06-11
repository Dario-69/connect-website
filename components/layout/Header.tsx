"use client";

import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { LinkButton } from "@/components/ui/Button";
import { MAIN_NAV } from "@/lib/constants";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function Header({ className }: { className?: string }) {
  const tNav = useTranslations("nav");
  const tCommon = useTranslations("common");

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-gray/60 bg-white/80 backdrop-blur-md",
        className,
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo showWordmark />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-graphite/70 transition-colors hover:text-violet"
            >
              {tNav(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher className="hidden md:inline-flex" />
          <LinkButton href="/telecharger" size="sm" className="hidden md:inline-flex">
            {tCommon("downloadApp")}
          </LinkButton>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
