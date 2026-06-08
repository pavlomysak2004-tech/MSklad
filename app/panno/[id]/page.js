import { getCollection, getPannos, getMainPhoto, formatPrice } from '@/lib/supabase'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const revalidate = 3600

export async function generateStaticParams() {
  const pannos = await getPannos()
  return pannos.map(p => ({ id: String(p.id) }))
}

export async function generateMetadata({ params }) {
  const panno = await getCollection(Number(params.id))
  if (!panno) return {}
  const photo = getMainPhoto(panno)
  return {
    title: `${panno.name} — MS Ceramica`,
    description: `Декоративне панно ${panno.name}. Розмір ${panno.size} см. Ціна ${formatPrice(panno.price_uah)} грн. Доставка по Україні.`,
    openGraph: {
      title: `${panno.name} — MS Ceramica`,
      images: photo ? [{ url: photo, width: 800, height: 1000 }] : [],
    },
  }
}

export default async function PannoPage({ params }) {
  const panno = await getCollection(Number(params.id))
  if (!panno || !panno.is_panno) notFound()

  const photos = panno.collection_photos
    ? [...panno.collection_photos].sort((a, b) => a.sort_order - b.sort_order)
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
          <span style={{ color: '#555', fontSize: 12 }}>Панно</span>
          <span style={{ color: '#333' }}>›</span>
          <span style={{ color: '#c9a84c', fontSize: 12 }}>{panno.name}</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 24 }}>

          {/* Фото */}
          <div>
            <div style={{ position: 'relative', aspectRatio: '3/4', background: '#0a0a0a', borderRadius: 16, overflow: 'hidden', marginBottom: 8 }}>
              {mainPhoto ? (
                <Image src={mainPhoto} alt={panno.name} fill style={{ objectFit: 'cover' }} sizes="50vw" priority />
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#333', fontSize: 48 }}>🎨</div>
              )}
              <div style={{
                position: 'absolute', top: 10, right: 10,
                background: '#c9a84c22', border: '1px solid #c9a84c44',
                color: '#c9a84c', fontSize: 10, fontWeight: 700,
                padding: '3px 8px', borderRadius: 6,
              }}>Панно</div>
            </div>

            {photos.length > 1 && (
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {photos.slice(1).map((p, i) => (
                  <div key={i} style={{ position: 'relative', width: 60, height: 60, borderRadius: 8, overflow: 'hidden', border: '1px solid #1e1e1e' }}>
                    <Image src={p.url} alt={`${panno.name} фото ${i+2}`} fill style={{ objectFit: 'cover' }} sizes="60px" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Інформація */}
          <div>
            <div style={{ background: '#c9a84c22', border: '1px solid #c9a84c44', borderRadius: 8, padding: '4px 10px', display: 'inline-block', marginBottom: 10 }}>
              <span style={{ color: '#c9a84c', fontSize: 11, fontWeight: 700 }}>🎨 Декоративне панно</span>
            </div>

            <h1 style={{ color: '#fff', fontSize: 20, fontWeight: 900, lineHeight: 1.3, marginBottom: 6 }}>
              {panno.name}
            </h1>
            <div style={{ color: '#555', fontSize: 12, marginBottom: 16 }}>Артикул: {panno.article}</div>

            {/* Ціна */}
            <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 14, padding: 16, marginBottom: 16 }}>
              <div style={{ color: '#c9a84c', fontSize: 28, fontWeight: 900 }}>
                {formatPrice(panno.sale_price || panno.price_uah)} грн
              </div>
              <div style={{ color: '#555', fontSize: 12, marginTop: 4 }}>за комплект</div>
              {panno.price_eur && (
                <div style={{ color: '#444', fontSize: 12, marginTop: 4 }}>≈ {formatPrice(panno.price_eur)} €</div>
              )}
            </div>

            {/* Характеристики */}
            <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 14, padding: 16, marginBottom: 16 }}>
              {[
                ['Розмір', `${panno.size} см`],
                ['Площа', panno.tile_area ? `${panno.tile_area} м²` : '—'],
                ['Покриття', panno.finish || '—'],
                ['В наявності', panno.stock > 0 ? `${panno.stock} шт` : 'Немає'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #1a1a1a' }}>
                  <span style={{ color: '#555', fontSize: 13 }}>{k}</span>
                  <span style={{ color: '#ccc', fontSize: 13 }}>{v}</span>
                </div>
              ))}
            </div>

            {/* Наявність */}
            <div style={{ marginBottom: 16 }}>
              {panno.stock > 0 ? (
                <div style={{ color: '#48bb78', fontSize: 13, fontWeight: 700 }}>● В наявності</div>
              ) : (
                <div style={{ color: '#e53e3e', fontSize: 13 }}>● Немає в наявності</div>
              )}
            </div>

            {/* CTA */}
            <a href="tel:+380979000398" style={{
              display: 'block', width: '100%',
              background: 'linear-gradient(135deg, #c9a84c, #b8860b)',
              color: '#000', fontSize: 15, fontWeight: 900,
              padding: '14px', borderRadius: 12, textAlign: 'center',
              marginBottom: 10,
            }}>📞 Замовити зараз</a>

            <a href="https://t.me/+380979000398" target="_blank" rel="noopener noreferrer" style={{
              display: 'block', width: '100%',
              background: '#229ED922', border: '1px solid #229ED944',
              color: '#229ED9', fontSize: 14, fontWeight: 700,
              padding: '12px', borderRadius: 12, textAlign: 'center',
            }}>✈️ Написати в Telegram</a>
          </div>
        </div>

        {/* Опис */}
        {panno.description && (
          <div style={{ marginTop: 32, background: '#111', border: '1px solid #1e1e1e', borderRadius: 16, padding: 20 }}>
            <h2 style={{ color: '#fff', fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Опис</h2>
            <p style={{ color: '#888', fontSize: 14, lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>{panno.description}</p>
          </div>
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: panno.name,
            description: panno.description || `Декоративне панно ${panno.name}, розмір ${panno.size} см`,
            sku: panno.article,
            image: mainPhoto || '',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'UAH',
              price: panno.sale_price || panno.price_uah,
              availability: panno.stock > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
              seller: { '@type': 'Organization', name: 'MS Ceramica' },
            },
          })}}
        />
      </main>

      <Footer />
    </>
  )
}
