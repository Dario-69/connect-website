"use client";

import { motion } from "framer-motion";
import { StoreButtons } from "@/components/ui/StoreButtons";
import { fadeInUp, staggerContainer } from "@/lib/animations";

type PageCtaProps = {
  title: string;
  subtitle?: string;
};

export function PageCta({ title, subtitle }: PageCtaProps) {
  return (
    <section className="section-padding border-t border-gray bg-violet/5">
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
            className="font-heading text-3xl font-bold leading-tight text-graphite sm:text-4xl"
          >
            {title}
          </motion.h2>
          {subtitle ? (
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-lg text-graphite/70"
            >
              {subtitle}
            </motion.p>
          ) : null}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex justify-center"
          >
            <StoreButtons />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
