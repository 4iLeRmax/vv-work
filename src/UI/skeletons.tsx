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
      <div></div>
    </>
  );
}
