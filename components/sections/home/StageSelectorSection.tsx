"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FadeInView } from "@/components/animations/FadeInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STAGE_CONFIG, USER_STAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function StageSelectorSection() {
  const t = useTranslations("home.stages");
  const tStages = useTranslations("stages");

  return (
    <section id="parcours" className="section-padding border-t border-gray">
      <div className="container-main">
        <FadeInView>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
        </FadeInView>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
                  "group block h-full rounded-2xl border border-gray bg-white p-6 transition-colors",
                  "hover:border-violet hover:bg-violet/5",
                )}
              >
                <p
                  className={cn(
                    "text-xs font-semibold uppercase tracking-wide",
                    STAGE_CONFIG[stage].accentClass,
                  )}
                >
                  {tStages(`${stage}.shortLabel`)}
                </p>
                <h3 className="mt-2 font-heading text-lg font-bold text-graphite">
                  {tStages(`${stage}.headline`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite/60">
                  {tStages(`${stage}.description`)}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-violet opacity-0 transition-opacity group-hover:opacity-100">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
