"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { PageHero } from "@/components/layout/PageHero";
import { PageCta } from "@/components/layout/PageCta";
import { FadeInView } from "@/components/animations/FadeInView";

const VALUE_KEYS = ["0", "1", "2", "3", "4"] as const;

export function AboutPageContent() {
  const t = useTranslations("pages.about");

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
      />

      <section className="section-padding border-t border-gray">
        <div className="container-main mx-auto max-w-3xl space-y-12">
          <FadeInView>
            <h2 className="font-heading text-2xl font-bold text-graphite">
              {t("mission.title")}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-graphite/70">
              {t("mission.description")}
            </p>
          </FadeInView>

          <FadeInView delay={0.05}>
            <div className="rounded-2xl border-2 border-violet/30 bg-violet/5 p-8">
              <h2 className="font-heading text-2xl font-bold text-graphite">
                {t("vision.title")}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-graphite/70">
                {t("vision.description")}
              </p>
            </div>
          </FadeInView>

          <FadeInView delay={0.1}>
            <h2 className="font-heading text-2xl font-bold text-graphite">
              {t("values.title")}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {VALUE_KEYS.map((key, index) => (
                <motion.article
                  key={key}
                  className="rounded-2xl border border-gray p-5"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                >
                  <h3 className="font-heading font-bold text-graphite">
                    {t(`values.items.${key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm text-graphite/65">
                    {t(`values.items.${key}.description`)}
                  </p>
                </motion.article>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      <PageCta title={t("cta.title")} subtitle={t("cta.subtitle")} />
    </>
  );
}
