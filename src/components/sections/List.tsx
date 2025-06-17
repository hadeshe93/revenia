import { cn } from '@/lib/style';
import Show from '@/components/Show';

interface ListProps {
  i18nText: {
    titlePrefix: string;
    title: string;
    contents: {
      label: string;
      content: string;
    }[];
  };
  className?: string;
}

export default function List({ i18nText, className }: ListProps) {
  return (
    <section className="section-container max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        {i18nText.titlePrefix}&nbsp;
        <span className="text-primary">{i18nText.title}</span>
      </h2>
      <div className={cn("mt-6 md:mt-10 border border-primary/20 bg-slate-900 text-base-content rounded-xl p-4 grid grid-cols-1 gap-4 text-center", className)}>
        {i18nText.contents.map((content, index) => (
            <p key={index}>
              <Show when={!!content.label}>
                <span className="font-bold text-primary">{content.label}:</span>&nbsp;
              </Show>
              {content.content}
            </p>
        ))}
      </div>
    </section>
  );
}