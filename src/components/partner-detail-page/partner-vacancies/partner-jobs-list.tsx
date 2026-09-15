import React from "react";
import type { Job } from "../../../types";
import { useJobFilters } from "../../../hooks/useJobFilters";
import Header from "./header";
import PartnerJobSearch from "./partner-job-search";
import PartnerJobFilter from "./partner-job-filter";
import Tag from "../../../UI/tag";
import IndustryTag from "../../../UI/industry-tag";
import Perk from "../../../UI/perk";
import {
  Bookmark,
  Briefcase,
  Hotel,
  Languages,
  Laptop,
  MapPin,
  TrendingUpDown,
} from "lucide-react";
import PartnerJobCard from "./partner-job-card";

export default function PartnerJobsList({ jobs }: { jobs: Job[] }) {
  const { filteredJobs, industry, setIndustry, searchValue, setSearchValue } =
    useJobFilters(jobs);

  if (!filteredJobs) return null;

  return (
    <>
      <div className="w-full">
        <Header jobsCount={jobs.length} showedJobs={filteredJobs.length} />
        <div className="flex items-center gap-4 mt-8">
          <PartnerJobSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <PartnerJobFilter industry={industry} setIndustry={setIndustry} />
        </div>
        <div className="grid grid-cols-1 gap-6 mt-8">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => <PartnerJobCard key={job.id} job={job} />)
          ) : (
            <p className="text-center text-brand-secondary font-bold text-xl mt-10">
              За вашим пошуком не знайдено результатів
            </p>
          )}
        </div>
      </div>
    </>
  );
}
