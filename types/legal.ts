export type LegalSection = {
  title: string;
  paragraphs: string[];
  items?: string[];
  paragraphsAfter?: string[];
};

export type LegalDocument = {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export type LegalPageKey = "mentions" | "privacy" | "terms";
