/**
 * Wix Headless SDK client — WeCare Wellness
 * Connects Next.js frontend to Wix Bookings, Blog, Forms, Members, Pricing Plans
 */
import { createClient, OAuthStrategy } from '@wix/sdk';
import { bookings } from '@wix/bookings';
import { posts, categories } from '@wix/blog';
import { members } from '@wix/members';
import { plans, orders } from '@wix/pricing-plans';
import { ricosToHtml } from './ricos-to-html';

// Client ID from Wix Dashboard > Headless Settings > OAuth Apps
const WIX_CLIENT_ID = process.env.NEXT_PUBLIC_WIX_CLIENT_ID || '';

/**
 * Shared Wix client — use this for Bookings, Blog, Members, and Plans.
 */
export const wixClient = createClient({
  modules: { bookings, posts, categories, members, plans, orders },
  auth: OAuthStrategy({ clientId: WIX_CLIENT_ID }),
});

/* ─── Blog helpers ─────────────────────────────────────────────────── */

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  /** Full post body as HTML, converted from Wix Ricos JSON. Only populated by getPostBySlug. */
  content?: string;
  coverImage?: string;
  slug: string;
  /** Human-readable date, e.g. "April 25, 2026" */
  publishedDate: string;
  /** ISO 8601 date string for JSON-LD / <time datetime> */
  publishedDateISO?: string;
  /** ISO 8601 modified date string for JSON-LD */
  modifiedDateISO?: string;
  author?: string;
  readingTime?: number;
  tags?: string[];
}

/**
 * Fetches the N most recent published blog posts.
 */
export async function getLatestPosts(limit = 6): Promise<BlogPost[]> {
  try {
    const { items } = await wixClient.posts.queryPosts()
      .limit(limit)
      .descending('lastPublishedDate')
      .find();

    return items.map((p) => ({
      id: p._id ?? '',
      title: p.title ?? '',
      excerpt: p.excerpt ?? '',
      coverImage: p.media?.wixMedia?.image ?? undefined,
      slug: p.slug ?? '',
      publishedDate: p.firstPublishedDate
        ? new Date(p.firstPublishedDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        : '',
      publishedDateISO: p.firstPublishedDate
        ? new Date(p.firstPublishedDate).toISOString()
        : undefined,
      tags: p.hashtags ?? [],
    }));
  } catch {
    return [];
  }
}

/**
 * Fetches a single blog post by slug, including full HTML content.
 * Uses getPostBySlug with RICH_CONTENT fieldset, then converts
 * Ricos nodes to HTML via ricosToHtml.
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const res = await wixClient.posts.getPostBySlug(slug, {
      fieldsets: ['RICH_CONTENT'],
    });

    const p = res.post;
    if (!p) return null;

    // Convert Ricos rich content → HTML
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const contentHtml = p.richContent ? ricosToHtml(p.richContent as any) : '';

    return {
      id: p._id ?? '',
      title: p.title ?? '',
      excerpt: p.excerpt ?? '',
      content: contentHtml,
      coverImage: p.media?.wixMedia?.image ?? undefined,
      slug: p.slug ?? '',
      publishedDate: p.firstPublishedDate
        ? new Date(p.firstPublishedDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        : '',
      publishedDateISO: p.firstPublishedDate
        ? new Date(p.firstPublishedDate).toISOString()
        : undefined,
      modifiedDateISO: p.lastPublishedDate
        ? new Date(p.lastPublishedDate).toISOString()
        : undefined,
      readingTime: p.minutesToRead ?? undefined,
      tags: p.hashtags ?? [],
    };
  } catch {
    return null;
  }
}

/* ─── Bookings helpers ─────────────────────────────────────────────── */

export interface BookingService {
  id: string;
  name: string;
  description?: string;
  duration?: number; // minutes
  price?: string;
  slug?: string;
}

/**
 * Fetches a single booking service by ID.
 * Note: Full services list requires @wix/bookings services API (separate from bookings module).
 * This is a lightweight wrapper for individual service lookup.
 */
export async function getBookingService(serviceId: string): Promise<BookingService | null> {
  try {
    const result = await wixClient.bookings.getServiceAnonymously(serviceId);
    const s = result.service;
    return {
      id: s?._id ?? '',
      name: s?.name ?? '',
      description: s?.description ?? undefined,
    };
  } catch {
    return null;
  }
}
