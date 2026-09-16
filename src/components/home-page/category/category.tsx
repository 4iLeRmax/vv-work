import Tag from "../../../UI/tag";
import Categories from "./categories";
import Container from "../../../UI/container";

export default function Category() {
  return (
    <section className="py-14 min-[768px]:py-18 min-[1440px]:py-25">
      <Container>
        <div className="flex flex-col items-center">
          <Tag firstColor="accent" secondColor="accent">
            Категорії вакансій
          </Tag>
          <h1 className="text-2xl min-[768px]:text-3xl min-[1440px]:text-4xl font-bold mt-5 text-brand-primary text-center">
            Знайдіть роботу за напрямком
          </h1>
          <p className="mt-4 text-brand-secondary text-center">
            Оберіть категорію, яка відповідає вашому досвіду та навичкам
          </p>
        </div>
        <Categories />
      </Container>
    </section>
  );
}
