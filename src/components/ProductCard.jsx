export default function ProductCard({ name, imageUrl, price }) {
  return (
    <div className="flex flex-col">
      <div className="w-full aspect-square overflow-hidden rounded-lg bg-[#F5F5F5]">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>
      <p className="text-[12px] font-medium text-[#282828] mt-2 leading-tight">{name}</p>
      <p className="text-[11px] text-[#515151] mt-0.5">{price.toLocaleString('ko-KR')}원</p>
    </div>
  );
}
