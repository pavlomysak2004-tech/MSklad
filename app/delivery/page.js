import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Доставка',
  description: 'Умови доставки MS Ceramica. Нова Пошта, Delivery, Укрпошта, самовивіз. Безкоштовна доставка від 50 000 грн.',
}

export default function DeliveryPage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 820, margin: '0 auto', padding: '48px 24px 80px' }}>
        <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 900, fontFamily: 'serif', color: '#c9a84c', marginBottom: 8 }}>Доставка</h1>
        <p style={{ color: '#666', fontSize: 14, marginBottom: 40, paddingBottom: 24, borderBottom: '1px solid #1a1a1a' }}>
          Доставляємо керамічну плитку по всій Україні · mysak.com.ua
        </p>

        {[
          { icon: '📦', title: 'Нова Пошта', badge: 'Найпопулярніше', rows: [
            ['Доставка до відділення', 'За тарифами НП'],
            ['Адресна доставка (кур\'єр)', 'За тарифами НП'],
            ['Термін', '1–3 робочих дні'],
            ['Безкоштовно від', '50 000 грн'],
          ]},
          { icon: '🚐', title: 'Delivery', badge: null, rows: [
            ['Доставка до відділення', 'За тарифами Delivery'],
            ['Адресна доставка', 'За тарифами Delivery'],
            ['Термін', '1–3 робочих дні'],
          ]},
          { icon: '✉️', title: 'Укрпошта', badge: null, rows: [
            ['Доставка до відділення', 'За тарифами Укрпошти'],
            ['Термін', '2–5 робочих днів'],
          ]},
          { icon: '🏪', title: 'Самовивіз', badge: 'Безкоштовно', rows: [
            ['Адреса', 'м. Радехів, вул. Броварська 24'],
            ['Пн–Пт', '9:00–19:00'],
            ['Субота', '9:00–18:00'],
            ['Неділя', '11:00–17:00'],
          ]},
        ].map((s, i) => (
          <div key={i} style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 14, padding: 20, marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <span style={{ fontSize: 24 }}>{s.icon}</span>
              <span style={{ fontSize: 16, fontWeight: 700 }}>{s.title}</span>
              {s.badge && <span style={{ background: '#c9a84c22', color: '#c9a84c', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, border: '1px solid #c9a84c44' }}>{s.badge}</span>}
            </div>
            {s.rows.map(([k, v], j) => (
              <div key={j} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: j < s.rows.length - 1 ? '1px solid #1a1a1a' : 'none' }}>
                <span style={{ color: '#555', fontSize: 13 }}>{k}</span>
                <span style={{ color: '#ccc', fontSize: 13 }}>{v}</span>
              </div>
            ))}
          </div>
        ))}

        <div style={{ background: '#c9a84c11', border: '1px solid #c9a84c33', borderRadius: 12, padding: 16 }}>
          <div style={{ color: '#c9a84c', fontSize: 13, fontWeight: 700, marginBottom: 6 }}>ℹ️ Важливо</div>
          <div style={{ color: '#888', fontSize: 13, lineHeight: 1.6 }}>
            При замовленні від <strong style={{ color: '#c9a84c' }}>50 000 грн</strong> — доставка безкоштовна. Питання: <a href="tel:+380979000398" style={{ color: '#c9a84c' }}>097 900 03 98</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
