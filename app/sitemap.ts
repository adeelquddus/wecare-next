import { MetadataRoute } from 'next';
import { wixClient } from '@/lib/wix';

const BASE_URL = 'https://www.wecarewellnessclinic.com';

/** Static pages with their SEO priority weights */
const STATIC_PAGES: Array<{
  url: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
  lastModified: string;
}> = [
  { url: '/',                    changeFrequency: 'weekly',  priority: 1.0,  lastModified: '2026-04-25' },
  { url: '/about',               changeFrequency: 'monthly', priority: 0.8,  lastModified: '2026-04-25' },
  { url: '/services',            changeFrequency: 'monthly', priority: 0.9,  lastModified: '2026-04-25' },
  { url: '/primary-care',        changeFrequency: 'monthly', priority: 0.9,  lastModified: '2026-04-20' },
  { url: '/medical-weight-loss', changeFrequency: 'monthly', priority: 0.9,  lastModified: '2026-04-20' },
  { url: '/womens-health',       changeFrequency: 'monthly', priority: 0.9,  lastModified: '2026-04-20' },
  { url: '/mens-health',         changeFrequency: 'monthly', priority: 0.9,  lastModified: '2026-04-20' },
  { url: '/telehealth',          changeFrequency: 'monthly', priority: 0.9,  lastModified: '2026-04-20' },
  { url: '/iv-hydration',        changeFrequency: 'monthly', priority: 0.9,  lastModified: '2026-04-20' },
  { url: '/hiv-prep',            changeFrequency: 'monthly', priority: 0.85, lastModified: '2026-04-20' },
  { url: '/blog',                changeFrequency: 'weekly',  priority: 0.8,  lastModified: '2026-04-25' },
  { url: '/booking',             changeFrequency: 'monthly', priority: 0.85, lastModified: '2026-04-10' },
  { url: '/contact',             changeFrequency: 'monthly', priority: 0.75, lastModified: '2026-04-10' },
  { url: '/insurance',           changeFrequency: 'monthly', priority: 0.75, lastModified: '2026-04-10' },
  { url: '/loyalty',             changeFrequency: 'monthly', priority: 0.6,  lastModified: '2026-03-15' },
  // Legal — lower priority, infrequent change
  { url: '/privacy',             changeFrequency: 'yearly',  priority: 0.3,  lastModified: '2026-01-15' },
  { url: '/terms',               changeFrequency: 'yearly',  priority: 0.3,  lastModified: '2026-01-15' },
  { url: '/hipaa',               changeFrequency: 'yearly',  priority: 0.35, lastModified: '2026-01-15' },
  { url: '/accessibility',       changeFrequency: 'yearly',  priority: 0.3,  lastModified: '2026-03-01' },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // ── Static pages ───────────────────────────────────────────────────
  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  // ── Dynamic blog posts ─────────────────────────────────────────────
  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const { items } = await wixClient.posts.queryPosts()
      .limit(100)
      .descending('lastPublishedDate')
      .find();

    blogEntries = items
      .filter((p) => p.slug)
      .map((p) => ({
        url: `${BASE_URL}/blog/${p.slug}`,
        lastModified: p.lastPublishedDate
          ? new Date(p.lastPublishedDate).toISOString().split('T')[0]
          : new Date().toISOString().split('T')[0],
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }));
  } catch {
    // Wix API unavailable — return static pages only
  }

  return [...staticEntries, ...blogEntries];
}
