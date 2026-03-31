import type { Metadata } from 'next';
import { content } from '@/config/content';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Seven specialised Revenue Engine services for start-ups, businesses, influencers, e-commerce, coaches, consultants, and non-profits.',
};

const { services } = content;

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-bulls-card via-bulls-black to-bulls-black" style={{ paddingTop: 'var(--header-height)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-bulls-white mb-5">
            {services.hero.heading}
          </h1>
          <p className="font-body text-lg text-white/60 max-w-2xl mx-auto">
            {services.hero.subheading}
          </p>
        </div>
      </section>

      {/* ── Service Sections ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        {services.items.map((service, idx) => (
          <section
            key={service.id}
            id={service.id}
            className={`shimmer-card card-glow border border-white/[0.08] rounded-card p-8 sm:p-10 scroll-mt-20 ${
              idx % 2 === 0 ? 'bg-bulls-card' : 'bg-bulls-card/60'
            }`}
          >
            {/* Service header */}
            <div className="mb-6">
              <span className="font-body text-xs text-bulls-blue/70 uppercase tracking-widest font-semibold">
                Service {String(idx + 1).padStart(2, '0')}
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-bulls-white mt-2 mb-2">
                {service.title}
              </h2>
              <p className="font-heading text-lg sm:text-xl text-bulls-blue font-semibold">
                {service.tagline}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Description */}
              <div className="lg:col-span-2 space-y-4">
                {service.description.map((para, pIdx) => (
                  <p key={pIdx} className="font-body text-white/70 leading-relaxed text-base">
                    {para}
                  </p>
                ))}
              </div>

              {/* Features + CTA */}
              <div>
                <div className="bg-bulls-black/40 border border-white/[0.07] rounded-card p-6 mb-5">
                  <p className="font-body text-xs text-white/40 uppercase tracking-widest font-semibold mb-4">
                    What&apos;s Included
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <svg
                          className="w-4 h-4 text-bulls-blue mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-body text-sm text-white/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={service.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-bulls-blue hover:bg-bulls-blue-hover text-bulls-black font-body font-bold text-sm px-6 py-3 rounded-btn transition-colors duration-200"
                >
                  {service.cta}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ── Bottom CTA ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-bulls-card via-bulls-black to-bulls-card">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-bulls-white mb-5">
            Not sure which service fits?
          </h2>
          <p className="font-body text-white/60 mb-8 text-base leading-relaxed">
            Book a free 30-minute strategy call. We will help you identify exactly which Revenue Engine programme is right for your stage and goals.
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
