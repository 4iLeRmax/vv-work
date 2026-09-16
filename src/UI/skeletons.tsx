import Container from "./container";

export function PartnersListSkeleton() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid grid-cols-3 gap-6">
          <div className="w-full h-120 rounded-xl bg-bor-primary"></div>
          <div className="w-full h-120 rounded-xl bg-bor-primary"></div>
          <div className="w-full h-120 rounded-xl bg-bor-primary"></div>
          <div className="w-full h-120 rounded-xl bg-bor-primary"></div>
          <div className="w-full h-120 rounded-xl bg-bor-primary"></div>
          <div className="w-full h-120 rounded-xl bg-bor-primary"></div>
          <div className="w-full h-120 rounded-xl bg-bor-primary"></div>
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
    <section className="bg-primary py-12">
      <Container>
        <div className="flex items-start gap-10">
          <div className="w-95 shrink-0 flex flex-col items-center gap-8">
            <div className="w-full h-70 bg-bor-primary rounded-xl"></div>
            <div className="w-full h-50 bg-bor-primary rounded-xl"></div>
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between">
              <div className="w-80 h-9 bg-bor-primary rounded-xl"></div>
              <div className="w-40 h-9 bg-bor-primary rounded-xl"></div>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <div className="w-full h-12 bg-bor-primary rounded-xl"></div>
              <div className="w-60 h-12 bg-bor-primary rounded-xl"></div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-8">
              <div className="rounded-2xl bg-bor-primary w-full h-120"></div>
              <div className="rounded-2xl bg-bor-primary w-full h-120"></div>
              <div className="rounded-2xl bg-bor-primary w-full h-120"></div>
              <div className="rounded-2xl bg-bor-primary w-full h-120"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function PartnerDetailPageSkeleton() {
  return (
    <>
      <section className="py-14">
        <Container>
          <div className="flex items-start justify-between gap-20">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-20 h-6 rounded-md bg-bor-primary"></div>
                <div className="w-20 h-6 rounded-md bg-bor-primary"></div>
                <div className="w-20 h-6 rounded-md bg-bor-primary"></div>
              </div>
              <div className="flex items-center gap-3 mt-7">
                <div className="w-20 h-6 rounded-md bg-bor-primary"></div>
                <div className="w-20 h-6 rounded-md bg-bor-primary"></div>
              </div>
              <div className="mt-3 w-80 h-10 rounded-md bg-bor-primary"></div>
              <div className="mt-7 w-full h-6 rounded-md bg-bor-primary"></div>
              <div className="mt-2 w-3/5 h-6 rounded-md bg-bor-primary"></div>
              <div className="mt-7 flex items-center gap-8">
                <div className="w-35 h-12 rounded-md bg-bor-primary"></div>
                <div className="w-35 h-12 rounded-md bg-bor-primary"></div>
                <div className="w-35 h-12 rounded-md bg-bor-primary"></div>
              </div>
            </div>
            <div className="w-120 h-80 rounded-xl bg-bor-primary"></div>
          </div>
        </Container>
      </section>
    </>
  );
}
