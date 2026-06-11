import { setRequestLocale } from "next-intl/server";
import { getPageMetadata } from "@/lib/get-page-metadata";
import { UniversitiesPageContent } from "@/components/sections/universities/UniversitiesPageContent";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return getPageMetadata(locale, "pages.universities", "/universites");
}

export default async function UniversitiesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <UniversitiesPageContent />;
}
