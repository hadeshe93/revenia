import React from 'react';
import Show from '@/components/Show';

export interface FAQProps {
  i18nText: {
    title: string;
    subtitle?: string;
    questions: {
      q: string;
      a:
        | string
        | string[]
        | {
            intro: string;
            types: string[];
          };
    }[];
  };
}

export default function FAQ({ i18nText }: FAQProps) {
  return (
    <section className="section-container text-base-content">
      {/* 标题部分 */}
      <div className="text-center mb-10">
        <h2 className="text-xl md:text-2xl font-bold mb-4">{i18nText.title}</h2>
        <Show when={Boolean(i18nText.subtitle)}>
          <p className="">{i18nText.subtitle}</p>
        </Show>
      </div>

      {/* 问答网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {i18nText.questions.map((item, index) => (
          <article key={index} className="rounded-lg p-2 md:p-6 shadow-sm">
            {/* 问题标题带编号 */}
            <div className="flex items-start mb-4">
              <span className="rounded flex-shrink-0 flex items-center justify-center w-5 h-5 md:w-6 md:h-6 border border-primary text-xs md:text-sm font-medium mr-3 text-primary">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold">{item.q}</h3>
            </div>
            
            {/* 回答内容 */}
            <div className="ml-11 text-neutral-content">
              {Array.isArray(item.a) ? (
                item.a.map((answer: string, idx: number) => (
                  <p key={idx} className="mb-2">{answer}</p>
                ))
              ) : typeof item.a === 'object' ? (
                <>
                  <p className="mb-2">{item.a.intro}</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {item.a.types.map((type: string, idx: number) => (
                      <li key={idx}>{type}</li>
                    ))}
                  </ul>
                </>
              ) : (
                <p>{item.a}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
