"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { PageHero } from "@/components/layout/PageHero";
import { PageCta } from "@/components/layout/PageCta";
import { USER_STAGES, STAGE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function TestimonialsPageContent() {
  const t = useTranslations("pages.testimonials");

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
      />

      <section className="section-padding border-t border-gray">
        <div className="container-main grid gap-6 md:grid-cols-2">
          {USER_STAGES.map((stage, index) => (
            <motion.blockquote
              key={stage}
              className="flex flex-col rounded-2xl border border-gray bg-white p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <span
                className={cn(
                  "text-xs font-semibold uppercase tracking-wide",
                  STAGE_CONFIG[stage].accentClass,
                )}
              >
                {t(`items.${stage}.stage`)}
              </span>
              <p className="mt-4 flex-1 font-heading text-lg leading-relaxed text-graphite">
                &ldquo;{t(`items.${stage}.quote`)}&rdquo;
              </p>
              <footer className="mt-6 border-t border-gray pt-4">
                <p className="font-medium text-graphite">
                  {t(`items.${stage}.author`)}
                </p>
                <p className="text-sm text-graphite/50">
                  {t(`items.${stage}.origin`)}
                </p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </section>

      <PageCta title={t("cta.title")} subtitle={t("cta.subtitle")} />
    </>
  );
}
