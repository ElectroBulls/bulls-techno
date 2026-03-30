import type { Metadata } from 'next';
import { Syne, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import CursorGlitter from '@/components/CursorGlitter';
import { content } from '@/config/content';

// ── Fonts ─────────────────────────────────────────────────────────────────────
// CSS variables are injected on <html>. globals.css @theme inline references them.
const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// ── Site-wide Metadata ────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    template: `%s | ${content.site.name}`,
    default: `${content.site.name} — ${content.site.tagline}`,
  },
  description: content.site.description,
  openGraph: {
    type: 'website',
    siteName: content.site.name,
    title: `${content.site.name} — ${content.site.tagline}`,
    description: content.site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${content.site.name} — ${content.site.tagline}`,
    description: content.site.description,
  },
  icons: {
    icon: content.site.faviconPath,
    apple: content.site.faviconPath,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ── Root Layout ───────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${inter.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bulls-black text-bulls-white font-body antialiased">
        {/* Particle background — canvas behind all content */}
        <ParticleBackground />

        {/* Cursor glitter — canvas above all content, pointer-events-none */}
        <CursorGlitter />

        {/* Sticky header */}
        <Header />

        {/* Page content */}
        <main className="relative z-10 flex-1">{children}</main>

        {/* Footer — appears on every page (Powered by Capital Force Solutions) */}
        <Footer />
      </body>
    </html>
  );
}
