export interface SceneIntroductionProps {
  i18nText: {
    title: string;
    description: string;
    rules: {
      title: string;
      content: string;
    }[];
    comparison?: {
      title: string;
      contents: string[];
    };
  };
}

export default function SceneIntroduction({ i18nText }: SceneIntroductionProps) {
  return (
    <section className="section-container">
      {/* 标题区域 */}
      <div className="relative mb-12 text-center">
        <h2
          id="scene-introduction" 
          className="text-xl md:text-2xl font-bold text-white relative z-10"
        >
          {i18nText.title}
        </h2>
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>

        <p className="text-md text-gray-400 mt-4 leading-relaxed max-w-2xl mx-auto relative z-10">
          {i18nText.description}
        </p>
      </div>

      {/* 介绍区 */}
      <div className="mt-8 space-y-6">
        {i18nText.rules.map((rule, index) => (
          <div 
            key={index}
            className="group relative overflow-hidden bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.1)]"
          >
            {/* 背景装饰 */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* 标题 */}
            <div className="relative flex items-center gap-3 mb-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
                <span className="text-blue-400">📏</span>
              </div>
              <h3 className="text-lg font-semibold text-white">
                {rule.title}
              </h3>
            </div>

            {/* 内容 */}
            <p className="relative text-gray-300 leading-relaxed pl-11">
              {rule.content}
            </p>

            {/* 装饰边角 */}
            <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      {/* 对比区 */}
      {i18nText.comparison && (
        <div className="relative mt-12 overflow-hidden bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl p-8 border border-blue-500/10 backdrop-blur-sm">
          {/* 背景装饰 */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>

          {/* 标题区域 */}
          <div className="relative flex items-center justify-center gap-3 mb-8">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <span className="text-xl">🔄</span>
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {i18nText.comparison.title}
            </h2>
          </div>

          {/* 对比列表 */}
          <div className="relative grid gap-4">
            {i18nText.comparison.contents.map((content, index) => (
              <div 
                key={index}
                className="group flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-gray-900/50 to-gray-800/50 transition-all duration-300 hover:translate-x-1"
              >
                {/* 标记点 */}
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 flex items-center justify-center mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                </span>
                
                {/* 内容 */}
                <p className="text-gray-200 group-hover:text-gray-100 transition-colors duration-300">
                  {content}
                </p>
              </div>
            ))}
          </div>

          {/* 装饰边框 */}
          <div className="absolute inset-px rounded-xl border-2 border-gradient-to-r from-blue-500/20 via-transparent to-purple-500/20 pointer-events-none"></div>
        </div>
      )}
    </section>
  );
}
