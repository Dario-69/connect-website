"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { StoreButtons } from "@/components/ui/StoreButtons";
import { fadeInUp, staggerContainer } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

function PhoneMockup() {
  const t = useTranslations("home.hero");

  return (
    <div className="rounded-[2.5rem] border-2 border-graphite bg-white p-3">
      <div className="overflow-hidden rounded-[2rem] border border-gray bg-gray/30">
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-[10px] font-medium text-graphite/50">9:41</span>
          <span className="rounded-full bg-violet/15 px-2 py-0.5 text-[10px] font-semibold text-violet">
            Connect Now
          </span>
        </div>
        <div className="space-y-3 px-4 pb-6">
          <div className="h-2 w-3/4 rounded-full bg-violet/30" />
          <div className="h-2 w-full rounded-full bg-gray" />
          <div className="h-2 w-5/6 rounded-full bg-gray" />
          <div className="mt-4 rounded-2xl border border-violet/30 bg-violet/10 p-3">
            <p className="text-[11px] font-medium text-violet">Nebula</p>
            <p className="mt-1 text-[10px] leading-relaxed text-graphite/70">
              {t("mockupLabel")}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-xl border border-gray bg-white"
              />
            ))}
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
      <div ref={stickyRef} className="relative min-h-screen section-padding">
        <div
          ref={blobLeftRef}
          className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-violet-soft/30 blur-3xl"
        />
        <div
          ref={blobRightRef}
          className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-violet/20 blur-3xl"
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
