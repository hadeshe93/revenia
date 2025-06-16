import { Lang } from '@/lib/langs';
import { renderMarkdown } from '@/lib/markdown';
import { checkIsDefaultLocale } from '@/i18n';

interface MarkdownRendererProps {
  locale: Lang;
  content: string;
}

export default function MarkdownRenderer(props: MarkdownRendererProps) {
  const { locale, content } = props;
  const isDefaultLocale = checkIsDefaultLocale(locale);
  const innerLinkPrefix = isDefaultLocale ? '' : `/${locale}`;
  const rawHTML = renderMarkdown(content, { innerLinkPrefix });

  return (
    <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
  );
}