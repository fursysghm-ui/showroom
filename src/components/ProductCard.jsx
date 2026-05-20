export default function ProductCard({ name, imageUrl, price }) {
  return (
    <div className="flex flex-col">
      <div className="w-full aspect-square overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-contain mix-blend-multiply"
        />
      </div>
      <p className="text-[10px] font-medium text-[#282828] mt-1 leading-tight">{name}</p>
      <p className="text-[10px] text-[#515151]">{price.toLocaleString('ko-KR')}원</p>
    </div>
  );
}
