import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getStageMetadata } from "@/lib/get-page-metadata";
import { StageDetailContent } from "@/components/sections/parcours/StageDetailContent";
import { StickyDownloadBar } from "@/components/layout/StickyDownloadBar";
import { isUserStage } from "@/lib/pages";
import { USER_STAGES } from "@/lib/constants";

type PageProps = {
  params: Promise<{ locale: string; stade: string }>;
};

export function generateStaticParams() {
  return USER_STAGES.map((stade) => ({ stade }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, stade } = await params;

  if (!isUserStage(stade)) {
    return {};
  }

  return getStageMetadata(locale, stade);
}

export default async function StagePage({ params }: PageProps) {
  const { locale, stade } = await params;

  if (!isUserStage(stade)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <>
      <StageDetailContent stage={stade} />
      <StickyDownloadBar />
    </>
  );
}
