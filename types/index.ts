export type UserStage = "aspirant" | "partant" | "nouveau" | "etabli";

export type StageConfig = {
  id: UserStage;
  href: string;
  accentClass: string;
};

export type NavItem = {
  key: string;
  href: string;
};
