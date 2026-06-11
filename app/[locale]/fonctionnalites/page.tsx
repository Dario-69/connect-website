import { setRequestLocale } from "next-intl/server";
import { getPageMetadata } from "@/lib/get-page-metadata";
import { FeaturesPageContent } from "@/components/sections/features/FeaturesPageContent";
import { StickyDownloadBar } from "@/components/layout/StickyDownloadBar";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return getPageMetadata(locale, "pages.features", "/fonctionnalites");
}

export default async function FeaturesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <FeaturesPageContent />
      <StickyDownloadBar />
    </>
  );
}
