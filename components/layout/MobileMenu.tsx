"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";
import { Logo } from "@/components/layout/Logo";
import { LinkButton } from "@/components/ui/Button";
import { MAIN_NAV } from "@/lib/constants";
import { cn } from "@/lib/utils";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-5 w-6" aria-hidden>
      <span
        className={cn(
          "absolute left-0 block h-0.5 w-6 bg-graphite transition-all duration-200",
          open ? "top-2.5 rotate-45" : "top-1",
        )}
      />
      <span
        className={cn(
          "absolute left-0 top-2.5 block h-0.5 w-6 bg-graphite transition-all duration-200",
          open ? "opacity-0" : "opacity-100",
        )}
      />
      <span
        className={cn(
          "absolute left-0 block h-0.5 w-6 bg-graphite transition-all duration-200",
          open ? "top-2.5 -rotate-45" : "top-4",
        )}
      />
    </span>
  );
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const tNav = useTranslations("nav");
  const tCommon = useTranslations("common");
  const tMenu = useTranslations("common.mobileMenu");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const menuPortal =
    mounted
      ? createPortal(
          <AnimatePresence>
            {open ? (
              <div key="mobile-menu" className="fixed inset-0 z-[200] md:hidden">
                <motion.nav
                  id="mobile-menu"
                  className="flex h-full w-full flex-col bg-white"
                  aria-label="Navigation mobile"
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-gray px-4">
                    <Logo showWordmark />
                    <button
                      type="button"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray"
                      aria-label={tMenu("close")}
                      onClick={() => setOpen(false)}
                    >
                      <MenuIcon open />
                    </button>
                  </div>

                  <div className="flex flex-1 flex-col overflow-y-auto overscroll-contain px-6 py-8">
                    <ul className="space-y-2">
                      {MAIN_NAV.map((item, index) => (
                        <motion.li
                          key={item.key}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.05 + index * 0.04 }}
                        >
                          <Link
                            href={item.href}
                            className="block rounded-xl px-3 py-4 text-xl font-medium text-graphite transition-colors hover:bg-violet/5 hover:text-violet"
                            onClick={() => setOpen(false)}
                          >
                            {tNav(item.key)}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="mt-auto space-y-4 border-t border-gray pt-6 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
                      <LocaleSwitcher className="w-full justify-center" />
                      <LinkButton
                        href="/telecharger"
                        className="w-full justify-center"
                        size="md"
                      >
                        {tCommon("downloadApp")}
                      </LinkButton>
                    </div>
                  </div>
                </motion.nav>
              </div>
            ) : null}
          </AnimatePresence>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray transition-colors hover:border-violet md:hidden"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? tMenu("close") : tMenu("open")}
        onClick={() => setOpen((current) => !current)}
      >
        <MenuIcon open={false} />
      </button>
      {menuPortal}
    </>
  );
}
