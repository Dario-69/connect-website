import { setRequestLocale } from "next-intl/server";
import { getPageMetadata } from "@/lib/get-page-metadata";
import { SupportPageContent } from "@/components/sections/support/SupportPageContent";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return getPageMetadata(locale, "pages.support", "/support");
}

export default async function SupportPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <SupportPageContent />;
}
