import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BookingCTA from '@/components/sections/BookingCTA';
import Button from '@/components/ui/Button';
import { getPostBySlug, getLatestPosts } from '@/lib/wix';
import styles from './page.module.css';

export const revalidate = 3600;

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: 'Post not found' };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedDate,
      images: post.coverImage ? [{ url: post.coverImage, width: 1200, height: 630 }] : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) notFound();

  return (
    <>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <ol className={styles.breadcrumbList}>
          <li><Link href="/">Home</Link></li>
          <li aria-hidden="true" className={styles.sep}>›</li>
          <li><Link href="/blog">Blog</Link></li>
          <li aria-hidden="true" className={styles.sep}>›</li>
          <li aria-current="page">{post.title}</li>
        </ol>
      </nav>

      <article className={styles.article}>
        <div className="container">
          <div className={styles.grid}>
            {/* Main content */}
            <div className={styles.content}>
              {post.tags && post.tags.length > 0 && (
                <div className={styles.tags}>
                  {post.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              )}

              <h1 className={`ds-h1 ${styles.title}`}>{post.title}</h1>

              <div className={styles.meta}>
                <time className={styles.date}>{post.publishedDate}</time>
                {post.readingTime && (
                  <span className={styles.readTime}>{post.readingTime} min read</span>
                )}
              </div>

              {post.coverImage && (
                <div className={styles.coverWrap}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className={styles.cover}
                    loading="eager"
                  />
                </div>
              )}

              {/* Blog content rendered from Wix rich text */}
              <div
                className={styles.body}
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
              />

              <div className={styles.disclaimer}>
                <p>
                  <strong>Medical disclaimer:</strong> This article is for informational purposes only
                  and does not constitute medical advice. Please consult a qualified healthcare
                  provider for medical guidance specific to your situation.
                </p>
              </div>

              <div className={styles.cta}>
                <p className={styles.ctaText}>Have questions about your health?</p>
                <Button href="/booking" variant="primary" size="lg">
                  Book an appointment
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar} aria-label="Related content">
              <div className={styles.sideCard}>
                <h2 className={styles.sideTitle}>Book an appointment</h2>
                <p className={styles.sideSub}>
                  Same-week appointments available in-person or via Telehealth.
                </p>
                <Button href="/booking" variant="primary" fullWidth>
                  Book Appointment
                </Button>
              </div>

              <div className={styles.sideCard}>
                <h2 className={styles.sideTitle}>Our services</h2>
                <ul className={styles.sideLinks}>
                  {[
                    ['Primary Care', '/primary-care'],
                    ['Medical Weight Loss', '/medical-weight-loss'],
                    ['Telehealth', '/telehealth'],
                    ["Women's Health", '/womens-health'],
                    ["Men's Health", '/mens-health'],
                  ].map(([label, href]) => (
                    <li key={href}>
                      <Link href={href} className={styles.sideLink}>{label} →</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <BookingCTA
        heading="Ready to take the next step?"
        subtext="Our providers are here to help you reach your health goals."
        showInsurance
      />
    </>
  );
}
