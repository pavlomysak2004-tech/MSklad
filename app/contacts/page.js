import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Контакти',
  description: 'Контакти MS Ceramica. Телефон: 097 900 03 98. м. Радехів, вул. Броварська 24. Пн–Пт 9:00–19:00.',
}

export default function ContactsPage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 820, margin: '0 auto', padding: '48px 24px 80px' }}>
        <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 900, fontFamily: 'serif', color: '#c9a84c', marginBottom: 8 }}>Контакти</h1>
        <p style={{ color: '#666', fontSize: 14, marginBottom: 40, paddingBottom: 24, borderBottom: '1px solid #1a1a1a' }}>
          ФОП Мисак Павло Володимирович · mysak.com.ua
        </p>

        {/* Hero */}
        <div style={{ background: 'linear-gradient(135deg, #c9a84c22, #b8860b11)', border: '1px solid #c9a84c33', borderRadius: 16, padding: 24, marginBottom: 20, textAlign: 'center' }}>
          <div style={{ fontSize: 40, marginBottom: 10 }}>🏪</div>
          <div style={{ color: '#c9a84c', fontSize: 20, fontWeight: 900, marginBottom: 4 }}>MS Ceramica</div>
          <div style={{ color: '#666', fontSize: 13 }}>Гуртовий продаж керамічної плитки</div>
        </div>

        {/* Контакти */}
        {[
          { icon: '📞', label: 'Телефон', value: '+38 097 900 03 98', href: 'tel:+380979000398' },
          { icon: '✉️', label: 'Email', value: 'pavlomysak2004@gmail.com', href: 'mailto:pavlomysak2004@gmail.com' },
          { icon: '📍', label: 'Адреса', value: 'м. Радехів, вул. Броварська 24', href: 'https://maps.google.com/?q=Радехів,+Броварська+24' },
        ].map((c) => (
          <a key={c.href} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: 14, background: '#111', borderRadius: 14, padding: '14px 16px', marginBottom: 10, border: '1px solid #1e1e1e', textDecoration: 'none' }}>
            <span style={{ fontSize: 24, flexShrink: 0 }}>{c.icon}</span>
            <div>
              <div style={{ color: '#555', fontSize: 11, marginBottom: 2 }}>{c.label}</div>
              <div style={{ color: '#c9a84c', fontSize: 14, fontWeight: 700 }}>{c.value}</div>
            </div>
          </a>
        ))}

        {/* Графік */}
        <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 14, padding: 20, marginBottom: 16 }}>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: 15, marginBottom: 12 }}>🕐 Графік роботи</div>
          {[
            ['Понеділок – П\'ятниця', '9:00 – 19:00'],
            ['Субота', '9:00 – 18:00'],
            ['Неділя', '11:00 – 17:00'],
          ].map(([d, h], i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: i < 2 ? '1px solid #1a1a1a' : 'none' }}>
              <span style={{ color: '#666', fontSize: 13 }}>{d}</span>
              <span style={{ color: '#c9a84c', fontSize: 13, fontWeight: 700 }}>{h}</span>
            </div>
          ))}
        </div>

        {/* Месенджери */}
        <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 14, padding: 20, marginBottom: 16 }}>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: 15, marginBottom: 12 }}>💬 Написати зараз</div>
          <div style={{ display: 'flex', gap: 10 }}>
            <a href="https://t.me/+380979000398" target="_blank" rel="noopener noreferrer"
              style={{ flex: 1, background: '#229ED922', border: '1px solid #229ED944', borderRadius: 12, padding: 12, textAlign: 'center', textDecoration: 'none', color: '#229ED9', fontSize: 13, fontWeight: 700 }}>
              ✈️ Telegram
            </a>
            <a href="viber://chat?number=%2B380979000398"
              style={{ flex: 1, background: '#7360F222', border: '1px solid #7360F244', borderRadius: 12, padding: 12, textAlign: 'center', textDecoration: 'none', color: '#7360F2', fontSize: 13, fontWeight: 700 }}>
              📲 Viber
            </a>
          </div>
          <div style={{ color: '#444', fontSize: 11, marginTop: 10, textAlign: 'center' }}>Відповідаємо протягом 15–30 хвилин у робочий час</div>
        </div>

        {/* Реквізити */}
        <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 14, padding: 20 }}>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: 15, marginBottom: 12 }}>🏢 Реквізити</div>
          {[
            ['Назва', 'ФОП Мисак Павло Володимирович'],
            ['Код ЄДРПОУ', '3126118058'],
            ['IBAN', 'UA613052990000026005031004307'],
            ['Банк', 'АТ КБ «ПРИВАТБАНК»'],
          ].map(([k, v], i) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '6px 0', borderBottom: i < 3 ? '1px solid #1a1a1a' : 'none' }}>
              <span style={{ color: '#555', fontSize: 13, flexShrink: 0, marginRight: 8 }}>{k}</span>
              <span style={{ color: '#ccc', fontSize: 13, textAlign: 'right', wordBreak: 'break-all' }}>{v}</span>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
