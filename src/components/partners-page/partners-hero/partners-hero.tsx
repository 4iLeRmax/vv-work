import React from "react";
import HeroSearchContainer from "../../common/hero-search-container";
import type { JobCategory } from "../../../types";
import Tag from "../../../UI/tag";
import Container from "../../../UI/container";

const categories: JobCategory[] = [
  "Будівництво",
  "Виробництво",
  "Логістика",
  "IT",
  "Водії",
];

export default function PartnersHero() {
  return (
    <>
      <section className="bg-primary flex justify-center pt-30 pb-20">
        <Container>
          <div className="flex w-full flex-col items-center gap-8 min-[768px]:gap-10">
            <div className="flex max-w-200 flex-col items-center gap-4 min-[768px]:gap-6">
              <Tag firstColor="accent" secondColor="accent">
                Наші партнери в Європі
              </Tag>
              <h1 className="text-center text-3xl font-black min-[768px]:text-5xl min-[1440px]:text-6xl">
                Наші партнери
              </h1>
              <p className="text-center text-base text-brand-secondary min-[768px]:text-lg">
                Перевірені роботодавці в Європі, які пропонують офіційне
                працевлаштування та гідні умови праці.
              </p>
            </div>
            <HeroSearchContainer />
          </div>
        </Container>
      </section>
    </>
  );
}
