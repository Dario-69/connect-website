import { setRequestLocale } from "next-intl/server";
import { getPageMetadata } from "@/lib/get-page-metadata";
import { ParcoursPageContent } from "@/components/sections/parcours/ParcoursPageContent";
import { StickyDownloadBar } from "@/components/layout/StickyDownloadBar";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return getPageMetadata(locale, "pages.parcours", "/parcours");
}

export default async function ParcoursPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ParcoursPageContent />
      <StickyDownloadBar />
    </>
  );
}
