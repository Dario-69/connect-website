"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { AvatarStack } from "@/components/decorative/AvatarInitials";
import { BrandBlob, DotGrid } from "@/components/decorative/VisualDecor";
import { StoreButtons } from "@/components/ui/StoreButtons";
import { fadeInUp, staggerContainer } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

function PhoneMockup() {
  const t = useTranslations("home.hero");

  return (
    <div className="relative">
      <div className="absolute -right-4 -top-4 rounded-full border border-violet/30 bg-white px-3 py-1.5 text-[10px] font-semibold text-violet">
        {t("mockupBadge")}
      </div>
      <div className="rounded-[2.5rem] border-2 border-graphite bg-white p-3">
        <div className="overflow-hidden rounded-[2rem] border border-gray bg-gray/20">
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-[10px] font-medium text-graphite/50">9:41</span>
            <span className="rounded-full bg-violet/15 px-2 py-0.5 text-[10px] font-semibold text-violet">
              Connect Now
            </span>
          </div>
          <div className="space-y-3 px-4 pb-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1.5">
                <div className="h-2 w-20 rounded-full bg-violet/40" />
                <div className="h-1.5 w-28 rounded-full bg-gray" />
              </div>
              <AvatarStack initials={["A", "L", "K"]} />
            </div>
            <div className="flex gap-1.5">
              {["Aspirant", "Partant", "Nouveau"].map((label, i) => (
                <span
                  key={label}
                  className={`rounded-full px-2 py-0.5 text-[9px] font-medium ${
                    i === 0
                      ? "bg-violet text-white"
                      : "border border-gray bg-white text-graphite/50"
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>
            <div className="rounded-2xl border border-violet/30 bg-violet/10 p-3">
              <p className="text-[11px] font-medium text-violet">Nebula</p>
              <p className="mt-1 text-[10px] leading-relaxed text-graphite/70">
                {t("mockupLabel")}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Visa", done: true },
                { label: "CAF", done: false },
                { label: "Logement", done: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`rounded-xl border p-2 text-center ${
                    item.done
                      ? "border-violet/40 bg-violet/10"
                      : "border-gray bg-white"
                  }`}
                >
                  <div
                    className={`mx-auto mb-1 h-4 w-4 rounded-full border-2 ${
                      item.done ? "border-violet bg-violet" : "border-gray"
                    }`}
                  />
                  <p className="text-[8px] font-medium text-graphite/60">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const t = useTranslations("home.hero");
  const tCommon = useTranslations("common");

  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const blobLeftRef = useRef<HTMLDivElement>(null);
  const blobRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=70%",
          scrub: 1,
          pin: stickyRef.current,
          anticipatePin: 1,
        },
      })
        .to(contentRef.current, { opacity: 0, y: -48, ease: "none" }, 0)
        .to(
          phoneRef.current,
          { y: -32, scale: 0.88, rotate: -6, ease: "none" },
          0,
        )
        .to(blobLeftRef.current, { x: -80, opacity: 0.2, ease: "none" }, 0)
        .to(blobRightRef.current, { x: 80, opacity: 0.15, ease: "none" }, 0);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mesh-gradient relative overflow-hidden"
    >
      <DotGrid variant="light" className="opacity-60" />
      <div ref={stickyRef} className="relative min-h-screen section-padding">
        <div
          ref={blobLeftRef}
          className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-violet-soft/30 blur-3xl"
        />
        <div
          ref={blobRightRef}
          className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-violet/20 blur-3xl"
        />
        <BrandBlob
          color="violet-soft"
          size="sm"
          className="right-1/4 top-1/3 opacity-70"
        />

        <div className="container-main relative flex min-h-[calc(100vh-var(--header-height)-var(--section-padding-y))] items-center">
          <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              ref={contentRef}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.p
                variants={fadeInUp}
                className="mb-4 text-sm font-medium uppercase tracking-widest text-violet"
              >
                {tCommon("slogan")}
              </motion.p>
              <motion.h1
                variants={fadeInUp}
                className="font-heading text-4xl font-bold leading-[1.1] text-graphite sm:text-5xl lg:text-6xl"
              >
                {t("title")}
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="mt-6 max-w-lg text-lg text-graphite/70"
              >
                {t("subtitle")}
              </motion.p>
              <motion.div variants={fadeInUp} className="mt-10">
                <StoreButtons />
              </motion.div>
            </motion.div>

            <div ref={phoneRef} className="mx-auto w-full max-w-[280px]">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
