import Link from 'next/link';
import { content } from '@/config/content';

const { footer, site } = content;

export default function Footer() {
  return (
    <footer className="bg-bulls-black border-t border-white/[0.08] font-body">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand column */}
          <div>
            <p className="font-heading font-bold text-xl text-bulls-white mb-3">Bulls Techno</p>
            <p className="text-sm text-white/60 leading-relaxed">{footer.description}</p>
            <div className="mt-4 flex items-center gap-1.5 text-xs text-bulls-blue/70">
              <span className="w-1.5 h-1.5 rounded-full bg-bulls-blue" />
              {site.location}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-bulls-blue transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a
                  href={`tel:${footer.contactColumn.phone.replace(/\s/g, '')}`}
                  className="hover:text-bulls-blue transition-colors duration-200"
                >
                  {footer.contactColumn.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${footer.contactColumn.email}`}
                  className="hover:text-bulls-blue transition-colors duration-200"
                >
                  {footer.contactColumn.email}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-bulls-blue transition-colors duration-200"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-bulls-blue transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={site.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-bulls-blue transition-colors duration-200"
                >
                  Book A Call
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40">{footer.copyright}</p>
          <p className="text-xs text-white/40">
            <Link href="/privacy" className="hover:text-bulls-blue transition-colors duration-200">
              Privacy Policy
            </Link>
          </p>
        </div>
        {/* Powered by — centered, every page, accent red */}
        <div className="pb-4 text-center">
          <p
            className="text-xs font-body font-medium"
            style={{ color: '#c5231e' }}
          >
            {footer.poweredBy}
          </p>
        </div>
      </div>
    </footer>
  );
}
