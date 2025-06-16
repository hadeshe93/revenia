import { ShareIcon } from '@heroicons/react/24/outline';
import { useDialog } from '@/hooks/useDialog';
import ShareList from './ShareList';
export interface ShareListModalTriggerProps {
  i18nText: {
    title: string;
  };
  className?: string;
}

export default function ShareListModalTrigger(props: ShareListModalTriggerProps) {
  const { className, i18nText } = props;
  const dialog = useDialog();
  const onClick = () => {
    dialog.show({
      title: i18nText.title,
      content: <ShareList />,
    });
  };
  return (<ShareIcon className={`w-4 h-4 ${className || ''}`} onClick={onClick} />);
}
