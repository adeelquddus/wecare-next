import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/sections/Hero';
import BookingCTA from '@/components/sections/BookingCTA';
import Card from '@/components/ui/Card';
import { getLatestPosts } from '@/lib/wix';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Health & Wellness Blog — WeCare Wellness Clinic Brandon FL',
  description:
    'Evidence-based health tips, wellness advice & medical insights from WeCare Wellness Clinic in Brandon, FL. GLP-1, primary care, telehealth, women\'s health & more.',
  keywords: [
    'health blog Brandon FL',
    'wellness tips Brandon FL',
    'medical weight loss blog',
    'GLP-1 semaglutide tips',
    'primary care health tips Brandon FL',
    'telehealth Florida advice',
    "women's health tips Florida",
    "men's health tips Brandon",
    'IV hydration benefits',
    'hormone therapy information',
    'HIV PrEP information Florida',
  ],
  alternates: { canonical: 'https://www.wecarewellnessclinic.com/blog' },
  openGraph: {
    title: 'Health & Wellness Blog — WeCare Wellness Clinic',
    description: 'Expert health tips, wellness advice, and medical insights from our board-certified team in Brandon, FL.',
    url: 'https://www.wecarewellnessclinic.com/blog',
    type: 'website',
  },
};

// Revalidate every hour
export const revalidate = 3600;

// Fallback posts (shown when Wix is not yet connected)
const FALLBACK_POSTS = [
  {
    id: '1',
    slug: 'semaglutide-what-to-expect',
    title: 'Semaglutide for Weight Loss: What to Expect in Your First 3 Months',
    excerpt:
      'GLP-1 medications like Semaglutide are changing how we approach medical weight loss. Here\'s what our patients typically experience in the first 12 weeks.',
    publishedDate: 'April 15, 2025',
    tags: ['Weight Loss', 'GLP-1', 'Semaglutide'],
    readingTime: 6,
  },
  {
    id: '2',
    slug: 'telehealth-vs-in-person',
    title: 'Telehealth vs. In-Person Visits: When to Choose Each',
    excerpt:
      'Video visits are great — but not for everything. We break down which conditions are ideal for telehealth and which ones really need an in-office appointment.',
    publishedDate: 'April 8, 2025',
    tags: ['Telehealth', 'Primary Care'],
    readingTime: 5,
  },
  {
    id: '3',
    slug: 'annual-physical-what-included',
    title: 'What\'s Included in Your Annual Physical — and Why It Matters',
    excerpt:
      'A yearly wellness visit is more than just a checkup. Learn what we screen for and why catching conditions early can make a life-changing difference.',
    publishedDate: 'March 28, 2025',
    tags: ['Prevention', 'Primary Care'],
    readingTime: 4,
  },
  {
    id: '4',
    slug: 'tirzepatide-vs-semaglutide',
    title: 'Tirzepatide vs. Semaglutide: Which Weight Loss Medication is Right for You?',
    excerpt:
      'Both are GLP-1-based medications showing remarkable results. We compare Tirzepatide (Mounjaro/Zepbound) and Semaglutide (Ozempic/Wegovy) to help you have a better conversation with your provider.',
    publishedDate: 'March 18, 2025',
    tags: ['Weight Loss', 'Tirzepatide', 'GLP-1'],
    readingTime: 7,
  },
  {
    id: '5',
    slug: 'hormone-therapy-women-faq',
    title: 'Hormone Replacement Therapy for Women: Common Questions Answered',
    excerpt:
      'HRT can relieve menopause symptoms and protect long-term bone health. We answer the most common questions we hear from patients about safety, types, and what to expect.',
    publishedDate: 'March 5, 2025',
    tags: ["Women's Health", 'HRT', 'Menopause'],
    readingTime: 8,
  },
  {
    id: '6',
    slug: 'insurance-accepted-guide',
    title: 'Understanding Your Insurance at WeCare Wellness',
    excerpt:
      'Insurance can be confusing. We break down how we work with Aetna, United Healthcare, Medicare, BCBS, and MultiPlan — and what to do if you\'re uninsured.',
    publishedDate: 'February 20, 2025',
    tags: ['Insurance', 'Patient Resources'],
    readingTime: 4,
  },
];

export default async function BlogPage() {
  // Attempt to fetch from Wix, fall back to static posts
  let posts = await getLatestPosts(12);
  if (!posts.length) posts = FALLBACK_POSTS as typeof posts;

  return (
    <>
      <Hero
        headline="Health insights from our team"
        subtext="Evidence-based health tips, wellness advice, and clinic updates from the WeCare Wellness providers."
        ctaLabel="Book Appointment"
        ctaHref="/booking"
        showPhone={false}
        variant="gradient"
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {posts.map((post, i) => (
              <article key={post.id} className={i === 0 ? styles.featured : ''}>
                <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
                  <Card padding="lg" className={styles.postCard}>
                    {post.coverImage && (
                      <div className={styles.coverWrap}>
                        <Image
                          src={post.coverImage}
                          alt={post.title ?? 'Blog post cover image'}
                          fill
                          className={styles.cover}
                          priority={i < 3}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    )}

                    <div className={styles.postBody}>
                      {post.tags && post.tags.length > 0 && (
                        <div className={styles.tags} aria-label="Categories">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className={styles.tag}>{tag}</span>
                          ))}
                        </div>
                      )}

                      <h2 className={`ds-h3 ${styles.postTitle}`}>
                        {post.title}
                      </h2>

                      <p className={`ds-body ${styles.postExcerpt}`}>
                        {post.excerpt}
                      </p>

                      <div className={styles.postMeta}>
                        <time className={styles.date}>{post.publishedDate}</time>
                        {post.readingTime && (
                          <span className={styles.readTime}>{post.readingTime} min read</span>
                        )}
                      </div>
                    </div>
                  </Card>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA
        heading="Have a health question?"
        subtext="Our providers are here to help. Book a consultation — in-person or via Telehealth."
      />
    </>
  );
}
