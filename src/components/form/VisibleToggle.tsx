import { useState, useEffect } from 'react';
import LucideEye from '~icons/lucide/eye';
import LucideEyeOff from '~icons/lucide/eye-off';
import { cn } from '@/lib/style';
interface VisibleToggleProps {
  value?: boolean;
  onChange?: (value: boolean) => void;
  className?: string;
}

export default function VisibleToggle(props: VisibleToggleProps) {
  const { value, onChange, className } = props;
  const [visible, setVisible] = useState(value);
  const onVisibleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setVisible(checked);
    onChange?.(checked);
  };
  useEffect(() => {
    setVisible(value);
  }, [value]);
  return (
    <label className={cn('swap', className)}>
      <input type="checkbox" checked={visible} onChange={onVisibleChanged} />
      <LucideEye className="w-5 h-5 swap-on" />
      <LucideEyeOff className="w-5 h-5 swap-off" />
    </label>
  );
}
