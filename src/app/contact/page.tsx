import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { content } from '@/config/content';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Bulls Techno. Book a free strategy call or send us a message.',
};

const { contact, site } = content;

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-bulls-card via-bulls-black to-bulls-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-bulls-white mb-5">
            {contact.hero.heading}
          </h1>
          <p className="font-body text-lg text-white/60 max-w-xl mx-auto">
            {contact.hero.subheading}
          </p>
        </div>
      </section>

      {/* ── Contact section ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form — larger column */}
          <div className="lg:col-span-3 bg-bulls-card border border-white/[0.08] rounded-card p-8">
            <h2 className="font-heading font-bold text-2xl text-bulls-white mb-6">
              Send a Message
            </h2>
            <ContactForm />
          </div>

          {/* Contact card */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-bulls-card border border-white/[0.08] rounded-card p-8">
              <h2 className="font-heading font-bold text-xl text-bulls-white mb-6">
                {contact.card.heading}
              </h2>

              <div className="space-y-5">
                {/* Phone */}
                <div>
                  <p className="font-body text-xs text-white/40 uppercase tracking-widest mb-1">Phone</p>
                  <a
                    href={`tel:${contact.card.phone.replace(/\s/g, '')}`}
                    className="font-body text-sm text-white/80 hover:text-bulls-blue transition-colors duration-200"
                  >
                    {contact.card.phone}
                  </a>
                </div>

                {/* Email */}
                <div>
                  <p className="font-body text-xs text-white/40 uppercase tracking-widest mb-1">Email</p>
                  <a
                    href={`mailto:${contact.card.email1}`}
                    className="font-body text-sm text-white/80 hover:text-bulls-blue transition-colors duration-200 block"
                  >
                    {contact.card.email1}
                  </a>
                  <a
                    href={`mailto:${contact.card.email2}`}
                    className="font-body text-sm text-white/80 hover:text-bulls-blue transition-colors duration-200 block mt-0.5"
                  >
                    {contact.card.email2}
                  </a>
                </div>

                {/* Location */}
                <div>
                  <p className="font-body text-xs text-white/40 uppercase tracking-widest mb-1">Location</p>
                  <p className="font-body text-sm text-white/80">{contact.card.location}</p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-8 space-y-3">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 border border-bulls-blue/40 hover:border-bulls-blue text-bulls-blue hover:bg-bulls-blue/5 font-body font-semibold text-sm py-2.5 px-4 rounded-btn transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>

                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 border border-white/15 hover:border-bulls-blue/40 text-white/70 hover:text-bulls-blue font-body font-semibold text-sm py-2.5 px-4 rounded-btn transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>

                <a
                  href={site.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-bulls-blue hover:bg-bulls-blue-hover text-bulls-black font-body font-bold text-sm py-2.5 px-4 rounded-btn transition-colors duration-200"
                >
                  Book A Call
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
