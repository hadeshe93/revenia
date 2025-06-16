export interface HowToPlayProps {
  i18nText: {
    title: string;
    youtubeUrl?: string;
    steps: {
      display: {
        title: string;
        description: string;
      };
      guess: {
        title: string;
        description: string;
      };
      feedback: {
        title: string;
        description: string;
        perfect: string;
        partial: string;
        none: string;
      };
      winning: {
        title: string;
        description: string;
      };
    };
    proTips: {
      title: string;
      tips: string[];
    };
  };
}

export default function HowToPlay({ i18nText }: HowToPlayProps) {
  return (
    <section className="max-w-2xl mx-auto px-4 py-6 text-gray-300">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-6">{i18nText.title}</h2>

      {i18nText.youtubeUrl ? (
        <iframe
          className="w-full aspect-video rounded-md"
          // width="560"
          // height="315"
          src={i18nText.youtubeUrl}
          title={i18nText.title}
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ) : null}

      <div className="space-y-12 mt-6">
        {/* Step 1: Understanding the Display */}
        <article className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              1
            </span>
            <h3 className="text-lg font-semibold text-white">{i18nText.steps.display.title}</h3>
          </div>
          <p className="pl-10">{i18nText.steps.display.description}</p>
          <div className="rounded-lg overflow-hidden">
            <div className="w-[75%] md:w-80 mx-auto aspect-[16/9] bg-gray-700/50 flex items-center justify-center text-gray-400">
              <img src="/assets/understanding-the-color-display.png" alt={i18nText.steps.display.title} />
            </div>
          </div>
        </article>

        {/* Step 2: Making Your Guess */}
        <article className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              2
            </span>
            <h3 className="text-lg font-semibold text-white">{i18nText.steps.guess.title}</h3>
          </div>
          <p className="pl-10">{i18nText.steps.guess.description}</p>
          <div className="rounded-lg overflow-hidden">
            <div className="w-[75%] md:w-80 mx-auto aspect-[16/9] bg-gray-700/50 flex items-center justify-center text-gray-400">
              <img src="/assets/making-your-color-guess.png" alt={i18nText.steps.guess.title} />
            </div>
          </div>
        </article>

        {/* Step 3: Reading Feedback */}
        <article className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              3
            </span>
            <h3 className="text-lg font-semibold text-white">{i18nText.steps.feedback.title}</h3>
          </div>
          <div className="pl-10 space-y-2">
            <p>{i18nText.steps.feedback.description}</p>
            <ul className="space-y-2 mt-2">
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 border-2 border-green-500"></span>
                <span>{i18nText.steps.feedback.perfect}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 border-2 border-yellow-500"></span>
                <span>{i18nText.steps.feedback.partial}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 border-2 border-gray-600"></span>
                <span>{i18nText.steps.feedback.none}</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden">
            <div className="w-[75%] md:w-80 mx-auto aspect-[16/9] bg-gray-700/50 flex items-center justify-center text-gray-400">
              <img src="/assets/reading-feedback.jpg" alt={i18nText.steps.feedback.title} />
            </div>
          </div>
        </article>

        {/* Step 4: Winning the Game */}
        <article className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              4
            </span>
            <h3 className="text-lg font-semibold text-white">{i18nText.steps.winning.title}</h3>
          </div>
          <p className="pl-10">{i18nText.steps.winning.description}</p>
          <div className="rounded-lg overflow-hidden">
            <div className="w-[75%] md:w-80 mx-auto aspect-[16/9] bg-gray-700/50 flex items-center justify-center text-gray-400">
              <img src="/assets/wining-the-game.jpg" alt={i18nText.steps.winning.title} />
            </div>
          </div>
        </article>

        {/* Pro Tips */}
        <article className="mt-8 bg-blue-500/10 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">{i18nText.proTips.title}</h3>
          <ul className="space-y-2 text-gray-300">
            {i18nText.proTips.tips.map((tip: string, index: number) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-blue-400">💡</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
