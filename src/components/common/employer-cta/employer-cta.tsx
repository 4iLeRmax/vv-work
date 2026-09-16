import Container from "../../../UI/container";

export default function EmployerCTA() {
  return (
    <section className="py-12 min-[768px]:py-16 min-[1440px]:py-20 bg-white">
      <Container>
        <div className="flex flex-col items-start gap-6 bg-brand-primary rounded-3xl p-6 min-[768px]:p-10 min-[768px]:flex-row min-[768px]:items-center min-[768px]:justify-between min-[1440px]:p-16">
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-2xl font-bold min-[768px]:text-3xl">
              Потрібні працівники?
            </h1>
            <p className="text-brand-secondary max-w-160">
              VV Work допоможе знайти перевірених кандидатів для вашого бізнесу
              в Європі. Швидко, надійно, без зайвих витрат.
            </p>
          </div>
          <button className="w-full px-8 py-4 rounded-xl bg-brand-accent text-primary min-[768px]:w-auto shrink-0">
            Знайти працівника
          </button>
        </div>
      </Container>
    </section>
  );
}
