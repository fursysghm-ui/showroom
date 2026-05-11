import ZoneButton from '../components/ZoneButton'

let floorplanImg = null
try {
  floorplanImg = new URL('../assets/floorplan.png', import.meta.url).href
} catch {
  floorplanImg = null
}

export default function MapPage({ zones, onZoneSelect }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F0F0] font-['Pretendard']">
      {/* 헤더 */}
      <header className="h-14 px-6 flex items-center justify-between bg-white border-b border-[#D6D6D6]">
        <span className="font-semibold text-sm tracking-widest">화이트스페이스 랩</span>
        <span className="text-sm text-[#515151]">퍼시스 비즈니스 허브 여의도</span>
      </header>

      {/* 도면 영역 */}
      <main className="flex-1 flex items-center justify-center p-4 lg:p-8 pb-14">
        <div className="max-w-5xl w-full mx-auto">
          <div className="relative w-full aspect-[4/3]">
            {floorplanImg ? (
              <img
                src={floorplanImg}
                className="w-full h-full object-contain"
                alt="쇼룸 도면"
              />
            ) : (
              <div className="bg-stone-100 w-full h-full" />
            )}

            {zones &&
              zones.map((zone) => (
                <ZoneButton
                  key={zone.id}
                  label={zone.label}
                  position={zone.position}
                  onClick={() => onZoneSelect(zone.id)}
                />
              ))}
          </div>
        </div>
      </main>
    </div>
  )
}
