import { useState } from 'react'
import Gallery from '../components/Gallery'
import ProductCard from '../components/ProductCard'
import ConsultingModal from '../components/ConsultingModal'

export default function ZoneDetailPage({ zone, onBack }) {
  const [modalOpen, setModalOpen] = useState(false)

  if (!zone) return null

  const { label, images = [], layoutImage, comment, products = [] } = zone
  const totalPrice = products.reduce((sum, p) => sum + p.price, 0)

  return (
    <div className="min-h-screen bg-[#F0F0F0] pb-16 font-['Pretendard',sans-serif]">
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

      <div className="p-4 md:p-5 flex flex-col gap-4">

        {/* 상단: 모듈 이미지 | 평면도 — 아이패드 세로(md 768px+)부터 2열 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* 좌상: 공간 모듈 이미지 */}
          <div className="bg-white rounded-sm overflow-hidden">
            <p className="px-4 pt-4 pb-2 text-[11px] font-semibold text-[#515151] tracking-widest uppercase">
              공간 모듈 이미지
            </p>
            <Gallery images={images} />
          </div>

          {/* 우상: 공간 레이아웃 (4:3 비율) */}
          <div className="bg-white rounded-sm overflow-hidden">
            <p className="px-4 pt-4 pb-2 text-[11px] font-semibold text-[#515151] tracking-widest uppercase">
              공간 레이아웃
            </p>
            <div className="w-full aspect-[4/3]">
              {layoutImage ? (
                <img
                  src={layoutImage}
                  alt="공간 레이아웃"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[#F0F0F0] flex items-center justify-center text-sm text-[#515151]">
                  레이아웃 이미지 준비 중
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 하단: 가구 아이템 | 설명 + 총금액 + CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">

          {/* 좌하: 구성 가구 */}
          <div className="bg-white rounded-sm p-5">
            <p className="text-[11px] font-semibold text-[#515151] tracking-widest uppercase mb-4">
              이 공간을 구성하는 가구
            </p>
            <div className="grid grid-cols-6 gap-2">
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

          {/* 우하: 공간 설명 + 총금액 + CTA */}
          <div className="bg-white rounded-sm p-5 flex flex-col gap-5">
            {/* 공간 설명 */}
            <div>
              <p className="text-[11px] font-semibold text-[#515151] tracking-widest uppercase mb-3">
                공간 분석 코멘트
              </p>
              <div className="border-l-2 border-[#282828] pl-4">
                <p className="text-[14px] text-[#282828] leading-relaxed">{comment}</p>
              </div>
            </div>

            {/* 총 금액 */}
            <div className="border-t border-[#D6D6D6] pt-4 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-[#515151] tracking-widest uppercase">
                구성 가구 총 금액
              </span>
              <span className="text-[20px] font-bold text-[#282828]">
                {totalPrice.toLocaleString('ko-KR')}원
              </span>
            </div>

            {/* CTA */}
            <button
              onClick={() => setModalOpen(true)}
              className="w-full bg-[#282828] text-white text-[15px] font-semibold py-4 rounded-full hover:bg-[#515151] active:scale-95 transition-all duration-150"
            >
              이 공간 구성으로 컨설팅 받기 →
            </button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <ConsultingModal zone={zone} onClose={() => setModalOpen(false)} />
      )}
    </div>
  )
}
