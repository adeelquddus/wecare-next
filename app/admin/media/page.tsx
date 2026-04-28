/**
 * Wix Media Library viewer.
 *
 * SERVER COMPONENT - fetches the list using the privileged WIX_API_KEY and
 * renders the media files. The API key never reaches the browser.
 *
 * Path: /admin/media
 *
 * NOTE: This route is not linked from anywhere in the public navigation.
 * If you want it gated behind auth, add middleware before deploying.
 */

import type { Metadata } from 'next';
import Image from 'next/image';
import { listMediaFiles, type WixMediaFile, wixImageUrl } from '@/lib/wix-media';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Media Library - WeCare Wellness Admin',
  robots: { index: false, follow: false },
};

// No caching - always fresh while we're iterating.
export const revalidate = 0;

function formatBytes(b?: string | number): string {
  const n = typeof b === 'string' ? Number(b) : b ?? 0;
  if (!n) return '-';
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(0)} KB`;
  return `${(n / (1024 * 1024)).toFixed(1)} MB`;
}

function previewUrl(f: WixMediaFile): string {
  const img = f.media?.image?.image ?? f.media?.vector?.image;
  if (img) return wixImageUrl(img, { w: 360, h: 240 });
  return f.thumbnailUrl ?? f.url;
}

export default async function MediaLibraryPage() {
  let files: WixMediaFile[] = [];
  let error: string | null = null;
  let hasNext = false;

  try {
    const result = await listMediaFiles({ limit: 100 });
    files = result.items;
    hasNext = result.hasNext;
  } catch (e) {
    error = e instanceof Error ? e.message : String(e);
  }

  // Group by media type
  const byType = files.reduce<Record<string, WixMediaFile[]>>((acc, f) => {
    (acc[f.mediaType] ??= []).push(f);
    return acc;
  }, {});

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Admin</p>
        <h1 className={styles.title}>Wix Media Library</h1>
        <p className={styles.lede}>
          Files fetched live from your Wix site media via the{' '}
          <code>site-media/v1/files</code> REST endpoint.
        </p>
        <div className={styles.metaRow}>
          <span className={styles.metaPill}>
            <strong>{files.length}</strong> file{files.length !== 1 ? 's' : ''} loaded
          </span>
          {hasNext && <span className={styles.metaPill}>more available (paginate)</span>}
          {Object.entries(byType).map(([type, items]) => (
            <span key={type} className={styles.metaPill}>
              {type}: {items.length}
            </span>
          ))}
        </div>
      </header>

      {error && (
        <div className={styles.errorBox} role="alert">
          <strong>Failed to load media.</strong>
          <pre>{error}</pre>
        </div>
      )}

      {!error && files.length === 0 && (
        <div className={styles.empty}>No media files returned. Check that your site has uploads.</div>
      )}

      <div className={styles.grid}>
        {files.map((f) => {
          const isImage = f.mediaType === 'IMAGE' || f.mediaType === 'VECTOR';
          return (
            <article key={f.id} className={styles.card}>
              <div className={styles.thumbWrap}>
                {isImage ? (
                  <Image
                    src={previewUrl(f)}
                    alt={f.displayName}
                    fill
                    sizes="(max-width: 600px) 50vw, 25vw"
                    className={styles.thumb}
                    unoptimized // Wix CDN already optimised
                  />
                ) : (
                  <div className={styles.thumbFallback}>{f.mediaType}</div>
                )}
                <span className={styles.typeBadge}>{f.mediaType}</span>
              </div>
              <div className={styles.body}>
                <p className={styles.fileName} title={f.displayName}>
                  {f.displayName}
                </p>
                <div className={styles.fileMeta}>
                  <span>{formatBytes(f.sizeInBytes)}</span>
                  {f.media?.image?.image?.width && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>
                        {f.media.image.image.width}×{f.media.image.image.height}
                      </span>
                    </>
                  )}
                </div>
                <div className={styles.fileActions}>
                  <a href={f.url} target="_blank" rel="noreferrer" className={styles.actionLink}>
                    Open ↗
                  </a>
                  <span className={styles.fileId} title={f.id}>
                    {f.id.slice(0, 16)}…
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
