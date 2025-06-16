import { Link } from '@/i18n';
import { Lang } from '@/lib/langs';

interface CustomBannerProps {
  locale: Lang;
  i18nText: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

export default function CustomBanner({ locale, i18nText }: CustomBannerProps) {
  return (
    <div 
      className="w-full max-w-2xl mx-auto px-4 pb-6"
    >
      <Link 
        locale={locale}
        // @ts-ignore
        href="/create"
        className="block bg-gradient-to-r from-orange-600 via-rose-500 to-pink-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div className="p-6 relative overflow-hidden">
          {/* 装饰性元素 - 使用不同的装饰样式 */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 rotate-45" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative">
            {/* 主标题 */}
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
              {i18nText.title}
            </h2>
            
            {/* 副标题 */}
            <p className="text-orange-50 mb-4">
              {i18nText.subtitle}
            </p>
            
            {/* CTA按钮 - 使用不同的按钮样式 */}
            <button className="bg-orange-400/90 hover:bg-orange-600/90 text-white px-6 py-2 rounded-full transition-colors duration-200 font-extrabold">
              {i18nText.cta}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
} 