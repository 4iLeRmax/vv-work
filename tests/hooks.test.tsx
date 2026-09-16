import { act, renderHook, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useJobFilters } from "../src/hooks/useJobFilters";
import { useDebounce } from "../src/hooks/useDebounce";
import type { Job } from "../src/types";

const jobs = [
  { title: "Frontend developer", category: "IT" },
  { title: "Warehouse operator", category: "Логістика" },
] as Job[];

function wrapper({ children }: { children: React.ReactNode }) {
  return <MemoryRouter initialEntries={["/?q=front"]}>{children}</MemoryRouter>;
}

describe("useDebounce", () => {
  it("updates after the requested delay", () => {
    jest.useFakeTimers();
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 100),
      {
        initialProps: { value: "first" },
      },
    );

    rerender({ value: "second" });
    expect(result.current).toBe("first");
    act(() => jest.advanceTimersByTime(100));
    expect(result.current).toBe("second");
    jest.useRealTimers();
  });
});

describe("useJobFilters", () => {
  it("filters by the debounced search and synchronizes URL params", async () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useJobFilters(jobs), { wrapper });

    expect(result.current.searchValue).toBe("front");
    act(() => jest.advanceTimersByTime(300));
    await waitFor(() => expect(result.current.filteredJobs).toHaveLength(1));

    act(() => result.current.setIndustry("IT"));
    await waitFor(() => expect(result.current.industry).toBe("IT"));
    act(() => result.current.setSearchValue(""));
    await waitFor(() => expect(result.current.searchValue).toBe(""));

    act(() => result.current.setIndustry("Усі"));
    await waitFor(() => expect(result.current.industry).toBe("Усі"));
    jest.useRealTimers();
  });

  it("returns no filtered list while jobs are unavailable", () => {
    const { result } = renderHook(() => useJobFilters(null), { wrapper });

    expect(result.current.filteredJobs).toBeUndefined();
  });
});
