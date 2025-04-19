import { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL('https://obzervable.com'),
  title: {
    template: '%s | Obzervable',
    default: 'Obzervable - Data Observability Platform',
  },
  description: 'Proactively monitor and troubleshoot data quality issues with Obzervable\'s data observability platform. Get complete visibility into your data ecosystem.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://obzervable.com',
    siteName: 'Obzervable',
    title: 'Obzervable - Data Observability Platform',
    description: 'Proactively monitor and troubleshoot data quality issues with Obzervable\'s data observability platform.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Obzervable - Data Observability Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Obzervable - Data Observability Platform',
    description: 'Proactively monitor and troubleshoot data quality issues with Obzervable\'s data observability platform.',
    images: ['/images/twitter-image.png'],
    creator: '@obzervablehq',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
        
        {/* Google Analytics Placeholder */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </body>
    </html>
  );
} 