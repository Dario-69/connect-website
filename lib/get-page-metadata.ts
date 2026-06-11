import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { createMetadata } from "@/lib/metadata";

export async function getPageMetadata(
  locale: string,
  namespace: string,
  path: string,
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: `${namespace}.meta` });

  return createMetadata({
    title: t("title"),
    description: t("description"),
    locale: locale as Locale,
    path,
  });
}

export async function getStageMetadata(
  locale: string,
  stage: string,
): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: `pages.stageDetail.${stage}.meta`,
  });

  return createMetadata({
    title: t("title"),
    description: t("description"),
    locale: locale as Locale,
    path: `/parcours/${stage}`,
  });
}

export async function getLegalMetadata(
  locale: string,
  pageKey: "mentions" | "privacy" | "terms",
  path: string,
): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: `pages.legal.${pageKey}.meta`,
  });

  return createMetadata({
    title: t("title"),
    description: t("description"),
    locale: locale as Locale,
    path,
  });
}
