import { getCollections, getPannos } from '@/lib/supabase'

export default async function sitemap() {
  const [collections, pannos] = await Promise.all([
    getCollections(),
    getPannos(),
  ])

  const staticPages = [
    { url: 'https://mysak.com.ua', lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: 'https://mysak.com.ua/delivery', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://mysak.com.ua/payment', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://mysak.com.ua/returns', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://mysak.com.ua/contacts', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://mysak.com.ua/privacy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
  ]

  const tilePages = collections.map(c => ({
    url: `https://mysak.com.ua/tile/${c.id}`,
    lastModified: new Date(c.updated_at),
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  const pannoPages = pannos.map(p => ({
    url: `https://mysak.com.ua/panno/${p.id}`,
    lastModified: new Date(p.updated_at),
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  return [...staticPages, ...tilePages, ...pannoPages]
}
