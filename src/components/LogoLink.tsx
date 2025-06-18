import { Link } from '@/i18n';
import { Lang } from '@/lib/langs';

export interface LogoLinkProps {
  locale: Lang;
  i18nText: {
    brand: {
      name: string;
    };
  };
}
export default function LogoLink({ locale, i18nText }: LogoLinkProps) {
  const { brand } = i18nText;
  return (
    <Link href="/" locale={locale} className='cursor-pointer flex items-center space-x-2 text-base-content'>
      <img src="/icon.png" alt="logo" className='w-10 h-10' />
      <span className='text-xl font-bold font-creepster'>{brand.name}</span>
    </Link>
  );
}
