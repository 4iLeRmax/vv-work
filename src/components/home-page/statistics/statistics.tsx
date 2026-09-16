import Container from "../../../UI/container";

const STATS = [
  { value: "94%", label: "Успішне працевлаштування" },
  { value: "4.8/5", label: "Оцінка від кандидатів" },
  { value: "1,200+", label: "Вакансій щомісяця" },
  { value: "12хв", label: "Середній час відгуку" },
];

export default function Statistics() {
  return (
    <section className="bg-white px-4 py-10 min-[768px]:px-10 min-[768px]:py-12 min-[1440px]:px-20 min-[1440px]:py-16">
      <Container>
        <div className="grid grid-cols-2 gap-6 text-center min-[768px]:grid-cols-4 min-[768px]:gap-8">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-brand-accent min-[768px]:text-4xl min-[1440px]:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-brand-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
