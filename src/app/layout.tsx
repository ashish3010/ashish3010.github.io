import { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Analytics } from '@vercel/analytics/next';
import GoogleAnalytics from './google-analytics';

const title = 'Ashish Mishra | Frontend Developer';
const description = 'Frontend developer specializing in modern, responsive web interfaces with sleek animations and a focus on user experience.';
const url = 'https://ashishmishra.vercel.app/';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    'Frontend Developer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'React Native Developer'
  ],
  creator: 'Ashish Mishra',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    siteName: title,
    images: [
      {
        url: '../../public/images/open-graph-ashish.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@im_ashish30',
    images: '../../public/images/open-graph-ashish.png',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`bg-gray text-gray-600 antialiased`}>
        <Header />
        <main className="flex min-h-screen w-full flex-col">
          {children}
          <GoogleAnalytics />
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
