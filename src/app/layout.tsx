import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import Providers from '@/context/Providers';

export const metadata: Metadata = {
  title: 'LEAP 2025',
  description: 'Leap 2025 Website',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={inter.className + ' h-full'}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
