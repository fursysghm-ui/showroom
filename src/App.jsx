import { useState } from 'react'
import { useZones } from './hooks/useZones'
import OnboardingPage from './pages/OnboardingPage'
import MapPage from './pages/MapPage'
import ZoneGalleryPage from './pages/ZoneGalleryPage'
import ZoneDetailPage from './pages/ZoneDetailPage'
import NavBar from './components/NavBar'

function App() {
  const [page, setPage] = useState('onboarding') // 'onboarding' | 'map' | 'gallery' | 'detail'
  const [selectedZoneId, setSelectedZoneId] = useState(null)
  const [guestMode, setGuestMode] = useState(false)

  const { zones, loading, error } = useZones()
  const currentZone = zones.find((z) => z.id === selectedZoneId) ?? null

  const handleStart = () => {
    setGuestMode(false)
    setPage('map')
  }

  const handleGuest = () => {
    setGuestMode(true)
    setPage('map')
  }

  const handleSelectZone = (zoneId) => {
    setSelectedZoneId(zoneId)
    setPage('gallery')
  }

  const handleEnterDetail = () => {
    setPage('detail')
  }

  const handleBackFromDetail = () => {
    setPage('gallery')
  }

  const handleHome = () => {
    setSelectedZoneId(null)
    setPage('map')
  }

  const handleCallStaff = () => {
    const zoneName = currentZone?.label ?? '쇼룸'
    fetch('https://wh.jandi.com/connect-api/webhook/33159708/82e8a048cd83eafbb87666405f2f439f', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        body: `현재 [${zoneName}]에서 고객이 상담을 요청했습니다!`,
      }),
    })
    alert('직원을 호출했습니다. 잠시만 기다려 주세요.')
  }

  return (
    <div className="min-h-screen bg-[#F0F0F0]">
      {page !== 'onboarding' && (
        <NavBar onHome={handleHome} onCallStaff={handleCallStaff} />
      )}

      <div className="transition-opacity duration-300 opacity-100">
        {page === 'onboarding' && (
          <OnboardingPage onStart={handleStart} onGuest={handleGuest} />
        )}
        {page === 'map' && loading && (
          <div className="min-h-screen flex items-center justify-center text-[#515151] text-sm">
            불러오는 중...
          </div>
        )}
        {page === 'map' && !loading && (
          <MapPage zones={zones} onZoneSelect={handleSelectZone} />
        )}
        {page === 'gallery' && currentZone && (
          <ZoneGalleryPage
            zone={currentZone}
            onEnterDetail={handleEnterDetail}
            onBack={handleHome}
          />
        )}
        {page === 'detail' && currentZone && (
          <ZoneDetailPage zone={currentZone} onBack={handleBackFromDetail} />
        )}
      </div>
    </div>
  )
}

export default App
