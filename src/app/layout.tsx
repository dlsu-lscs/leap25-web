import type { Metadata } from 'next';
import '@/styles/globals.css';
// import { Inter } from 'next/font/google';
import Providers from '@/context/Providers';

import { Public_Sans } from 'next/font/google';

const public_sans = Public_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LEAP 2025',
  description: 'Leap 2025 Website',
};

// const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={public_sans.className + ' h-full'}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
