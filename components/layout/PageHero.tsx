"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { BrandBlob, DotGrid } from "@/components/decorative/VisualDecor";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  variant?: "default" | "violet" | "dark";
};

const variants = {
  default: "mesh-gradient border-b border-gray",
  violet: "bg-violet/5 border-b border-gray",
  dark: "bg-graphite text-white border-b border-white/10",
};

export function PageHero({
  eyebrow,
  title,
  description,
  variant = "default",
}: PageHeroProps) {
  const isDark = variant === "dark";

  return (
    <section className={cn("section-padding relative overflow-hidden", variants[variant])}>
      {variant === "default" ? (
        <>
          <DotGrid variant="light" className="opacity-50" />
          <BrandBlob color="violet-soft" size="sm" className="right-0 top-0 opacity-60" />
        </>
      ) : null}
      {variant === "violet" ? (
        <DotGrid variant="violet" className="opacity-35" />
      ) : null}
      {variant === "dark" ? (
        <>
          <DotGrid variant="dark" />
          <BrandBlob color="white" size="md" className="-right-20 top-1/2 opacity-20" />
        </>
      ) : null}
      <div className="container-main relative">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {eyebrow ? (
            <motion.p
              variants={fadeInUp}
              className={cn(
                "mb-4 text-sm font-medium uppercase tracking-widest",
                isDark ? "text-violet-soft" : "text-violet",
              )}
            >
              {eyebrow}
            </motion.p>
          ) : null}
          <motion.h1
            variants={fadeInUp}
            className={cn(
              "font-heading text-4xl font-bold leading-tight sm:text-5xl",
              isDark ? "text-white" : "text-graphite",
            )}
          >
            {title}
          </motion.h1>
          {description ? (
            <motion.p
              variants={fadeInUp}
              className={cn(
                "mx-auto mt-6 max-w-2xl text-lg",
                isDark ? "text-white/70" : "text-graphite/70",
              )}
            >
              {description}
            </motion.p>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
