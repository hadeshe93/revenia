import { cn } from "@/lib/style";
import { DOMAIN } from "@/constants/biz";

interface CarbonStatisticsProps {
  co2: number;
  percentage: number;
  i18nText: {
    co2Consumption: string;
    comparedToOtherPages: string;
  };
  className?: string;
}

export default function CarbonStatistics({ co2, percentage, i18nText, className }: CarbonStatisticsProps) {
  const { co2Consumption: co2ConsumptionRaw, comparedToOtherPages: comparedToOtherPagesRaw } = i18nText;
  const co2Consumption = co2ConsumptionRaw.replace('<PLACEHOLDER>WEIGHT</PLACEHOLDER>', co2.toFixed(2)).replace('<PLACEHOLDER>PERCENTAGE</PLACEHOLDER>', co2.toFixed(2));
  const comparedToOtherPages = comparedToOtherPagesRaw.replace('<PLACEHOLDER>WEIGHT</PLACEHOLDER>', co2.toFixed(2)).replace('<PLACEHOLDER>PERCENTAGE</PLACEHOLDER>', `${percentage}%`);

  return (
    <a
      className={cn("inline-flex flex-col items-center backdrop-blur-sm rounded shadow-lg border border-primary max-w-sm shadow-primary/10 hover:shadow-primary/20", className)}
      href={`https://www.websitecarbon.com/website/${DOMAIN}/`}
      rel="noopener nofollow"
      target="_blank"
    >
      {/* 主要统计信息 */}
      <div className="flex items-center gap-1 bg-primary rounded-t p-1 text-xs">
        <div className="bg-base-content text-base-300 font-bold px-2 py-1 rounded">
          {co2Consumption}
        </div>
        <div className="text-base-content rounded font-semibold">websitecarbon.com</div>
      </div>

      {/* 比较信息 */}
      <p className="text-center text-neutral-content font-medium text-xs h-6 leading-6">
        {comparedToOtherPages}
      </p>
    </a>
  );
}
