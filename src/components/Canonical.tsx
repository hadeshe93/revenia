'use client';
import { languages } from "@/lib/langs";
import { usePathname, createCanonicalLink } from "@/i18n";

export interface CanonicalProps {
  locale: string;
}
export default function Canonical(props: CanonicalProps) {
  const { locale } = props;
  const currentLangItem = languages.find(l => l.lang === locale);
  const pathname = usePathname();
  if (!currentLangItem) return null;

  const href = createCanonicalLink(pathname, locale);
  return (<link rel="canonical" href={href}/>);
}