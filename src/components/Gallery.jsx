import { useState, useRef } from 'react';

export default function Gallery({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = (e) => {
    const idx = Math.round(e.target.scrollLeft / e.target.offsetWidth);
    setCurrentIndex(idx);
  };

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`gallery-${i}`}
            className="snap-center flex-shrink-0 w-full h-[280px] lg:h-[400px] object-cover"
            draggable={false}
          />
        ))}
      </div>

      {images.length > 1 && (
        <div className="flex gap-1.5 justify-center mt-3">
          {images.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === currentIndex ? 'bg-[#282828]' : 'bg-[#D6D6D6]'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
