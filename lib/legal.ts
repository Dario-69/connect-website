import type { LegalDocument, LegalPageKey } from "@/types/legal";
import privacyFr from "@/content/legal/fr/privacy.json";
import privacyEn from "@/content/legal/en/privacy.json";
import cguFr from "@/content/legal/fr/cgu.json";
import cguEn from "@/content/legal/en/cgu.json";
import { getTranslations, setRequestLocale } from "next-intl/server";

const LEGAL_DOCUMENTS: Record<
  "fr" | "en",
  Record<"privacy" | "terms", LegalDocument>
> = {
  fr: { privacy: privacyFr, terms: cguFr },
  en: { privacy: privacyEn, terms: cguEn },
};

const MENTIONS_SECTIONS = {
  sections: 3,
  paragraphs: [2, 1, 1] as number[],
};

export async function buildLegalPageProps(
  locale: string,
  pageKey: LegalPageKey,
) {
  setRequestLocale(locale);

  if (pageKey === "privacy" || pageKey === "terms") {
    const lang = locale === "en" ? "en" : "fr";
    return LEGAL_DOCUMENTS[lang][pageKey];
  }

  const t = await getTranslations({
    locale,
    namespace: `pages.legal.${pageKey}`,
  });
  const tLegal = await getTranslations({ locale, namespace: "pages.legal" });

  const sections = Array.from({ length: MENTIONS_SECTIONS.sections }, (_, i) => ({
    title: t(`sections.${i}.title`),
    paragraphs: Array.from(
      { length: MENTIONS_SECTIONS.paragraphs[i] },
      (_, j) => t(`sections.${i}.paragraphs.${j}`),
    ),
  }));

  return {
    title: t("title"),
    lastUpdated: tLegal("lastUpdated"),
    sections,
  };
}
