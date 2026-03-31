import type { Metadata } from 'next';
import HeroSlider from '@/components/HeroSlider';
import NavLink from '@/components/NavLink';
import { content } from '@/config/content';

export const metadata: Metadata = {
  title: 'Home',
  description: content.site.description,
};

const { home } = content;

export default function HomePage() {
  return (
    <>
      {/* ── Hero Slider ── */}
      <HeroSlider />

      {/* ── What We Do ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-bulls-white mb-6 animate-fade-up">
            {home.whatWeDo.heading}
          </h2>
          <p className="font-body text-base sm:text-lg text-white/70 leading-relaxed mb-8">
            {home.whatWeDo.body}
          </p>
          <NavLink
            href={home.whatWeDo.ctaHref}
            className="inline-flex items-center gap-2 bg-bulls-blue hover:bg-bulls-blue-hover text-bulls-black font-body font-semibold px-6 py-3 rounded-btn transition-colors duration-200"
          >
            {home.whatWeDo.cta}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NavLink>
        </div>
      </section>

      {/* ── Services Preview Grid ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bulls-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-bulls-white mb-3">
              {home.servicesPreview.heading}
            </h2>
            <p className="font-body text-white/60 text-base">
              {home.servicesPreview.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {content.services.items.map((service) => (
              <NavLink
                key={service.id}
                href="/services"
                className="shimmer-card card-glow bg-bulls-card border border-white/[0.08] rounded-card p-6 block group"
              >
                <div className="w-8 h-0.5 bg-bulls-blue mb-4 transition-all duration-200 group-hover:w-12" />
                <h3 className="font-heading font-semibold text-lg text-bulls-white mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-white/55 leading-relaxed">
                  {service.tagline}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs text-bulls-blue font-body font-medium">
                  Learn more
                  <svg className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Bulls Techno ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-bulls-white mb-12 text-center">
          {home.whyUs.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {home.whyUs.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="shimmer-card card-glow bg-bulls-card border border-white/[0.08] rounded-card p-8"
            >
              <div className="w-10 h-10 rounded-full bg-bulls-blue/15 flex items-center justify-center mb-5">
                <div className="w-4 h-4 rounded-full bg-bulls-blue" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-bulls-white mb-3">
                {pillar.title}
              </h3>
              <p className="font-body text-sm text-white/60 leading-relaxed">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-bulls-card via-bulls-black to-bulls-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-bulls-white mb-5">
            {home.cta.heading}
          </h2>
          <p className="font-body text-base sm:text-lg text-white/65 mb-10 leading-relaxed">
            {home.cta.body}
          </p>
          <a
            href={home.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-bulls-blue hover:bg-bulls-blue-hover text-bulls-black font-body font-bold text-base px-8 py-4 rounded-btn transition-colors duration-200 shadow-lg shadow-bulls-blue/20"
          >
            {home.cta.button}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
