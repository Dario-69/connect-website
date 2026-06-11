import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("nav");

  return (
    <div className="container-main flex min-h-[50vh] flex-col items-center justify-center text-center">
      <h1 className="font-heading text-6xl font-bold text-violet">404</h1>
      <p className="mt-4 text-graphite/70">Page introuvable / Page not found</p>
      <Link
        href="/"
        className="mt-8 text-sm font-medium text-violet hover:underline"
      >
        {t("home")}
      </Link>
    </div>
  );
}
