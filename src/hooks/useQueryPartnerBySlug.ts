import { useCallback, useEffect, useState } from "react";
import type { Partner } from "../types";
import { fetchPartnerBySlug } from "../api/mockApi";

export default function useQueryPartnerBySlug({
  slug,
}: {
  slug: string | undefined;
}) {
  const [data, setData] = useState<Partner | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      if (!slug) {
        setError("Can't find partner details");
        return;
      }
      const partner = await fetchPartnerBySlug(slug);
      if (partner) setData(partner);
      else setError("Can't find partner details");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch partner details",
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
