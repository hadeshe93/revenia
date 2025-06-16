import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { ReplayItem } from '@/types/replay';

export interface CardProps extends ReplayItem {}

export default function Card({ title, description, link, tags }: CardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer nofollow">
      <div className="group relative overflow-hidden rounded-lg bg-white/60 p-6 shadow-lg ring-1 ring-slate-900/5 backdrop-blur-md transition-all duration-300 hover:bg-white/70 hover:shadow-xl hover:ring-orange-300 before:absolute before:-inset-0.5 before:z-0 before:rounded-lg before:bg-gradient-to-br before:from-orange-50/30 before:to-slate-100/30 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100">
        <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-orange-100/20 blur-xl filter group-hover:bg-orange-200/30"></div>
        <div className="absolute -bottom-8 -left-8 h-20 w-20 rounded-full bg-blue-100/20 blur-xl filter group-hover:bg-blue-200/30"></div>
        
        <div className="absolute top-4 right-4 z-10">
          <ArrowUpRightIcon className="h-3 w-3 text-gray-400 transition duration-300 group-hover:text-orange-600" />
        </div>
        
        <div className="relative z-10 space-y-2">
          <h3 className="line-clamp-1 text-sm leading-6 text-slate-800 transition duration-300 group-hover:text-orange-600 lg:text-base">
            {title}
          </h3>
          <p className="h-8 line-clamp-1 text-xs text-slate-500 lg:h-10 lg:line-clamp-2 lg:text-sm">{description}</p>
        </div>
        
        <div className="relative z-10 mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="inline-flex items-center rounded-lg border border-orange-800/30 bg-white/50 px-2 py-1 text-xs text-gray-600 backdrop-blur-sm transition-colors duration-300 group-hover:border-orange-600/50 group-hover:bg-orange-50/50">
              # {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}