import type { Metadata } from 'next';
import '@/styles/globals.css';
// import { Inter } from 'next/font/google';
import Providers from '@/context/Providers';

import LeapCursor from '@/components/cursor/LeapCursor';
import { Toaster } from '@/components/ui/sonner';
import { BASE_URL } from '@/lib/constants';

import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: {
    default: 'LEAP 2025',
    template: '%s | LEAP 2025',
  },
  description: 'STEP INTO AdventureLand - THE ADVENTURE AWAITS',
  openGraph: {
    title: 'LEAP 2025',
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
    title: 'LEAP 2025',
    description: 'STEP INTO AdventureLand - THE ADVENTURE AWAITS',
    images: ['/leapPub.webp'],
    site: '@dlsu_leap',
    creator: '@dlsu_lscs',
  },
  icons: {
    icon: '/leapLogos/verticalLogo.png',
    shortcut: '/leapLogos/verticalLogo.png',
    apple: '/leapLogos/verticalLogo.png',
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
      <link rel="icon" href="/leapLogos/verticalLogo.png" />
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
        <GoogleAnalytics gaId={process.env.GA!} />
        <GoogleTagManager gtmId={process.env.GT!} />
      </body>
    </html>
  );
}
