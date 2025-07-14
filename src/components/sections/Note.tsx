import { RawResourceType } from '@/types/i18n';

interface NoteProps {
  i18nText: RawResourceType['note'];
}
export default function Note({ i18nText }: NoteProps) {
  return (
    <div className="flex justify-center items-center">
      <p className="inline-block px-2 text-base bg-red-600 text-white font-bold rounded-lg">
        {i18nText.note}:&nbsp;
        <span className="">{i18nText.content}</span>
      </p>
    </div>
  );
}
