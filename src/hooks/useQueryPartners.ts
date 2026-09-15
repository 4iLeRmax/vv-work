import { useCallback, useEffect, useState } from "react";
import type { Partner } from "../types";
import { fetchPartners } from "../api/mockApi";

export default function useQueryPartners() {
  const [data, setData] = useState<Partner[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const partners = await fetchPartners();
      setData(partners);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch partners");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, retry: fetchData };
}
