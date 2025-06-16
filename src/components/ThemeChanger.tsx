import LucideSun from '~icons/lucide/sun';
import LucideMoon from '~icons/lucide/moon';
import { useState, useEffect } from 'react';
import { saveTheme, getTheme } from '@/lib/storage';
import { gaReportEvent } from '@/lib/gaReport';
import { GA_EVENT_MAP } from '@/lib/gaReport';
import { ThemeTypes, DEFAULT_THEME } from '@/constants/theme';

export default function ThemeChanger() {
  const { theme, toggleTheme } = useTheme();
  const onClick = () => {
    if (theme === ThemeTypes.Light) {
      gaReportEvent(GA_EVENT_MAP.ACTION_THEME_DARK);
    } else {
      gaReportEvent(GA_EVENT_MAP.ACTION_THEME_LIGHT);
    }
    toggleTheme();
  };
  return (
    <button onClick={onClick}>
      {theme !== ThemeTypes.Light ? <LucideSun className="w-5 h-5" /> : <LucideMoon className="w-5 h-5" />}
    </button>
  );
}

function useTheme() {
  const [theme, setTheme] = useState<ThemeTypes>(DEFAULT_THEME);
  const toggleTheme = () => {
    setTheme(theme === ThemeTypes.Light ? ThemeTypes.Dark : ThemeTypes.Light);
  }
  const initTheme = async () => {
    const theme = await getTheme();
    if (theme) {
      setTheme(theme as ThemeTypes);
    }
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    saveTheme(theme);
  }, [theme]);

  useEffect(() => {
    initTheme();
  }, []);

  return { theme, toggleTheme };
}