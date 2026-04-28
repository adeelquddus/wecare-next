/**
 * Wix Site Media REST client - server-side only.
 *
 * Uses the Wix Site Media API:
 *   GET /site-media/v1/files          - list all media files
 *   GET /site-media/v1/files/search   - search by tag/name
 *   GET /site-media/v1/files/{id}     - get one file's full metadata
 *   GET /site-media/v1/folders        - list folders
 *
 * Auth requirements (per Wix docs):
 *   Authorization:    <API_KEY>          (no "Bearer" prefix - Wix is unusual here)
 *   wix-account-id:   <account UUID>
 *   wix-site-id:      <site UUID>        (only required for site-scoped data)
 *
 * IMPORTANT: This file references env vars without the NEXT_PUBLIC_ prefix,
 * so Next.js will only expose them to the server. Never import this from
 * a "use client" component.
 */

const BASE = 'https://www.wixapis.com/site-media/v1';

interface WixMediaCreds {
  apiKey: string;
  accountId: string;
  siteId: string;
}

function getCreds(): WixMediaCreds {
  const apiKey = process.env.WIX_API_KEY;
  const accountId = process.env.WIX_ACCOUNT_ID;
  const siteId = process.env.WIX_SITE_ID;
  if (!apiKey || !accountId || !siteId) {
    throw new Error(
      'Wix Media credentials missing. Set WIX_API_KEY, WIX_ACCOUNT_ID, WIX_SITE_ID in .env.local'
    );
  }
  return { apiKey, accountId, siteId };
}

function authHeaders(creds: WixMediaCreds): HeadersInit {
  return {
    Authorization: creds.apiKey,
    'wix-account-id': creds.accountId,
    'wix-site-id': creds.siteId,
    'Content-Type': 'application/json',
  };
}

/* ─── Types (subset of what the API returns) ───────────────────────── */

export type WixMediaType = 'IMAGE' | 'VIDEO' | 'AUDIO' | 'DOCUMENT' | 'VECTOR' | 'ARCHIVE' | 'MODEL_3D';

export interface WixMediaImage {
  id: string;
  url: string;
  height?: number;
  width?: number;
  filename?: string;
  sizeInBytes?: string;
}

export interface WixMediaFile {
  id: string;
  displayName: string;
  url: string;
  parentFolderId?: string;
  hash?: string;
  sizeInBytes?: string;
  private?: boolean;
  mediaType: WixMediaType;
  mimeType?: string;
  thumbnailUrl?: string;
  labels?: string[];
  createdDate?: string;
  updatedDate?: string;
  siteId?: string;
  media?: {
    image?: { image: WixMediaImage; faces?: unknown[]; colors?: unknown };
    vector?: { image: WixMediaImage };
    video?: unknown;
  };
}

export interface WixMediaFolder {
  id: string;
  displayName: string;
  parentFolderId?: string;
  state?: string;
  createdDate?: string;
}

export interface ListResult<T> {
  items: T[];
  nextCursor?: string;
  hasNext: boolean;
}

/* ─── Helpers ──────────────────────────────────────────────────────── */

interface ListFilesOptions {
  limit?: number;
  cursor?: string;
  parentFolderId?: string;
  mediaTypes?: WixMediaType[];
}

/** Build a query string for the list/search endpoints. */
function buildQuery(opts: ListFilesOptions = {}): string {
  const params = new URLSearchParams();
  if (opts.limit) params.set('paging.limit', String(opts.limit));
  if (opts.cursor) params.set('paging.cursor', opts.cursor);
  if (opts.parentFolderId) params.set('parentFolderId', opts.parentFolderId);
  if (opts.mediaTypes?.length) {
    for (const t of opts.mediaTypes) params.append('mediaTypes', t);
  }
  const q = params.toString();
  return q ? `?${q}` : '';
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const creds = getCreds();
  const res = await fetch(`${BASE}${path}`, {
    ...init,
    headers: { ...authHeaders(creds), ...(init?.headers ?? {}) },
    // Always make these server-side calls fresh. If you want caching,
    // wrap with `next: { revalidate: 60 }` in callers.
    cache: 'no-store',
  });
  if (!res.ok) {
    const txt = await res.text().catch(() => '');
    throw new Error(`Wix Media API ${res.status}: ${txt.slice(0, 200)}`);
  }
  return res.json() as Promise<T>;
}

/* ─── Public API ───────────────────────────────────────────────────── */

/** List files (paginated). Defaults to 50 results. */
export async function listMediaFiles(
  opts: ListFilesOptions = {}
): Promise<ListResult<WixMediaFile>> {
  const data = await request<{
    files: WixMediaFile[];
    nextCursor?: { cursors?: { next?: string }; hasNext?: boolean };
  }>(`/files${buildQuery({ limit: 50, ...opts })}`);
  return {
    items: data.files ?? [],
    nextCursor: data.nextCursor?.cursors?.next,
    hasNext: data.nextCursor?.hasNext ?? false,
  };
}

/** Get a single file's full metadata by ID. */
export async function getMediaFile(id: string): Promise<WixMediaFile> {
  const data = await request<{ file: WixMediaFile }>(`/files/${encodeURIComponent(id)}`);
  return data.file;
}

/**
 * Search files by display name or tag.
 * The Wix API supports a `search` query param on `/files/search`.
 */
export async function searchMediaFiles(
  query: string,
  opts: Omit<ListFilesOptions, 'parentFolderId'> = {}
): Promise<ListResult<WixMediaFile>> {
  const params = new URLSearchParams();
  params.set('search.expression', query);
  if (opts.limit) params.set('paging.limit', String(opts.limit));
  if (opts.cursor) params.set('paging.cursor', opts.cursor);
  if (opts.mediaTypes?.length) {
    for (const t of opts.mediaTypes) params.append('mediaTypes', t);
  }
  const data = await request<{
    files: WixMediaFile[];
    nextCursor?: { cursors?: { next?: string }; hasNext?: boolean };
  }>(`/files/search?${params.toString()}`);
  return {
    items: data.files ?? [],
    nextCursor: data.nextCursor?.cursors?.next,
    hasNext: data.nextCursor?.hasNext ?? false,
  };
}

/** List folders (top level by default). */
export async function listMediaFolders(parentFolderId?: string): Promise<WixMediaFolder[]> {
  const params = new URLSearchParams();
  if (parentFolderId) params.set('parentFolderId', parentFolderId);
  const q = params.toString();
  const data = await request<{ folders: WixMediaFolder[] }>(`/folders${q ? `?${q}` : ''}`);
  return data.folders ?? [];
}

/* ─── URL builders ─────────────────────────────────────────────────── */

/**
 * Build a sized variant URL for a Wix-hosted image.
 * Useful when you want a smaller thumbnail than the original.
 *
 * Example:
 *   wixImageUrl(file.media.image.image, { w: 800, h: 450 })
 *   →  https://static.wixstatic.com/media/<id>/v1/fill/w_800,h_450,al_c,q_85,enc_jpg/file.jpg
 */
export function wixImageUrl(
  image: WixMediaImage,
  opts: { w?: number; h?: number; quality?: number } = {}
): string {
  const w = opts.w ?? image.width ?? 800;
  const h = opts.h ?? image.height ?? 600;
  const q = opts.quality ?? 85;
  return `https://static.wixstatic.com/media/${image.id}/v1/fill/w_${w},h_${h},al_c,q_${q},usm_0.66_1.00_0.01,enc_jpg/file.jpg`;
}
