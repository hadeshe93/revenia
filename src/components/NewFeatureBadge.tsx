'use client';

import { SparklesIcon } from '@heroicons/react/24/outline';
import { Link } from '@/i18n';
import { Lang } from '@/lib/langs';

interface NewFeatureBadgeProps {
  locale: Lang;
  href: string;
  className?: string;
  i18nText?: string;
}

export default function NewFeatureBadge({ locale, href, className = '', i18nText = 'New' }: NewFeatureBadgeProps) {
  return (
    <Link
      href={href}
      locale={locale}
      className={`
        group
        inline-flex items-center gap-1
        px-2 py-1
        bg-gradient-to-r from-amber-500/90 to-yellow-500/90
        hover:from-amber-500 hover:to-yellow-500
        rounded-full
        shadow-lg hover:shadow-xl
        transition-all duration-300
        scale-100 hover:scale-105
        ${className}
      `}
    >
      <SparklesIcon className="w-4 h-4 text-white animate-pulse" />
      <span className="text-xs font-bold text-white">{i18nText}</span>
    </Link>
  );
}
