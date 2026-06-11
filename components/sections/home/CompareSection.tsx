"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FadeInView } from "@/components/animations/FadeInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type CompareRow = {
  key: string;
  campusFrance: string;
  whatsapp: string;
  chatgpt: string;
  connectNow: string;
};

const ROWS: CompareRow[] = [
  {
    key: "specialized",
    campusFrance: "partial",
    whatsapp: "unreliable",
    chatgpt: "generic",
    connectNow: "yes",
  },
  {
    key: "community",
    campusFrance: "no",
    whatsapp: "informal",
    chatgpt: "no",
    connectNow: "yes",
  },
  {
    key: "postArrival",
    campusFrance: "no",
    whatsapp: "informal",
    chatgpt: "no",
    connectNow: "yes",
  },
  {
    key: "humanVoice",
    campusFrance: "cold",
    whatsapp: "yes",
    chatgpt: "no",
    connectNow: "yes",
  },
  {
    key: "free",
    campusFrance: "yes",
    whatsapp: "yes",
    chatgpt: "partial",
    connectNow: "yes",
  },
];

const COMPETITORS = [
  { key: "campusFrance", field: "campusFrance" as const },
  { key: "whatsapp", field: "whatsapp" as const },
  { key: "chatgpt", field: "chatgpt" as const },
];

function CellValue({
  valueKey,
  highlight = false,
}: {
  valueKey: string;
  highlight?: boolean;
}) {
  const t = useTranslations("home.compare.values");
  const isPositive = valueKey === "yes";

  return (
    <span
      className={cn(
        "text-sm font-medium",
        highlight || isPositive ? "text-violet" : "text-graphite/45",
      )}
    >
      {t(valueKey)}
    </span>
  );
}

function CompareMobileCards() {
  const t = useTranslations("home.compare");

  return (
    <div className="mt-12 space-y-4 md:hidden">
      <article className="rounded-2xl border-2 border-violet bg-violet/5 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-violet">
          {t("columns.connectNow")}
        </p>
        <ul className="mt-4 space-y-3">
          {ROWS.map((row) => (
            <li
              key={row.key}
              className="flex items-start justify-between gap-4 border-b border-violet/20 pb-3 last:border-b-0 last:pb-0"
            >
              <span className="text-sm text-graphite/80">
                {t(`rows.${row.key}`)}
              </span>
              <CellValue valueKey={row.connectNow} highlight />
            </li>
          ))}
        </ul>
      </article>

      {COMPETITORS.map((competitor, index) => (
        <motion.article
          key={competitor.key}
          className="rounded-2xl border border-gray bg-white p-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.35, delay: index * 0.06 }}
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-graphite/45">
            {t(`columns.${competitor.key}`)}
          </p>
          <ul className="mt-4 space-y-3">
            {ROWS.map((row) => (
              <li
                key={row.key}
                className="flex items-start justify-between gap-4 border-b border-gray pb-3 last:border-b-0 last:pb-0"
              >
                <span className="text-sm text-graphite/70">
                  {t(`rows.${row.key}`)}
                </span>
                <CellValue valueKey={row[competitor.field]} />
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  );
}

function CompareDesktopTable() {
  const t = useTranslations("home.compare");

  const columns = [
    { key: "campusFrance", label: t("columns.campusFrance"), highlight: false },
    { key: "whatsapp", label: t("columns.whatsapp"), highlight: false },
    { key: "chatgpt", label: t("columns.chatgpt"), highlight: false },
    { key: "connectNow", label: t("columns.connectNow"), highlight: true },
  ] as const;

  return (
    <motion.div
      className="mt-12 hidden overflow-x-auto md:block"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="rounded-2xl border border-gray bg-white">
        <div className="grid grid-cols-[1.4fr_repeat(4,1fr)] border-b border-gray">
          <div className="p-4" />
          {columns.map((col) => (
            <div
              key={col.key}
              className={cn(
                "border-l border-gray p-4 text-center text-xs font-semibold uppercase tracking-wide",
                col.highlight
                  ? "bg-violet/10 text-violet"
                  : "text-graphite/50",
              )}
            >
              {col.label}
            </div>
          ))}
        </div>

        {ROWS.map((row, rowIndex) => (
          <motion.div
            key={row.key}
            className="grid grid-cols-[1.4fr_repeat(4,1fr)] border-b border-gray last:border-b-0"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: rowIndex * 0.06 }}
          >
            <div className="p-4 text-sm font-medium text-graphite">
              {t(`rows.${row.key}`)}
            </div>
            <div className="flex items-center justify-center border-l border-gray p-4">
              <CellValue valueKey={row.campusFrance} />
            </div>
            <div className="flex items-center justify-center border-l border-gray p-4">
              <CellValue valueKey={row.whatsapp} />
            </div>
            <div className="flex items-center justify-center border-l border-gray p-4">
              <CellValue valueKey={row.chatgpt} />
            </div>
            <div className="flex items-center justify-center border-l border-gray bg-violet/5 p-4">
              <CellValue valueKey={row.connectNow} highlight />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function CompareSection() {
  const t = useTranslations("home.compare");

  return (
    <section className="section-padding bg-gray/40">
      <div className="container-main">
        <FadeInView>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
        </FadeInView>

        <CompareMobileCards />
        <CompareDesktopTable />
      </div>
    </section>
  );
}
