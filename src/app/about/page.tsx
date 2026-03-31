import type { Metadata } from 'next';
import ImageWithFallback from '@/components/ImageWithFallback';
import { content } from '@/config/content';

export const metadata: Metadata = {
  title: 'About',
  description: `Meet Shailendra, Thrive Consultant and founder of Bulls Techno — Revenue Engine Consulting.`,
};

const { about } = content;

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-bulls-card via-bulls-black to-bulls-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-bulls-white mb-5">
            {about.hero.heading}
          </h1>
          <p className="font-body text-lg text-white/60 max-w-2xl mx-auto">
            {about.hero.subheading}
          </p>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="shimmer-card card-glow bg-bulls-card border border-white/[0.08] rounded-card p-8">
            <div className="w-10 h-0.5 bg-bulls-blue mb-5" />
            <h2 className="font-heading font-bold text-2xl text-bulls-white mb-4">
              {about.vision.heading}
            </h2>
            <p className="font-body text-white/65 leading-relaxed text-sm sm:text-base">
              {about.vision.body}
            </p>
          </div>

          {/* Mission */}
          <div className="shimmer-card card-glow bg-bulls-card border border-white/[0.08] rounded-card p-8">
            <div className="w-10 h-0.5 bg-bulls-process mb-5" />
            <h2 className="font-heading font-bold text-2xl text-bulls-white mb-4">
              {about.mission.heading}
            </h2>
            <p className="font-body text-white/65 leading-relaxed text-sm sm:text-base">
              {about.mission.body}
            </p>
          </div>
        </div>
      </section>

      {/* ── Founder ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bulls-card/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Profile image */}
            <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-card overflow-hidden border border-white/10 bg-bulls-card shimmer-card">
                <ImageWithFallback
                  src={about.founder.imagePath}
                  alt={about.founder.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 224px, 256px"
                />
              </div>
              <div className="mt-5 w-56 sm:w-64 text-center">
                <p className="font-heading font-bold text-2xl text-bulls-white">
                  {about.founder.name}
                </p>
                <p className="font-heading font-bold text-xl text-bulls-blue mt-1">
                  {about.founder.designation}
                </p>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-3">
              <p className="font-body text-white/70 leading-relaxed text-base mb-8">
                {about.founder.bio}
              </p>

              {/* Pull quote */}
              <blockquote className="border-l-4 border-bulls-blue pl-6 my-8">
                <p className="font-heading text-xl sm:text-2xl text-bulls-white italic leading-snug">
                  &ldquo;{about.founder.quote}&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-bulls-white mb-3">
            International Certifications &amp; Expertise
          </h2>
          <p className="font-body text-white/55 text-sm">
            Knowledge validated by the world&apos;s most respected institutions.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {about.founder.certifications.map((cert) => (
            <div
              key={cert.name}
              className="shimmer-card card-glow bg-bulls-card border border-white/[0.08] rounded-card p-5 text-center"
            >
              <p className="font-heading font-bold text-lg text-bulls-blue mb-1">
                {cert.name}
              </p>
              <p className="font-body text-xs text-white/50 leading-relaxed">
                {cert.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bulls-card/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-bulls-white text-center mb-12">
            {about.values.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {about.values.items.map((value) => (
              <div
                key={value.title}
                className="shimmer-card card-glow bg-bulls-card border border-white/[0.08] rounded-card p-8"
              >
                <div className="w-8 h-0.5 bg-bulls-blue mb-5" />
                <h3 className="font-heading font-semibold text-xl text-bulls-white mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-sm text-white/60 leading-relaxed">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-bulls-white mb-8">
            {about.cta.heading}
          </h2>
          <a
            href={about.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-bulls-blue hover:bg-bulls-blue-hover text-bulls-black font-body font-bold text-base px-8 py-4 rounded-btn transition-colors duration-200"
          >
            {about.cta.button}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
