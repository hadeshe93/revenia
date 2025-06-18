import CTAButton from './CTAButton';
import LucideDownload from '~icons/lucide/download';
import Show from '@/components/Show';

interface CTAProps {
  i18nText: {
    titlePrefix: string;
    title: string;
    titleSuffix: string;
    description: string[];
    buttonText: string;
    buttonLink: string;
    buttonIcon: string;
    buttonIconAlt: string;
    suffixContents?: string[];
  };
}

export default function CTA({ i18nText }: CTAProps) {
  return (
    <section className="section-container max-w-4xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl text-center">
        {/* 内容区域 */}
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {i18nText.titlePrefix}&nbsp;
            <span className="text-primary">{i18nText.title}</span>
            {i18nText.titleSuffix}
          </h2>
          <div className="text-base-content space-y-4 mt-6 md:mt-10">
            {
              i18nText.description.map((desc, index) => (
                <p key={index} className="">{desc}</p>
              ))
            }
          </div>
          
          <Show when={!!i18nText.buttonText}>
            <CTAButton primary href={i18nText.buttonLink} className='mt-4 md:mt-8 max-w-md mx-auto'>
              <img src={i18nText.buttonIcon} alt={i18nText.buttonIconAlt} className="w-8 h-8" />
              {i18nText.buttonText}
            </CTAButton>
          </Show>

          <Show when={!!i18nText.suffixContents}>
            <div className="text-neutral-content text-sm space-y-4 mt-4">
              {
                (i18nText.suffixContents || []).map((content, index) => (
                  <p key={index} className="">{content}</p>
                ))
              }
            </div>
          </Show>
        </div>
      </div>
    </section>
  );
}
