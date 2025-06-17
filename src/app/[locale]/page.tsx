import { getContent } from '@/i18n';
import { Lang } from '@/lib/langs';
import { wrapForI18n } from '@/i18n';
import Introduction from '@/components/sections/Introduction';
import CTA from '@/components/CTA';
import Hero from '@/components/sections/Hero';
import Examples from '@/components/sections/Examples';
import List from '@/components/sections/List';
import DualList from '@/components/sections/DualList';
import FAQ from '@/components/sections/FAQ';
type PageProps = Readonly<{
  params: { locale: Lang };
}>;

async function Home({ params: { locale } }: PageProps) {
  const [homeI18nText] = await Promise.all([
    getContent('home'),
  ]);
  return (
    <div className="">
      <Hero i18nText={homeI18nText.hero} />
      <Examples i18nText={homeI18nText.examples} />
      <Introduction i18nText={homeI18nText.Introduction} />
      <List i18nText={homeI18nText.systemRequirements} className="md:grid-cols-2 text-left" />
      <List i18nText={homeI18nText.features} />
      <DualList i18nText={homeI18nText.socialMedia} />
      <CTA i18nText={homeI18nText.cta} />
      <FAQ i18nText={homeI18nText.faq} />
    </div>
  );
}

export default wrapForI18n<PageProps>(Home);
