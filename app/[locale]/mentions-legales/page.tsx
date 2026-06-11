import { getLegalMetadata } from "@/lib/get-page-metadata";
import { buildLegalPageProps } from "@/lib/legal";
import { LegalLayout } from "@/components/layout/LegalLayout";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return getLegalMetadata(locale, "mentions", "/mentions-legales");
}

export default async function MentionsLegalesPage({ params }: PageProps) {
  const { locale } = await params;
  const props = await buildLegalPageProps(locale, "mentions");

  return (
    <LegalLayout
      title={props.title}
      lastUpdated={props.lastUpdated}
      sections={props.sections}
    />
  );
}
