export default function Header({
  jobsCount,
  showedJobs,
}: {
  jobsCount: number;
  showedJobs: number;
}) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold text-brand-primary">
            Вакансії компанії
          </h1>
          <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-brand-accent/10 text-brand-accent text-xl font-bold">
            {jobsCount}
          </span>
        </div>
        <p className="text-brand-secondary">
          Показано <span>{showedJobs}</span> активні вакансії
        </p>
      </div>
    </>
  );
}
