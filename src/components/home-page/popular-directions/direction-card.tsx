export default function DirectionCard({
  info,
}: {
  info: { img: string; title: string };
}) {
  const { img, title } = info;
  return (
    <div className="w-full h-40 min-[768px]:h-56 min-[1440px]:h-80 rounded-2xl overflow-hidden relative">
      <img src={img} alt={title} className="w-full h-full object-cover" />
      <h1 className="absolute bottom-0 left-0 p-3 min-[768px]:p-4 min-[1440px]:p-5 text-base min-[768px]:text-lg min-[1440px]:text-xl font-semibold text-white">
        {title}
      </h1>
    </div>
  );
}
