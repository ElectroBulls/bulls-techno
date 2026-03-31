import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import NavLink from '@/components/NavLink';
import { content } from '@/config/content';
import { getSanityPost } from '@/sanity/client';

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static params from content.ts fallback data
export async function generateStaticParams() {
  return content.blogs.posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = content.blogs.posts.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

// Simple Markdown-to-HTML converter for basic formatting
function renderContent(raw: string) {
  const lines = raw.split('\n');
  const html: string[] = [];
  let inParagraph = false;

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith('## ')) {
      if (inParagraph) { html.push('</p>'); inParagraph = false; }
      html.push(`<h2 class="font-heading font-bold text-2xl text-bulls-white mt-10 mb-4">${trimmed.slice(3)}</h2>`);
    } else if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
      // Bold standalone line treated as sub-heading
      if (inParagraph) { html.push('</p>'); inParagraph = false; }
      html.push(`<h3 class="font-heading font-semibold text-xl text-bulls-blue mt-7 mb-3">${trimmed.slice(2, -2)}</h3>`);
    } else if (trimmed === '---') {
      if (inParagraph) { html.push('</p>'); inParagraph = false; }
      html.push('<hr class="border-white/10 my-10" />');
    } else if (trimmed === '') {
      if (inParagraph) { html.push('</p>'); inParagraph = false; }
    } else {
      // Replace inline **bold**
      const parsed = trimmed.replace(/\*\*(.*?)\*\*/g, '<strong class="text-bulls-white font-semibold">$1</strong>');
      if (!inParagraph) {
        html.push('<p class="font-body text-white/70 leading-relaxed text-base mb-4">');
        inParagraph = true;
      }
      html.push(parsed + ' ');
    }
  }
  if (inParagraph) html.push('</p>');
  return html.join('');
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  // Try Sanity first; fall back to content.ts
  let post = await getSanityPost(slug);

  if (!post) {
    const fallback = content.blogs.posts.find((p) => p.slug === slug);
    if (!fallback) notFound();
    post = {
      title: fallback.title,
      slug: fallback.slug,
      excerpt: fallback.excerpt,
      content: fallback.content,
      publishedAt: fallback.publishedAt,
    };
  }

  const serviceItem = content.services.items.find(
    (s) => content.blogs.posts.find((p) => p.slug === slug)?.service === s.id
  );

  return (
    <>
      {/* ── Hero ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-bulls-card via-bulls-black to-bulls-black">
        <div className="max-w-3xl mx-auto">
          <NavLink
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-sm font-body text-white/50 hover:text-bulls-blue transition-colors duration-200 mb-6 group"
          >
            <svg
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Insights
          </NavLink>

          {serviceItem && (
            <span className="inline-block font-body text-xs text-bulls-blue bg-bulls-blue/10 border border-bulls-blue/20 rounded-full px-3 py-1 mb-4">
              {serviceItem.title}
            </span>
          )}

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-bulls-white mb-4 leading-tight">
            {post.title}
          </h1>

          <time
            dateTime={post.publishedAt}
            className="font-body text-sm text-white/40"
          >
            {new Date(post.publishedAt).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
        </div>
      </section>

      {/* ── Article Body ── */}
      <article className="py-12 px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
        />
      </article>

      {/* ── Post CTA ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center bg-bulls-card border border-white/[0.08] rounded-card p-10 shimmer-card">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-bulls-white mb-4">
            Ready to build your Revenue Engine?
          </h2>
          <p className="font-body text-white/60 mb-8 text-base">
            Book a free strategy call and let&apos;s design your system together.
          </p>
          <a
            href={content.site.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-bulls-blue hover:bg-bulls-blue-hover text-bulls-black font-body font-bold text-base px-8 py-4 rounded-btn transition-colors duration-200"
          >
            Book a Free Strategy Call
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
