import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";
import { BRAND_ASSETS, OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

type CreateMetadataOptions = {
  title: string;
  description: string;
  locale: Locale;
  /** Path without locale prefix, e.g. `/parcours` */
  path?: string;
};

export function createMetadata({
  title,
  description,
  locale,
  path = "",
}: CreateMetadataOptions): Metadata {
  const localizedPath = locale === "fr" ? path || "/" : `/en${path || ""}`;
  const absoluteOgImage = `${SITE_URL}${BRAND_ASSETS.ogImage}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url: localizedPath,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      alternateLocale: locale === "fr" ? ["en_US"] : ["fr_FR"],
      images: [
        {
          url: absoluteOgImage,
          width: OG_IMAGE.width,
          height: OG_IMAGE.height,
          alt: OG_IMAGE.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteOgImage],
    },
    alternates: {
      canonical: localizedPath,
      languages: {
        fr: path || "/",
        en: `/en${path}`,
      },
    },
  };
}
