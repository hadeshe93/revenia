import { Link } from '@/i18n';
import { Lang } from '@/lib/langs';

interface DailyBannerProps {
  locale: Lang;
  i18nText: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

export default function DailyBanner({ locale, i18nText }: DailyBannerProps) {
  return (
    <div 
      className="w-full max-w-2xl mx-auto px-4 pb-6"
    >
      <Link 
        locale={locale}
        // @ts-ignore
        href="/daily"
        className="block bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div className="p-6 relative overflow-hidden">
          {/* 装饰性元素 */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative">
            {/* 主标题 */}
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
              {i18nText.title}
            </h2>
            
            {/* 副标题 */}
            <p className="text-gray-300 mb-4">
              {i18nText.subtitle}
            </p>
            
            {/* CTA按钮 */}
            {/* <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full transition-colors duration-300 font-extrabold"> */}
            <button className="bg-green-500/95 hover:bg-green-600/95 text-white px-6 py-2 rounded-full transition-colors duration-200 font-extrabold">
              {i18nText.cta}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
} 