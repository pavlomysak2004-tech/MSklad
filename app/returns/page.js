import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Повернення та обмін',
  description: 'Правила повернення MS Ceramica. 14 днів на повернення товару належної якості. Умови, порядок, повернення коштів.',
}

export default function ReturnsPage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 820, margin: '0 auto', padding: '48px 24px 80px' }}>
        <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 900, fontFamily: 'serif', color: '#c9a84c', marginBottom: 8 }}>Повернення та обмін</h1>
        <p style={{ color: '#666', fontSize: 14, marginBottom: 40, paddingBottom: 24, borderBottom: '1px solid #1a1a1a' }}>
          ФОП Мисак Павло Володимирович · mysak.com.ua
        </p>

        {/* 14 днів */}
        <div style={{ background: 'linear-gradient(180deg, #1a1612, #14110d)', border: '1px solid #c9a84c33', borderRadius: 12, padding: '20px 24px', marginBottom: 32 }}>
          <div style={{ fontSize: 48, fontWeight: 900, color: '#c9a84c', lineHeight: 1 }}>14</div>
          <div style={{ color: '#888', fontSize: 14, marginBottom: 8 }}>днів на повернення товару належної якості</div>
          <div style={{ color: '#c9a84c', fontSize: 14, fontWeight: 600 }}>відповідно до Закону України «Про захист прав споживачів»</div>
        </div>

        {/* Картки */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 10, marginBottom: 32 }}>
          {[
            ['Термін повернення', '14 календарних днів'],
            ['Повернення коштів', '3–7 робочих днів'],
            ['Доставка при браку', 'За наш рахунок'],
            ['Доставка при відмові', 'За рахунок покупця'],
          ].map(([label, value]) => (
            <div key={label} style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 12, padding: 14 }}>
              <div style={{ color: '#555', fontSize: 11, marginBottom: 4 }}>{label}</div>
              <div style={{ color: '#c9a84c', fontSize: 14, fontWeight: 700 }}>{value}</div>
            </div>
          ))}
        </div>

        {/* Умови */}
        <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 14, padding: 20, marginBottom: 16 }}>
          <h2 style={{ color: '#fff', fontSize: 15, fontWeight: 700, marginBottom: 12 }}>✅ Умови повернення</h2>
          {['Товар не був у використанні та не був укладений', 'Збережено оригінальну упаковку та маркування', 'Збережено товарний вигляд (без подряпин, сколів)', 'Наявний чек, накладна або документ про покупку', 'Збережено всі комплектуючі та документи'].map((item, i, arr) => (
            <div key={i} style={{ display: 'flex', gap: 8, padding: '5px 0', borderBottom: i < arr.length - 1 ? '1px solid #1a1a1a' : 'none' }}>
              <span style={{ color: '#c9a84c', flexShrink: 0 }}>✓</span>
              <span style={{ color: '#888', fontSize: 13 }}>{item}</span>
            </div>
          ))}
        </div>

        {/* Не підлягає */}
        <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 14, padding: 20, marginBottom: 16 }}>
          <h2 style={{ color: '#fff', fontSize: 15, fontWeight: 700, marginBottom: 12 }}>❌ Не підлягає поверненню</h2>
          {['Плитка яка була розпакована, порізана або укладена', 'Товар виготовлений або замовлений під конкретні розміри', 'Товар з механічними пошкодженнями з вини покупця', 'Неповна упаковка (часткове повернення з упаковки)'].map((item, i, arr) => (
            <div key={i} style={{ display: 'flex', gap: 8, padding: '5px 0', borderBottom: i < arr.length - 1 ? '1px solid #1a1a1a' : 'none' }}>
              <span style={{ color: '#e53e3e', flexShrink: 0 }}>✗</span>
              <span style={{ color: '#888', fontSize: 13 }}>{item}</span>
            </div>
          ))}
        </div>

        {/* Порядок */}
        <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 14, padding: 20, marginBottom: 16 }}>
          <h2 style={{ color: '#fff', fontSize: 15, fontWeight: 700, marginBottom: 12 }}>📋 Порядок повернення</h2>
          {[
            'Зв\'яжіться з нами: 097 900 03 98 або pavlomysak2004@gmail.com',
            'Опишіть причину та надішліть фото товару',
            'Отримайте підтвердження та інструкції щодо відправки',
            'Упакуйте товар в оригінальну упаковку',
            'Надішліть на адресу: м. Радехів, вул. Броварська 24',
            'Повернення коштів протягом 3–7 робочих днів після отримання',
          ].map((step, i, arr) => (
            <div key={i} style={{ display: 'flex', gap: 10, padding: '6px 0', borderBottom: i < arr.length - 1 ? '1px solid #1a1a1a' : 'none' }}>
              <span style={{ color: '#c9a84c', fontWeight: 700, fontSize: 13, flexShrink: 0, width: 20 }}>{i + 1}.</span>
              <span style={{ color: '#888', fontSize: 13 }}>{step}</span>
            </div>
          ))}
        </div>

        {/* Контакт */}
        <div style={{ background: '#0d0d0d', border: '1px solid #2a2a2a', borderRadius: 12, padding: 20, display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontSize: 36 }}>📞</span>
          <div>
            <div style={{ color: '#fff', fontSize: 15, fontWeight: 700, marginBottom: 4 }}>Маєте питання щодо повернення?</div>
            <div style={{ color: '#666', fontSize: 13, marginBottom: 8 }}>Відповідаємо протягом 15–30 хв у робочий час</div>
            <a href="tel:+380979000398" style={{ color: '#c9a84c', fontSize: 18, fontWeight: 700 }}>097 900 03 98</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
