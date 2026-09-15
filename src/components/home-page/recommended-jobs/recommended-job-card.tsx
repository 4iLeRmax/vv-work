import { ArrowRight, Building2, MapPin } from "lucide-react";
import type { Job } from "../../../types";
import Tag from "../../../UI/tag";

interface RecommendedJobCardProps {
  job: Job;
}

export default function RecommendedJobCard({ job }: RecommendedJobCardProps) {
  return (
    <div className="rounded-2xl border border-bor-primary bg-white p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h3 className="text-base font-bold text-brand-primary sm:text-lg">
            {job.title}
          </h3>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-brand-secondary">
            <span className="flex items-center gap-1.5">
              <Building2 className="h-4 w-4 shrink-0" strokeWidth={1.75} />
              {job.partnerSlug}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 shrink-0" strokeWidth={1.75} />
              {job.location.country},{job.location.city}
            </span>
          </div>
        </div>
        <Tag firstColor="accent" secondColor="accent">
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              <span>{job.salary.min}</span>
              <span>-</span>
              <span>{job.salary.max}</span>
            </div>

            <div className="flex items-center">
              <span>{job.salary.currency}</span>
              <span>/</span>
              <span>{job.salary.period}</span>
            </div>
          </div>
        </Tag>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-brand-secondary">
        {job.description}
      </p>

      <hr className="my-4 border-bor-primary" />

      <div className="flex items-center justify-between">
        <span className="rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-brand-secondary">
          {job.employmentType}
        </span>
        <button className="flex items-center gap-1.5 text-sm font-semibold text-brand-accent transition-colors hover:text-orange-700">
          Детальніше
          <ArrowRight className="h-4 w-4" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
