'use client';

import { useState, useEffect } from 'react';

export const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        const theme = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
        setIsDark(theme);
        document.documentElement.classList.toggle('dark', theme);
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        document.documentElement.classList.toggle('dark', newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-silver dark:bg-grey-blue text-black dark:text-white hover:bg-grey-blue dark:hover:bg-l-grey transition-colors"
            aria-label={isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
        >
            {isDark ? '☀️' : '🌙'}
        </button>
    );
};