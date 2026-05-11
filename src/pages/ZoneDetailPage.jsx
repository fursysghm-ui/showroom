import { useState } from 'react'
import Gallery from '../components/Gallery'
import SpaceComment from '../components/SpaceComment'
import ProductCard from '../components/ProductCard'
import CTAButton from '../components/CTAButton'
import ConsultingModal from '../components/ConsultingModal'

export default function ZoneDetailPage({ zone, onBack }) {
  const [modalOpen, setModalOpen] = useState(false)

  if (!zone) return null

  const { label, images = [], comment, products = [] } = zone

  return (
    <div className="min-h-screen bg-[#F0F0F0] pb-14 font-['Pretendard',sans-serif]">
      {/* 헤더 */}
      <header className="h-14 px-6 flex items-center gap-4 bg-white border-b border-[#D6D6D6]">
        <button
          onClick={onBack}
          className="text-[#282828] text-lg font-medium leading-none"
          aria-label="뒤로 가기"
        >
          ←
        </button>
        <span className="text-[16px] font-semibold text-[#282828]">{label}</span>
      </header>

      {/* 모바일: 1단 / lg: 2단 */}
      <div className="lg:flex lg:items-start">
        {/* 좌측: Gallery + 가구 리스트 (lg: 60%) */}
        <div className="lg:w-[60%]">
          <Gallery images={images} />

          {/* 가구 리스트 */}
          <div className="px-6 pt-6">
            <p className="text-sm font-semibold text-[#515151] tracking-widest uppercase mb-4">
              이 공간을 구성하는 가구
            </p>
            <div
              className="flex gap-4 overflow-x-auto pb-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  imageUrl={product.imageUrl}
                  price={product.price}
                />
              ))}
            </div>
          </div>

          {/* 모바일 전용 CTAButton */}
          <div className="lg:hidden">
            <CTAButton onClick={() => setModalOpen(true)} />
          </div>
        </div>

        {/* 우측: SpaceComment + CTAButton (lg: 40%) */}
        <div className="px-6 pt-6 lg:w-[40%] lg:sticky lg:top-0 lg:px-8 lg:pt-8 lg:flex lg:flex-col lg:gap-6">
          <SpaceComment comment={comment} />

          <div className="hidden lg:block">
            <CTAButton onClick={() => setModalOpen(true)} />
          </div>
        </div>
      </div>

      {/* 컨설팅 모달 */}
      {modalOpen && (
        <ConsultingModal zone={zone} onClose={() => setModalOpen(false)} />
      )}
    </div>
  )
}
