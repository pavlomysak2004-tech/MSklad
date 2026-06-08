import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 600, margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>🪨</div>
        <h1 style={{ color: '#c9a84c', fontSize: 48, fontWeight: 900, marginBottom: 8 }}>404</h1>
        <p style={{ color: '#666', fontSize: 16, marginBottom: 32 }}>Сторінка не знайдена</p>
        <Link href="/" style={{
          background: 'linear-gradient(135deg, #c9a84c, #b8860b)',
          color: '#000', fontSize: 14, fontWeight: 900,
          padding: '12px 24px', borderRadius: 12, display: 'inline-block',
        }}>
          ← Повернутись до каталогу
        </Link>
      </main>
      <Footer />
    </>
  )
}
