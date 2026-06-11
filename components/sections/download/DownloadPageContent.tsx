"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { PageHero } from "@/components/layout/PageHero";
import { StoreButtons } from "@/components/ui/StoreButtons";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const STEP_KEYS = ["0", "1", "2", "3"] as const;

export function DownloadPageContent() {
  const t = useTranslations("pages.download");

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        variant="violet"
      />

      <section className="section-padding border-t border-gray">
        <div className="container-main mx-auto max-w-xl">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <StoreButtons size="lg" className="justify-center" />
          </motion.div>

          <motion.div
            className="mt-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-center font-heading text-2xl font-bold text-graphite"
            >
              {t("stepsTitle")}
            </motion.h2>
            <ol className="mt-8 space-y-4">
              {STEP_KEYS.map((key, index) => (
                <motion.li
                  key={key}
                  variants={fadeInUp}
                  className="flex gap-4 rounded-2xl border border-gray p-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-violet text-sm font-bold text-violet">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-graphite/70">
                    {t(`steps.${key}`)}
                  </p>
                </motion.li>
              ))}
            </ol>
          </motion.div>
        </div>
      </section>
    </>
  );
}
