export default function SpaceComment({ comment = '' }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-[#D6D6D6]">
      <p className="text-[11px] font-semibold tracking-widest text-[#515151] uppercase mb-3">
        공간 분석 코멘트
      </p>
      <div className="border-l-2 border-[#282828] pl-4">
        <p className="text-[15px] text-[#282828] leading-relaxed">
          {comment}
        </p>
      </div>
    </div>
  );
}
