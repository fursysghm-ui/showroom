export default function CTAButton({ onClick }) {
  return (
    <div className="sticky bottom-14 z-10 px-6 pt-4 pb-4 w-full bg-gradient-to-t from-white to-transparent">
      <button
        onClick={onClick}
        className="w-full bg-[#282828] text-white text-[15px] font-semibold py-4 rounded-full"
      >
        이 공간 구성으로 컨설팅 받기 →
      </button>
    </div>
  )
}
