export default function ZoneGalleryPage({ zone, onEnterDetail, onBack }) {
  if (!zone) return null

  const modules = zone.modules ?? []

  return (
    <div className="min-h-screen bg-[#F0F0F0] font-['Pretendard',sans-serif]">
      <header className="h-14 px-6 flex items-center gap-4 bg-white border-b border-[#D6D6D6]">
        <button
          onClick={onBack}
          className="text-[#282828] text-lg font-medium leading-none"
          aria-label="뒤로 가기"
        >
          ←
        </button>
        <span className="text-[16px] font-semibold text-[#282828]">{zone.label}</span>
      </header>

      <main className="p-4 lg:p-8">
        <p className="text-xs text-[#515151] tracking-widest uppercase mb-4">
          공간 구성 옵션을 선택하세요
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
          {modules.map((mod, index) => {
            const isCurrentSpace = index === modules.length - 1
            return (
              <button
                key={mod.id}
                onClick={onEnterDetail}
                className={`group relative overflow-hidden rounded-sm aspect-[4/3] focus:outline-none ${
                  isCurrentSpace ? 'ring-2 ring-[#282828]' : 'ring-1 ring-[#D6D6D6]'
                }`}
              >
                <img
                  src={mod.imageUrl}
                  alt={mod.label}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#282828]/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5 flex items-end justify-between">
                  <span className="text-white text-[11px] font-semibold leading-tight tracking-tight">
                    {mod.label}
                  </span>
                  {isCurrentSpace && (
                    <span className="bg-white text-[#282828] text-[9px] font-bold px-1.5 py-0.5 rounded-sm tracking-tight">
                      현재
                    </span>
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </main>
    </div>
  )
}
