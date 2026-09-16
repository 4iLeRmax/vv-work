import { renderHook, waitFor, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import type { Job, Partner } from "../src/types";
import useQueryAllJobs from "../src/hooks/useQueryAllJobs";
import useQueryJobsByPartnerSlug from "../src/hooks/useQueryJobsByPartnerSlug";
import useQueryPartnerBySlug from "../src/hooks/useQueryPartnerBySlug";
import useQueryPartners from "../src/hooks/useQueryPartners";
import {
  fetchAllJobs,
  fetchJobsByPartnerSlug,
  fetchPartnerBySlug,
  fetchPartners,
} from "../src/api/mockApi";

jest.mock("../src/api/mockApi", () => ({
  fetchAllJobs: jest.fn(),
  fetchJobsByPartnerSlug: jest.fn(),
  fetchPartnerBySlug: jest.fn(),
  fetchPartners: jest.fn(),
}));

const partner = { slug: "partner", name: "Partner" } as Partner;
const job = { id: "job-1", title: "Job" } as Job;

function wrapper({ children }: { children: React.ReactNode }) {
  return <MemoryRouter>{children}</MemoryRouter>;
}

describe("data query hooks", () => {
  beforeEach(() => jest.clearAllMocks());

  it("loads all jobs and supports retry", async () => {
    jest
      .mocked(fetchAllJobs)
      .mockResolvedValueOnce([job])
      .mockResolvedValueOnce([]);
    const { result } = renderHook(() => useQueryAllJobs());

    expect(result.current.isLoading).toBe(true);
    await waitFor(() => expect(result.current.data).toEqual([job]));
    expect(result.current.error).toBeNull();

    await act(async () => result.current.retry());
    await waitFor(() => expect(result.current.data).toEqual([]));
    expect(fetchAllJobs).toHaveBeenCalledTimes(2);
  });

  it("exposes query errors and can recover on retry", async () => {
    jest
      .mocked(fetchPartners)
      .mockRejectedValueOnce(new Error("partners failed"))
      .mockResolvedValueOnce([partner]);
    const { result } = renderHook(() => useQueryPartners());

    await waitFor(() => expect(result.current.error).toBe("partners failed"));
    await act(async () => result.current.retry());
    await waitFor(() => expect(result.current.data).toEqual([partner]));
  });

  it("loads partner jobs and handles unknown partner slugs", async () => {
    jest.mocked(fetchJobsByPartnerSlug).mockResolvedValue([job]);
    const jobsResult = renderHook(() => useQueryJobsByPartnerSlug("partner"));
    await waitFor(() => expect(jobsResult.result.current.data).toEqual([job]));

    jest.mocked(fetchPartnerBySlug).mockResolvedValue(undefined);
    const partnerResult = renderHook(
      () => useQueryPartnerBySlug({ slug: "missing" }),
      { wrapper },
    );
    await waitFor(() =>
      expect(partnerResult.result.current.error).toBe(
        "Can't find partner details",
      ),
    );
  });

  it("reports a missing slug before calling the API", async () => {
    const { result } = renderHook(
      () => useQueryPartnerBySlug({ slug: undefined }),
      {
        wrapper,
      },
    );

    await waitFor(() =>
      expect(result.current.error).toBe("Can't find partner details"),
    );
    expect(fetchPartnerBySlug).not.toHaveBeenCalled();
  });
});
