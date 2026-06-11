import type { Metadata } from "next";
import { BRAND_ASSETS, OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [{ url: "/icon.png", sizes: "512x512", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "512x512" }],
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    images: [
      {
        url: BRAND_ASSETS.ogImage,
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
        alt: OG_IMAGE.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [BRAND_ASSETS.ogImage],
  },
};
