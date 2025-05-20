import type { Metadata } from 'next';
import '@/styles/globals.css';
// import { Inter } from 'next/font/google';
import Providers from '@/context/Providers';

import LeapCursor from '@/components/cursor/LeapCursor';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: 'LEAP 2025',
  description: 'Leap 2025 Website',
  openGraph: {
    title: 'LEAP 2025',
    description: 'Leap 2025 Website',
    images: [
      {
        url: '/leapLogos/Logo_v1.png',
        width: 800,
        height: 600,
        alt: 'LEAP 2025 Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LEAP 2025',
    description: 'Leap 2025 Website',
    images: '/leapLogos/Logo_v1.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full font-public-sans`}>
      <link rel="icon" href="/leapLogos/Logo_v1.png" />
      <body className="h-full overflow-x-hidden">
        <div className="h-full relative overflow-x-hidden">
          <div className="left-cloud "></div>
          <div className="right-cloud "></div>
          <Providers>
            {children}
            <LeapCursor />
            <Toaster />
          </Providers>
        </div>
      </body>
    </html>
  );
}
