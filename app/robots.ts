import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
        ],
      },
      // Block AI training scrapers that respect robots.txt
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'CCBot',
          'anthropic-ai',
          'Claude-Web',
          'Omgilibot',
          'FacebookBot',
          'Twitterbot',
        ],
        disallow: '/',
      },
    ],
    sitemap: 'https://www.wecarewellnessclinic.com/sitemap.xml',
    host: 'https://www.wecarewellnessclinic.com',
  };
}
