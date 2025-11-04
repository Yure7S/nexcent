import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-white dark:bg-white text-black dark:text-black transition-colors`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}