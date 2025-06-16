import { ArrowPathIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline';

export interface ActionButtonGroupProps {
  i18nText: {
    restart: string;
    nextRound: string;
  };
  onRestart?: () => void;
  onNextRound?: () => void;
  className?: string;
}

export default function ActionButtonGroup(props: ActionButtonGroupProps) {
  const { i18nText, onRestart, onNextRound, className } = props;
  const { restart, nextRound } = i18nText;
  return (
    <div className={`flex flex-col justify-center items-center gap-6 mt-6 ${className || ''}`}>
      {onRestart ? (
        <button
          className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-blue-500"
          onClick={onRestart}
        >
          <ArrowPathIcon className="w-4 h-4" />
          {restart}
        </button>
      ) : null}
      {onNextRound ? (
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-blue-500" onClick={onNextRound}>
          <ChevronDoubleRightIcon className="w-4 h-4" />
          {nextRound}
        </button>
      ) : null}
    </div>
  );
}
