import { useState } from 'react'
import { saveLead } from '../lib/saveLead'

function OnboardingPage({ onStart, onGuest }) {
  const [name, setName] = useState('')
  const [org, setOrg] = useState('')

  const isReady = name.trim().length > 0

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isReady) return
    await saveLead({ name: name.trim(), org: org.trim(), guestMode: false })
    onStart(name.trim(), org.trim())
  }

  const handleGuest = async () => {
    await saveLead({ name: 'Guest', org: '', guestMode: true })
    onGuest()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#353535] to-[#282828]">
      <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-8 max-w-md w-full mx-4">
        {/* 브랜드 */}
        <div className="mb-8 text-center">
          <p className="text-white/60 text-xs tracking-widest uppercase mb-2">
            화이트스페이스 랩
          </p>
          <h1 className="text-white text-2xl font-semibold leading-snug mb-2">
            퍼시스 비즈니스 허브 여의도
          </h1>
          <p className="text-white/70 text-sm">
            셀프 가이드에 오신 것을 환영합니다
          </p>
        </div>

        {/* 입력 폼 */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <label className="text-white/80 text-sm block">
              이름 <span className="text-white/60">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="성함을 입력해 주세요"
              className="w-full border-b border-white/40 bg-transparent text-white placeholder-white/50 focus:border-white outline-none py-2 text-sm transition-colors duration-200"
            />
          </div>

          <div className="space-y-1">
            <label className="text-white/80 text-sm block">
              소속 / 관심사{' '}
              <span className="text-white/40 text-xs">(선택)</span>
            </label>
            <input
              type="text"
              value={org}
              onChange={(e) => setOrg(e.target.value)}
              placeholder="예: 디자인팀, 스타트업, 인테리어"
              className="w-full border-b border-white/40 bg-transparent text-white placeholder-white/50 focus:border-white outline-none py-2 text-sm transition-colors duration-200"
            />
          </div>

          <button
            type="submit"
            disabled={!isReady}
            className={`w-full py-3 rounded-xl text-sm font-medium transition-all duration-200
              ${
                isReady
                  ? 'bg-white text-stone-900 hover:bg-white/90 cursor-pointer'
                  : 'bg-white/30 text-white/50 opacity-50 cursor-not-allowed'
              }`}
          >
            가이드 시작하기
          </button>
        </form>

        {/* 게스트 링크 */}
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={handleGuest}
            className="text-white/60 text-sm underline underline-offset-2 hover:text-white/80 transition-colors duration-200 cursor-pointer"
            onClick={handleGuest}
          >
            Guest로 둘러보기 →
          </button>
        </div>
      </div>
    </div>
  )
}

export default OnboardingPage
