import React from "react";
import Container from "../../UI/container";
import Tag from "../../UI/tag";

export default function ContactsHero() {
  return (
    <>
      <section className="pt-30 pb-20 bg-primary">
        <Container>
          <div className="flex flex-col items-center gap-6">
            <Tag firstColor="secondary">Ми завжди на зв'язку</Tag>
            <p>Зв'яжіться з нами</p>
            <p className="max-w-160 text-center">
              Маєте запитання про вакансії, партнерство чи працевлаштування?
              Наша команда готова допомогти вам на кожному кроці.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
