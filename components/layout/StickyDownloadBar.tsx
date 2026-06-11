"use client";

import { useTranslations } from "next-intl";
import { LinkButton } from "@/components/ui/Button";

export function StickyDownloadBar() {
  const t = useTranslations("common");

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray bg-white p-3 md:hidden">
      <LinkButton href="/telecharger" className="w-full" size="md">
        {t("downloadApp")}
      </LinkButton>
    </div>
  );
}
