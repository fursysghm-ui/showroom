import ZoneButton from '../components/ZoneButton'
import logoImg from '../assets/logo-whitespace-lab.jpg'
import floorplanImg from '../assets/floorplan.jpg'

export default function MapPage({ zones, onZoneSelect }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F0F0] font-['Pretendard']">
      {/* 헤더 */}
      <header className="h-14 px-6 flex items-center justify-between bg-white border-b border-[#D6D6D6]">
        <img src={logoImg} alt="Whitespace Lab" className="h-14 w-auto object-contain" />
        <span className="text-sm text-[#515151]">퍼시스 비즈니스 허브 여의도</span>
      </header>

      {/* 도면 영역 */}
      <main className="flex-1 flex items-center justify-center p-4 lg:p-8 pb-14">
        <div className="max-w-5xl w-full mx-auto">
          <div className="relative w-full aspect-[4/3]">
            <img
              src={floorplanImg}
              className="w-full h-full object-contain"
              alt="쇼룸 도면"
            />

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
