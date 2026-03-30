'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  born: number;
}

const COLORS = ['#66b6e7', '#ffffff', '#66b6e7', '#aad4f0', '#ffffff'];
const LIFE = 600; // ms
const MAX = 12;

export default function CursorGlitter() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const spawn = (x: number, y: number) => {
      // Enforce max cap — remove oldest first
      while (particles.length >= MAX) particles.shift();

      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 1.6,
        vy: -(Math.random() * 1.8 + 0.6), // always floats upward
        radius: Math.random() * 1.5 + 2,  // 2–3.5px radius → 4–7px diameter
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        born: performance.now(),
      });
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        const elapsed = now - p.born;
        if (elapsed >= LIFE) { particles.splice(i, 1); continue; }

        const alpha = (1 - elapsed / LIFE) * 0.9; // ease-out fade
        p.x += p.vx;
        p.y += p.vy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    // Throttle helper
    let last = 0;
    const throttle = (fn: (x: number, y: number) => void, x: number, y: number, ms: number) => {
      const now = performance.now();
      if (now - last < ms) return;
      last = now;
      fn(x, y);
    };

    const onMove = (e: MouseEvent) => throttle(spawn, e.clientX, e.clientY, 35);
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) throttle(spawn, t.clientX, t.clientY, 50);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('touchstart', onTouch, { passive: true });
    window.addEventListener('touchmove', onTouch, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchstart', onTouch);
      window.removeEventListener('touchmove', onTouch);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50"
    />
  );
}
