"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FadeInView } from "@/components/animations/FadeInView";
import { AvatarInitials } from "@/components/decorative/AvatarInitials";
import { QuoteIcon } from "@/components/icons/BrandIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const TESTIMONIAL_KEYS = ["aspirant", "nouveau", "etabli"] as const;

function parseAuthor(author: string) {
  const [name, origin] = author.split(",").map((part) => part.trim());
  return { name: name ?? author, origin: origin ?? "" };
}

export function TestimonialsSection() {
  const t = useTranslations("home.testimonials");
  const [active, setActive] = useState(0);
  const activeKey = TESTIMONIAL_KEYS[active];
  const authorRaw = t(`items.${activeKey}.author`);
  const { name, origin } = parseAuthor(authorRaw);

  return (
    <section className="section-padding border-t border-gray">
      <div className="container-main">
        <FadeInView>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        </FadeInView>

        <div className="mt-12 lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
          <div className="mb-6 flex gap-2 lg:mb-0 lg:flex-col">
            {TESTIMONIAL_KEYS.map((key, index) => {
              const { name: tabName } = parseAuthor(t(`items.${key}.author`));

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActive(index)}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-medium transition-colors",
                    active === index
                      ? "border-violet bg-violet text-white"
                      : "border-gray text-graphite/60 hover:border-violet/50 hover:text-graphite",
                  )}
                >
                  <AvatarInitials
                    name={tabName}
                    size="sm"
                    className={cn(
                      active === index &&
                        "border-white/30 bg-white/15 text-white",
                    )}
                  />
                  <span>{t(`items.${key}.stage`)}</span>
                </button>
              );
            })}
          </div>

          <div className="relative min-h-[240px] overflow-hidden rounded-2xl border border-gray bg-white p-8 sm:p-10">
            <QuoteIcon className="absolute right-6 top-6 text-violet/10" />
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="relative"
              >
                <p className="font-heading text-xl leading-relaxed text-graphite sm:text-2xl">
                  &ldquo;{t(`items.${activeKey}.quote`)}&rdquo;
                </p>
                <footer className="mt-8 flex items-center gap-4">
                  <AvatarInitials name={name} size="lg" />
                  <div>
                    <p className="font-heading font-bold text-graphite">{name}</p>
                    {origin ? (
                      <p className="text-sm text-violet">{origin}</p>
                    ) : null}
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
