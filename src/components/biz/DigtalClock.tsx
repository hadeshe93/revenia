/**
 * 数字时钟组件
 * - P0 需求：
 *  - 优先兼容移动端，同时兼容 PC 端
 *  - setInterval 定时器实现一秒更新一次 UI 上的时间显示
 *  - 24 小时制，不支持设置
 *  - 时钟显示格式为 HH:MM，不支持设置
 * - P1 需求：
 *   - 右下角有个浅色的设置图标按钮，点击可以唤出设置弹窗，支持设置：（1）24 / 12 小时制；（2）时钟显示格式为 HH:MM 或 HH:MM:SS
 */

'use client';
import { useFormatter } from 'next-intl';
import { useState, useEffect } from 'react';

export function DigitalClock() {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [showColon, setShowColon] = useState(true);
  const [dateStr, setDateStr] = useState('');
  const format = useFormatter();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setHours(now.getHours().toString().padStart(2, '0'));
      setMinutes(now.getMinutes().toString().padStart(2, '0'));
      setShowColon(prev => !prev);
      setDateStr(format.dateTime(now, {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }));
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen w-full bg-gradient-to-br from-red-900/30 via-black to-red-800/20">
      <div className="text-center">
        <div
          className="text-[8rem] sm:text-[10rem] md:text-[14rem] lg:text-[16rem] xl:text-[20rem] font-light tracking-wider text-white drop-shadow-2xl flex items-center justify-center"
          style={{ fontFamily: 'Creepster, cursive' }}
        >
          <span>{hours}</span>
          <span className={`transition-opacity duration-200 ${showColon ? 'opacity-100' : 'opacity-0'}`}>:</span>
          <span>{minutes}</span>
        </div>
        <div className="mt-4 text-base sm:text-lg text-gray-400 font-light tracking-wide">
          {dateStr}
        </div>
      </div>
    </div>
  );
}
