"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { PageHero } from "@/components/layout/PageHero";
import { InstitutionalCta } from "@/components/layout/InstitutionalCta";
import { FadeInView } from "@/components/animations/FadeInView";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PROBLEM_KEYS = ["0", "1", "2"] as const;
const PLATFORM_KEYS = ["0", "1", "2", "3"] as const;
const BENEFIT_KEYS = ["0", "1", "2"] as const;
const PROCESS_KEYS = ["0", "1", "2", "3"] as const;

export function UniversitiesPageContent() {
  const t = useTranslations("pages.universities");

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        variant="dark"
      />

      <section className="section-padding border-t border-gray">
        <div className="container-main">
          <FadeInView>
            <SectionHeading
              eyebrow={t("problem.eyebrow")}
              title={t("problem.title")}
              description={t("problem.description")}
            />
          </FadeInView>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PROBLEM_KEYS.map((key, index) => (
              <motion.article
                key={key}
                className="rounded-2xl border border-gray p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <span className="font-heading text-3xl font-bold text-violet-soft">
                  0{index + 1}
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-graphite">
                  {t(`problem.items.${key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite/65">
                  {t(`problem.items.${key}.description`)}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-gray bg-gray/40">
        <div className="container-main">
          <FadeInView>
            <SectionHeading
              eyebrow={t("platform.eyebrow")}
              title={t("platform.title")}
              description={t("platform.description")}
            />
          </FadeInView>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {PLATFORM_KEYS.map((key, index) => (
              <motion.article
                key={key}
                className="rounded-2xl border-2 border-violet/30 bg-white p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-violet text-sm font-bold text-violet">
                  {index + 1}
                </div>
                <h3 className="font-heading text-lg font-bold text-graphite">
                  {t(`platform.items.${key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite/65">
                  {t(`platform.items.${key}.description`)}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-gray">
        <div className="container-main">
          <FadeInView>
            <SectionHeading
              eyebrow={t("benefits.eyebrow")}
              title={t("benefits.title")}
            />
          </FadeInView>

          <div className="mt-12 space-y-4">
            {BENEFIT_KEYS.map((key, index) => (
              <motion.article
                key={key}
                className="grid gap-4 rounded-2xl border border-gray p-6 md:grid-cols-[1fr_2fr] md:items-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <h3 className="font-heading text-lg font-bold text-violet">
                  {t(`benefits.items.${key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-graphite/65">
                  {t(`benefits.items.${key}.description`)}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-gray bg-violet/5">
        <div className="container-main mx-auto max-w-2xl">
          <FadeInView>
            <SectionHeading
              eyebrow={t("process.eyebrow")}
              title={t("process.title")}
            />
          </FadeInView>

          <ol className="mt-10 space-y-4">
            {PROCESS_KEYS.map((key, index) => (
              <motion.li
                key={key}
                className="flex gap-4 rounded-2xl border border-gray bg-white p-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-violet text-sm font-bold text-violet">
                  {index + 1}
                </span>
                <p className="text-sm leading-relaxed text-graphite/70">
                  {t(`process.steps.${key}`)}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <InstitutionalCta
        title={t("cta.title")}
        subtitle={t("cta.subtitle")}
        buttonLabel={t("cta.button")}
      />
    </>
  );
}
