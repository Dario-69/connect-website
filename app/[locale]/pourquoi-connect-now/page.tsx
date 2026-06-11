import { setRequestLocale } from "next-intl/server";
import { getPageMetadata } from "@/lib/get-page-metadata";
import { WhyUsPageContent } from "@/components/sections/why/WhyUsPageContent";
import { StickyDownloadBar } from "@/components/layout/StickyDownloadBar";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return getPageMetadata(locale, "pages.whyUs", "/pourquoi-connect-now");
}

export default async function WhyUsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <WhyUsPageContent />
      <StickyDownloadBar />
    </>
  );
}
