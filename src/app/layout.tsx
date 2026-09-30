import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import FloatingActions from '@/components/FloatingActions';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Heart Fitness | Elite Fitness Club & Gym in Virar East, Maharashtra',
  description:
    'Heart Fitness is a modern, high-end fitness center located at 2nd Floor, M Baria Estate, Opposite Manvelpada Talav, Virar East. Equipped with Jerai commercial apparatus, certified trainers, cardio decks, and dedicated steam recovery.',
  keywords: [
    'Heart Fitness Virar East',
    'gym in Virar East',
    'gym near Manvelpada Talav',
    'fitness centre Virar East',
    'luxury gym Virar',
    'Jerai equipment gym Virar',
    'certified personal trainers Virar',
    'CrossFit gym Virar',
    'steam room gym Virar East',
  ],
  authors: [{ name: 'Heart Fitness' }],
  metadataBase: new URL('https://heartfitnessvirar.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Heart Fitness | Elite Training Ground in Virar East',
    description:
      'A quiet, focused athletic sanctuary in Virar East. Built around strength, movement, Jerai equipment, and certified coaching.',
    url: 'https://heartfitnessvirar.in',
    siteName: 'Heart Fitness Virar',
    images: [
      {
        url: '/images/heart-fitness-social-card.jpg',
        width: 1200,
        height: 630,
        alt: 'Heart Fitness — Train strong. Live healthy.',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heart Fitness | Elite Training Ground in Virar East',
    description:
      'Train stronger with commercial Jerai equipment and certified coaches at M Baria Estate, Virar East.',
    images: [
      {
        url: '/images/heart-fitness-social-card.jpg',
        width: 1200,
        height: 630,
        alt: 'Heart Fitness — Train strong. Live healthy.',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/images/logo.png', sizes: 'any' },
      { url: '/images/logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/images/logo.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ExerciseGym',
  name: 'Heart Fitness',
  image: 'https://heartfitnessvirar.in/images/herosection.png',
  telephone: '+917841966244',
  email: 'heartfitness322@gmail.com',
  url: 'https://heartfitnessvirar.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2nd Floor, M Baria Estate, Opposite Manvelpada Talav',
    addressLocality: 'Virar East, Vasai-Virar',
    addressRegion: 'Maharashtra',
    postalCode: '401305',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 19.4678,
    longitude: 72.8258,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.6',
    reviewCount: '120',
  },
  sameAs: ['https://www.instagram.com/heart_fitness_virar/'],
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Jerai Commercial Equipment', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Certified Fitness Trainers', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Steam Room', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Cardio Deck', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'CrossFit Zone', value: true },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased selection:bg-[var(--accent-yellow)] selection:text-[var(--bg-primary)]">
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <FloatingActions />
      </body>
    </html>
  );
}
