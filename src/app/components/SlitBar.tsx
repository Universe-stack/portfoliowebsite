const slitHeights = [18, 28, 14, 24, 20, 30, 16, 26, 18, 22, 14, 28, 20, 26, 18, 30, 16, 24, 14, 22, 18, 28, 20, 26, 16, 24, 18, 30, 14, 22, 20, 26, 18, 24, 16, 28, 20, 22, 18, 24];

export default function SlitBar() {
  return (
    <div className="w-full flex items-end justify-center gap-3 px-4 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12">
      {slitHeights.map((h, idx) => (
        <span
          key={idx}
          className="w-[2px] bg-[#d7d7d7] block rounded-full"
          style={{ height: `${h}px` }}
        />
      ))}
    </div>
  );
}