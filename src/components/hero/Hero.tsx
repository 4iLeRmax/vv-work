import React from "react";
import Tag from "../UI/tag";
import type { JobCategory } from "../../types";
import HeroSearchContainer from "./hero-search-container";

const categories: JobCategory[] = [
  "Будівництво",
  "Виробництво",
  "Логістика",
  "IT",
  "Водії",
];

export default function Hero() {
  return (
    <>
      <section className="bg-primary flex justify-center pt-30 pb-20">
        <div className="flex flex-col items-center gap-10">
          {/* //============================================== */}
          <div className="flex flex-col items-center gap-6 max-w-200">
            <Tag firstColor="accent" secondColor="accent">
              Платформа для працевлаштування в Європі
            </Tag>
            <h1 className="text-6xl text-center font-black">
              Будуй кар'єру та бізнес у Європі з VV Work
            </h1>
            <p className="text-lg text-center text-brand-secondary">
              Швидкий пошук вакансій для кандидатів і найм перевіреного
              персоналу для роботодавців.
            </p>
          </div>
          {/* ============================================== */}
          <HeroSearchContainer />
          {/* //============================================== */}
          <div className="flex items-center gap-1">
            <h2 className="text-brand-secondary">Популярні напрямки:</h2>
            <ul className="flex items-center gap-1">
              {categories.map((c) => (
                <Tag firstColor="secondary" key={c}>
                  {c}
                </Tag>
              ))}
            </ul>
          </div>
          {/* //============================================== */}
        </div>
      </section>
    </>
  );
}
/* Швидкий пошук вакансій для кандидатів і найм перевіреного персоналу для роботодавців. */
