import { useEffect, useState, ReactNode } from 'react';
import { cn } from '@/lib/style';

export interface InputProps {
  prefix?: ReactNode;
  suffix?: ReactNode;
  labelClassName?: string;
  value?: string;
  onChange?: (value: string) => void;
  [key: string]: any;
}

export default function Input(props: InputProps) {
  const { prefix = null, suffix = null, labelClassName = '', value = '', onChange, ...restProps } = props;
  const [localValue, setLocalValue] = useState(value || '');
  const onChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
    onChange?.(e.target.value);
  };
  useEffect(() => {
    setLocalValue(value || '');
  }, [value]);
  return (
    <label className={cn('input input-sm input-bordered bg-neutral flex items-center gap-1 px-2 text-base-content', labelClassName)}>
      {prefix}
      <input value={localValue} onChange={onChanged} {...restProps} />
      {suffix}
    </label>
  );
}
