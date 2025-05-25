import type { Metadata } from 'next';
import '@/styles/globals.css';
// import { Inter } from 'next/font/google';
import Providers from '@/context/Providers';

import LeapCursor from '@/components/cursor/LeapCursor';
import { Toaster } from '@/components/ui/sonner';
import { BASE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: {
    default: 'LEAP 2025',
    template: '%s | LEAP 2025',
  },
  description:
    'A multi-day, university-wide initiative spearheaded by the Council of Student Organizations (CSO) in collaboration with its 48 accredited organizations and various university offices.',
  openGraph: {
    title: 'LEAP 2025',
    description:
      'A multi-day, university-wide initiative spearheaded by the Council of Student Organizations (CSO) in collaboration with its 48 accredited organizations and various university offices. ',
    url: BASE_URL,
    siteName: 'LEAP 2025',
    type: 'website',
    images: [
      {
        url: '/leapLogos/Logo_v1.png',
        width: 1200,
        height: 630,
        alt: 'LEAP 2025 Logo',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'LEAP 2025',
    description:
      'A multi-day, university-wide initiative spearheaded by the Council of Student Organizations (CSO) in collaboration with its 48 accredited organizations and various university offices.',
    images: ['/leapLogos/Logo_v1.png'],
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
