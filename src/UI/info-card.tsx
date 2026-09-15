export default function InfoCard({
  data,
}: {
  data: { info: string; value: string | number; icon: React.ReactNode };
}) {
  return (
    <>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-md text-brand-accent bg-brand-accent/10 flex items-center justify-center">
          {data.icon}
        </div>
        <div className="h-12">
          <h2 className="text-brand-primary font-bold">{data.value}</h2>
          <p className="text-brand-secondary text-sm">{data.info}</p>
        </div>
      </div>
    </>
  );
}
