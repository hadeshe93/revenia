import { Link } from '@/i18n';
import { Lang } from '@/lib/langs';
import { wrapForI18n, getContent } from '@/i18n';
import { Metadata } from 'next';
import { DOMAIN } from '@/constants/biz';

type PageProps = Readonly<{
  params: { locale: Lang };
}>;


async function Privacy(props: PageProps) {
  const { locale } = props.params;
  const privacy = await getContent('privacy');

  return (
    <div className="section-container p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/" locale={locale} className="text-primary mb-8 inline-block">
          ← {privacy.backToGame}
        </Link>
        
        <h1 className="text-2xl md:text-3xl font-bold mb-8">
          {privacy.title}
        </h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">{privacy.sections.information.title}</h2>
            <p>
              {privacy.sections.information.description}
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
                {privacy.sections.information.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">{privacy.sections.usage.title}</h2>
            <p>
              {privacy.sections.usage.description}
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
                {privacy.sections.usage.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">{privacy.sections.protection.title}</h2>
            <p>
              {privacy.sections.protection.description}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">{privacy.sections.storage.title}</h2>
            <p>
              {privacy.sections.storage.description}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">{privacy.sections.analytics.title}</h2>
            <p>
              {privacy.sections.analytics.description}
            </p>
            <p>
              {privacy.sections.analytics.optOut}
            </p>
            <p>
              {privacy.sections.analytics.moreInfo} <a href='https://policies.google.com/privacy' className="text-blue-400 hover:text-blue-300 ml-1">https://policies.google.com/privacy</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">{privacy.sections.deletion.title}</h2>
            <p>
              {privacy.sections.deletion.description}
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
                {privacy.sections.deletion.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">{privacy.sections.updates.title}</h2>
            <p>
              {privacy.sections.updates.description}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p>
              {privacy.sections.contact.description}
              <a href={`mailto:contact@${DOMAIN}`} className="text-primary ml-1">
                contact@{DOMAIN}
              </a>
            </p>
          </section>
        </div>

        <footer className="mt-12 pt-8 border-t border-neutral text-sm text-neutral-content">
          <p>{privacy.footer.lastUpdated}</p>
        </footer>
      </div>
    </div>
  );
}

export default wrapForI18n<PageProps>(Privacy);
export async function generateMetadata(): Promise<Metadata> {
  const { metadata } = await getContent('privacy');
  return {
    title: metadata.title,
    description: metadata.description,
  };
}
