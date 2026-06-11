"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FadeInView } from "@/components/animations/FadeInView";
import { DotGrid } from "@/components/decorative/VisualDecor";
import { PILLAR_ICONS } from "@/components/icons/BrandIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PILLAR_KEYS = ["guide", "community", "journey"] as const;

const pillarAccents = [
  "border-violet bg-violet/5",
  "border-violet-soft bg-violet-soft/10",
  "border-graphite/20 bg-gray/50",
];

const pillarIconStyles = [
  "border-violet bg-violet/10 text-violet",
  "border-violet-soft bg-violet-soft/15 text-violet",
  "border-graphite/20 bg-white text-graphite",
];

export function PillarsSection() {
  const t = useTranslations("home.pillars");

  return (
    <section className="section-padding relative overflow-hidden border-t border-gray">
      <DotGrid variant="light" className="opacity-50" />
      <div className="container-main relative">
        <FadeInView>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
        </FadeInView>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {PILLAR_KEYS.map((key, index) => {
            const Icon = PILLAR_ICONS[key];

            return (
            <motion.article
              key={key}
              className={`card-shine rounded-2xl border-2 p-8 ${pillarAccents[index]}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border-2 ${pillarIconStyles[index]}`}
              >
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-graphite">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-graphite/65">
                {t(`items.${key}.description`)}
              </p>
            </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
