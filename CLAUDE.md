@AGENTS.md
# CLAUDE.md — Bulls Techno Website

## Project overview
This is the official website for BULLS TECHNO, a Revenue Engine Consulting firm
owned by parent company Capital Force Solutions.
Stack: Next.js 14 (App Router) + TypeScript + Tailwind CSS + Sanity CMS + EmailJS

## Brand system
- Primary black: #0a0a0a
- Brand blue: #66b6e7
- Blue hover: #3a8abf
- Card dark: #1a1f2e
- Light bg: #f0f4f8
- Body text: #2d3748
- White: #ffffff
- Accent red: #c5231e
- Process blue: #2596be
- Heading font: Syne (Google Fonts)
- Body font: Inter (Google Fonts)

## File structure rules
- All site-wide text content lives in /src/config/content.ts
- All colors and tokens live in tailwind.config.ts
- All page components live in /src/app/[page]/page.tsx
- All reusable components live in /src/components/
- All images go in /public/images/
- Blog schema and queries live in /src/sanity/

## Coding rules
- Never hardcode colors — always use Tailwind config tokens
- Never hardcode text strings in components — import from content.ts
- Every component must be fully responsive (mobile-first)
- Use next/image for ALL images (for performance)
- Use next/font for Syne and Inter
- All animations must respect prefers-reduced-motion
- Never use any UI component library (shadcn, MUI etc.) — custom only
- Never use pages router — app router only
- Never create separate CSS files — Tailwind only
- Never break the config-driven architecture

## Contact details
- WhatsApp: +918767733007
- Email 1: info@BullsTechno.com
- Email 2: Shailendra@BullsTechno.com
- LinkedIn: https://www.linkedin.com/in/shailendra-earth/
- Calendly: https://calendly.com/shailendra_earth
- Contact form sends to: Shailendra_Earth@yahoo.com
- Phone display: +91 87677 33007

## Pages required
Home, About, Services, Blogs, Contact, Privacy Policy

## Navigation
Main menu: Home, About, Services, Blogs, Contact
"Connect Now" dropdown: Email, LinkedIn, WhatsApp, Book A Call
Location badge: Remote & Global

## Footer
- Copyright: Bulls Techno
- Bottom line centered: "Powered by Capital Force Solutions" in color #c5231e
- Capital Force Solutions is the parent company of Bulls Techno
- This line must appear on every page at the very bottom

## Services (7 total)
1. Start-up Revenue Engine
2. Business Revenue Engine
3. Influencer Revenue Engine
4. E-Commerce Revenue Engine
5. Coaches Revenue Engine
6. Consultant Revenue Engine
7. Non-Profit Revenue Engine

## About page — founder details
- Founder: Shailendra
- Designation: Thrive Consultant
- Certifications: Harvard, NLP, British Council, Google, Meta, HubSpot, Salesforce
- Background: Human Resources in the UK at one of the world's largest banks
- Experience: Multiple MNCs, award-winning performance
- Quote theme: Every problem has a solution when approached correctly.
  Revenue generation is no different.
- Values: Relationships and results above everything else
- No fabricated details — only what is listed here

## Design rules
- Overall aesthetic: Authoritative and Corporate
- Glitter effect: subtle floating particles (brand blue #66b6e7 and white,
  very sparse, very slow, max 40 particles, elegant not flashy)
- Shimmer: left-to-right shine sweep on hover on cards and key headings
- Hover glow: soft blue glow on all cards (box-shadow, low opacity)
- All cards and image containers: smooth rounded corners
- Sticky header
- Smooth scroll
- All transitions: 0.2s ease
- Image slider on homepage: 3 slides, 4-second auto-advance, crossfade,
  centered "Revenue Engine" text overlay in semi-transparent white

## Performance targets
- 95+ Lighthouse scores mobile and desktop
- Core Web Vitals: all green
- WCAG AA accessibility minimum
- Fully mobile-first responsive
- next/image for all images
- next/font for all fonts

## Environment variables needed
NEXT_PUBLIC_EMAILJS_SERVICE_ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET