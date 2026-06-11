"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { FadeInView } from "@/components/animations/FadeInView";

const CHANNEL_KEYS = ["general", "privacy", "institutional"] as const;
const FAQ_KEYS = ["0", "1", "2"] as const;

export function SupportPageContent() {
  const t = useTranslations("pages.support");

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
      />

      <section className="section-padding border-t border-gray">
        <div className="container-main mx-auto max-w-3xl">
          <FadeInView>
            <div className="grid gap-4 sm:grid-cols-3">
              {CHANNEL_KEYS.map((key, index) => (
                <motion.article
                  key={key}
                  className="flex flex-col rounded-2xl border border-gray p-5"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                >
                  <h2 className="font-heading text-lg font-bold text-graphite">
                    {t(`channels.${key}.title`)}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-graphite/65">
                    {t(`channels.${key}.description`)}
                  </p>
                  <a
                    href={`mailto:${t(`channels.${key}.email`)}`}
                    className="mt-4 text-sm font-medium text-violet underline-offset-2 hover:underline"
                  >
                    {t(`channels.${key}.email`)}
                  </a>
                </motion.article>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="section-padding border-t border-gray bg-violet/5">
        <div className="container-main mx-auto max-w-3xl">
          <FadeInView>
            <h2 className="font-heading text-2xl font-bold text-graphite">
              {t("faq.title")}
            </h2>
            <dl className="mt-8 space-y-6">
              {FAQ_KEYS.map((key, index) => (
                <motion.div
                  key={key}
                  className="rounded-2xl border border-gray bg-white p-5"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                >
                  <dt className="font-heading font-bold text-graphite">
                    {t(`faq.items.${key}.question`)}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-graphite/70">
                    {key === "2" ? (
                      <>
                        {t("faq.items.2.answerPrefix")}{" "}
                        <Link
                          href="/privacy"
                          className="text-violet underline-offset-2 hover:underline"
                        >
                          {t("faq.items.2.privacyLink")}
                        </Link>
                        {t("faq.items.2.answerSuffix")}
                      </>
                    ) : (
                      t(`faq.items.${key}.answer`)
                    )}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </FadeInView>
        </div>
      </section>
    </>
  );
}
