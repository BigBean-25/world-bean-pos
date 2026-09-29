import type { Metadata, Viewport } from 'next';
import { Inter, Outfit } from 'next/font/google';

import { ThemeProvider } from '@/components/providers/theme-provider';
import { ToastProvider } from '@/components/providers/toast-provider';
import { BRAND } from '@/config/brand';
import { publicEnv } from '@/lib/env';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(publicEnv.appUrl),
  title: {
    default: `${publicEnv.appName} — World Bean Coffee`,
    template: `%s · ${publicEnv.appName}`,
  },
  description:
    `${BRAND.posName} is the multi-outlet billing, kitchen, inventory and operations platform for ${BRAND.brandName}.`,
  applicationName: publicEnv.appName,
  keywords: [
    'restaurant POS',
    'point of sale',
    'kitchen display system',
    'restaurant management',
    'inventory management',
    'table management',
  ],
  openGraph: {
    type: 'website',
    title: `${publicEnv.appName} — ${BRAND.brandName}`,
    description:
      `Fast café billing, kitchen operations, recipe inventory and multi-outlet reporting for ${BRAND.brandName}.`,
    siteName: BRAND.posName,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#491A0A' },
    { media: '(prefers-color-scheme: dark)', color: '#1E0C07' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-dvh antialiased">
        <ThemeProvider>
          {children}
          <ToastProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
