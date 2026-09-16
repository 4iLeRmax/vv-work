import type { Job } from "../../../types";
import { useJobFilters } from "../../../hooks/useJobFilters";
import Header from "./header";
import PartnerJobSearch from "./partner-job-search";
import PartnerJobFilter from "./partner-job-filter";
import PartnerJobCard from "./partner-job-card";

export default function PartnerJobsList({ jobs }: { jobs: Job[] }) {
  const { filteredJobs, industry, setIndustry, searchValue, setSearchValue } =
    useJobFilters(jobs);

  if (!filteredJobs) return null;

  return (
    <div className="w-full">
      <Header jobsCount={jobs.length} showedJobs={filteredJobs.length} />
      <div className="flex flex-col gap-3 mt-6 min-[768px]:flex-row min-[768px]:items-center min-[768px]:gap-4 min-[768px]:mt-8">
        <PartnerJobSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <PartnerJobFilter industry={industry} setIndustry={setIndustry} />
      </div>
      <div className="grid grid-cols-1 gap-6 mt-6 min-[768px]:mt-8">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <PartnerJobCard key={job.id} job={job} />)
        ) : (
          <p className="text-center text-brand-secondary font-bold text-lg mt-10 min-[768px]:text-xl">
            За вашим пошуком не знайдено результатів
          </p>
        )}
      </div>
    </div>
  );
}
