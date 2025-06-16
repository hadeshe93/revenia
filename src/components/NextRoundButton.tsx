import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

export interface NextRoundButtonProps {
  className?: string;
  i18nText: {
    nextRound: string;
  };
  onNextRound: () => void;
}

export default function NextRoundButton(props: NextRoundButtonProps) {
  const { className, i18nText, onNextRound } = props;
  const { nextRound } = i18nText;
  return (
    <button
      className={`w-full flex items-center justify-center gap-1 md:gap-2 px-4 py-2 rounded-md border border-blue-500 text-sm font-bold ${className || ''}`}
      onClick={onNextRound}
    >
      <ChevronDoubleRightIcon className="w-4 h-4" />
      {nextRound}
    </button>
  );
}
