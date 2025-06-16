'use client';

import { createContext, useState, useCallback } from 'react';
import { WheelDetail } from '@/types/wheel';

interface WheelSpinnerContext {
  id: string;
  setId: (id: string) => void;
  title: string;
  setTitle: (title: string) => void;
  data: WheelDetail[];
  setData: (list: WheelDetail[]) => void;
  // 一个或者多个甚至全部正在转动
  isSpinning: boolean;
  setIsSpinning: (isSpinning: boolean) => void;
  // 是否全屏
  isFullScreen: boolean;
  setIsFullScreen: (isFullScreen: boolean) => void;
}

export const WheelSpinnerContext = createContext<WheelSpinnerContext | null>(null);

export function WheelSpinnerProvider({ children }: { children: React.ReactNode }) {
  const [id, setId] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [data, setData] = useState<WheelDetail[]>([]);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  return (
    <WheelSpinnerContext.Provider value={{ id, setId, title, setTitle, data, setData, isSpinning, setIsSpinning, isFullScreen, setIsFullScreen }}>
      {children}
    </WheelSpinnerContext.Provider>
  );
} 