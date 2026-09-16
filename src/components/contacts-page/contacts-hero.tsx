import Container from "../../UI/container";
import Tag from "../../UI/tag";

export default function ContactsHero() {
  return (
    <>
      <section className="pt-16 pb-12 min-[768px]:pt-20 min-[768px]:pb-16 min-[1440px]:pt-30 min-[1440px]:pb-20 bg-primary">
        <Container>
          <div className="flex flex-col items-center gap-4 min-[768px]:gap-5 min-[1440px]:gap-6">
            <Tag firstColor="secondary">Ми завжди на зв'язку</Tag>

            <p className="text-2xl min-[768px]:text-4xl min-[1440px]:text-5xl text-brand-primary font-bold text-center">
              Зв'яжіться з нами
            </p>

            <p className="max-w-[90%] min-[768px]:max-w-125 min-[1440px]:max-w-160 text-sm text-brand-secondary min-[768px]:text-base text-center">
              Маєте запитання про вакансії, партнерство чи працевлаштування?
              Наша команда готова допомогти вам на кожному кроці.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
