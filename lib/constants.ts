import type { NavItem, StageConfig, UserStage } from "@/types";

/** Brand palette — source: book/overview.md */
export const colors = {
  violet: "#6E61FF",
  violetSoft: "#B0A0FE",
  graphite: "#1A1A1A",
  white: "#FFFFFF",
  gray: "#E9E9E9",
} as const;

export const APP_STORE_URL = "#";
export const PLAY_STORE_URL = "#";
export const CONTACT_EMAIL = "contact@connectnow.fr";
export const SUPPORT_EMAIL = "support@connectnow.fr";
export const PRIVACY_EMAIL = "privacy@connectnow.fr";

export const USER_STAGES: UserStage[] = [
  "aspirant",
  "partant",
  "nouveau",
  "etabli",
];

export const STAGE_CONFIG: Record<UserStage, StageConfig> = {
  aspirant: {
    id: "aspirant",
    href: "/parcours/aspirant",
    accentClass: "text-violet-soft",
  },
  partant: {
    id: "partant",
    href: "/parcours/partant",
    accentClass: "text-violet",
  },
  nouveau: {
    id: "nouveau",
    href: "/parcours/nouveau",
    accentClass: "text-violet",
  },
  etabli: {
    id: "etabli",
    href: "/parcours/etabli",
    accentClass: "text-graphite",
  },
};

export const MAIN_NAV: NavItem[] = [
  { key: "journey", href: "/parcours" },
  { key: "features", href: "/fonctionnalites" },
  { key: "whyUs", href: "/pourquoi-connect-now" },
  { key: "testimonials", href: "/temoignages" },
  { key: "about", href: "/a-propos" },
];

export const FOOTER_NAV: NavItem[] = [
  { key: "universities", href: "/universites" },
  { key: "support", href: "/support" },
  { key: "legal", href: "/mentions-legales" },
  { key: "privacy", href: "/privacy" },
  { key: "terms", href: "/cgu" },
];

/** Layout & animation tokens */
export const layout = {
  maxWidth: "1280px",
  headerHeight: "72px",
  sectionPaddingY: "clamp(4rem, 10vw, 8rem)",
} as const;

export const motion = {
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.8,
  },
  ease: {
    out: [0.22, 1, 0.36, 1] as const,
    inOut: [0.65, 0, 0.35, 1] as const,
  },
} as const;
