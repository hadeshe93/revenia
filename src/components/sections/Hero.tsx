import LucideDownload from '~icons/lucide/download';
import LucidePlay from '~icons/lucide/play';
import { Link } from '@/i18n';
import { RawResourceType } from '@/types/i18n';

/**
 * Hero 组件的国际化文本接口
 */
export interface HeroProps {
  i18nText: RawResourceType['home']['hero'];
}

/**
 * Hero 组件 - 游戏官网主要展示区域
 *
 * 功能特性：
 * - 游戏标题和副标题展示
 * - 游戏描述文字
 * - 主要行动按钮（下载 Demo、观看预告片）
 * - 响应式设计，适配各种屏幕尺寸
 * - 深色主题风格
 */
export default function Hero({ i18nText }: HeroProps) {
  return (
    <section className="relative box-border min-h-screen bg-black text-white overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>

      {/* 主要内容区域 */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
        {/* 主标题 */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 tracking-wider animate-pulse font-creepster">
          <span className="bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">
            {i18nText.title}
          </span>
        </h1>

        {/* 副标题 */}
        <p className="text-xl md:text-2xl lg:text-3xl font-light mb-4 md:mb-8 text-gray-300 tracking-wide font-creepster">
          {i18nText.subtitle}
        </p>


        {/* 视频 */}
        <iframe
          className="max-w-full mx-auto mb-4 md:mb-8 loading-bg"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/KP2opBOkT9I?si=zwKnnc8RcPRjUBCs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        {/* 描述文字 */}
        <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-4 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          {i18nText.description}
        </p>

        {/* 操作按钮组 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center hidden">
          {/* 下载 Demo 按钮 */}
          <a
            className="group relative overflow-hidden bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 min-w-[200px]"
            href={i18nText.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center gap-2">
              <LucideDownload className="w-5 h-5" />
              {i18nText.downloadButton}
            </div>
          </a>

          {/* 观看预告片按钮 */}
          {/* <a
            className="group relative overflow-hidden bg-transparent border-2 border-base-content hover:border-base-content/60 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-white/10 min-w-[200px]"
            href={i18nText.trailerLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative flex items-center justify-center gap-2">
              <LucidePlay className="w-5 h-5" />
              {i18nText.trailerButton}
            </div>
          </a> */}
        </div>
      </div>

      {/* 图片墙壁 */}
      <div className="flex sm:flex-row gap-4 justify-center items-center">
        {i18nText.screenshots.map((screenshot, index) => (
          <img key={index} src={screenshot.imgUrl} alt={screenshot.alt} className="w-1/2 h-1/2" />
        ))}
      </div>

      {/* 底部渐变 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
