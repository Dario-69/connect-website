import type { ReactNode } from "react";
import type { Metadata } from "next";
import { defaultMetadata } from "./metadata";

export const metadata: Metadata = defaultMetadata;

type RootLayoutProps = {
  children: ReactNode;
};

/** Root layout required by Next.js — locale-specific html/body live in [locale]/layout.tsx */
export default function RootLayout({ children }: RootLayoutProps) {
  return children;
}
