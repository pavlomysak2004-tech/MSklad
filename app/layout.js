import './globals.css'

export const metadata = {
  metadataBase: new URL('https://mysak.com.ua'),
  title: {
    default: 'MS Ceramica — Гуртовий продаж керамічної плитки',
    template: '%s — MS Ceramica',
  },
  description: 'Гуртовий продаж керамічної плитки по всій Україні. Широкий вибір колекцій, доступні ціни, доставка.',
  keywords: ['плитка гурт', 'керамічна плитка купити', 'плитка Україна', 'гуртовий продаж плитки'],
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    url: 'https://mysak.com.ua',
    siteName: 'MS Ceramica',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
