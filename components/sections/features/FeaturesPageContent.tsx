"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { PageHero } from "@/components/layout/PageHero";
import { PageCta } from "@/components/layout/PageCta";
import { FadeInView } from "@/components/animations/FadeInView";

const FEATURE_KEYS = ["guide", "community", "journey"] as const;
const POINT_KEYS = ["0", "1", "2"] as const;

export function FeaturesPageContent() {
  const t = useTranslations("pages.features");

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
      />

      <section className="section-padding border-t border-gray">
        <div className="container-main space-y-16">
          {FEATURE_KEYS.map((key, index) => (
            <FadeInView key={key} delay={index * 0.05}>
              <article
                className={`grid gap-8 rounded-2xl border p-8 lg:grid-cols-2 lg:items-center ${
                  index % 2 === 0
                    ? "border-gray bg-white"
                    : "border-violet/30 bg-violet/5"
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="font-heading text-5xl font-bold text-violet/20">
                    0{index + 1}
                  </span>
                  <h2 className="mt-2 font-heading text-2xl font-bold text-graphite">
                    {t(`items.${key}.title`)}
                  </h2>
                  <p className="mt-3 text-graphite/70">
                    {t(`items.${key}.description`)}
                  </p>
                </div>
                <ul className={`space-y-3 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  {POINT_KEYS.map((pointKey, pointIndex) => (
                    <motion.li
                      key={pointKey}
                      className="flex gap-3 rounded-xl border border-gray bg-white p-4 text-sm text-graphite/70"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: pointIndex * 0.06,
                      }}
                    >
                      <span className="font-bold text-violet">→</span>
                      {t(`items.${key}.points.${pointKey}`)}
                    </motion.li>
                  ))}
                </ul>
              </article>
            </FadeInView>
          ))}
        </div>
      </section>

      <PageCta title={t("cta.title")} subtitle={t("cta.subtitle")} />
    </>
  );
}
