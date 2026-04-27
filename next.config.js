/** @type {import('next').NextConfig} */

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control',   value: 'on' },
  { key: 'X-Frame-Options',          value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options',   value: 'nosniff' },
  { key: 'Referrer-Policy',          value: 'strict-origin-when-cross-origin' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(self), payment=()',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline'",
      // img-src — allow profile-photo CDNs (Google, Facebook, Wix-uploaded)
      // alongside our own assets and map tiles. Wix Members who sign in via
      // a social provider have their avatar hosted on the provider's CDN.
      "img-src 'self' data: blob: https://static.wixstatic.com https://*.wixusercontent.net https://images.unsplash.com https://www.google.com https://maps.googleapis.com https://maps.gstatic.com https://*.googleusercontent.com https://platform-lookaside.fbsbx.com https://graph.facebook.com",
      "font-src 'self'",
      "frame-src https://www.google.com https://maps.google.com",
      // connect-src — server fetches from Wix don't go through here (CSP
      // is browser-side), but if any future client-side code hits Wix
      // APIs or the Wix members session, these need to be allowed.
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://manage.wix.com https://www.wixapis.com https://*.wix.com",
      "media-src 'self'",
    ].join('; '),
  },
];

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
