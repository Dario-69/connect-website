"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FadeInView } from "@/components/animations/FadeInView";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PILLAR_KEYS = ["guide", "community", "journey"] as const;

const pillarAccents = [
  "border-violet bg-violet/5",
  "border-violet-soft bg-violet-soft/10",
  "border-graphite/20 bg-gray/50",
];

export function PillarsSection() {
  const t = useTranslations("home.pillars");

  return (
    <section className="section-padding border-t border-gray">
      <div className="container-main">
        <FadeInView>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
        </FadeInView>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {PILLAR_KEYS.map((key, index) => (
            <motion.article
              key={key}
              className={`rounded-2xl border-2 p-8 ${pillarAccents[index]}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-violet text-sm font-bold text-violet">
                {index + 1}
              </div>
              <h3 className="font-heading text-xl font-bold text-graphite">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-graphite/65">
                {t(`items.${key}.description`)}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
