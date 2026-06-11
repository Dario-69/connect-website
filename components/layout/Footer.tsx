"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FOOTER_NAV } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Footer({ className }: { className?: string }) {
  const t = useTranslations();
  const tFooter = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer className={cn("border-t border-gray bg-white", className)}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-heading text-xl font-bold text-graphite">
              {t("common.brand")}
            </p>
            <p className="mt-2 text-sm text-graphite/60">{tFooter("tagline")}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            {FOOTER_NAV.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-sm text-graphite/60 transition-colors hover:text-violet"
              >
                {item.key === "universities"
                  ? tNav("universities")
                  : tFooter(item.key)}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-8 border-t border-gray pt-8 text-center text-xs text-graphite/50">
          {tFooter("copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}
