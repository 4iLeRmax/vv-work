import React from "react";
import Tag from "../UI/tag";
import Categories from "./categories";

export default function Category() {
  return (
    <>
      <section className="px-20 py-25">
        <div className="flex flex-col items-center">
          <Tag firstColor="accent" secondColor="accent">
            Категорії вакансій
          </Tag>
          <h1 className="text-4xl font-bold mt-5 text-brand-primary">
            Знайдіть роботу за напрямком
          </h1>
          <p className="mt-4 text-brand-secondary">
            Оберіть категорію, яка відповідає вашому досвіду та навичкам
          </p>
        </div>
        <Categories />
      </section>
    </>
  );
}
