import React from "react";
import Tag from "../../../UI/tag";
import Container from "../../../UI/container";

const data = [
  {
    title: "Створіть профіль",
    description:
      "Зареєструйтесь та заповніть резюме з вашим досвідом та навичками для кращого пошуку.",
  },
  {
    title: "Оберіть вакансію",
    description:
      "Перегляньте актуальні пропозиції та подайте заявку на обрану позицію лише в один клік.",
  },
  {
    title: "Починайте працювати",
    description:
      "Отримайте підтвердження, візову підтримку та розпочніть роботу в успішній компанії.",
  },
];
export default function HowItWorks() {
  return (
    <>
      <section className="py-25 bg-primary">
        <Container>
          <div className="flex flex-col items-center">
            <Tag firstColor="accent" secondColor="accent">
              Як це працює
            </Tag>
            <h1 className="text-4xl font-bold mt-5 text-brand-primary">
              Простий шлях до роботи в Європі
            </h1>
            <p className="mt-4 text-brand-secondary">
              Три кроки до вашого нового робочого місця
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-14">
            {data.map((el, index) => (
              <div
                className="p-7 rounded-2xl border border-bor-primary bg-white"
                key={el.title}
              >
                <span className="text-brand-accent/20 text-5xl font-extrabold">
                  {`0${index + 1}`}
                </span>
                <h1 className="text-brand-primary text-xl font-bold mt-5">
                  {el.title}
                </h1>
                <p className="text-brand-secondary mt-2">{el.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
