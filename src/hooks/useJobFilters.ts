import { useMemo, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import type { Job, JobCategory } from "../types";
import { useDebounce } from "./useDebounce";

const SEARCH_KEY = "q";
const INDUSTRY_KEY = "industry";

const ALL = "Усі" as const;

type TCategories = JobCategory | typeof ALL;

export function useJobFilters(jobs: Job[] | null) {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get(SEARCH_KEY) ?? "";
  const industry = searchParams.get(INDUSTRY_KEY) ?? ALL;

  const debouncedSearchValue = useDebounce(searchValue, 300);

  const setSearchValue = useCallback(
    (value: string) => {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        if (value) next.set(SEARCH_KEY, value);
        else next.delete(SEARCH_KEY);
        return next;
      });
    },
    [setSearchParams],
  );

  const setIndustry = useCallback(
    (value: TCategories) => {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        if (value && value !== ALL) next.set(INDUSTRY_KEY, value);
        else next.delete(INDUSTRY_KEY);
        return next;
      });
    },
    [setSearchParams],
  );

  const filteredJobs = useMemo(() => {
    const q = debouncedSearchValue.trim().toLowerCase();
    if (!jobs) return;
    let result: Job[] = jobs;

    if (industry !== "" && industry !== ALL) {
      result = result.filter((job) => job.category === industry);
    }
    if (q !== "") {
      result = result.filter((job) =>
        job.title.toLocaleLowerCase().includes(q),
      );
    }

    return result;
  }, [jobs, debouncedSearchValue, industry]);

  return {
    filteredJobs,
    searchValue,
    setSearchValue,
    industry,
    setIndustry,
  };
}
