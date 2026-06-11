"use client";

import { motion, type Variants } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

type FadeInViewProps = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
};

export function FadeInView({
  children,
  className,
  variants = fadeInUp,
  delay = 0,
}: FadeInViewProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
