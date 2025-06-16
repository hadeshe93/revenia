
export interface CommingSoonProps {
  i18nText: {
    title: string;
    features: Record<string, {
      icon: string;
      title: string;
      description: string;
      features: string[];
    }>;
    footer: string;
  };
}

export default function CommingSoon({ i18nText }: CommingSoonProps) {
  return (
    <section className="max-w-2xl mx-auto px-4 py-6 text-gray-300">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
          {i18nText.title}
        </h2>

        <div className="space-y-8">
          {
            Object.entries(i18nText.features).map(([key, item], index) => (
              <article key={index} className="bg-gray-800/50 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">
                      {item.description}
                    </p>
                    <ul className="text-sm text-gray-400 mt-3 space-y-1">
                      {item.features.map((feature: string, idx: number) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))
          }
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">
            {i18nText.footer}
          </p>
        </div>
      </section>
  );
}
