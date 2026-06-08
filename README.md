# MS Ceramica — Next.js

Гуртовий продаж керамічної плитки · mysak.com.ua

## Встановлення

```bash
npm install
```

## Налаштування змінних середовища

Створи файл `.env.local` в корені проєкту:

```
NEXT_PUBLIC_SUPABASE_URL=https://svbmamaqrtsknuztxiuq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=твій_anon_key
```

> ⚠️ Не додавай `.env.local` до Git!

## Запуск локально

```bash
npm run dev
```

Відкрий http://localhost:3000

## Деплой на Vercel

1. Завантаж на GitHub
2. Підключи до Vercel
3. В Vercel → Settings → Environment Variables додай:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Деплой!

## Структура

```
app/
  page.js              — Головна (каталог)
  tile/[id]/page.js    — Сторінка колекції
  panno/[id]/page.js   — Сторінка панно
  delivery/page.js     — Доставка
  payment/page.js      — Оплата
  returns/page.js      — Повернення
  contacts/page.js     — Контакти
  privacy/page.js      — Конфіденційність
  sitemap.js           — Автоматичний sitemap
  robots.js            — robots.txt

components/
  Header.js
  Footer.js
  TileCard.js

lib/
  supabase.js          — Підключення до БД
```
