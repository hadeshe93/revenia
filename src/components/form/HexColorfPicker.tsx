import { useState } from 'react';
import { HexColorPicker as HexColorPickerRaw } from 'react-colorful';
import LucidePalette from '~icons/lucide/palette';
import { cn } from '@/lib/style';
import { getTextColor } from '@/lib/utils';
import Input from './Input';

export interface HexColorPickerProps {
  value?: string;
  onChange?: (value: string) => void;
  [key: string]: any;
}

export default function HexColorPicker(props: HexColorPickerProps) {
  const { value, onChange, ...rest } = props;
  const onColorPickerChanged = (color: string) => {
    const fixedColor = fixHexColor(color);
    onChange?.(fixedColor);
  };
  const textColor = getTextColor(value || '#ffffff');
  return (
    <div className="hex-color-picker dropdown">
      <div tabIndex={0} role="button" className={cn('btn btn-sm')} style={{ backgroundColor: value }}>
        <LucidePalette className="w-5 h-5" style={{ color: textColor }} />
      </div>
      <div className="dropdown-content menu bg-base-100 shadow rounded-box z-[1]">
        <HexColorPickerRaw color={value} onChange={onColorPickerChanged} {...rest} />
        <div className="mt-2 px-1 flex justify-between items-center text-sm">
          <span className="">HEX</span>
          <Input type="text" value={value} onChange={onColorPickerChanged} />
        </div>
      </div>
    </div>
  );
}

function fixHexColor(color: string) {
  if (color.startsWith('#')) {
    return color;
  }
  return `#${color}`;
}
