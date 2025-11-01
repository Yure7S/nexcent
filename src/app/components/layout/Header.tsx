'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    <header className="bg-white dark:bg-white text-black dark:text-black">
      <div className="max-w-container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Nexcent"
            width={120}
            height={24}
            className="h-6 w-auto"
            priority
          />
        </Link>
        <nav className='w-full max-w-[640px]'>
          <ul className='flex justify-between w-full items-center'>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Service</Link>
            </li>
            <li>
              <Link href="/">Feature</Link>
            </li>
            <li>
              <Link href="/">Product</Link>
            </li>
            <li>
              <Link href="/">Testimonial</Link>
            </li>
            <li>
              <Link href="/">FAQ</Link>
            </li>
            <li>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-silver dark:bg-grey-blue text-black dark:text-white hover:bg-grey-blue dark:hover:bg-l-grey transition-colors"
                aria-label={isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
              >
                {isDark ? '☀️' : '🌙'}
              </button>
            </li>
          </ul>
        </nav>
        <div>
          <button>Teste</button>
        </div>
      </div>
    </header>
  );
}