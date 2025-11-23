import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('topics');
  return rss({
    title: 'Demystifying the modern js toolchain workshop',
    description: 'An introduction to javascript build tools using vite',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `/topics/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
