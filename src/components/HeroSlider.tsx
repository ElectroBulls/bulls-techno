'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { content } from '@/config/content';

const { slides, overlayText, overlaySubtext } = content.home.hero;

const SLIDE_INTERVAL = 4000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [imgErrors, setImgErrors] = useState<boolean[]>(
    () => new Array(slides.length).fill(false)
  );

  const advance = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(advance, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, [advance]);

  const handleImgError = (idx: number) => {
    setImgErrors((prev) => {
      const next = [...prev];
      next[idx] = true;
      return next;
    });
  };

  // Gradient fallbacks when images are not yet uploaded
  const gradients = [
    'linear-gradient(135deg, #0a0a0a 0%, #1a1f2e 50%, #2596be 100%)',
    'linear-gradient(135deg, #1a1f2e 0%, #0a0a0a 50%, #3a8abf 100%)',
    'linear-gradient(135deg, #3a8abf 0%, #1a1f2e 50%, #0a0a0a 100%)',
  ];

  return (
    <div
      className="relative w-full h-[85vh] min-h-[480px] overflow-hidden rounded-none"
      role="region"
      aria-label="Hero image slideshow"
    >
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[800ms] ease-in-out ${
            idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          aria-hidden={idx !== current}
        >
          {/* Image or gradient fallback */}
          {!imgErrors[idx] ? (
            <Image
              src={slide.imagePath}
              alt={slide.altText}
              fill
              priority={idx === 0}
              className="object-cover"
              onError={() => handleImgError(idx)}
              sizes="100vw"
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{ background: gradients[idx] }}
              aria-label={slide.altText}
            />
          )}

          {/* Dark overlay for text legibility */}
          <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
      ))}

      {/* Text overlay — always on top */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-7xl text-white/90 tracking-tight drop-shadow-2xl">
          {overlayText}
        </h1>
        <p className="mt-4 font-body text-base sm:text-lg text-white/60 tracking-widest uppercase">
          {overlaySubtext}
        </p>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2" role="tablist" aria-label="Slide indicators">
        {slides.map((_, idx) => (
          <button
            key={idx}
            role="tab"
            aria-selected={idx === current}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === current
                ? 'w-8 bg-bulls-blue'
                : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
