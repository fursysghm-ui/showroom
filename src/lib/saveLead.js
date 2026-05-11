import { supabase, isSupabaseConfigured } from './supabase'

export async function saveLead({ name, org, guestMode }) {
  if (!isSupabaseConfigured) return

  const { error } = await supabase
    .from('leads')
    .insert({ name, org, guest_mode: guestMode })

  if (error) console.warn('리드 저장 실패:', error.message)
}
