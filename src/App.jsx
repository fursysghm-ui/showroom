import { useState } from 'react'
import data from './data/data.json'
import OnboardingPage from './pages/OnboardingPage'
import MapPage from './pages/MapPage'
import ZoneDetailPage from './pages/ZoneDetailPage'
import NavBar from './components/NavBar'

function App() {
  const [page, setPage] = useState('onboarding') // 'onboarding' | 'map' | 'detail'
  const [selectedZoneId, setSelectedZoneId] = useState(null)
  const [guestMode, setGuestMode] = useState(false)

  const zones = data.zones
  const currentZone = zones.find((z) => z.id === selectedZoneId) ?? null

  const handleStart = (name, org) => {
    setGuestMode(false)
    setPage('map')
  }

  const handleGuest = () => {
    setGuestMode(true)
    setPage('map')
  }

  const handleSelectZone = (zoneId) => {
    setSelectedZoneId(zoneId)
    setPage('detail')
  }

  const handleHome = () => {
    setSelectedZoneId(null)
    setPage('map')
  }

  const handleCallStaff = () => {
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
        {page === 'map' && (
          <MapPage zones={zones} onZoneSelect={handleSelectZone} />
        )}
        {page === 'detail' && currentZone && (
          <ZoneDetailPage zone={currentZone} onBack={handleHome} />
        )}
      </div>
    </div>
  )
}

export default App
