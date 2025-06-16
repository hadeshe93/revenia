'use client';
import { usePathname } from '@/i18n';
import { Link } from '@/i18n';
import { Lang } from '@/lib/langs';
import LogoLink from '@/components/LogoLink';
import MdiEnvelopeOutline from '~icons/mdi/envelope-outline';
import { languages } from '@/lib/langs';
import { DOMAIN } from '@/constants/biz';

export interface FooterProps {
  locale: Lang;
  i18nText: {
    co2Consumption: string;
    comparedToOtherPages: string;
    addToChrome: string;
    brand: {
      name: string;
      description: string;
    };
    resources?: {
      title: string;
      links: {
        label: string;
        href: string;
      }[];
    };
    community?: {
      title: string;
      links: {
        label: string;
        href: string;
      }[];
    };
    friends?: {
      title: string;
      links: {
        label: string;
        href: string;
      }[];
    };
    copyright: {
      text: string;
      year: number;
      domain: string;
      buildWith: string;
    };
    privacyPolicy: string;
    termsOfService: string;
    aboutUs: string;
    language: string;
  };
}

export default function Footer({ locale, i18nText }: FooterProps) {
  const pathname = usePathname();
  const { brand, resources, community, friends, copyright, privacyPolicy, termsOfService, aboutUs, language } = i18nText;
  const bottomInnerLinks: any[] = [
    // {
    //   label: privacyPolicy,
    //   href: '/privacy',
    // },
    // {
    //   label: termsOfService,
    //   href: '/terms',
    // },
    // {
    //   label: aboutUs,
    //   href: '/about',
    // },
  ];
  return (
    <footer className="border-t border-neutral text-neutral-content">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        {/* 主要内容区 */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* 品牌信息 */}
          <div className="basis-full md:basis-1/2">
            <LogoLink locale={locale} i18nText={i18nText} />
            <p className="mt-4 text-sm">{brand.description}</p>

            {/* 社交媒体图标 */}
            <div className="mt-6 flex space-x-4">
              <a title="email" href={`mailto:contact@${DOMAIN}`} className="hover:text-base-content">
                <MdiEnvelopeOutline className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* 语言链接 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-base-content">{language}</h3>
            <ul className="mt-4 space-y-2">
              {languages.map((language, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={pathname}
                      locale={locale}
                      isExternal={true}
                      className="text-sm hover:text-base-content"
                    >
                      {language.language}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* 资源链接 */}
          {resources && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-base-content">{resources.title}</h3>
              <ul className="mt-4 space-y-2">
                {resources.links.map((link, index) => {
                  const isExternal = !link.href.startsWith('/');
                  return (
                    <li key={index}>
                      <Link
                        title={link.label}
                        href={link.href}
                        locale={locale}
                        isExternal={isExternal}
                        className="text-sm hover:text-base-content"
                        {...(isExternal ? { target: '_blank', rel: 'nofollow' } : {})}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* 社区链接 */}
          {community && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">{community.title}</h3>
              <ul className="mt-4 space-y-2">
                {community.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-sm text-gray-600 hover:text-gray-900">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 友情链接 */}
          {friends && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">{friends.title}</h3>
              <ul className="mt-4 space-y-2">
                {friends.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-sm text-gray-600 hover:text-gray-900">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* 底部版权信息 */}
        <div className="mt-12 border-t border-neutral pt-8">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-sm">
              © {copyright.year} • {copyright.domain} {copyright.text}{' '}
              <a
                href="https://nextjs.org/"
                rel="noopener noreferrer nofollow"
                target="_blank"
                className=" hover:text-primary"
              >
                {copyright.buildWith}
              </a>
            </p>
            <div className="basis-full w-full md:basis-1/2 md:w-1/2 mt-4 md:mt-0 grid md:grid-cols-3 gap-4">
              {bottomInnerLinks.map((link, index) => (
                <div className="block w-full text-left md:text-right" key={index}>
                  <Link href={link.href} locale={locale} className="text-sm hover:text-base-content">
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
