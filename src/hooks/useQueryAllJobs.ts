import { useCallback, useEffect, useState } from "react";
import type { Job } from "../types";
import { fetchAllJobs } from "../api/mockApi";

export default function useQueryAllJobs() {
  const [data, setData] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const jobs = await fetchAllJobs();
      setData(jobs);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch jobs");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, retry: fetchData };
}
