export default function ProductCard({ name, imageUrl, price }) {
  return (
    <div className="w-36 flex-shrink-0">
      <img
        src={imageUrl}
        alt={name}
        className="w-36 h-36 object-cover rounded-xl"
      />
      <p className="text-sm font-medium text-[#282828] mt-2 leading-tight">{name}</p>
      <p className="text-sm text-[#515151] mt-0.5">{price.toLocaleString('ko-KR')}원</p>
    </div>
  );
}
