'use client';
import { languages } from "@/lib/langs";
import { usePathname, createCanonicalLink, defaultLocale } from "@/i18n";

export default function HrefLangs() {
  const pathname = usePathname();
  const enHref = createCanonicalLink(pathname, defaultLocale);
  const enHrefLang = languages.find(l => l.lang === defaultLocale)?.lang;
  return (
    <>
      {
        languages.map((item, idx) => {
          const { lang } = item;
          const hrefLang = lang === defaultLocale ? 'x-default' : lang;
          const href = createCanonicalLink(pathname, lang);
          return <link key={`${idx}_${href}`} rel="alternate" hrefLang={hrefLang} href={href} />;
        })
      }
      <link key={enHref} rel="alternate" hrefLang={enHrefLang} href={enHref} />
    </>
  );
}