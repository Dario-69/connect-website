"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { PageHero } from "@/components/layout/PageHero";
import { PageCta } from "@/components/layout/PageCta";
import { CompareSection } from "@/components/sections/home/CompareSection";

const REASON_KEYS = ["0", "1", "2", "3"] as const;

export function WhyUsPageContent() {
  const t = useTranslations("pages.whyUs");

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        variant="dark"
      />

      <section className="section-padding border-t border-gray">
        <div className="container-main grid gap-6 md:grid-cols-2">
          {REASON_KEYS.map((key, index) => (
            <motion.article
              key={key}
              className="rounded-2xl border border-gray p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <h2 className="font-heading text-lg font-bold text-graphite">
                {t(`reasons.${key}.title`)}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-graphite/65">
                {t(`reasons.${key}.description`)}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <CompareSection />

      <PageCta title={t("cta.title")} subtitle={t("cta.subtitle")} />
    </>
  );
}
