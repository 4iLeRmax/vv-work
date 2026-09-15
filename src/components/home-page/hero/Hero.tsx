import React from "react";
import Tag from "../../../UI/tag";
import type { JobCategory } from "../../../types";
import HeroSearchContainer from "../../common/hero-search-container";
import Container from "../../../UI/container";

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
        <Container>
          <div className="flex w-full flex-col items-center gap-8 min-[768px]:gap-10">
            <div className="flex max-w-200 flex-col items-center gap-4 min-[768px]:gap-6">
              <Tag firstColor="accent" secondColor="accent">
                Платформа для працевлаштування в Європі
              </Tag>
              <h1 className="text-center text-3xl font-black min-[768px]:text-5xl min-[1440px]:text-6xl">
                Будуй кар'єру та бізнес у Європі з VV Work
              </h1>
              <p className="text-center text-base text-brand-secondary min-[768px]:text-lg">
                Швидкий пошук вакансій для кандидатів і найм перевіреного
                персоналу для роботодавців.
              </p>
            </div>
            <HeroSearchContainer />
            <div className="flex flex-col items-center gap-2 min-[768px]:flex-row min-[768px]:gap-1">
              <h2 className="text-brand-secondary">Популярні напрямки:</h2>
              <ul className="flex flex-wrap items-center justify-center gap-1">
                {categories.map((c) => (
                  <Tag firstColor="secondary" key={c}>
                    {c}
                  </Tag>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
