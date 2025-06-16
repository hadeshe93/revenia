import IconLoading from './icons/Loading';

export default function Loading() {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center backdrop-blur-sm">
      <IconLoading className="w-10 h-10 text-neutral-content" />
    </div>
  );
}
