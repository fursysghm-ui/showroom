export default function ZoneButton({ label, position, onClick }) {
  return (
    <div
      style={{ left: `${position.x}%`, top: `${position.y}%` }}
      className="absolute -translate-x-1/2 -translate-y-1/2"
    >
      <div className="absolute -inset-6 rounded-full bg-[#515151]/20 blur-lg pointer-events-none" />
      <button
        onClick={onClick}
        className="group relative bg-white border border-[#282828]/20 rounded-sm px-3 py-1.5 shadow-md hover:bg-[#282828] active:scale-95 transition-all duration-150"
      >
        <span className="text-[11px] font-semibold text-[#282828] tracking-tight whitespace-nowrap group-hover:text-white">
          {label}
        </span>
      </button>
    </div>
  )
}
