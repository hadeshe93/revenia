/*
 * @Author: hadeshe93 hadeshe93@gmail.com
 * @Date: 2024-11-13 19:07:05
 * @LastEditors: hadeshe93 hadeshe93@gmail.com
 * @LastEditTime: 2024-11-18 19:19:43
 * @FilePath: /colorfle/src/components/sections/BlogPost.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Lang } from '@/lib/langs';
import { formatDate } from '@/lib/utils';
import MarkdownRenderer from '@/components/MarkdownRenderer';

interface BlogPostProps {
  locale: Lang;
  post: {
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
    },
    content: string;
  };
}

export default function BlogPost({ locale, post }: BlogPostProps) {
  return (
    <article className="max-w-4xl mx-auto blog-article">
      {/* Article Header */}
      <header className="mb-16 text-center">
        <h1 className="text-2xl font-bold mb-4">
          {post.info.title}
        </h1>
        <p className="text-base text-neutral-content mb-8">
          {post.info.description}
        </p>
        <div className="flex items-center justify-center text-sm text-neutral-content space-x-4">
          <time dateTime={post.info.publishDate}>
            {/* {formatDate(post.info.publishDate)} */}
            {post.info.publishDate}
          </time>
          <span>·</span>
          <span>{post.info.author}</span>
          <span>·</span>
          <span>{post.info.readingTime}</span>
        </div>
      </header>

      {/* Article Content */}
      <MarkdownRenderer locale={locale} content={post.content} />
    </article>
  );
}