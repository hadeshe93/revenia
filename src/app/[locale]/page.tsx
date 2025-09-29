import { Lang } from '@/lib/langs';
import { wrapForI18n } from '@/i18n';
import LucideConstruction from '~icons/lucide/construction';
import { DigitalClock } from '@/components/biz/DigtalClock';

type PageProps = Readonly<{
  params: { locale: Lang };
}>;

async function Home({ params: { locale } }: PageProps) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-red-500">
      <DigitalClock />
    </div>
  );
}

export default wrapForI18n<PageProps>(Home);
