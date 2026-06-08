import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Політика конфіденційності',
  description: 'Політика конфіденційності MS Ceramica. Захист персональних даних, cookies, права користувачів.',
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 820, margin: '0 auto', padding: '48px 24px 80px' }}>
        <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 900, fontFamily: 'serif', color: '#c9a84c', marginBottom: 8 }}>Політика конфіденційності</h1>
        <p style={{ color: '#666', fontSize: 14, marginBottom: 40, paddingBottom: 24, borderBottom: '1px solid #1a1a1a' }}>
          Дата набрання чинності: 1 січня 2025 р. · mysak.com.ua
        </p>

        <p style={{ color: '#888', fontSize: 13, lineHeight: 1.8, marginBottom: 20 }}>
          ФОП Мисак Павло Володимирович («ми», «наш») є відповідальним за обробку персональних даних на сайті <span style={{ color: '#c9a84c' }}>mysak.com.ua</span>.
        </p>

        {[
          { title: '1. Які дані ми збираємо', text: 'Ім\'я та прізвище, номер телефону, адресу електронної пошти, адресу доставки — лише у випадку, коли ви самостійно надаєте їх при оформленні замовлення або через форму зв\'язку.' },
          { title: '2. Як ми використовуємо дані', text: 'Для обробки та доставки замовлень; для зв\'язку щодо вашого замовлення; для відповіді на запити клієнтів. Ми не продаємо і не передаємо ваші дані третім особам без вашої згоди.' },
          { title: '3. Cookies та аналітика', text: 'Наш сайт використовує файли cookie для аналізу трафіку (Google Analytics, Google Tag Manager). Cookie — це невеликі текстові файли, що зберігаються у вашому браузері. Ви можете заблокувати cookies у налаштуваннях браузера.' },
          { title: '4. Зберігання даних', text: 'Ваші дані зберігаються лише протягом часу, необхідного для виконання замовлення та виконання правових зобов\'язань. Ми використовуємо захищені сервери Supabase (EU-West).' },
          { title: '5. Ваші права', text: 'Відповідно до Закону України «Про захист персональних даних» ви маєте право на доступ, виправлення або видалення ваших персональних даних. Для цього зверніться до нас: pavlomysak2004@gmail.com.' },
          { title: '6. Зміни до політики', text: 'Ми можемо оновлювати цю політику. Актуальна версія завжди доступна на цій сторінці.' },
        ].map((s) => (
          <div key={s.title} style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: 12, padding: 16, marginBottom: 10 }}>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{s.title}</div>
            <div style={{ color: '#888', fontSize: 13, lineHeight: 1.8 }}>{s.text}</div>
          </div>
        ))}

        <div style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: 12, padding: 16 }}>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: 14, marginBottom: 8 }}>7. Контакт</div>
          <div style={{ color: '#888', fontSize: 13, lineHeight: 1.8 }}>
            З питань конфіденційності: <a href="mailto:pavlomysak2004@gmail.com" style={{ color: '#c9a84c' }}>pavlomysak2004@gmail.com</a>
            <br />ФОП Мисак Павло Володимирович, м. Радехів, вул. Броварська 24
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
