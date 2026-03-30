// Sanity schema for blog posts
// Use this when setting up your Sanity Studio project.

export const postSchema = {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short summary shown on the blog listing page.',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text',
      rows: 30,
      description: 'Full post content. Supports **bold**, ## Heading 2, and --- horizontal rule.',
    },
    {
      name: 'service',
      title: 'Related Service',
      type: 'string',
      options: {
        list: [
          { title: 'Start-up Revenue Engine',    value: 'startup' },
          { title: 'Business Revenue Engine',    value: 'business' },
          { title: 'Influencer Revenue Engine',  value: 'influencer' },
          { title: 'E-Commerce Revenue Engine',  value: 'ecommerce' },
          { title: 'Coaches Revenue Engine',     value: 'coaches' },
          { title: 'Consultant Revenue Engine',  value: 'consultant' },
          { title: 'Non-Profit Revenue Engine',  value: 'nonprofit' },
        ],
      },
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'service' },
  },
};
