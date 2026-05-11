import { useState } from 'react'

const FORMSPREE_URL = 'https://formspree.io/f/xkoykyba'

const ZONE_OPTIONS = [
  'A. 오픈 세미나존',
  'B. 포커스 워크존',
  'C. 라운지 존',
  'D. 중역존',
  '아직 미정',
]

export default function ConsultingModal({ zone, onClose }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    zone: zone?.label ?? '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="bg-white w-full sm:max-w-md sm:mx-4 rounded-t-2xl sm:rounded-lg shadow-2xl max-h-[92vh] flex flex-col font-['Pretendard',sans-serif]">

        {/* 헤더 */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D6D6D6] shrink-0">
          <div>
            <p className="text-[15px] font-bold text-[#282828]">공간 컨설팅 상담 신청</p>
            <p className="text-[11px] text-[#515151] mt-0.5">영업일 1일 이내 담당자가 연락드립니다</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F0F0F0] text-[#515151] transition-colors text-lg"
          >
            ✕
          </button>
        </div>

        {/* 성공 상태 */}
        {status === 'success' ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-center">
            <div className="w-14 h-14 rounded-full bg-[#282828] flex items-center justify-center mb-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-[18px] font-bold text-[#282828] mb-2">상담이 접수되었습니다</p>
            <p className="text-sm text-[#515151] leading-relaxed mb-8">
              성공적으로 상담이 접수되었습니다.<br />직원이 곧 연락드리겠습니다.
            </p>
            <button
              onClick={onClose}
              className="w-full bg-[#282828] text-white py-3.5 rounded-full text-sm font-semibold"
            >
              확인
            </button>
          </div>
        ) : (
          /* 폼 */
          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-4">

            <div>
              <label className="block text-[11px] font-semibold text-[#515151] tracking-widest uppercase mb-1.5">
                이름 <span className="text-[#282828]">*</span>
              </label>
              <input
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="홍길동"
                className="w-full border border-[#D6D6D6] rounded-sm px-3.5 py-2.5 text-sm text-[#282828] placeholder-[#ABABAB] focus:outline-none focus:border-[#282828] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[#515151] tracking-widest uppercase mb-1.5">
                연락처 <span className="text-[#282828]">*</span>
              </label>
              <input
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="010-0000-0000"
                className="w-full border border-[#D6D6D6] rounded-sm px-3.5 py-2.5 text-sm text-[#282828] placeholder-[#ABABAB] focus:outline-none focus:border-[#282828] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[#515151] tracking-widest uppercase mb-1.5">
                관심 공간
              </label>
              <select
                name="zone"
                value={form.zone}
                onChange={handleChange}
                className="w-full border border-[#D6D6D6] rounded-sm px-3.5 py-2.5 text-sm text-[#282828] focus:outline-none focus:border-[#282828] transition-colors bg-white appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23515151' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center' }}
              >
                <option value="">선택해 주세요</option>
                {ZONE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[#515151] tracking-widest uppercase mb-1.5">
                문의 내용
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="공간 구성 관련 문의사항을 자유롭게 입력해 주세요."
                rows={4}
                className="w-full border border-[#D6D6D6] rounded-sm px-3.5 py-2.5 text-sm text-[#282828] placeholder-[#ABABAB] focus:outline-none focus:border-[#282828] transition-colors resize-none"
              />
            </div>

            {status === 'error' && (
              <p className="text-red-500 text-xs text-center -mt-1">
                전송 중 오류가 발생했습니다. 다시 시도해 주세요.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-[#282828] text-white text-[14px] font-semibold py-3.5 rounded-full disabled:opacity-40 transition-opacity mb-2 mt-1"
            >
              {status === 'sending' ? '전송 중...' : '상담 신청하기 →'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
