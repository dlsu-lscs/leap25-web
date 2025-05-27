import type { Metadata } from 'next';
import '@/styles/globals.css';
// import { Inter } from 'next/font/google';
import Providers from '@/context/Providers';

import LeapCursor from '@/components/cursor/LeapCursor';
import { Toaster } from '@/components/ui/sonner';
import { BASE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: {
    default: 'Lasallian Enrichment Alternative Program 2025',
    template: '%s | LEAP 2025',
  },
  description: 'STEP INTO AdventureLand - THE ADVENTURE AWAITS',
  openGraph: {
    title: 'Lasallian Enrichment Alternative Program 2025',
    description: 'STEP INTO AdventureLand - THE ADVENTURE AWAITS',
    url: BASE_URL,
    siteName: 'LEAP 2025',
    type: 'website',
    images: [
      {
        url: '/leapPub.webp',
        width: 1200,
        height: 900,
        alt: 'LEAP 2025 Logo',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Lasallian Enrichment Alternative Program 2025',
    description: 'STEP INTO AdventureLand - THE ADVENTURE AWAITS',
    images: ['/landingBG.webp'],
    site: '@dlsu_leap',
    creator: '@dlsu_lscs',
  },
  icons: {
    icon: '/leapLogos/Logo_v1.png',
    shortcut: '/leapLogos/Logo_v1.png',
    apple: '/leapLogos/Logo_v1.png',
  },
  metadataBase: new URL(BASE_URL),
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
