"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { BrandLogoBadge } from "@/components/brand/BrandLogoBadge";
import { FadeInView } from "@/components/animations/FadeInView";
import {
  BrandBlob,
  DecorativeRing,
  DotGrid,
} from "@/components/decorative/VisualDecor";
import {
  MissionIcon,
  VALUE_ICONS,
  VisionIcon,
} from "@/components/icons/BrandIcons";
import { PageHero } from "@/components/layout/PageHero";
import { StoreButtons } from "@/components/ui/StoreButtons";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

const VALUE_KEYS = ["0", "1", "2", "3", "4"] as const;

const valueAccents = [
  "border-violet/30 bg-violet/5 text-violet",
  "border-violet-soft/40 bg-violet-soft/10 text-violet",
  "border-violet/20 bg-violet/5 text-violet",
  "border-graphite/15 bg-gray/40 text-graphite",
  "border-violet/30 bg-violet/5 text-violet",
];

export function AboutPageContent() {
  const t = useTranslations("pages.about");
  const tCommon = useTranslations("common");

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        variant="violet"
      />

      <section className="relative overflow-hidden border-t border-gray bg-graphite text-white">
        <DotGrid variant="dark" />
        <BrandBlob color="violet-soft" size="lg" className="-right-24 top-0 opacity-25" />
        <div className="container-main relative grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-20">
          <FadeInView>
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-soft">
              {tCommon("brand")}
            </p>
            <p className="mt-4 font-heading text-3xl font-bold leading-tight sm:text-4xl">
              {tCommon("slogan")}
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/65">
              {t("hero.description")}
            </p>
          </FadeInView>

          <FadeInView delay={0.08}>
            <div className="relative mx-auto w-full max-w-md">
              <DecorativeRing
                variant="dark"
                className="absolute -left-6 -top-6 h-full w-full opacity-60"
              />
              <div className="relative overflow-hidden rounded-2xl border-2 border-white/15">
                <Image
                  src="/brand/togetherSlogan.jpg"
                  alt=""
                  width={640}
                  height={360}
                  className="h-auto w-full object-cover"
                />
              </div>
              <BrandLogoBadge
                size="md"
                className="absolute -bottom-5 -right-5"
              />
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="section-padding section-mesh relative overflow-hidden border-t border-gray">
        <DotGrid variant="light" className="opacity-50" />
        <div className="container-main relative">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <FadeInView>
              <article className="card-shine h-full rounded-2xl border border-gray bg-white p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-violet/30 bg-violet/10 text-violet">
                  <MissionIcon className="h-7 w-7" />
                </div>
                <h2 className="mt-6 font-heading text-2xl font-bold text-graphite">
                  {t("mission.title")}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-graphite/70">
                  {t("mission.description")}
                </p>
              </article>
            </FadeInView>

            <FadeInView delay={0.08}>
              <article className="card-shine relative h-full overflow-hidden rounded-2xl border-2 border-violet/30 bg-violet/5 p-8">
                <BrandBlob
                  color="violet-soft"
                  size="sm"
                  className="right-0 top-0 opacity-40"
                />
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-violet bg-violet/15 text-violet">
                    <VisionIcon className="h-7 w-7" />
                  </div>
                  <h2 className="mt-6 font-heading text-2xl font-bold text-graphite">
                    {t("vision.title")}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-graphite/70">
                    {t("vision.description")}
                  </p>
                </div>
              </article>
            </FadeInView>
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden border-t border-gray">
        <DotGrid variant="violet" className="opacity-35" />
        <div className="container-main relative">
          <FadeInView>
            <h2 className="font-heading text-2xl font-bold text-graphite sm:text-3xl">
              {t("values.title")}
            </h2>
          </FadeInView>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {VALUE_KEYS.map((key, index) => {
              const Icon = VALUE_ICONS[key];

              return (
                <motion.article
                  key={key}
                  className={cn(
                    "card-shine rounded-2xl border p-6",
                    index === 4 && "sm:col-span-2 lg:col-span-1",
                  )}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                >
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl border-2",
                      valueAccents[index],
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold text-graphite">
                    {t(`values.items.${key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite/65">
                    {t(`values.items.${key}.description`)}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden border-t border-gray bg-violet/5">
        <DotGrid variant="violet" className="opacity-40" />
        <BrandBlob color="violet" size="md" className="-left-16 bottom-0 opacity-25" />
        <div className="container-main relative">
          <motion.div
            className="mx-auto flex max-w-2xl flex-col items-center text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <BrandLogoBadge
                size="sm"
                className="border-violet/30"
              />
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl font-bold leading-tight text-graphite sm:text-4xl"
            >
              {t("cta.title")}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-lg text-graphite/70"
            >
              {t("cta.subtitle")}
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-10">
              <StoreButtons />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
