import type { Metadata } from 'next';
import Link from 'next/link';
import { content } from '@/config/content';

export const metadata: Metadata = {
  title: 'Insights & Blog',
  description:
    'Revenue strategy insights, growth frameworks, and practical thinking from Bulls Techno.',
};

const { blogs } = content;

export default function BlogsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-bulls-card via-bulls-black to-bulls-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-bulls-white mb-5">
            {blogs.hero.heading}
          </h1>
          <p className="font-body text-lg text-white/60 max-w-2xl mx-auto">
            {blogs.hero.subheading}
          </p>
        </div>
      </section>

      {/* ── Blog Grid ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.posts.map((post) => {
            const serviceLabel = content.services.items.find(
              (s) => s.id === post.service
            )?.title ?? post.service;

            return (
              <article
                key={post.slug}
                className="shimmer-card card-glow bg-bulls-card border border-white/[0.08] rounded-card p-7 flex flex-col"
              >
                {/* Service tag */}
                <span className="inline-block font-body text-xs text-bulls-blue bg-bulls-blue/10 border border-bulls-blue/20 rounded-full px-3 py-1 mb-4 w-fit">
                  {serviceLabel}
                </span>

                {/* Date */}
                <time
                  dateTime={post.publishedAt}
                  className="font-body text-xs text-white/35 mb-3 block"
                >
                  {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>

                {/* Title */}
                <h2 className="font-heading font-bold text-lg text-bulls-white mb-3 leading-snug flex-1">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="font-body text-sm text-white/55 leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <Link
                  href={`/blogs/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-body font-medium text-bulls-blue hover:text-bulls-blue-hover transition-colors duration-200 group mt-auto"
                >
                  Read More
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
