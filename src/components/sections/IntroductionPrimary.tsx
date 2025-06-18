export interface IntroductionPrimaryProps {
  i18nText: {
    titlePrefix: string;
    title: string;
    description: string;
    contents: string[];
  };
}

export default function IntroductionPrimary({ i18nText }: IntroductionPrimaryProps) {
  return (
    <section className="bg-gradient-to-b from-black to-primary/20 py-20 relative overflow-hidden mt-6 text-base-content">
      <h1 id="introduction" className="text-5xl md:text-7xl font-bold mb-6 text-gradient text-center">
        {i18nText.titlePrefix}&nbsp;
        <span className="text-primary">{i18nText.title}</span>
      </h1>

      <div className="section-container">
        <p className="text-center text-base-content text-3xl md:text-4xl mb-6 md:mb-10">{i18nText.description}</p>

        <div className="max-w-3xl mx-auto space-y-4 text-center text-neutral-content">
          {i18nText.contents.map((content, index) => (
            <p key={index}>{content}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
