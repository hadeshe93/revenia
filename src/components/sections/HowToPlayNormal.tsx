import Show from '@/components/Show';
export interface HowToPlayProps {
  i18nText: {
    title: string;
    youtubeUrl?: string;
    steps: Array<{
      title: string;
      content: string | string[];
      imgUrl?: string;
    }>;
    proTips?: {
      title: string;
      contents: string[];
    };
  };
}

export default function HowToPlay({ i18nText }: HowToPlayProps) {
  return (
    <section className="section-container text-base-content">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">{i18nText.title}</h2>

      {i18nText.youtubeUrl ? (
        <iframe
          className="w-full aspect-video rounded-md"
          src={i18nText.youtubeUrl}
          title={i18nText.title}
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ) : null}

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {/* 步骤说明 */}
        {i18nText.steps.map((step, index) => (
          <article key={index} className="space-y-2 p-2 md:p-6 rounded-lg">
            <div className="flex items-center space-x-2">
              <span className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 border border-primary text-xs md:text-sm text-primary rounded flex items-center justify-center font-bold">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold ">{step.title}</h3>
            </div>
            <div className="text-neutral-content">
              {Array.isArray(step.content) ? (
                <ul className="pl-10">
                  {step.content.map((content, index) => (
                    <li key={index} className="mt-2">
                      {content}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="pl-10">{step.content}</p>
              )}
              {step.imgUrl && (
                <div className="rounded-lg overflow-hidden">
                  <div className="w-[85%] md:w-80 mx-auto aspect-[16/9] bg-gray-700/50 flex items-center justify-center">
                    <img src={step.imgUrl} alt={step.title} title={step.title} />
                  </div>
                </div>
              )}
            </div>
          </article>
        ))}

        {/* 专业提示 */}
        <Show when={Boolean(i18nText.proTips)}>
          <article className="relative overflow-hidden bg-gradient-to-br from-blue-500/5 to-teal-500/5 rounded-xl p-8 border border-blue-500/10 backdrop-blur-sm">
            {/* 背景装饰 */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl"></div>

            {/* 标题区域 */}
            <div className="relative flex items-center gap-3 mb-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
                <span className="text-xl">💡</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                {i18nText.proTips?.title}
              </h3>
            </div>

            {/* 提示列表 */}
            <ul className="relative space-y-4">
              {i18nText.proTips?.contents.map((tip: string, index: number) => (
                <li
                  key={index}
                  className="group flex items-start gap-3 transition-transform duration-300 hover:translate-x-1"
                >
                  {/* 提示图标 */}
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500/10 to-teal-500/10 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                  </span>

                  {/* 提示内容 */}
                  <span className="transition-colors duration-300">{tip}</span>
                </li>
              ))}
            </ul>

            {/* 装饰边框 */}
            <div className="absolute inset-px rounded-xl border-2 border-gradient-to-r from-blue-500/20 via-transparent to-teal-500/20 pointer-events-none"></div>
          </article>
        </Show>
      </div>
    </section>
  );
}
