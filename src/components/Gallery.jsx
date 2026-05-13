import { useState, useRef } from 'react'

export default function Gallery({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef(null)

  const handleScroll = (e) => {
    const idx = Math.round(e.target.scrollLeft / e.target.offsetWidth)
    setCurrentIndex(idx)
  }

  return (
    <div className="w-full">
      {/* 4:3 비율 고정 래퍼 */}
      <div className="w-full aspect-[4/3] overflow-hidden relative">
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="absolute inset-0 flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`gallery-${i}`}
              className="snap-center flex-shrink-0 w-full h-full object-cover"
              draggable={false}
            />
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <div className="flex gap-1.5 justify-center mt-3">
          {images.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === currentIndex ? 'bg-[#282828]' : 'bg-[#D6D6D6]'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
