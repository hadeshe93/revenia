'use client';

import { ReactNode, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { cn } from '@/lib/style';
import { default as CheckboxRaw, CheckboxProps as CheckboxPropsRaw } from 'rc-checkbox';

export interface CheckboxProps {
  label?: ReactNode;
  className?: string;
  value?: boolean;
  onChange?: (e: any) => void;
}

export default function Checkbox(props: CheckboxProps) {
  const [id, setId] = useState('');
  const { label, className, onChange, value = false, ...restProps } = props;
  const onCheckedChanged = (e: any) => {
    onChange?.(e.target.checked);
  };
  useEffect(() => {
    setId(nanoid());
  }, []);

  return (
    <div className="flex items-center">
      <input type="checkbox" className={cn('checkbox-xs lg:checkbox-xs', className)} id={id} checked={value} onChange={onCheckedChanged} {...restProps} />
      {props.label && <label className="ml-2" htmlFor={id}>{props.label}</label>}
    </div>
  );
}

