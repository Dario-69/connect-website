"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { PageCta } from "@/components/layout/PageCta";
import { STAGE_CONFIG, USER_STAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ParcoursPageContent() {
  const t = useTranslations("pages.parcours");
  const tStages = useTranslations("stages");

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
      />

      <section className="section-padding border-t border-gray">
        <div className="container-main">
          <div className="grid gap-6 md:grid-cols-2">
            {USER_STAGES.map((stage, index) => (
              <motion.div
                key={stage}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Link
                  href={STAGE_CONFIG[stage].href}
                  className={cn(
                    "group flex h-full flex-col rounded-2xl border border-gray bg-white p-8 transition-colors",
                    "hover:border-violet hover:bg-violet/5",
                  )}
                >
                  <span
                    className={cn(
                      "text-xs font-semibold uppercase tracking-wide",
                      STAGE_CONFIG[stage].accentClass,
                    )}
                  >
                    {tStages(`${stage}.label`)}
                  </span>
                  <h2 className="mt-3 font-heading text-2xl font-bold text-graphite">
                    {tStages(`${stage}.headline`)}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-graphite/65">
                    {tStages(`${stage}.description`)}
                  </p>
                  <span className="mt-6 text-sm font-medium text-violet">
                    →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCta title={t("cta.title")} subtitle={t("cta.subtitle")} />
    </>
  );
}
