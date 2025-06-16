import { ReactNode } from 'react';
import LucidePencilRuler from '~icons/lucide/pencil-ruler';
import LucideSquareStack from '~icons/lucide/square-stack';
import LucideCommand from '~icons/lucide/command';
import LucideLockKeyhole from '~icons/lucide/lock-keyhole';
import LucideMonitorSmartphone from '~icons/lucide/monitor-smartphone';
import LucideALargeSmall from '~icons/lucide/a-large-small';
import LucideRemoveFormatting from '~icons/lucide/remove-formatting';
import LucideSortAsc from '~icons/lucide/sort-asc';
import LucideCloudLightning from '~icons/lucide/cloud-lightning';

const Icons = [
  LucidePencilRuler,
  LucideALargeSmall,
  LucideRemoveFormatting,
  LucideSquareStack,
  LucideSortAsc,
  LucideLockKeyhole,
  LucideCloudLightning,
  LucideCommand,
  LucideMonitorSmartphone,
];

export interface FeaturesProps {
  wheelType?: 'color' | 'default',
  colNum?: number;
  i18nText: {
    title: string;
    description?: string;
    items: Array<{
      title: string;
      content: string;
    }>;
  };
}

export default function Features({ i18nText, colNum = 3, wheelType = 'default' }: FeaturesProps) {
  const Grid = colNum === 3 ? Grid3 : Grid2;
  return (
    <section className="section-container text-base-content">
      {/* 标题区域 */}
      <div className="relative mb-12 text-center text-base-content">
        <h2 className="text-xl md:text-2xl font-bold mb-4 relative z-10">{i18nText.title}</h2>

        {i18nText.description && <p className="max-w-2xl mx-auto relative z-10">{i18nText.description}</p>}
      </div>

      {/* 特性卡片网格 */}
      <Grid>
        {i18nText.items.map((item, index) => {
          const Icon = Icons[index] || Icons[0];
          return (
            <article key={index} className="group relative overflow-hidden rounded-xl p-6 border border-neutral">
              {/* 内容区域 */}
              <div className="relative">
                <h3 className="text-lg font-semibold text-base-content mb-3 flex items-center gap-2 md:gap-4">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary shrink-0" />
                  {item.title}
                </h3>
                <p className="leading-relaxed text-neutral-content">{item.content}</p>
              </div>
            </article>
          );
        })}
      </Grid>
    </section>
  );
}

function Grid3(props: { children: ReactNode }) {
  return <div className={`grid md:grid-cols-3 gap-6`}>{props.children}</div>;
}

function Grid2(props: { children: ReactNode }) {
  return <div className={`grid md:grid-cols-2 gap-6`}>{props.children}</div>;
}
