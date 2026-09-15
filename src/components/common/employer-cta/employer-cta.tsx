import React from "react";
import Container from "../../../UI/container";

export default function EmployerCTA() {
  return (
    <>
      <section className="py-20 bg-white">
        <Container>
          <div className="flex items-center justify-between bg-brand-primary rounded-3xl p-16">
            <div className="flex flex-col gap-4">
              <h1 className="text-white text-3xl font-bold">
                Потрібні працівники?
              </h1>
              <p className="text-brand-secondary max-w-160">
                VV Work допоможе знайти перевірених кандидатів для вашого
                бізнесу в Європі. Швидко, надійно, без зайвих витрат.
              </p>
            </div>
            <button className="px-8 py-4 rounded-xl bg-brand-accent text-primary">
              Знайти працівника
            </button>
          </div>
        </Container>
      </section>
    </>
  );
}
