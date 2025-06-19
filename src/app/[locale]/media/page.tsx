import { Link } from '@/i18n';
import { Lang } from '@/lib/langs';
import { wrapForI18n, getContent } from '@/i18n';
import { Metadata } from 'next';
import IntroductionPrimary from '@/components/sections/IntroductionPrimary';
import VideoList from '@/components/sections/VideoList';
import CTA from '@/components/CTA';
type PageProps = Readonly<{
  params: { locale: Lang };
}>;

async function Media(props: PageProps) {
  const { locale } = props.params;
  const media = await getContent('media');

  return (
    <div className="">
      <IntroductionPrimary i18nText={media.introduction} />
      <VideoList i18nText={media.youtube} className="md:grid-cols-3" videoType="youtube" />
      <div className="section-divider"></div>
      <VideoList i18nText={media.tiktok} className="md:grid-cols-4" videoType="tiktok" />
      <CTA i18nText={media.cta} />
    </div>
  );
}

export default wrapForI18n<PageProps>(Media);
export async function generateMetadata(): Promise<Metadata> {
  const { metadata } = await getContent('media');
  return {
    title: metadata.title,
    description: metadata.description,
  };
}
