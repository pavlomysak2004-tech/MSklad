import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Отримати всі колекції (не панно)
export async function getCollections() {
  const { data, error } = await supabase
    .from('collections')
    .select(`
      *,
      collection_photos (url, sort_order)
    `)
    .eq('is_panno', false)
    .eq('is_visible', true)
    .eq('is_draft', false)
    .order('sort_order', { ascending: true })

  if (error) throw error
  return data
}

// Отримати всі панно
export async function getPannos() {
  const { data, error } = await supabase
    .from('collections')
    .select(`
      *,
      collection_photos (url, sort_order)
    `)
    .eq('is_panno', true)
    .eq('is_visible', true)
    .eq('is_draft', false)
    .order('sort_order', { ascending: true })

  if (error) throw error
  return data
}

// Отримати одну колекцію по id
export async function getCollection(id) {
  const { data, error } = await supabase
    .from('collections')
    .select(`
      *,
      collection_photos (url, sort_order)
    `)
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

// Отримати головне фото колекції
export function getMainPhoto(collection) {
  if (!collection.collection_photos?.length) return null
  const sorted = [...collection.collection_photos].sort((a, b) => a.sort_order - b.sort_order)
  return sorted[0].url
}

// Форматувати ціну
export function formatPrice(price) {
  return new Intl.NumberFormat('uk-UA').format(price)
}
