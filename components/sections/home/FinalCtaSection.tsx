"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { BrandLogoBadge } from "@/components/brand/BrandLogoBadge";
import { BrandBlob, DotGrid } from "@/components/decorative/VisualDecor";
import { StoreButtons } from "@/components/ui/StoreButtons";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function FinalCtaSection() {
  const t = useTranslations("home.cta");

  return (
    <section className="section-padding relative overflow-hidden border-t border-gray bg-violet/5">
      <DotGrid variant="violet" className="opacity-40" />
      <BrandBlob color="violet-soft" size="lg" className="-left-24 top-0 opacity-50" />
      <BrandBlob color="violet" size="md" className="-right-16 bottom-0 opacity-30" />
      <div className="container-main relative">
        <motion.div
          className="mx-auto grid max-w-4xl items-center gap-10 lg:grid-cols-[1fr_auto]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="text-center lg:text-left">
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl font-bold leading-tight text-graphite sm:text-4xl lg:text-5xl"
            >
              {t("title")}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-lg text-graphite/70"
            >
              {t("subtitle")}
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-10 flex justify-center lg:justify-start">
              <StoreButtons />
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="relative mx-auto w-full max-w-[280px] lg:mx-0"
          >
            <div className="overflow-hidden rounded-2xl border-2 border-violet/20">
              <Image
                src="/brand/togetherSlogan.jpg"
                alt=""
                width={560}
                height={320}
                className="h-auto w-full object-cover"
                priority={false}
              />
            </div>
            <BrandLogoBadge
              size="sm"
              className="absolute -bottom-4 -right-4"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
