import type { Metadata, Viewport } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import NextTopLoader from 'nextjs-toploader';
import { getContent, routing, wrapForI18n } from '@/i18n';
import { langs, type Lang } from '@/lib/langs';
import NavBar from '@/components/NavBar';
import GoogleTag from '@/components/GoogleTag';
import Footer from '@/components/Footer';
import Show from '@/components/Show';
import { MessageProvider } from '@/contexts/MessageContext';
import Canonical from '@/components/Canonical';
import HrefLangs from '@/components/HrefLangs';
import { DEFAULT_THEME } from '@/constants/theme';
import { DOMAIN } from '@/constants/biz';

import '../globals.css';

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: { locale: Lang };
}>;

export function generateStaticParams() {
  return langs.map((lang) => ({ locale: lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getContent('metadata');
  const homePageUrl = `https://${DOMAIN}`;
  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.og.title,
      description: metadata.og.description,
      type: 'website',
      url: homePageUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.og.title,
      description: metadata.og.description,
      images: [`${homePageUrl}/icon.png`],
    },
  };
}

async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const pathname = headers().get('x-pathname');
  const isEmbed = pathname?.includes('embed');
  const isCustom = pathname?.includes('custom');
  const [layoutContent] = await Promise.all([getContent('layout')]);
  const { brand } = layoutContent;
  const navBarText = {
    ...layoutContent.nav,
    brand,
  };
  const footerText = {
    ...layoutContent.footer,
    brand,
  };
  return (
    <html lang={locale} data-theme={DEFAULT_THEME}>
      <head>
        {
          isCustom ? (<meta name="robots" content="noindex" />) : null
        }
        <Canonical locale={locale} />
        <HrefLangs />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* <GoogleTag /> */}
      </head>
      <body>
        <NextTopLoader shadow={false} showSpinner={false} color="#0073E9" />
        <MessageProvider>
          <Show when={!isEmbed}>
            <NavBar locale={locale as Lang} i18nText={navBarText} />
          </Show>
          <main className="">{children}</main>
        </MessageProvider>
        <Show when={!isEmbed}>
          <Footer locale={locale as Lang} i18nText={footerText} />
        </Show>
      </body>
    </html>
  );
}

export default wrapForI18n<LocaleLayoutProps>(LocaleLayout);
// 需要生成 sitemap 时，需要屏蔽这句；平时部署需要开启
export const runtime = 'edge';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
}