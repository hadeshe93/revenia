import { default as NextLink } from 'next/link';
import { getRequestConfig, getTranslations, setRequestLocale } from 'next-intl/server';
import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';
import { langs, type Lang } from './lib/langs';
import { FunctionComponent } from 'react';
import rawResource from '@/locales/en';
import { DOMAIN } from '@/constants/biz';
import type { RawResourceType, RawResourceTypeKey } from '@/types/i18n';

export interface I18nParams {
  locale: Lang;
}
export interface WrapI18nAppPageProps {
  params: I18nParams;
}
export { langs };
export const defaultLocale = 'en';
const localePrefix = 'as-needed';
const localeDetection = false;
const pathnames = {
  '/': '/',
};

// 路由
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: langs,
  // Used when no locale matches
  defaultLocale,
  pathnames,
  // 可不显示默认路由
  localePrefix,
  localeDetection,
});

// 包装组件
export function wrapForI18n<T extends WrapI18nAppPageProps = any>(Comp: FunctionComponent<T>) {
  return function WrappedI18n(props: T) {
    console.log('[h] params: ', props.params);
    const { locale } = props.params;
    setRequestLocale(locale);
    return <Comp {...props} />;
  };
}

export async function getContent<T extends RawResourceTypeKey>(key: T): Promise<RawResourceType[T]> {
  const t = await getTranslations(key);
  const value = rawResource[key];
  const avaliableKeys = Object.keys(value);
  return avaliableKeys.reduce((acc, key) => {
    // 免得有些 markup 标签字符串引起报错
    // @ts-ignore
    acc[key] = t.raw(key);
    return acc;
  }, {} as RawResourceType[T]);
}

export function createCanonicalLink(rawPathName: string, locale: string) {
  const SITE_URL = `https://${DOMAIN}`;
  const isDefaultLocale = checkIsDefaultLocale(locale as Lang);
  const isDefaultPath = ['', '/'].includes(rawPathName);
  const pathName = isDefaultPath && !isDefaultLocale ? '' : rawPathName;
  const link = isDefaultLocale ? `${SITE_URL}${pathName}` : `${SITE_URL}/${locale}${pathName}`;
  return link;
}

// 要给 next-intl 使用的
// 源码中看不到引用，但是不要删掉
export default getRequestConfig(async ({ requestLocale }) => {
  // 旧版写法
  // if (!langs.includes(locale as any)) notFound();
  // return {
  //   messages: (await import(`./locales/${locale}/index.ts`)).default
  // };

  // 新版写法
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = defaultLocale;
  }
  return {
    locale,
    messages: (await import(`./locales/${locale}/index.ts`)).default,
  };
});

export const { Link: LinkRaw, redirect, usePathname, useRouter } = createNavigation(routing);

type LinkArgs = Parameters<typeof LinkRaw>;
export const Link = (props: Omit<LinkArgs[0], 'href'> & { href: string, isExternal?: boolean }) => {
  const { locale, isExternal = false, ...restProps } = props;
  if (isExternal) {
    return <a target="_blank" {...restProps} />;
  }
  // @ts-ignore
  if (locale === defaultLocale) return <NextLink {...restProps} />;
  // @ts-ignore
  return <LinkRaw {...restProps} locale={locale} />;
};

export function checkIsDefaultLocale(locale: Lang) {
  return [defaultLocale, '', 'defualt'].includes(locale as any);
}
