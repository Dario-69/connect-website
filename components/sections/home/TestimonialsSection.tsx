"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FadeInView } from "@/components/animations/FadeInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const TESTIMONIAL_KEYS = ["aspirant", "nouveau", "etabli"] as const;

export function TestimonialsSection() {
  const t = useTranslations("home.testimonials");
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding border-t border-gray">
      <div className="container-main">
        <FadeInView>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
          />
        </FadeInView>

        <div className="mt-12 lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
          <div className="mb-6 flex gap-2 lg:mb-0 lg:flex-col">
            {TESTIMONIAL_KEYS.map((key, index) => (
              <button
                key={key}
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  "rounded-full border px-4 py-2 text-left text-sm font-medium transition-colors",
                  active === index
                    ? "border-violet bg-violet text-white"
                    : "border-gray text-graphite/60 hover:border-violet/50 hover:text-graphite",
                )}
              >
                {t(`items.${key}.stage`)}
              </button>
            ))}
          </div>

          <div className="relative min-h-[220px] rounded-2xl border border-gray bg-white p-8 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
              >
                <p className="font-heading text-xl leading-relaxed text-graphite sm:text-2xl">
                  &ldquo;{t(`items.${TESTIMONIAL_KEYS[active]}.quote`)}&rdquo;
                </p>
                <footer className="mt-6 text-sm font-medium text-violet">
                  {t(`items.${TESTIMONIAL_KEYS[active]}.author`)}
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
