import React from "react";

import { useState } from "react";
import Tag from "../UI/tag";
import { jobs } from "../../data/jobs.data";
import RecommendedJobCard from "./recommended-job-card";
import clsx from "clsx";
import type { JobCategory } from "../../types";

const CATEGORIES = ["Усі", "Будівництво", "Логістика", "IT"] as const;

export default function RecommendedJobs() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("Усі");

  const filteredJobs = (
    active === "Усі" ? jobs : jobs.filter((job) => job.category === active)
  ).slice(0, 3);

  return (
    <section className="bg-primary px-20 py-25">
      <div className="flex items-end justify-between">
        <div className="flex flex-col items-start gap-4">
          <Tag firstColor="accent" secondColor="accent">
            Актуальні вакансії
          </Tag>
          <h2 className="text-2xl font-bold text-brand-primary sm:text-4xl">
            Свіжі пропозиції роботи
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-1 rounded-xl border border-bor-primary bg-white p-1 sm:flex-nowrap">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={clsx(
                "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap",
                {
                  "bg-brand-accent text-white": active === category,
                  "text-brand-secondary hover:bg-primary hover:text-brand-accent":
                    active !== category,
                },
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:mt-8">
        {filteredJobs.map((job) => (
          <RecommendedJobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}
