import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function get(context) {
  const collection2023 = await getCollection('2023')
  const posts = [...collection2023]
  return rss({
    title: 'charlee',
    description: 'posts',
    site: context.site,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/post/${post.slug}/`,
    })),
  })
}
