import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const SITE_URL = 'https://www.wecarewellnessclinic.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'WeCare Wellness Clinic | Primary Care, Weight Loss & Telehealth in Brandon, FL',
    template: '%s | WeCare Wellness Clinic',
  },
  description:
    'WeCare Wellness Clinic in Brandon, FL offers primary care, medical weight loss (GLP-1/Semaglutide), telehealth, women\'s health, men\'s health & more. Accepting Aetna, UHC, Medicare, BCBS.',
  keywords: [
    'primary care Brandon FL',
    'medical weight loss Brandon',
    'semaglutide Brandon FL',
    'telehealth Florida',
    'GLP-1 therapy Brandon',
    'family doctor Brandon FL',
    'WeCare Wellness Clinic',
    'gynecology Brandon FL',
    'mens health Brandon FL',
  ],
  openGraph: {
    type: 'website',
    siteName: 'WeCare Wellness Clinic',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WeCare Wellness Clinic — Brandon, FL',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@wecarewellness',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  verification: {
    google: '',   // Add Search Console verification code
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: { url: '/favicon.svg', type: 'image/svg+xml' },
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Geo meta — Brandon FL */}
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Brandon, Florida" />
        <meta name="geo.position" content="27.9378;-82.2859" />
        <meta name="ICBM" content="27.9378, -82.2859" />

        {/* Resource hints */}
        <link rel="preconnect" href="https://static.wixstatic.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
      </head>
      <body>
        {/* Skip nav — WCAG 2.1 AA */}
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>

        <Header />

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <Footer />

        {/* LocalBusiness + MedicalClinic JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['MedicalClinic', 'LocalBusiness'],
              '@id': `${SITE_URL}/#clinic`,
              name: 'WeCare Wellness Clinic',
              url: SITE_URL,
              telephone: '+18134385220',
              email: 'info@wecarewellnessclinic.com',
              image: `${SITE_URL}/og-image.png`,
              logo: `${SITE_URL}/logo.png`,
              description:
                'WeCare Wellness Clinic offers primary care, medical weight loss, telehealth, women\'s health and men\'s health services in Brandon, FL.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '214 W Brandon Blvd',
                addressLocality: 'Brandon',
                addressRegion: 'FL',
                postalCode: '33511',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 27.9378,
                longitude: -82.2859,
              },
              openingHoursSpecification: [
                { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '09:00', closes: '17:00' },
                { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday'], opens: '09:00', closes: '18:00' },
                { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '13:00' },
              ],
              areaServed: [
                { '@type': 'City', name: 'Brandon', containedInPlace: { '@type': 'State', name: 'Florida' } },
                { '@type': 'City', name: 'Riverview', containedInPlace: { '@type': 'State', name: 'Florida' } },
                { '@type': 'City', name: 'Valrico', containedInPlace: { '@type': 'State', name: 'Florida' } },
                { '@type': 'City', name: 'Tampa', containedInPlace: { '@type': 'State', name: 'Florida' } },
              ],
              hasMap: 'https://maps.google.com/?q=214+W+Brandon+Blvd+Brandon+FL+33511',
              sameAs: [
                'https://www.facebook.com/wecarewellnessclinic',
                'https://www.instagram.com/wecarewellnessclinic',
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                reviewCount: '50',
                bestRating: '5',
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
