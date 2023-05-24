import { getCollection } from 'astro:content'
const Posts2023 = await getCollection('2023')
export const allPosts = [Posts2023]
