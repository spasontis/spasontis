import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  devIndicators: false
};

const withNextIntl = createNextIntlPlugin('./src/shared/configs/i18n/configs/index.ts');
export default withNextIntl(nextConfig);
