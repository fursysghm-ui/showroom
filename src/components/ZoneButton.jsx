export default function ZoneButton({ label, position, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ left: `${position.x}%`, top: `${position.y}%` }}
      className="group absolute -translate-x-1/2 -translate-y-1/2 bg-white/85 backdrop-blur-sm border border-white/60 rounded-sm px-3 py-1.5 hover:bg-[#282828] active:scale-95 transition-all duration-150"
    >
      <span className="text-[11px] font-semibold text-[#282828] tracking-tight whitespace-nowrap group-hover:text-white">
        {label}
      </span>
    </button>
  );
}
