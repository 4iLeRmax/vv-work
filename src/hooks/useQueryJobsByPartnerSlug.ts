import { useCallback, useEffect, useState } from "react";
import type { Job } from "../types";
import { fetchJobsByPartnerSlug } from "../api/mockApi";

export default function useQueryJobsByPartnerSlug(slug: string) {
  const [data, setData] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const jobs = await fetchJobsByPartnerSlug(slug);
      setData(jobs);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch partner's Jobs",
      );
    } finally {
      setIsLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, retry: fetchData };
}
