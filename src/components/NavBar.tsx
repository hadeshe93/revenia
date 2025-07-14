'use client';
import LucideAlignJustify from '~icons/lucide/align-justify';
import LucideChevronDown from '~icons/lucide/chevron-down';
import { Link, usePathname, defaultLocale } from '@/i18n';
import { languages, type Lang } from '@/lib/langs';
import { useState, useRef, useEffect } from 'react';
import ThemeChanger from '@/components/ThemeChanger';
import Drawer from '@/components/Drawer';
import { RawResourceType } from '@/types/i18n';
import { cn } from '@/lib/style';

export interface NavBarProps {
  locale: Lang;
  i18nText: {
    brand: {
      name: string;
      description: string;
    };
  } & RawResourceType['layout']['nav'];
}
export default function NavBar({ locale, i18nText }: NavBarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // console.log('i18nText:', JSON.stringify(i18nText, null, 2));
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLanguage = languages.find((lang) => lang.lang === (locale || defaultLocale));

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-base-300">
      <div className="max-w-7xl mx-auto px-2 md:px-4">
        <div className="flex justify-between items-center h-12 md:h-16">
          {/* 标志 */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" locale={locale} className="cursor-pointer flex items-center space-x-2">
              <img src="/icon.png" alt="logo" className="w-10 h-10" />
              <span className="text-xl font-bold font-creepster">{i18nText.brand.name}</span>
            </Link>
          </div>
          {/* 移动端场景 */}
          <Drawer
            className="inline-block w-6 h-6 md:hidden"
            trigger={<LucideAlignJustify className="w-6 h-6" />}
            content={
              <div className="bg-base-100 w-[90%] h-full p-4 flex flex-col gap-2">
                <div className={cn('text-sm flex flex-col gap-4')}>
                  {/* Media */}
                  <Link className="" href={i18nText.media.href} locale={locale} title={i18nText.media.label}>
                    {i18nText.media.label}
                  </Link>

                  {/* 关于 */}
                  <Link className="" href={i18nText.about.href} locale={locale} title={i18nText.about.label}>
                    {i18nText.about.label}
                  </Link>

                  {/* 博客 */}
                  {/* <Link className="" href={i18nText.blog.href} locale={locale} title={i18nText.blog.label}>
                    {i18nText.blog.label}
                  </Link> */}
                  {/* 博客 */}
                  {/* <Link className="" href={i18nText.blog.href} locale={locale} title={i18nText.blog.label}>
                    {i18nText.blog.label}
                  </Link> */}

                  {/* 更新日志 */}
                  {/* <Link className="" href={i18nText.changelog.href} locale={locale} title={i18nText.changelog.label}>
                    {i18nText.changelog.label}
                  </Link> */}

                  {/* 反馈 */}
                  {/* <Link className="" href={i18nText.feedback.href} locale={locale} title={i18nText.feedback.label} isExternal>
                    {i18nText.feedback.label}
                  </Link> */}

                  {/* 多语言 */}
                  <div tabIndex={0} className="collapse">
                    <input type="checkbox" className="min-h-0" />
                    <div className="collapse-title p-0 min-h-0 flex items-center gap-1">
                      {currentLanguage?.language}
                      <LucideChevronDown className="w-4 h-4" />
                    </div>
                    <div className="collapse-content" style={{ paddingLeft: '1rem', paddingBottom: '0' }}>
                      <div className="py-1 text-base-content" role="menu" aria-orientation="vertical">
                        {languages.map((language) => (
                          <Link
                            key={language.lang}
                            locale={language.lang}
                            href={pathname}
                            className={`mt-2 block text-sm hover:text-primary ${
                              locale === language.lang ? 'text-primary' : ''
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {language.language}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 主题切换器 */}
                  {/* <ThemeChanger /> */}

                  {/* 分享按钮 */}
                  {/* <ShareListModalTrigger i18nText={{ title: i18nText.shareWebsite }} /> */}
                </div>
              </div>
            }
          />
          {/* PC 端场景 */}
          <div className="items-center space-x-4 text-sm hidden md:flex">
            {/* Media */}
            <Link className="" href={i18nText.media.href} locale={locale} title={i18nText.media.label}>
              {i18nText.media.label}
            </Link>

            {/* 关于 */}
            <Link className="" href={i18nText.about.href} locale={locale} title={i18nText.about.label}>
              {i18nText.about.label}
            </Link>

            {/* 博客 */}
            {/* <Link className="" href={i18nText.blog.href} locale={locale} title={i18nText.blog.label}>
              {i18nText.blog.label}
            </Link> */}

            {/* 更新日志 */}
            {/* <Link className="" href={i18nText.changelog.href} locale={locale} title={i18nText.changelog.label}>
              {i18nText.changelog.label}
            </Link> */}

            {/* 反馈 */}
            {/* <Link className="" href={i18nText.feedback.href} locale={locale} title={i18nText.feedback.label} isExternal>
              {i18nText.feedback.label}
            </Link> */}

            {/* 多语言 */}
            <div className="relative z-10" ref={dropdownRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="btn btn-sm rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center space-x-1"
              >
                <span>{currentLanguage?.language}</span>
                <LucideChevronDown className="w-4 h-4" />
              </button>

              {isOpen && (
                <div className="absolute right-0 top-full mt-1 w-24 rounded-md shadow-lg bg-base-100 text-neutral-content">
                  <div className="py-1 text-base-content" role="menu" aria-orientation="vertical">
                    {languages.map((language) => (
                      <Link
                        key={language.lang}
                        locale={language.lang}
                        href={pathname}
                        className={`block px-4 py-2 text-sm hover:bg-primary ${
                          locale === language.lang ? 'bg-primary' : ''
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {language.language}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 主题切换器 */}
            {/* <ThemeChanger /> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
