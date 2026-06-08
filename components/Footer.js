import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #141414', background: '#080808', padding: '28px 24px 20px' }}>
      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        {/* Лого */}
        <div style={{ marginBottom: 20, textAlign: 'center' }}>
          <div style={{ color: '#c9a84c', fontSize: 16, fontWeight: 900, letterSpacing: 1 }}>MS Ceramica</div>
          <div style={{ color: '#333', fontSize: 11, marginTop: 3 }}>Гуртовий продаж керамічної плитки</div>
        </div>

        {/* Посилання */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 12px', marginBottom: 20 }}>
          {[
            { href: '/delivery', label: '🚚 Доставка' },
            { href: '/payment', label: '💳 Оплата' },
            { href: '/returns', label: '🔄 Повернення' },
            { href: '/contacts', label: '📞 Контакти' },
            { href: '/privacy', label: '🔒 Конфіденційність' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{
              background: 'transparent', border: '1px solid #1a1a1a',
              borderRadius: 10, padding: '9px 10px',
              color: '#555', fontSize: 12, display: 'block',
            }}>{label}</Link>
          ))}
        </div>

        {/* Контакти */}
        <div style={{ borderTop: '1px solid #111', paddingTop: 16, marginBottom: 16 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            <a href="tel:+380979000398" style={{ color: '#c9a84c', fontSize: 12, fontWeight: 700 }}>📞 097 900 03 98</a>
            <span style={{ color: '#222' }}>·</span>
            <a href="mailto:pavlomysak2004@gmail.com" style={{ color: '#555', fontSize: 12 }}>✉️ pavlomysak2004@gmail.com</a>
            <span style={{ color: '#222' }}>·</span>
            <span style={{ color: '#444', fontSize: 12 }}>📍 Радехів, Броварська 24</span>
          </div>
          <div style={{ textAlign: 'center', color: '#2a2a2a', fontSize: 11, marginTop: 8 }}>
            Пн–Пт 9:00–19:00 · Сб 9:00–18:00 · Нд 11:00–17:00
          </div>
        </div>

        {/* Значки оплати */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
          {['Visa', 'Mastercard', 'IBAN', 'Нова Пошта', 'Накладний платіж'].map((label) => (
            <div key={label} style={{
              background: '#111', border: '1px solid #1e1e1e',
              borderRadius: 8, padding: '5px 10px',
              color: '#444', fontSize: 10, fontWeight: 700,
            }}>{label}</div>
          ))}
        </div>

        {/* Копірайт */}
        <div style={{ textAlign: 'center', color: '#1e1e1e', fontSize: 10 }}>
          © {new Date().getFullYear()} ФОП Мисак Павло Володимирович · mysak.com.ua
        </div>
      </div>
    </footer>
  )
}
