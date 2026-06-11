import { setRequestLocale } from "next-intl/server";
import { getPageMetadata } from "@/lib/get-page-metadata";
import { TestimonialsPageContent } from "@/components/sections/testimonials/TestimonialsPageContent";
import { StickyDownloadBar } from "@/components/layout/StickyDownloadBar";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return getPageMetadata(locale, "pages.testimonials", "/temoignages");
}

export default async function TestimonialsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <TestimonialsPageContent />
      <StickyDownloadBar />
    </>
  );
}
