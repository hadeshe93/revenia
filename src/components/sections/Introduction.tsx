import CTAButton from '../CTAButton';
import LucideBookOpenText from '~icons/lucide/book-open-text';

export interface IntroductionProps {
  i18nText: {
    titlePrefix: string;
    title: string;
    contents: string[];
    ctaText: string;
    ctaLink: string;
  };
}

export default function Introduction({ i18nText }: IntroductionProps) {
  return (
    <section className="section-container mt-6 text-base-content !max-w-4xl">
      <h2 id="introduction" className="text-base-content text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10">
        {i18nText.titlePrefix}&nbsp;
        <span className="text-primary">{i18nText.title}</span>
      </h2>

      <div className="space-y-4 text-center">
        {i18nText.contents.map((content, index) => (
          <p key={index}>{content}</p>
        ))}
        {/* CTA Button */}
        <div className="max-w-lg mx-auto">
          <CTAButton href={i18nText.ctaLink} className="">
            <LucideBookOpenText className="w-6 h-6" />
            {i18nText.ctaText}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
