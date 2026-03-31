'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { content } from '@/config/content';
import NavLink from '@/components/NavLink';

const { nav } = content;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Close mobile menu on route change (simple: close on link click)
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-bulls-black border-b border-white/[0.06] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between" style={{ height: 'var(--header-height)' }}>
          {/* Logo */}
          <NavLink href="/" className="flex-shrink-0 flex items-center">
            {!logoError && content.site.logoPath ? (
              <Image
                src={content.site.logoPath}
                alt={content.site.name}
                width={560}
                height={140}
                priority
                onError={() => setLogoError(true)}
                className="h-[126px] w-auto object-contain"
              />
            ) : (
              <span className="font-heading font-bold text-3xl text-bulls-white tracking-tight hover:text-bulls-blue transition-colors duration-200">
                {nav.brand}
              </span>
            )}
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {nav.links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-lg font-body text-white/75 hover:text-bulls-blue transition-colors duration-200 rounded"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right side: location badge + Connect Now + hamburger */}
          <div className="flex items-center gap-3">
            {/* Location badge — desktop only */}
            <span className="hidden md:inline-flex items-center gap-1.5 text-base text-bulls-blue/80 bg-bulls-blue/10 border border-bulls-blue/20 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-bulls-blue animate-pulse" />
              {nav.locationBadge}
            </span>

            {/* Connect Now dropdown */}
            <div ref={dropdownRef} className="relative hidden lg:block">
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                className="flex items-center gap-1.5 bg-bulls-blue hover:bg-bulls-blue-hover text-bulls-black font-body font-semibold text-lg px-6 py-3 rounded transition-colors duration-200 cursor-pointer"
              >
                {nav.connectNow.label}
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-44 bg-bulls-card border border-white/10 rounded-card shadow-xl animate-slide-in z-50 overflow-hidden"
                  role="menu"
                >
                  {nav.connectNow.items.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      role="menuitem"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center px-4 py-2.5 text-sm text-white/80 hover:text-bulls-blue hover:bg-white/5 transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Hamburger */}
            <button
              className="lg:hidden p-2 text-white/75 hover:text-bulls-blue transition-colors duration-200 cursor-pointer"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-bulls-black animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {nav.links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="block px-3 py-2.5 text-sm font-body text-white/75 hover:text-bulls-blue hover:bg-white/5 rounded transition-colors duration-200"
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-3 border-t border-white/10 mt-3 space-y-1">
              <p className="px-3 text-xs text-white/40 uppercase tracking-wider font-body mb-2">
                Connect Now
              </p>
              {nav.connectNow.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  onClick={closeMobile}
                  className="block px-3 py-2.5 text-sm font-body text-bulls-blue hover:bg-white/5 rounded transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
