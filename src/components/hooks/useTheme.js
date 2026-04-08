import { useEffect, useState } from 'react';

const THEME_KEY = 'theme';

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(THEME_KEY) || 'dark';
  });

  function applyTheme(theme) {
    const htmlDocumentEl = document.documentElement;
    htmlDocumentEl.setAttribute('data-theme', theme);
  }

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  return { theme, setTheme };
}
