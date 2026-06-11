"use client";

import { motion } from "framer-motion";
import { buttonSizes, buttonVariants } from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { CONTACT_EMAIL } from "@/lib/constants";
import { cn } from "@/lib/utils";

type InstitutionalCtaProps = {
  title: string;
  subtitle?: string;
  buttonLabel: string;
};

export function InstitutionalCta({
  title,
  subtitle,
  buttonLabel,
}: InstitutionalCtaProps) {
  return (
    <section className="section-padding border-t border-gray bg-graphite text-white">
      <div className="container-main">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl font-bold leading-tight sm:text-4xl"
          >
            {title}
          </motion.h2>
          {subtitle ? (
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-lg text-white/70"
            >
              {subtitle}
            </motion.p>
          ) : null}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex justify-center"
          >
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className={cn(
                "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2",
                buttonVariants.primary,
                buttonSizes.lg,
              )}
            >
              {buttonLabel}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
