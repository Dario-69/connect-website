import { getLegalMetadata } from "@/lib/get-page-metadata";
import { buildLegalPageProps } from "@/lib/legal";
import { LegalLayout } from "@/components/layout/LegalLayout";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return getLegalMetadata(locale, "terms", "/cgu");
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  const props = await buildLegalPageProps(locale, "terms");

  return (
    <LegalLayout
      title={props.title}
      lastUpdated={props.lastUpdated}
      sections={props.sections}
    />
  );
}
