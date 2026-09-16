import { useState } from "react";
import Tag from "../../../UI/tag";
import clsx from "clsx";
import Container from "../../../UI/container";
import RecommendedJobsList from "./recommended-jobs-list";

const CATEGORIES = ["Усі", "Будівництво", "Логістика", "IT"] as const;

export default function RecommendedJobs() {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof CATEGORIES)[number]>("Усі");

  return (
    <section className="bg-primary py-14 min-[768px]:py-18 min-[1440px]:py-25">
      <Container>
        <div className="flex flex-col items-start gap-6 min-[768px]:flex-row min-[768px]:items-end min-[768px]:justify-between min-[768px]:gap-4">
          <div className="flex flex-col items-start gap-4">
            <Tag firstColor="accent" secondColor="accent">
              Актуальні вакансії
            </Tag>
            <h2 className="text-2xl font-bold text-brand-primary min-[768px]:text-3xl min-[1440px]:text-4xl">
              Свіжі пропозиції роботи
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-1 rounded-xl border border-bor-primary bg-white p-1 min-[1440px]:flex-nowrap">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={clsx(
                  "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap",
                  {
                    "bg-brand-accent text-white": selectedCategory === category,
                    "text-brand-secondary hover:bg-primary hover:text-brand-accent":
                      selectedCategory !== category,
                  },
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <RecommendedJobsList selectedCategory={selectedCategory} />
      </Container>
    </section>
  );
}
