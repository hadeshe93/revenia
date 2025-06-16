import LucideCalendar1 from '~icons/lucide/calendar-1';
import LucideClock from '~icons/lucide/clock';
import { Link } from '@/i18n';
import { Lang } from '@/lib/langs';

interface BlogListProps {
  locale: Lang;
  posts: Array<{
    slug: string;
    metadata: {
      title: string;
      description: string;
    };
    info: {
      title: string;
      description: string;
      publishDate: string;
      author: string;
      readingTime: string;
    };
  }>;
}

export default function BlogList({ locale, posts }: BlogListProps) {
  return (
    <div className="max-w-4xl mx-auto md:px-4">
      <div className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-xl overflow-hidden transition-all duration-300 border border-neutral backdrop-blur-sm w-full"
          >
            <Link locale={locale} href={`/blog/${post.slug}`} className="block h-full cursor-pointer">
              <div className="p-4 md:px-8 md:py-6 flex flex-col h-full">
                {/* 文章标题 */}
                <h2 className="text-lg md:text-xl font-bold text-base-content hover:text-primary transition-colors mb-2">
                  {post.metadata.title}
                </h2>

                {/* 文章描述 */}
                <p className="text-sm md:text-base text-neutral-content mb-4 line-clamp-3">{post.metadata.description}</p>

                {/* 文章元信息 */}
                <div className="flex items-center justify-between text-xs md:text-sm text-neutral-content pt-2 border-t border-neutral">
                  <div className="flex items-center space-x-3">
                    <img
                      src="/icon.png"
                      alt={post.info.author}
                      className="inline-block bg-neutral rounded-full w-8 h-8"
                    />
                    <span className="">{post.info.author}</span>
                  </div>

                  <div className="flex items-center space-x-6">
                    <span className="flex items-center">
                      <LucideCalendar1 className="w-5 h-5 mr-2" />
                      <time dateTime={post.info.publishDate} className="">
                        {post.info.publishDate}
                      </time>
                    </span>
                    <span className="flex items-center">
                      <LucideClock className="w-5 h-5 mr-2" />
                      {post.info.readingTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
