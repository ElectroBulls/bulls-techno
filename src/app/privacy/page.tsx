import type { Metadata } from 'next';
import { content } from '@/config/content';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Bulls Techno Privacy Policy — how we collect, use, and protect your data.',
};

const { privacy } = content;

export default function PrivacyPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-[162px] pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-bulls-card via-bulls-black to-bulls-black">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-bulls-white mb-3">
            {privacy.hero.heading}
          </h1>
          <p className="font-body text-sm text-white/40">
            Last updated: {privacy.hero.lastUpdated}
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="font-body text-white/70 leading-relaxed text-base mb-10">
            {privacy.intro}
          </p>

          <div className="space-y-8">
            {privacy.sections.map((section) => (
              <div
                key={section.heading}
                className="border-l-2 border-bulls-blue/30 pl-6"
              >
                <h2 className="font-heading font-bold text-xl text-bulls-white mb-3">
                  {section.heading}
                </h2>
                <p className="font-body text-white/65 leading-relaxed text-base">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
