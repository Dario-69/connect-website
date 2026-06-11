import { setRequestLocale } from "next-intl/server";
import { getPageMetadata } from "@/lib/get-page-metadata";
import { DownloadPageContent } from "@/components/sections/download/DownloadPageContent";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return getPageMetadata(locale, "pages.download", "/telecharger");
}

export default async function DownloadPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <DownloadPageContent />;
}
