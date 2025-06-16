interface ExamplesProps {
  i18nText: {
    titlePrefix: string;
    title: string;
    contents: {
      title: string;
      description: string;
      imgUrl: string;
    }[];
  };
}

export default function Examples({ i18nText }: ExamplesProps) {
  const { titlePrefix, title, contents } = i18nText;
  return (
    <div className="section-container">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        {titlePrefix}&nbsp;
        <span className="text-primary">{title}</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-16">
        {contents.map((content) => (
          <div key={content.title} className="border border-neutral p-4 rounded-lg shadow-md flex flex-col justify-between">
            <div className="h-24 md:h-32 flex items-center justify-center rounded-lg overflow-hidden">
              <img src={content.imgUrl} alt={content.title} className="w-16 md:w-20" />
            </div>
            <div>
              <h3 className="text-lg font-bold">{content.title}</h3>
              <p className="text-sm text-neutral-content">{content.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
