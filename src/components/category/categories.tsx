import React from "react";
import CategoryCard from "./category-card";
import type { JobCategory } from "../../types";
import {
  Cog,
  HardHat,
  Laptop,
  Package,
  UtensilsCrossed,
  Van,
} from "lucide-react";

export type TCategoryCards = {
  icon: (size: number, className: string) => React.ReactNode;
  title: JobCategory;
  description: string;
};

const data: TCategoryCards[] = [
  {
    icon: (size, className) => <HardHat size={size} className={className} />,
    title: "Будівництво",
    description:
      "Монтаж, ремонт, облицювання та інші будівельні роботи на об'єктах у Європі.",
  },
  {
    icon: (size, className) => <Cog size={size} className={className} />,
    title: "Виробництво",
    description:
      "Оператори ліній, складання деталей, контроль якості та різноробочі на заводи.",
  },
  {
    icon: (size, className) => <Package size={size} className={className} />,
    title: "Логістика",
    description:
      "Склад, пакування, сортування товарів на сучасних розподільчих центрах.",
  },
  {
    icon: (size, className) => (
      <UtensilsCrossed size={size} className={className} />
    ),
    title: "Готельно-ресторанна сфера",
    description:
      "Кухарі, офіціанти, покоївки та інший персонал для ресторанів та готелів.",
  },
  {
    icon: (size, className) => <Laptop size={size} className={className} />,
    title: "IT",
    description:
      "Працевлаштування для Frontend, Backend, QA спеціалістів та розробників.",
  },
  {
    icon: (size, className) => <Van size={size} className={className} />,
    title: "Водії",
    description:
      "Робота для водіїв категорій B, C, CE на міжнародні та внутрішні перевезення.",
  },
];

export default function Categories() {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 mt-14">
        {data.map((el) => (
          <CategoryCard key={el.title} data={el} />
        ))}
      </div>
    </>
  );
}
