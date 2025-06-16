import { ArrowPathIcon } from "@heroicons/react/24/outline";

export interface RestartButtonProps {
  className?: string;
  i18nText: {
    restart: string;
  };
  onRestart: () => void;
}

export default function RestartButton(props: RestartButtonProps) {
  const { className, i18nText, onRestart } = props;
  const { restart } = i18nText;
  return (
    <button
      className={`w-full flex items-center justify-center gap-1 md:gap-2 px-4 py-2 rounded-md bg-blue-500 text-sm font-bold ${className || ''}`}
      onClick={onRestart}
    >
      <ArrowPathIcon className="w-4 h-4" />
      {restart}
    </button>
  );
}
