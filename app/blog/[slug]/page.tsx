import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import BookingCTA from '@/components/sections/BookingCTA';
import Button from '@/components/ui/Button';
import { getPostBySlug, getLatestPosts } from '@/lib/wix';
import ReadingProgressBar from './ReadingProgressBar';
import TableOfContents from './TableOfContents';
import ShareSection from './ShareSection';
import styles from './page.module.css';

export const revalidate = 3600;

interface Props {
  params: { slug: string };
}

/* ── SEO Metadata ───────────────────────────────────────────────────────── */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found | WeCare Wellness Blog' };

  const canonical = `https://www.wecarewellnessclinic.com/blog/${post.slug}`;

  return {
    title: `${post.title} | WeCare Wellness Blog`,
    description: post.excerpt || `Read about ${post.title} at WeCare Wellness Clinic — expert healthcare insights from Brandon, FL.`,
    keywords: post.tags?.join(', '),
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonical,
      type: 'article',
      publishedTime: post.publishedDateISO,
      modifiedTime: post.modifiedDateISO,
      images: post.coverImage
        ? [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }]
        : [{ url: 'https://www.wecarewellnessclinic.com/og-default.jpg', width: 1200, height: 630 }],
      siteName: 'WeCare Wellness Clinic',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
      site: '@WeCareWellness',
    },
  };
}

/* ── JSON-LD helper ─────────────────────────────────────────────────────── */

function buildJsonLd(post: NonNullable<Awaited<ReturnType<typeof getPostBySlug>>>) {
  const url = `https://www.wecarewellnessclinic.com/blog/${post.slug}`;

  const article = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    additionalType: 'https://schema.org/Article',
    headline: post.title,
    description: post.excerpt,
    url,
    datePublished: post.publishedDateISO,
    dateModified: post.modifiedDateISO ?? post.publishedDateISO,
    image: post.coverImage
      ? [{ '@type': 'ImageObject', url: post.coverImage, width: 1200, height: 630 }]
      : undefined,
    author: {
      '@type': 'Organization',
      name: 'WeCare Wellness Clinic',
      url: 'https://www.wecarewellnessclinic.com',
    },
    publisher: {
      '@type': 'MedicalOrganization',
      name: 'WeCare Wellness Clinic',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.wecarewellnessclinic.com/logo.png',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '214 W Brandon Blvd',
        addressLocality: 'Brandon',
        addressRegion: 'FL',
        postalCode: '33511',
        addressCountry: 'US',
      },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: post.tags?.join(', '),
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    specialty: 'Primary Care, Family Medicine, Wellness',
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.wecarewellnessclinic.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.wecarewellnessclinic.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  };

  return [article, breadcrumb];
}

/* ── Page component ─────────────────────────────────────────────────────── */

export default async function BlogPostPage({ params }: Props) {
  const [post, latestPosts] = await Promise.all([
    getPostBySlug(params.slug),
    getLatestPosts(4),
  ]);

  if (!post) notFound();

  // Filter out the current post from related posts
  const related = latestPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = buildJsonLd(post);

  // Author initials for avatar fallback
  const authorName = post.author ?? 'WeCare Team';
  const initials = authorName
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <>
      {/* ── JSON-LD ── */}
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ── Reading progress ── */}
      <ReadingProgressBar />

      {/* ── Breadcrumb ── */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <ol className={styles.breadcrumbList}>
          <li><Link href="/">Home</Link></li>
          <li aria-hidden="true" className={styles.sep}>›</li>
          <li><Link href="/blog">Blog</Link></li>
          <li aria-hidden="true" className={styles.sep}>›</li>
          <li aria-current="page">{post.title}</li>
        </ol>
      </nav>

      {/* ── Hero or header ── */}
      {post.coverImage ? (
        <div className={styles.hero} role="img" aria-label={post.title}>
          <Image
            src={post.coverImage}
            alt={post.title ?? ''}
            fill
            className={styles.heroCover}
            priority
            sizes="100vw"
          />
          <div className={styles.heroOverlay} aria-hidden="true" />
          <div className={styles.heroContent}>
            {post.tags && post.tags.length > 0 && (
              <div className={styles.heroTags}>
                {post.tags.slice(0, 3).map((t) => (
                  <span key={t} className={styles.heroTag}>{t}</span>
                ))}
              </div>
            )}
            <h1 className={styles.heroTitle}>{post.title}</h1>
            <div className={styles.heroMeta}>
              <time dateTime={post.publishedDateISO}>{post.publishedDate}</time>
              {post.readingTime && (
                <>
                  <span className={styles.heroMetaDot} aria-hidden="true" />
                  <span>{post.readingTime} min read</span>
                </>
              )}
              <span className={styles.heroMetaDot} aria-hidden="true" />
              <span>By {authorName}</span>
            </div>
          </div>
        </div>
      ) : (
        /* Fallback header (no cover image) */
        <header className={styles.pageHeader}>
          <div className={styles.pageHeaderInner}>
            {post.tags && post.tags.length > 0 && (
              <div className={styles.pageHeaderTags}>
                {post.tags.slice(0, 3).map((t) => (
                  <span key={t} className={styles.pageHeaderTag}>{t}</span>
                ))}
              </div>
            )}
            <h1 className={styles.pageHeaderTitle}>{post.title}</h1>
            <div className={styles.pageHeaderMeta}>
              <time dateTime={post.publishedDateISO}>{post.publishedDate}</time>
              {post.readingTime && (
                <>
                  <span className={styles.metaDot} aria-hidden="true" />
                  <span>{post.readingTime} min read</span>
                </>
              )}
              <span className={styles.metaDot} aria-hidden="true" />
              <span>By {authorName}</span>
            </div>
          </div>
        </header>
      )}

      {/* ── Article ── */}
      <main className={styles.page} id="main-content">
        <div className={styles.container}>
          <div className={styles.grid}>

            {/* ── Main column ── */}
            <article className={styles.main}>

              {/* Rich post body */}
              <div
                className={styles.body}
                data-blog-body
                dangerouslySetInnerHTML={{ __html: post.content ?? `<p>${post.excerpt}</p>` }}
              />

              {/* Author card */}
              <div className={styles.authorCard} aria-label="About the author">
                <div className={styles.authorAvatar} aria-hidden="true">{initials}</div>
                <div className={styles.authorInfo}>
                  <p className={styles.authorName}>{authorName}</p>
                  <p className={styles.authorRole}>WeCare Wellness Clinic — Brandon, FL</p>
                </div>
              </div>

              {/* Share buttons */}
              <ShareSection title={post.title} slug={post.slug} />

              {/* Inline booking CTA */}
              <div className={styles.inlineCta}>
                <p className={styles.inlineCtaTitle}>Have questions about your health?</p>
                <p className={styles.inlineCtaSub}>
                  Same-week appointments available in-person or via Telehealth in Brandon, FL.
                </p>
                <Link href="/booking" className={styles.inlineCtaBtn}>
                  Book an Appointment →
                </Link>
              </div>

              {/* Medical disclaimer */}
              <aside className={styles.disclaimer} aria-label="Medical disclaimer">
                <p>
                  <strong>Medical disclaimer:</strong> This article is for informational
                  purposes only and does not constitute medical advice. Please consult a
                  qualified healthcare provider before making decisions about your health.
                </p>
              </aside>

              {/* Related posts */}
              {related.length > 0 && (
                <section className={styles.relatedSection} aria-label="Related articles">
                  <h2 className={styles.relatedTitle}>Related Articles</h2>
                  <div className={styles.relatedGrid}>
                    {related.map((rp) => (
                      <Link key={rp.slug} href={`/blog/${rp.slug}`} className={styles.relatedCard}>
                        {rp.coverImage ? (
                          <div className={styles.relatedThumbWrap}>
                            <Image
                              src={rp.coverImage}
                              alt={rp.title ?? ''}
                              fill
                              className={styles.relatedThumb}
                              sizes="(max-width: 600px) 100vw, 33vw"
                            />
                          </div>
                        ) : (
                          <div className={styles.relatedThumbPlaceholder} aria-hidden="true" />
                        )}
                        <div className={styles.relatedBody}>
                          <p className={styles.relatedPostTitle}>{rp.title}</p>
                          <p className={styles.relatedDate}>{rp.publishedDate}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </article>

            {/* ── Sidebar ── */}
            <aside className={styles.sidebar} aria-label="Sidebar">

              {/* Appointment card */}
              <div className={`${styles.sideCard} ${styles.appointmentCard}`}>
                <h2 className={styles.appointmentTitle}>Book an Appointment</h2>
                <p className={styles.availBadge}>
                  <span className={styles.availDot} aria-hidden="true" />
                  Same-week availability
                </p>
                <Button href="/booking" variant="secondary" fullWidth>
                  Schedule Now
                </Button>
              </div>

              {/* Table of contents */}
              {post.content && (
                <div className={styles.sideCard}>
                  <TableOfContents contentHtml={post.content} />
                </div>
              )}

              {/* Services list */}
              <div className={styles.sideCard}>
                <h2 className={styles.sideTitle}>Our Services</h2>
                <ul className={styles.sideLinks}>
                  {([
                    ['Primary Care', '/primary-care'],
                    ['Medical Weight Loss', '/medical-weight-loss'],
                    ['Telehealth', '/telehealth'],
                    ["Women's Health", '/womens-health'],
                    ["Men's Health", '/mens-health'],
                    ['IV Hydration', '/iv-hydration'],
                  ] as [string, string][]).map(([label, href]) => (
                    <li key={href}>
                      <Link href={href} className={styles.sideLink}>
                        <span>{label}</span>
                        <span className={styles.sideLinkArrow} aria-hidden="true">›</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className={`${styles.sideCard} ${styles.tagsCard}`}>
                  <h2 className={styles.sideTitle}>Topics</h2>
                  <div className={styles.tagsList}>
                    {post.tags.map((t) => (
                      <Link key={t} href={`/blog?tag=${encodeURIComponent(t)}`} className={styles.tagPill}>
                        {t}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </main>

      <BookingCTA
        heading="Ready to take the next step toward better health?"
        subtext="Our board-certified providers are here to help you reach your health goals. Same-week appointments available in Brandon, FL."
        showInsurance
      />
    </>
  );
}
