import { setRequestLocale } from "next-intl/server";
import { getPageMetadata } from "@/lib/get-page-metadata";
import { AboutPageContent } from "@/components/sections/about/AboutPageContent";
import { StickyDownloadBar } from "@/components/layout/StickyDownloadBar";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return getPageMetadata(locale, "pages.about", "/a-propos");
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <AboutPageContent />
      <StickyDownloadBar />
    </>
  );
}
