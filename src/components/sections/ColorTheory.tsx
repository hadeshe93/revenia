export interface ColorTheoryProps {
  i18nText: {
    title: string;
    description: string;
    sections: Array<{
      title: string;
      description: string;
    }>;
  };
}

export default function ColorTheory({ i18nText }: ColorTheoryProps) {
  return (
    <section className="max-w-2xl mx-auto px-4 py-6 bg-gray-900/50">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
        {i18nText.title}
      </h2>
      <p className="mb-8 text-gray-400">
        {i18nText.description}
      </p>
      
      <div className="space-y-6">
        {i18nText.sections.map((section, index) => (
          <article key={index} className="border-l-4 border-purple-500 pl-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              {section.title}
            </h3>
            <p className="text-gray-400">
              {section.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
} 