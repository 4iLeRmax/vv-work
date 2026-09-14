import React from "react";

export default function DirectionCard({
  info,
}: {
  info: { img: string; title: string };
}) {
  const { img, title } = info;
  return (
    <>
      <div className="w-60 h-80 rounded-2xl overflow-hidden relative">
        <img src={img} alt={title} className="w-full h-full object-cover" />
        <h1 className="absolute bottom-0 left-0 p-5 text-xl font-semibold text-white">
          {title}
        </h1>
      </div>
    </>
  );
}
