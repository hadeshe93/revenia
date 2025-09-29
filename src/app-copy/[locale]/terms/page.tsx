import { Link } from '@/i18n';
import { Lang } from '@/lib/langs';
import { wrapForI18n, getContent } from '@/i18n';
import { Metadata } from 'next';
import { DOMAIN } from '@/constants/biz';

type PageProps = Readonly<{
  params: { locale: Lang };
}>;

async function Terms(props: PageProps) {
  const { locale } = props.params;
  const terms = await getContent('terms');

  return (
    <div className="section-container p-4 md:p-8 text-base-content">
      <div className="max-w-3xl mx-auto">
        <Link href="/" locale={locale} className="text-primary mb-8 inline-block">
          ← {terms.backToGame}
        </Link>
        
        <h1 className="text-2xl md:text-3xl font-bold mb-8">
          {terms.title}
        </h1>

        <div className="space-y-6">
          <section>
            {
              terms.descriptions.map((description, index) => (
                <p key={index}>
                  {description}
                </p>
              ))
            }
          </section>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">{terms.sections.acceptance.title}</h2>
            <p>
              {terms.sections.acceptance.description}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">{terms.sections.description.title}</h2>
            <p>
              {terms.sections.description.description}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">{terms.sections.usage.title}</h2>
            <p>
              {terms.sections.usage.description}
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
                {terms.sections.usage.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
            </ul>
          </section>

          {/* <section>
            <h2 className="text-xl font-semibold mb-3">{terms.sections.intellectualProperty.title}</h2>
            <p>
              {terms.sections.intellectualProperty.description}
            </p>
          </section> */}

          <section>
            <h2 className="text-xl font-semibold mb-3">{terms.sections.disclaimer.title}</h2>
            <p>
              {terms.sections.disclaimer.description}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">{terms.sections.limitation.title}</h2>
            <p>
              {terms.sections.limitation.description}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">{terms.sections.indemnification.title}</h2>
            <p>
              {terms.sections.indemnification.description}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">{terms.sections.changes.title}</h2>
            <p>
              {terms.sections.changes.description}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p>
              {terms.sections.contact.description}
              <a href={`mailto:contact@${DOMAIN}`} className="text-primary ml-1">
                contact@{DOMAIN}
              </a>
            </p>
          </section>
        </div>

        <footer className="mt-12 pt-8 border-t border-neutral text-sm text-neutral-content">
        </footer>
      </div>
    </div>
  );
}

export default wrapForI18n<PageProps>(Terms);
export async function generateMetadata(): Promise<Metadata> {
  const { metadata } = await getContent('terms');
  return {
    title: metadata.title,
    description: metadata.description,
  };
}
