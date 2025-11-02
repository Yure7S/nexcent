'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/primary-buttom';
import { ButtonSize } from '@/enums/buttom.enum';

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
    <header className=' text-black dark:text-black dark:bg-silver'>
      <div className="max-w-container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/svg/logo.svg"
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
                className="p-2 hover:cursor-pointer rounded-lg  dark:bg-silver text-d-grey dark:text-l-grey hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-200 group"
                aria-label={isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
              >
                {isDark ? (
                  <Image
                    src="/svg/icons/light-theme-icon.svg"
                    alt="Icone do tema claro"
                    width={120}
                    height={24}
                    className="h-6 w-auto"
                  />
                ) : (
                  <Image
                    src="/svg/icons/dark-theme-icon.svg"
                    alt="Icone do tema escuro"
                    width={120}
                    height={24}
                    className="h-6 w-auto"
                  />
                )}
              </button>
            </li>
          </ul>
        </nav>
        <div className='flex gap-3.5'>
          <Link className='text-primary px-4 py-2.5 text-base' href="/">Login</Link>
          <Button size={ButtonSize.MD}>Sign up</Button>
        </div>
      </div>
    </header>
  );
}