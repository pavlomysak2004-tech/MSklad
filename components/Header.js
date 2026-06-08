'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: '#080808ee', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid #1a1a1a',
        padding: '0 20px',
        height: 56,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Link href="/" style={{ color: '#c9a84c', fontSize: 16, fontWeight: 900, letterSpacing: 3 }}>
          MS CERAMICA
        </Link>

        <nav style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Link href="/delivery" style={{ color: '#555', fontSize: 12, padding: '6px 10px' }}>Доставка</Link>
          <Link href="/payment" style={{ color: '#555', fontSize: 12, padding: '6px 10px' }}>Оплата</Link>
          <Link href="/contacts" style={{ color: '#555', fontSize: 12, padding: '6px 10px' }}>Контакти</Link>
          <a href="tel:+380979000398" style={{
            background: '#c9a84c22', border: '1px solid #c9a84c44',
            color: '#c9a84c', fontSize: 12, fontWeight: 700,
            padding: '6px 12px', borderRadius: 8,
          }}>📞 097 900 03 98</a>
        </nav>
      </header>
    </>
  )
}
