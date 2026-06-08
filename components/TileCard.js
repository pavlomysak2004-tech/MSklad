import Link from 'next/link'
import Image from 'next/image'
import { formatPrice, getMainPhoto } from '@/lib/supabase'

export default function TileCard({ tile }) {
  const photo = getMainPhoto(tile)
  const path = tile.is_panno ? `/panno/${tile.id}` : `/tile/${tile.id}`

  return (
    <Link href={path} style={{ display: 'block', textDecoration: 'none' }}>
      <div style={{
        background: '#111',
        border: '1px solid #1e1e1e',
        borderRadius: 16,
        overflow: 'hidden',
        transition: 'border-color 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = '#c9a84c44'}
      onMouseLeave={e => e.currentTarget.style.borderColor = '#1e1e1e'}
      >
        {/* Фото */}
        <div style={{ position: 'relative', aspectRatio: '4/5', background: '#0a0a0a' }}>
          {photo ? (
            <Image
              src={photo}
              alt={tile.name}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 600px) 50vw, 33vw"
            />
          ) : (
            <div style={{
              width: '100%', height: '100%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#333', fontSize: 32,
            }}>🪨</div>
          )}

          {/* Знижка */}
          {tile.sale_percent > 0 && (
            <div style={{
              position: 'absolute', top: 10, left: 10,
              background: '#e53e3e', color: '#fff',
              fontSize: 11, fontWeight: 900,
              padding: '3px 8px', borderRadius: 6,
            }}>-{tile.sale_percent}%</div>
          )}

          {/* Панно badge */}
          {tile.is_panno && (
            <div style={{
              position: 'absolute', top: 10, right: 10,
              background: '#c9a84c22', border: '1px solid #c9a84c44',
              color: '#c9a84c', fontSize: 10, fontWeight: 700,
              padding: '3px 8px', borderRadius: 6,
            }}>Панно</div>
          )}
        </div>

        {/* Інфо */}
        <div style={{ padding: '12px 14px' }}>
          <div style={{ color: '#fff', fontSize: 13, fontWeight: 700, marginBottom: 4, lineHeight: 1.3 }}>
            {tile.name}
          </div>
          <div style={{ color: '#555', fontSize: 11, marginBottom: 8 }}>{tile.size} см</div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
            <span style={{ color: '#c9a84c', fontSize: 15, fontWeight: 900 }}>
              {formatPrice(tile.sale_price || tile.price_uah)} грн
            </span>
            <span style={{ color: '#444', fontSize: 11 }}>/м²</span>
          </div>

          {tile.sale_price && tile.sale_price < tile.price_uah && (
            <div style={{ color: '#555', fontSize: 11, textDecoration: 'line-through', marginTop: 2 }}>
              {formatPrice(tile.price_uah)} грн
            </div>
          )}

          {/* Наявність */}
          <div style={{ marginTop: 8 }}>
            {tile.stock > 0 ? (
              <span style={{ color: '#48bb78', fontSize: 11 }}>● В наявності ({tile.stock} м²)</span>
            ) : (
              <span style={{ color: '#555', fontSize: 11 }}>● Немає в наявності</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
