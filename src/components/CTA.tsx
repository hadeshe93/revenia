import CTAButton from './CTAButton';
import LucideDownload from '~icons/lucide/download';

interface CTAProps {
  i18nText: {
    titlePrefix: string;
    title: string;
    titleSuffix: string;
    description: string;
    buttonText: string;
    buttonLink: string;
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
          <p className="text-base-content/80 mb-4">{i18nText.description}</p>
          <CTAButton primary href={i18nText.buttonLink} className='mt-10 max-w-screen-md mx-auto'>
            <LucideDownload className="w-6 h-6" />
            {i18nText.buttonText}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
