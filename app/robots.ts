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
      // Block AI training scrapers — social crawlers (FacebookBot, Twitterbot)
      // must NOT be blocked or link previews stop working
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'CCBot',
          'anthropic-ai',
          'Claude-Web',
          'Omgilibot',
          'Bytespider',
          'PetalBot',
          'ImagesiftBot',
        ],
        disallow: '/',
      },
    ],
    sitemap: 'https://www.wecarewellnessclinic.com/sitemap.xml',
    host: 'https://www.wecarewellnessclinic.com',
  };
}
