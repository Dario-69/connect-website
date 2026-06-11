"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { FadeInView } from "@/components/animations/FadeInView";
import { BrandBlob, DecorativeRing, DotGrid } from "@/components/decorative/VisualDecor";
import { PROBLEM_ICONS } from "@/components/icons/BrandIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PROBLEM_KEYS = ["admin", "isolation", "info"] as const;

function AnimatedCounter({ target }: { target: number }) {
  const locale = useLocale();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-gradient-violet tabular-nums">
      {count.toLocaleString(locale === "fr" ? "fr-FR" : "en-US")}
    </span>
  );
}

export function ProblemSection() {
  const t = useTranslations("home.problem");

  return (
    <section className="section-padding relative overflow-hidden bg-graphite text-white">
      <DotGrid variant="dark" />
      <DecorativeRing
        variant="dark"
        className="left-1/2 top-8 h-[480px] w-[480px] -translate-x-1/2 opacity-40"
      />
      <BrandBlob color="white" size="lg" className="-left-20 top-1/4 opacity-30" />
      <BrandBlob color="violet-soft" size="md" className="-right-16 bottom-0 opacity-20" />
      <div className="container-main relative">
        <FadeInView>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={
              <>
                <AnimatedCounter target={443000} /> {t("title")}
              </>
            }
            description={t("description")}
            align="center"
            className="[&_h2]:text-white [&_p]:text-white/70"
          />
        </FadeInView>

        <p className="mx-auto mt-2 max-w-md text-center text-sm text-white/50">
          {t("stat")}
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PROBLEM_KEYS.map((key, index) => {
            const Icon = PROBLEM_ICONS[key];

            return (
            <motion.article
              key={key}
              className="card-shine rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-violet-soft">
                  <Icon />
                </div>
                <span className="font-heading text-3xl font-bold text-white/20">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
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
