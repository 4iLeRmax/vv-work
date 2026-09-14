import React from "react";
import type { TCategoryCards } from "./categories";

interface CategoryCardProps {
  data: TCategoryCards;
}

export default function CategoryCard({ data }: CategoryCardProps) {
  return (
    <>
      <div className="p-7 rounded-2xl border border-brand-secondary">
        <div className="w-12 h-12 bg-brand-accent/20 rounded-xl flex items-center justify-center">
          {data.icon(24, "text-brand-accent")}
        </div>
        <h1 className="text-brand-primary text-xl font-bold mt-5">
          {data.title}
        </h1>
        <p className="text-brand-secondary mt-2">{data.description}</p>
      </div>
    </>
  );
}
