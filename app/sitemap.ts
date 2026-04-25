import { MetadataRoute } from 'next';
import { wixClient } from '@/lib/wix';

const BASE_URL = 'https://www.wecarewellnessclinic.com';

/** Static pages with their SEO priority weights */
const STATIC_PAGES: Array<{
  url: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
  lastModified?: string;
}> = [
  { url: '/',                    changeFrequency: 'weekly',  priority: 1.0   },
  { url: '/about',               changeFrequency: 'monthly', priority: 0.8   },
  { url: '/services',            changeFrequency: 'monthly', priority: 0.9   },
  { url: '/primary-care',        changeFrequency: 'monthly', priority: 0.9   },
  { url: '/medical-weight-loss', changeFrequency: 'monthly', priority: 0.9   },
  { url: '/womens-health',       changeFrequency: 'monthly', priority: 0.9   },
  { url: '/mens-health',         changeFrequency: 'monthly', priority: 0.9   },
  { url: '/telehealth',          changeFrequency: 'monthly', priority: 0.9   },
  { url: '/iv-hydration',        changeFrequency: 'monthly', priority: 0.9   },
  { url: '/blog',                changeFrequency: 'weekly',  priority: 0.8   },
  { url: '/booking',             changeFrequency: 'monthly', priority: 0.85  },
  { url: '/contact',             changeFrequency: 'monthly', priority: 0.75  },
  { url: '/insurance',           changeFrequency: 'monthly', priority: 0.75  },
  { url: '/loyalty',             changeFrequency: 'monthly', priority: 0.6   },
  // Legal — lower priority, infrequent change
  { url: '/privacy',             changeFrequency: 'yearly',  priority: 0.3   },
  { url: '/terms',               changeFrequency: 'yearly',  priority: 0.3   },
  { url: '/hipaa',               changeFrequency: 'yearly',  priority: 0.35  },
  { url: '/accessibility',       changeFrequency: 'yearly',  priority: 0.3   },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // ── Static pages ───────────────────────────────────────────────────
  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: page.lastModified ?? new Date().toISOString().split('T')[0],
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
