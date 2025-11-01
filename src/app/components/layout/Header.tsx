'use client';

import { useState, useEffect } from 'react';

export function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const theme = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    setIsDark(theme);

    theme ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="bg-white dark:bg-white text-black dark:text-black shadow-2px dark:shadow-2px">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-primary dark:text-primary">
          Logo
        </h1>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-silver dark:bg-grey-blue text-black dark:text-white hover:bg-grey-blue dark:hover:bg-l-grey transition-colors"
          aria-label={isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
}