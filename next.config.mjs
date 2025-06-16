import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
import Icons from 'unplugin-icons/webpack';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.tsx');

// Here we use the @cloudflare/next-on-pages next-dev module to allow us to use bindings during local development
// (when running the application with `next dev`), for more information see:
// https://github.com/cloudflare/next-on-pages/blob/main/internal-packages/next-dev/README.md
if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      type: 'asset/source',
    });
    config.plugins.push(
      Icons({
        compiler: 'jsx',
        jsx: 'react',
        // beta 特性
        autoInstall: true,
      })
    );
    return config;
  },
  async headers() {
    return [{
      source: '/llms.txt',
      headers: [
        {
          key: 'X-Robots-Tag',
          value: 'llms-txt',
        },
      ],
    }, {
      source: '/llms-full.txt',
      headers: [
        {
          key: 'X-Robots-Tag',
          value: 'llms-txt',
        },
      ],
    }];
  },
};

export default withNextIntl(nextConfig);
