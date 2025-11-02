'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/PrimaryButton';
import { ButtonSize } from '@/enums/buttom.enum';

const DESKTOP_BREAKPOINT = 1080;
const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Service', href: '/' },
  { label: 'Feature', href: '/' },
  { label: 'Product', href: '/' },
  { label: 'Testimonial', href: '/' },
  { label: 'FAQ', href: '/' },
];

export function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  // Detecção de tamanho de tela
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsDesktop(width >= DESKTOP_BREAKPOINT);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Fecha menu mobile apenas quando realmente muda para desktop
  useEffect(() => {
    if (isDesktop && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isDesktop, isMobileMenuOpen]);

  // Gerenciamento de tema
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);

    setIsDark(theme);
    theme ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleMobileMenu = useCallback(() => {
    if (!isDesktop) {
      setIsMobileMenuOpen(prev => !prev);
    }
  }, [isDesktop]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    (isMobileMenuOpen && !isDesktop) ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, isDesktop]);

  return (
    <header className='text-black dark:text-black bg-silver'>
      <div className="max-w-container mx-auto p-[22px] flex justify-between items-center">

        <Link href="/">
          <Image
            src={isDark ? "/svg/logo-white.svg" : "/svg/logo.svg"}
            alt="Nexcent"
            width={120}
            height={24}
            className="h-6 w-auto"
            priority
          />
        </Link>

        {isDesktop ? (
          <>
            <nav className='w-full max-w-[640px]'>
              <ul className='flex justify-between w-full items-center'>
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <Link className='hover:text-primary py-1.5' href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}

                <li>
                  <button
                    onClick={toggleTheme}
                    className="p-2 hover:cursor-pointer rounded-lg dark:bg-silver text-d-grey dark:text-l-grey hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-200 group"
                    aria-label={isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
                  >
                    {isDark ? (
                      <Image
                        src="/svg/icons/light-theme-icon.svg"
                        alt="Icone do tema claro"
                        width={20}
                        height={20}
                      />
                    ) : (
                      <Image
                        src="/svg/icons/dark-theme-icon.svg"
                        alt="Icone do tema escuro"
                        width={20}
                        height={20}
                      />
                    )}
                  </button>
                </li>
              </ul>
            </nav>

            {/* Botões Login/Signup */}
            <div className='flex gap-3.5'>
              <Link className='text-primary px-4 py-2.5 text-base' href="/">
                Login
              </Link>
              <Button size={ButtonSize.MD}>Sign up</Button>
            </div>
          </>
        ) : (
          /* Mobile Controls (até 1079px) */
          <div className='flex items-center gap-3'>
            <button
              onClick={toggleTheme}
              className="p-2 hover:cursor-pointer rounded-lg dark:bg-silver text-d-grey dark:text-l-grey hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-200 group"
              aria-label={isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
            >
              {isDark ? (
                <Image
                  src="/svg/icons/light-theme-icon.svg"
                  alt="Icone do tema claro"
                  width={20}
                  height={20}
                />
              ) : (
                <Image
                  src="/svg/icons/dark-theme-icon.svg"
                  alt="Icone do tema escuro"
                  width={20}
                  height={20}
                />
              )}
            </button>

            {/* Botão Hamburguer */}
            <button
              onClick={toggleMobileMenu}
              className="group p-2 flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-silver dark:hover:bg-primary hover:cursor-pointer transition-colors duration-200"
              aria-label="Abrir menu"
            >
              <span className={`w-6 h-0.5 bg-d-grey dark:bg-l-grey dark:group-hover:bg-black transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-6 h-0.5 bg-d-grey dark:bg-l-grey dark:group-hover:bg-black transition-all duration-300 mt-1.5 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-d-grey dark:bg-l-grey dark:group-hover:bg-black transition-all duration-300 mt-1.5 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>
        )}
      </div>

      {/* Menu Mobile Overlay */}
      {isMobileMenuOpen && !isDesktop && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={closeMobileMenu}
        />
      )}

      {!isDesktop && (
        <div className={`fixed top-0 left-0 h-full w-full bg-silver dark:bg-silver backdrop-blur-lg shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 h-full flex flex-col max-w-md mx-auto">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" onClick={closeMobileMenu}>
                <Image
                  src={isDark ? "/svg/logo-white.svg" : "/svg/logo.svg"}
                  alt="Nexcent"
                  width={120}
                  height={24}
                  className="h-6 w-auto"
                />
              </Link>
              <button
                onClick={closeMobileMenu}
                className="group p-2 rounded-lg hover:bg-primary dark:hover:bg-primary hover:cursor-pointer transition-colors"
                aria-label="Fechar menu"
              >
                <svg className="w-6 h-6 text-d-grey dark:text-l-grey group-hover:text-white dark:group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex-1">
              <ul className="space-y-4">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block py-4 px-4 text-d-grey dark:text-l-grey hover:text-primary dark:hover:text-primary rounded-lg transition-all duration-200 text-lg font-medium"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-grey-blue/30 dark:border-l-grey/30 pt-6 space-y-4">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="block text-center text-primary py-3 px-4 border border-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-200 font-medium"
              >
                Login
              </Link>
              <Button size={ButtonSize.MD} className="w-full justify-center" onClick={closeMobileMenu}>
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}