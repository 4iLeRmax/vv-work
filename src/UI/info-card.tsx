export default function InfoCard({
  data,
}: {
  data: { info: string; value: string | number; icon: React.ReactNode };
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 min-[768px]:w-12 min-[768px]:h-12 rounded-md text-brand-accent bg-brand-accent/10 flex items-center justify-center shrink-0">
        {data.icon}
      </div>
      <div>
        <h2 className="text-brand-primary font-bold text-sm min-[768px]:text-base">
          {data.value}
        </h2>
        <p className="text-brand-secondary text-xs min-[768px]:text-sm">
          {data.info}
        </p>
      </div>
    </div>
  );
}
