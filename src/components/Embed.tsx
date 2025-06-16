'use client';

import { CodeBracketIcon } from '@heroicons/react/24/outline';
import { useDialog } from '@/hooks/useDialog';
import ShareButton from '@/components/ShareButton';
import { GameScene } from '@/types/game';
import { Lang } from '@/lib/langs';
import { checkIsDefaultLocale } from '@/i18n';
import { DOMAIN } from '@/constants/biz';

interface EmbedProps {
  locale: Lang;
  scene: GameScene;
  i18nText: {
    triggerText: string;
    title: string;
    subtitle: string;
    share: string;
    copied: string;
  };
}

export default function Embed(props: EmbedProps) {
  const { scene, i18nText, locale } = props;
  const dialog = useDialog();
  const onClick = () => {
    dialog.show({
      title: i18nText.title,
      content: <EmbedCode locale={locale} scene={scene} i18nText={i18nText} />,
    });
  };
  return (
    <section className="section-container flex justify-center items-center">
      <div
        className="flex justify-center items-center gap-2 rounded-full px-4 py-2 bg-neutral-600 hover:bg-neutral-500 cursor-pointer text-neutral-300 text-xs md:text-sm"
        onClick={onClick}
      >
        <span className="">{i18nText.triggerText}</span>
        <CodeBracketIcon className="w-4 h-4 md:w-5 md:h-5" />
      </div>
    </section>
  );
}

interface EmbedCodeProps {
  locale: Lang;
  scene: GameScene;
  i18nText: Pick<EmbedProps['i18nText'], 'share' | 'copied' | 'subtitle'>;
}
function EmbedCode(props: EmbedCodeProps) {
  const { locale, scene, i18nText } = props;
  const embedUrl = getEmbedUrl({ scene, locale });
  return (
    <>
      <p className="text-neutral-300">{i18nText.subtitle}</p>
      <div className="w-full flex gap-2 mt-2">
        <div className="basis-3/4 grow-1 text-sm text-gray-400 border border-neutral-500 rounded-md p-2 overflow-x-auto whitespace-nowrap">{embedUrl}</div>
        <ShareButton content={embedUrl} i18nText={i18nText} className="basis-1/4 grow-1" />
      </div>
    </>
  );
}

interface GetEmbedUrlProps {
  scene: GameScene;
  locale: Lang;
}
function getEmbedUrl(props: GetEmbedUrlProps) {
  const { scene, locale } = props;
  const isDefaultLocale = checkIsDefaultLocale(locale);
  const localeSegment = isDefaultLocale ? '' : `/${locale}`;
  return `https://${DOMAIN}${localeSegment}/embed/${scene}`;
}
