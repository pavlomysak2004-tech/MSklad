import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Оплата',
  description: 'Способи оплати MS Ceramica. Безготівковий розрахунок IBAN, накладений платіж Нова Пошта, готівка при самовивозі.',
}

export default function PaymentPage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 820, margin: '0 auto', padding: '48px 24px 80px' }}>
        <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 900, fontFamily: 'serif', color: '#c9a84c', marginBottom: 8 }}>Оплата</h1>
        <p style={{ color: '#666', fontSize: 14, marginBottom: 40, paddingBottom: 24, borderBottom: '1px solid #1a1a1a' }}>
          Зручні способи оплати для фізичних та юридичних осіб
        </p>

        {/* IBAN */}
        <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 14, padding: 20, marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <span style={{ fontSize: 24 }}>🏦</span>
            <span style={{ fontSize: 16, fontWeight: 700 }}>Безготівковий розрахунок (IBAN)</span>
            <span style={{ background: '#c9a84c22', color: '#c9a84c', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, border: '1px solid #c9a84c44' }}>Рекомендовано</span>
          </div>
          {[
            ['Отримувач', 'ФОП Мисак Павло Володимирович'],
            ['Код ЄДРПОУ', '3126118058'],
            ['IBAN', 'UA613052990000026005031004307'],
            ['Банк', 'АТ КБ «ПРИВАТБАНК»'],
          ].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '7px 0', borderBottom: '1px solid #1a1a1a' }}>
              <span style={{ color: '#555', fontSize: 13, flexShrink: 0, marginRight: 8 }}>{k}</span>
              <span style={{ color: '#ccc', fontSize: 13, textAlign: 'right', wordBreak: 'break-all' }}>{v}</span>
            </div>
          ))}
        </div>

        {/* Накладений */}
        <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 14, padding: 20, marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <span style={{ fontSize: 24 }}>📬</span>
            <span style={{ fontSize: 16, fontWeight: 700 }}>Накладений платіж (Нова Пошта)</span>
          </div>
          <p style={{ color: '#888', fontSize: 13, lineHeight: 1.6 }}>
            Оплата при отриманні на відділенні Нової Пошти. Комісія за переказ — за тарифами НП. Послуга доступна після погодження з менеджером.
          </p>
        </div>

        {/* Готівка */}
        <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 14, padding: 20, marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <span style={{ fontSize: 24 }}>💰</span>
            <span style={{ fontSize: 16, fontWeight: 700 }}>Готівка при самовивозі</span>
          </div>
          <p style={{ color: '#888', fontSize: 13, lineHeight: 1.6 }}>
            Оплата готівкою за адресою: м. Радехів, вул. Броварська 24. Графік: Пн–Пт 9:00–19:00, Сб 9:00–18:00, Нд 11:00–17:00.
          </p>
        </div>

        <div style={{ background: '#c9a84c11', border: '1px solid #c9a84c33', borderRadius: 12, padding: 16 }}>
          <div style={{ color: '#c9a84c', fontSize: 13, fontWeight: 700, marginBottom: 6 }}>ℹ️ Примітка</div>
          <div style={{ color: '#888', fontSize: 13, lineHeight: 1.6 }}>
            Після підтвердження замовлення менеджер надішле реквізити або рахунок-фактуру. Питання: <a href="tel:+380979000398" style={{ color: '#c9a84c' }}>097 900 03 98</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
