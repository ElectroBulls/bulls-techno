// Sanity CMS client
// Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET in .env.local
// Blog posts will be fetched from Sanity when configured; falls back to content.ts otherwise.

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';

export interface SanityPost {
  title:       string;
  slug:        string;
  excerpt:     string;
  content:     string;
  publishedAt: string;
}

export async function getSanityPost(slug: string): Promise<SanityPost | null> {
  if (!projectId) return null;

  try {
    const { createClient } = await import('@sanity/client');
    const client = createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: true,
    });

    const query = `*[_type == "post" && slug.current == $slug][0]{
      title,
      "slug": slug.current,
      excerpt,
      "content": body,
      publishedAt
    }`;

    return await client.fetch<SanityPost | null>(query, { slug });
  } catch {
    return null;
  }
}

export async function getAllSanityPosts(): Promise<SanityPost[]> {
  if (!projectId) return [];

  try {
    const { createClient } = await import('@sanity/client');
    const client = createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: true,
    });

    const query = `*[_type == "post"] | order(publishedAt desc) {
      title,
      "slug": slug.current,
      excerpt,
      publishedAt
    }`;

    return await client.fetch<SanityPost[]>(query);
  } catch {
    return [];
  }
}
