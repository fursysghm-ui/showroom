export default function NavBar({ onHome, onCallStaff }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-14 bg-[#282828] text-white grid grid-cols-2 z-50">
      <button
        onClick={onHome}
        className="flex items-center justify-center gap-2 border-r border-white/20 active:bg-white/10 transition-colors duration-150"
      >
        <span>🏠</span>
        <span className="text-sm font-medium">홈(도면)으로</span>
      </button>
      <button
        onClick={onCallStaff}
        className="flex items-center justify-center gap-2 active:bg-white/10 transition-colors duration-150"
      >
        <span>📞</span>
        <span className="text-sm font-medium">직원 호출하기</span>
      </button>
    </nav>
  );
}
