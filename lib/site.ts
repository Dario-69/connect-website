export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://connectnow.fr";

export const SITE_NAME = "Connect Now";

export const BRAND_ASSETS = {
  logo: "/brand/logo_violet.svg",
  logoRounded: "/brand/RoundedLogo.png",
  ogImage: "/brand/togetherSlogan.jpg",
} as const;

export const OG_IMAGE = {
  width: 820,
  height: 312,
  alt: "Connect Now — We can, Together",
} as const;
