import { cn } from '@/lib/style';
import Show from '@/components/Show';
import LucideExternalLink from '~icons/lucide/external-link';

interface DualListProps {
  i18nText: {
    titlePrefix: string;
    title: string;
    description: string;
    contents: {
      title: string;
      description: string;
      imgUrl: string;
      linkText: string;
      linkUrl: string;
    }[];
  };
  className?: string;
}

export default function DualList({ i18nText, className }: DualListProps) {
  return (
    <section className="section-container max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10">
        {i18nText.titlePrefix}&nbsp;
        <span className="text-primary">{i18nText.title}</span>
      </h2>
      <p className="text-center mb-6 md:mb-10">{i18nText.description}</p>
      <div
        className={cn(
          'mt-6 md:mt-10  grid grid-cols-1 md:grid-cols-2 gap-4',
          className
        )}
      >
        {i18nText.contents.map((content, index) => (
          <div key={index} className="flex gap-4 border border-primary/20 bg-slate-900 text-base-content rounded-xl p-4 hover:shadow-xl hover:shadow-primary/20 transition duration-300">
            <span className="flex shrink-0 items-center justify-center rounded-full w-16 h-16 bg-primary/20">
              <img src={content.imgUrl} alt={content.title} className="w-10 h-10 object-cover" />
            </span>
            <div className="space-y-2">
              <h3 className="text-lg font-bold">{content.title}</h3>
              <p className="text-sm text-neutral-content">{content.description}</p>
              <Show when={!!content.linkText}>
                <a href={content.linkUrl} className="flex items-center gap-2 text-sm text-red-400 hover:text-red-400/80" target="_blank" rel="noopener noreferrer">
                  {content.linkText}
                  <LucideExternalLink className="w-4 h-4" />
                </a>
              </Show>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
