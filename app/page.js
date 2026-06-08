import { getCollections, getPannos } from '@/lib/supabase'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TileCard from '@/components/TileCard'

export const revalidate = 3600 // Оновлювати кожну годину

export const metadata = {
  title: 'MS Ceramica — Гуртовий продаж керамічної плитки',
  description: 'Гуртовий продаж керамічної плитки по всій Україні. Широкий вибір колекцій, доступні ціни, доставка від 50 000 грн безкоштовно.',
}

export default async function HomePage() {
  const [collections, pannos] = await Promise.all([
    getCollections(),
    getPannos(),
  ])

  return (
    <>
      <Header />

      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 16px 60px' }}>

        {/* Hero */}
        <div style={{
          background: 'linear-gradient(135deg, #c9a84c11, #b8860b08)',
          border: '1px solid #c9a84c22',
          borderRadius: 20, padding: '32px 24px',
          marginBottom: 32, textAlign: 'center',
        }}>
          <div style={{ color: '#c9a84c', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 8 }}>
            Гуртовий продаж
          </div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(24px, 5vw, 42px)', fontWeight: 900, fontFamily: 'serif', marginBottom: 8 }}>
            Керамічна плитка
          </h1>
          <p style={{ color: '#666', fontSize: 14 }}>
            Мінімальне замовлення від 30 м² · Безкоштовна доставка від 50 000 грн
          </p>
        </div>

        {/* Колекції плитки */}
        {collections.length > 0 && (
          <section style={{ marginBottom: 48 }}>
            <h2 style={{
              color: '#fff', fontSize: 18, fontWeight: 800,
              marginBottom: 20, paddingBottom: 12,
              borderBottom: '1px solid #1a1a1a',
            }}>
              Колекції плитки
              <span style={{ color: '#333', fontSize: 13, fontWeight: 400, marginLeft: 10 }}>
                {collections.length} позицій
              </span>
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
              gap: 12,
            }}>
              {collections.map(tile => (
                <TileCard key={tile.id} tile={tile} />
              ))}
            </div>
          </section>
        )}

        {/* Панно */}
        {pannos.length > 0 && (
          <section>
            <h2 style={{
              color: '#fff', fontSize: 18, fontWeight: 800,
              marginBottom: 20, paddingBottom: 12,
              borderBottom: '1px solid #1a1a1a',
            }}>
              Декоративні панно
              <span style={{ color: '#333', fontSize: 13, fontWeight: 400, marginLeft: 10 }}>
                {pannos.length} позицій
              </span>
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: 12,
            }}>
              {pannos.map(tile => (
                <TileCard key={tile.id} tile={tile} />
              ))}
            </div>
          </section>
        )}

      </main>

      <Footer />
    </>
  )
}
