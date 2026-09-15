import React from "react";
const STATS = [
  { value: "94%", label: "Успішне працевлаштування" },
  { value: "4.8/5", label: "Оцінка від кандидатів" },
  { value: "1,200+", label: "Вакансій щомісяця" },
  { value: "12хв", label: "Середній час відгуку" },
];

export default function Statistics() {
  return (
    <>
      <section className="bg-white px-20 py-16">
        <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-brand-accent sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-brand-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
