import { useState, useEffect } from 'react'
import { supabase, isSupabaseConfigured } from '../lib/supabase'
import localData from '../data/data.json'

export function useZones() {
  const [zones, setZones] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchZones() {
      if (!isSupabaseConfigured) {
        setZones(localData.zones)
        setLoading(false)
        return
      }

      try {
        const { data: zonesData, error: zonesError } = await supabase
          .from('zones')
          .select('*, products(*)')
          .order('display_order')

        if (zonesError) throw zonesError

        const formatted = zonesData.map((zone) => ({
          id: zone.id,
          label: zone.label,
          position: { x: zone.position_x, y: zone.position_y },
          images: zone.images ?? [],
          comment: zone.comment ?? '',
          products: (zone.products ?? [])
            .sort((a, b) => a.display_order - b.display_order)
            .map((p) => ({
              id: p.id,
              name: p.name,
              imageUrl: p.image_url,
              price: p.price,
            })),
        }))

        setZones(formatted)
      } catch (err) {
        setZones(localData.zones)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchZones()
  }, [])

  return { zones, loading, error }
}
