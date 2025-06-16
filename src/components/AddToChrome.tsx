import { cn } from '@/lib/style';
import LogosChrome from '~icons/logos/chrome';

export interface AddToChromeProps {
  className?: string;
  href: string;
  title: string;
  i18nText: {
    addToChrome: string;
  };
}

export default function AddToChrome({ className, href, title, i18nText }: AddToChromeProps) {
  return (
    <a
      className={cn('inline-flex justify-center items-center gap-4 px-4 h-8 leading-8 border border-neutral hover:border-primary text-xs text-center rounded-[2rem] text-base-content hover:text-primary', className)}
      href={href}
      title={title}
      rel="noopener nofollow"
    >
      <LogosChrome />
      <span>{i18nText.addToChrome}</span>
    </a>
  );
}