# Bulls Techno — Customization Cheat Sheet

Everything on the site can be changed without touching component code.
**The only file you need to edit for content changes is: `/src/config/content.ts`**
**The only file you need to edit for color/font changes is: `/src/app/globals.css`**

---

## Content Changes → `/src/config/content.ts`

| What you want to change | Where in content.ts | Example key path |
|---|---|---|
| Site name | `site.name` | `"Bulls Techno"` |
| Site tagline | `site.tagline` | `"Revenue Engine Consulting"` |
| Site description (SEO) | `site.description` | Long paragraph |
| Phone number | `site.phone` | `"+91 87677 33007"` |
| WhatsApp link | `site.whatsapp` | `"https://wa.me/918767733007"` |
| LinkedIn URL | `site.linkedin` | `"https://www.linkedin.com/..."` |
| Calendly URL | `site.calendly` | `"https://calendly.com/..."` |
| Email addresses | `site.email1`, `site.email2` | |
| Contact form target email | `site.contactFormEmail` | `"Shailendra_Earth@yahoo.com"` |
| Navigation links | `nav.links` | Array of `{ label, href }` |
| "Connect Now" dropdown items | `nav.connectNow.items` | Array of `{ label, href }` |
| Location badge text | `nav.locationBadge` | `"Remote & Global"` |
| Hero slider images | `home.hero.slides[n].imagePath` | `"/images/slide1.jpg"` |
| Hero overlay text ("Revenue Engine") | `home.hero.overlayText` | |
| Hero overlay sub-text | `home.hero.overlaySubtext` | |
| "What We Do" heading | `home.whatWeDo.heading` | |
| "What We Do" body text | `home.whatWeDo.body` | |
| Services preview section heading | `home.servicesPreview.heading` | |
| "Why Bulls Techno" heading | `home.whyUs.heading` | |
| Trust pillars (3 columns) | `home.whyUs.pillars` | Array of `{ title, body }` |
| Bottom CTA heading | `home.cta.heading` | |
| Bottom CTA button text | `home.cta.button` | |
| About page hero heading | `about.hero.heading` | |
| Vision text | `about.vision.body` | |
| Mission text | `about.mission.body` | |
| Founder name | `about.founder.name` | `"Shailendra"` |
| Founder designation | `about.founder.designation` | `"Thrive Consultant"` |
| Founder profile image | `about.founder.imagePath` | `"/images/founder.jpg"` |
| Founder bio | `about.founder.bio` | Long paragraph |
| Founder pull quote | `about.founder.quote` | |
| Certifications list | `about.founder.certifications` | Array of `{ name, detail }` |
| Services hero heading | `services.hero.heading` | |
| Each service title | `services.items[n].title` | |
| Each service tagline | `services.items[n].tagline` | |
| Each service description | `services.items[n].description` | Array of paragraphs |
| Each service features | `services.items[n].features` | Array of strings |
| Blog listing hero heading | `blogs.hero.heading` | |
| Each blog title | `blogs.posts[n].title` | |
| Each blog excerpt | `blogs.posts[n].excerpt` | |
| Each blog full content | `blogs.posts[n].content` | Markdown string |
| Each blog publish date | `blogs.posts[n].publishedAt` | `"YYYY-MM-DD"` |
| Contact form labels | `contact.form.*Label` | |
| Contact form success message | `contact.form.successMessage` | |
| Footer description | `footer.description` | |
| Footer quick links | `footer.quickLinks` | Array of `{ label, href }` |
| Footer copyright | `footer.copyright` | |
| "Powered by" text | `footer.poweredBy` | `"Powered by Capital Force Solutions"` |
| Privacy policy intro | `privacy.intro` | |
| Privacy policy sections | `privacy.sections` | Array of `{ heading, body }` |

---

## Color Changes → `/src/app/globals.css`

Edit values inside the `@theme { }` block:

| Token name | Tailwind class prefix | Current value | Used for |
|---|---|---|---|
| `--color-bulls-black` | `bulls-black` | `#0a0a0a` | Site background, header |
| `--color-bulls-blue` | `bulls-blue` | `#66b6e7` | CTAs, links, accents |
| `--color-bulls-blue-hover` | `bulls-blue-hover` | `#3a8abf` | Hover state for blue elements |
| `--color-bulls-card` | `bulls-card` | `#1a1f2e` | Card backgrounds |
| `--color-bulls-light` | `bulls-light` | `#f0f4f8` | Light backgrounds (if used) |
| `--color-bulls-body` | `bulls-body` | `#2d3748` | Body text on light backgrounds |
| `--color-bulls-red` | `bulls-red` | `#c5231e` | Accent red, "Powered by" line |
| `--color-bulls-process` | `bulls-process` | `#2596be` | Process/highlight blue |

---

## Font Changes → `/src/app/layout.tsx` + `/src/app/globals.css`

1. In `layout.tsx`, change the `Syne` or `Inter` imports to any Google Font
2. Keep the same variable names (`--font-syne`, `--font-inter`) or update them
3. `globals.css` `@theme inline` maps `--font-heading` → `font-syne` variable

---

## Image Uploads

| Image | Path | Recommended size |
|---|---|---|
| Hero slide 1 | `/public/images/slide1.jpg` | 1920×1080px |
| Hero slide 2 | `/public/images/slide2.jpg` | 1920×1080px |
| Hero slide 3 | `/public/images/slide3.jpg` | 1920×1080px |
| Founder photo | `/public/images/founder.jpg` | 512×512px (square) |

Upload files to those paths and they will appear automatically.
The site uses gradient placeholders until real images are uploaded — no errors.

---

## EmailJS Setup (contact form)

1. Create a free account at https://www.emailjs.com/
2. Create a Service (Gmail, Outlook, etc.) → copy the **Service ID**
3. Create a Template that sends to `Shailendra_Earth@yahoo.com` → copy the **Template ID**
4. Copy your **Public Key** from Account → API Keys
5. Copy `.env.local.example` to `.env.local` and fill in the three values
6. The contact form will now send emails automatically

---

## Sanity CMS Setup (blog management)

1. Create a project at https://www.sanity.io/
2. Copy the **Project ID** and **Dataset** name
3. Add to `.env.local`: `NEXT_PUBLIC_SANITY_PROJECT_ID=xxx`
4. The blog schema is at `/src/sanity/schemas/post.ts` — use this in your Studio
5. Without Sanity configured, the site uses blog content from `content.ts` as fallback

---

## Deployment (Vercel)

1. Push to GitHub
2. Connect repo at https://vercel.com/
3. Add all environment variables from `.env.local` in Vercel dashboard
4. Deploy — the site builds automatically on every push to main
