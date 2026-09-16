import Container from "./container";

export function PartnersListSkeleton() {
  return (
    <section className="py-10 min-[768px]:py-14 min-[1440px]:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-6 min-[768px]:grid-cols-2 min-[1280px]:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-full h-96 min-[1440px]:h-120 rounded-xl bg-bor-primary"
            ></div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function RecommendedJobsSkeleton() {
  return (
    <div className="flex flex-col gap-4 mt-8">
      <div className="w-full h-40 rounded-xl bg-bor-primary"></div>
      <div className="w-full h-40 rounded-xl bg-bor-primary"></div>
      <div className="w-full h-40 rounded-xl bg-bor-primary"></div>
    </div>
  );
}

export function PartnerVacanciesSkeleton() {
  return (
    <section className="bg-primary py-10 min-[768px]:py-12">
      <Container>
        <div className="flex flex-col items-start gap-8 min-[1440px]:flex-row min-[1440px]:gap-10">
          <div className="w-full flex flex-col items-center gap-8 min-[1440px]:w-95 min-[1440px]:shrink-0">
            <div className="w-full h-70 bg-bor-primary rounded-xl"></div>
            <div className="w-full h-50 bg-bor-primary rounded-xl"></div>
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-3 min-[768px]:flex-row min-[768px]:items-center min-[768px]:justify-between">
              <div className="w-full max-w-80 h-9 bg-bor-primary rounded-xl"></div>
              <div className="w-40 h-9 bg-bor-primary rounded-xl"></div>
            </div>
            <div className="flex flex-col gap-3 mt-6 min-[768px]:flex-row min-[768px]:items-center min-[768px]:gap-4">
              <div className="w-full h-12 bg-bor-primary rounded-xl"></div>
              <div className="w-full h-12 bg-bor-primary rounded-xl min-[768px]:w-60"></div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-8">
              <div className="rounded-2xl bg-bor-primary w-full h-96 min-[1440px]:h-120"></div>
              <div className="rounded-2xl bg-bor-primary w-full h-96 min-[1440px]:h-120"></div>
              <div className="rounded-2xl bg-bor-primary w-full h-96 min-[1440px]:h-120"></div>
              <div className="rounded-2xl bg-bor-primary w-full h-96 min-[1440px]:h-120"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function PartnerDetailPageSkeleton() {
  return (
    <section className="py-10 min-[768px]:py-14">
      <Container>
        <div className="flex flex-col items-start gap-8 min-[1440px]:flex-row min-[1440px]:justify-between min-[1440px]:gap-20">
          <div className="w-full h-56 rounded-xl bg-bor-primary min-[768px]:h-80 min-[1440px]:hidden"></div>

          <div className="w-full min-[1440px]:w-auto">
            <div className="flex items-center flex-wrap gap-3">
              <div className="w-20 h-6 rounded-md bg-bor-primary"></div>
              <div className="w-20 h-6 rounded-md bg-bor-primary"></div>
              <div className="w-20 h-6 rounded-md bg-bor-primary"></div>
            </div>
            <div className="flex items-center gap-3 mt-6 min-[768px]:mt-7">
              <div className="w-20 h-6 rounded-md bg-bor-primary"></div>
              <div className="w-20 h-6 rounded-md bg-bor-primary"></div>
            </div>
            <div className="mt-3 w-full max-w-80 h-10 rounded-md bg-bor-primary"></div>
            <div className="mt-6 w-full h-6 rounded-md bg-bor-primary min-[768px]:mt-7"></div>
            <div className="mt-2 w-3/5 h-6 rounded-md bg-bor-primary"></div>
            <div className="mt-6 flex flex-wrap items-center gap-4 min-[768px]:mt-7 min-[768px]:gap-8">
              <div className="w-28 h-12 rounded-md bg-bor-primary min-[768px]:w-35"></div>
              <div className="w-28 h-12 rounded-md bg-bor-primary min-[768px]:w-35"></div>
              <div className="w-28 h-12 rounded-md bg-bor-primary min-[768px]:w-35"></div>
            </div>
          </div>

          <div className="hidden w-120 h-80 rounded-xl bg-bor-primary min-[1440px]:block"></div>
        </div>
      </Container>
    </section>
  );
}
