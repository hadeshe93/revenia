import { Link } from '@/i18n';
import { Lang } from '@/lib/langs';
import { wrapForI18n, getContent } from '@/i18n';
import { Metadata } from 'next';
import IntroductionPrimary from '@/components/sections/IntroductionPrimary';
import DualList from '@/components/sections/DualList';
import CTA from '@/components/CTA';

type PageProps = Readonly<{
  params: { locale: Lang };
}>;

async function About(props: PageProps) {
  const { locale } = props.params;
  const about = await getContent('about');

  return (
    <div className="">
      <IntroductionPrimary i18nText={about.introduction} />
      <DualList i18nText={about.features} />
      <CTA i18nText={about.creation} />
      <DualList i18nText={about.socialMedia} />
      <CTA i18nText={about.support} />
      
    </div>
  );
}

export default wrapForI18n<PageProps>(About);
export async function generateMetadata(): Promise<Metadata> {
  const { metadata } = await getContent('about');
  return {
    title: metadata.title,
    description: metadata.description,
  };
}
