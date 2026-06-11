"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { PageCta } from "@/components/layout/PageCta";
import { FadeInView } from "@/components/animations/FadeInView";
import { STAGE_CONFIG, USER_STAGES } from "@/lib/constants";
import type { UserStage } from "@/types";
import { cn } from "@/lib/utils";

const CHALLENGE_KEYS = ["0", "1", "2"] as const;
const STEP_KEYS = ["0", "1", "2"] as const;

type StageDetailContentProps = {
  stage: UserStage;
};

export function StageDetailContent({ stage }: StageDetailContentProps) {
  const t = useTranslations(`pages.stageDetail.${stage}`);
  const tCommon = useTranslations("pages.stageDetail");
  const tStages = useTranslations("stages");

  const otherStages = USER_STAGES.filter((s) => s !== stage);

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        variant="violet"
      />

      <section className="section-padding border-t border-gray">
        <div className="container-main grid gap-12 lg:grid-cols-2">
          <FadeInView>
            <h2 className="font-heading text-2xl font-bold text-graphite">
              {tCommon("challengesTitle")}
            </h2>
            <ul className="mt-6 space-y-4">
              {CHALLENGE_KEYS.map((key, index) => (
                <motion.li
                  key={key}
                  className="flex gap-4 rounded-2xl border border-gray p-4"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                >
                  <span className="font-heading text-lg font-bold text-violet-soft">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-graphite/70">
                    {t(`challenges.${key}`)}
                  </p>
                </motion.li>
              ))}
            </ul>
          </FadeInView>

          <FadeInView delay={0.1}>
            <h2 className="font-heading text-2xl font-bold text-graphite">
              {tCommon("stepsTitle")}
            </h2>
            <ul className="mt-6 space-y-4">
              {STEP_KEYS.map((key, index) => (
                <motion.li
                  key={key}
                  className="flex gap-4 rounded-2xl border-2 border-violet/30 bg-violet/5 p-4"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                >
                  <span className="font-heading text-lg font-bold text-violet">
                    ✓
                  </span>
                  <p className="text-sm leading-relaxed text-graphite/70">
                    {t(`steps.${key}`)}
                  </p>
                </motion.li>
              ))}
            </ul>
          </FadeInView>
        </div>
      </section>

      <section className="section-padding border-t border-gray bg-gray/40">
        <div className="container-main">
          <FadeInView>
            <div className="mx-auto max-w-2xl rounded-2xl border-2 border-violet bg-white p-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-violet">
                {tCommon("appTitle")}
              </p>
              <p className="mt-4 text-base leading-relaxed text-graphite/70">
                {t("app")}
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="section-padding border-t border-gray">
        <div className="container-main">
          <h2 className="text-center font-heading text-xl font-bold text-graphite">
            {tCommon("otherStages")}
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {otherStages.map((s) => (
              <Link
                key={s}
                href={STAGE_CONFIG[s].href}
                className={cn(
                  "rounded-full border border-gray px-5 py-2 text-sm font-medium text-graphite/70 transition-colors",
                  "hover:border-violet hover:text-violet",
                )}
              >
                {tStages(`${s}.shortLabel`)}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title={tCommon("cta.title")}
        subtitle={tCommon("cta.subtitle")}
      />
    </>
  );
}
