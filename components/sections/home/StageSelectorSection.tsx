"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FadeInView } from "@/components/animations/FadeInView";
import { DotGrid } from "@/components/decorative/VisualDecor";
import { STAGE_ICONS } from "@/components/icons/BrandIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STAGE_CONFIG, USER_STAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const stageBorderAccents: Record<string, string> = {
  aspirant: "border-t-violet-soft",
  partant: "border-t-violet",
  nouveau: "border-t-violet",
  etabli: "border-t-graphite/30",
};

export function StageSelectorSection() {
  const t = useTranslations("home.stages");
  const tStages = useTranslations("stages");

  return (
    <section id="parcours" className="section-padding section-mesh relative overflow-hidden border-t border-gray">
      <DotGrid variant="violet" className="opacity-40" />
      <div className="container-main relative">
        <FadeInView>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
        </FadeInView>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {USER_STAGES.map((stage, index) => {
            const Icon = STAGE_ICONS[stage];

            return (
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
                  "group card-shine block h-full rounded-2xl border border-gray border-t-4 bg-white p-6 transition-colors",
                  stageBorderAccents[stage],
                  "hover:border-violet hover:bg-violet/5",
                )}
              >
                <div
                  className={cn(
                    "mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-gray bg-violet/5 transition-colors group-hover:border-violet/30 group-hover:bg-violet/10",
                    STAGE_CONFIG[stage].accentClass,
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>
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
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-violet opacity-0 transition-opacity group-hover:opacity-100">
                  {t("cta")} →
                </span>
              </Link>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
