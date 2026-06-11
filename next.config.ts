import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/politique-confidentialite",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/en/politique-confidentialite",
        destination: "/en/privacy",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
