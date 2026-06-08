import { getCollection, getCollections, getMainPhoto, formatPrice } from '@/lib/supabase'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const revalidate = 3600

// Генерація всіх статичних сторінок при білді
export async function generateStaticParams() {
  const collections = await getCollections()
  return collections.map(c => ({ id: String(c.id) }))
}

// SEO метадані для кожної сторінки
export async function generateMetadata({ params }) {
  const tile = await getCollection(Number(params.id))
  if (!tile) return {}

  const photo = getMainPhoto(tile)

  return {
    title: `${tile.name} ${tile.size} — MS Ceramica`,
    description: `Купити ${tile.name} гуртом. Розмір ${tile.size} см. Ціна ${formatPrice(tile.price_uah)} грн/м². Доставка по Україні.`,
    openGraph: {
      title: `${tile.name} — MS Ceramica`,
      images: photo ? [{ url: photo, width: 800, height: 1000 }] : [],
    },
  }
}

export default async function TilePage({ params }) {
  const tile = await getCollection(Number(params.id))
  if (!tile || tile.is_panno) notFound()

  const photos = tile.collection_photos
    ? [...tile.collection_photos].sort((a, b) => a.sort_order - b.sort_order)
    : []
  const mainPhoto = photos[0]?.url

  return (
    <>
      <Header />

      <main style={{ maxWidth: 900, margin: '0 auto', padding: '24px 16px 60px' }}>

        {/* Breadcrumb */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 20 }}>
          <Link href="/" style={{ color: '#555', fontSize: 12 }}>Каталог</Link>
          <span style={{ color: '#333' }}>›</span>
          <span style={{ color: '#c9a84c', fontSize: 12 }}>{tile.name}</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 24 }}>

          {/* Фото */}
          <div>
            <div style={{ position: 'relative', aspectRatio: '4/5', background: '#0a0a0a', borderRadius: 16, overflow: 'hidden', marginBottom: 8 }}>
              {mainPhoto ? (
                <Image src={mainPhoto} alt={tile.name} fill style={{ objectFit: 'cover' }} sizes="50vw" priority />
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#333', fontSize: 48 }}>🪨</div>
              )}
            </div>

            {/* Мініатюри */}
            {photos.length > 1 && (
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {photos.slice(1).map((p, i) => (
                  <div key={i} style={{ position: 'relative', width: 60, height: 60, borderRadius: 8, overflow: 'hidden', border: '1px solid #1e1e1e' }}>
                    <Image src={p.url} alt={`${tile.name} фото ${i+2}`} fill style={{ objectFit: 'cover' }} sizes="60px" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Інформація */}
          <div>
            <h1 style={{ color: '#fff', fontSize: 20, fontWeight: 900, lineHeight: 1.3, marginBottom: 6 }}>
              {tile.name}
            </h1>
            <div style={{ color: '#555', fontSize: 12, marginBottom: 16 }}>Артикул: {tile.article}</div>

            {/* Ціна */}
            <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 14, padding: 16, marginBottom: 16 }}>
              <div style={{ color: '#c9a84c', fontSize: 28, fontWeight: 900 }}>
                {formatPrice(tile.sale_price || tile.price_uah)} грн<span style={{ fontSize: 14, fontWeight: 400 }}>/м²</span>
              </div>
              {tile.sale_price && tile.sale_price < tile.price_uah && (
                <div style={{ color: '#555', fontSize: 13, textDecoration: 'line-through' }}>
                  {formatPrice(tile.price_uah)} грн/м²
                </div>
              )}
              {tile.price_eur && (
                <div style={{ color: '#444', fontSize: 12, marginTop: 4 }}>≈ {formatPrice(tile.price_eur)} €/м²</div>
              )}
            </div>

            {/* Характеристики */}
            <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 14, padding: 16, marginBottom: 16 }}>
              {[
                ['Розмір', `${tile.size} см`],
                ['Площа плитки', tile.tile_area ? `${tile.tile_area} м²` : '—'],
                ['Покриття', tile.finish || '—'],
                ['В наявності', tile.stock > 0 ? `${tile.stock} м²` : 'Немає'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #1a1a1a' }}>
                  <span style={{ color: '#555', fontSize: 13 }}>{k}</span>
                  <span style={{ color: '#ccc', fontSize: 13 }}>{v}</span>
                </div>
              ))}
            </div>

            {/* Наявність */}
            <div style={{ marginBottom: 16 }}>
              {tile.stock > 0 ? (
                <div style={{ color: '#48bb78', fontSize: 13, fontWeight: 700 }}>● В наявності</div>
              ) : (
                <div style={{ color: '#e53e3e', fontSize: 13 }}>● Немає в наявності</div>
              )}
            </div>

            {/* CTA */}
            <a href={`tel:+380979000398`} style={{
              display: 'block', width: '100%',
              background: 'linear-gradient(135deg, #c9a84c, #b8860b)',
              color: '#000', fontSize: 15, fontWeight: 900,
              padding: '14px', borderRadius: 12, textAlign: 'center',
              marginBottom: 10,
            }}>
              📞 Замовити зараз
            </a>

            <a href={`https://t.me/+380979000398`} target="_blank" rel="noopener noreferrer" style={{
              display: 'block', width: '100%',
              background: '#229ED922', border: '1px solid #229ED944',
              color: '#229ED9', fontSize: 14, fontWeight: 700,
              padding: '12px', borderRadius: 12, textAlign: 'center',
            }}>
              ✈️ Написати в Telegram
            </a>
          </div>
        </div>

        {/* Опис */}
        {tile.description && (
          <div style={{ marginTop: 32, background: '#111', border: '1px solid #1e1e1e', borderRadius: 16, padding: 20 }}>
            <h2 style={{ color: '#fff', fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Опис</h2>
            <p style={{ color: '#888', fontSize: 14, lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>{tile.description}</p>
          </div>
        )}

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: tile.name,
            description: tile.description || `Керамічна плитка ${tile.name}, розмір ${tile.size} см`,
            sku: tile.article,
            image: mainPhoto || '',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'UAH',
              price: tile.sale_price || tile.price_uah,
              availability: tile.stock > 0
                ? 'https://schema.org/InStock'
                : 'https://schema.org/OutOfStock',
              seller: {
                '@type': 'Organization',
                name: 'MS Ceramica',
              },
            },
          })}}
        />
      </main>

      <Footer />
    </>
  )
}
