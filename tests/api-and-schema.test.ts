import {
  ApiError,
  fetchAllJobs,
  fetchJobsByPartnerSlug,
  fetchPartnerBySlug,
  fetchPartners,
  submitApplication,
} from "../src/api/mockApi";
import { applyForJobScheme } from "../src/lib/schemes/apply-for-job-scheme";

describe("mock API", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(Math, "random").mockReturnValue(0.99);
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.useRealTimers();
  });

  async function resolveRequest<T>(request: Promise<T>) {
    const result = request;
    await jest.runAllTimersAsync();
    return result;
  }

  it("returns partners, jobs, and application success", async () => {
    const partnerList = await resolveRequest(fetchPartners());
    const partner = await resolveRequest(
      fetchPartnerBySlug(partnerList[0].slug),
    );
    const partnerJobs = await resolveRequest(
      fetchJobsByPartnerSlug(partnerList[0].slug),
    );
    const allJobs = await resolveRequest(fetchAllJobs());
    const application = await resolveRequest(
      submitApplication({ name: "Олена", phone: "+380671234567" }),
    );

    expect(partnerList.length).toBeGreaterThan(0);
    expect(partner?.id).toBe(partnerList[0].id);
    expect(
      partnerJobs.every((job) => job.partnerSlug === partnerList[0].slug),
    ).toBe(true);
    expect(allJobs.length).toBeGreaterThanOrEqual(partnerJobs.length);
    expect(application).toEqual({ success: true });
  });

  it("returns undefined for an unknown partner", async () => {
    await expect(
      resolveRequest(fetchPartnerBySlug("missing")),
    ).resolves.toBeUndefined();
  });

  it("surfaces the simulated service error", async () => {
    jest.spyOn(Math, "random").mockReturnValue(0);
    const request = fetchPartners();
    const expectation = expect(request).rejects.toEqual(
      new ApiError("Не вдалося завантажити дані. Спробуйте ще раз.", 503),
    );

    await jest.runAllTimersAsync();
    await expectation;
  });
});

describe("application schema", () => {
  it("accepts formatted Ukrainian phone numbers", () => {
    expect(
      applyForJobScheme.parse({
        name: "Олена",
        phone: "+380 67 123-45-67",
        message: "Зацікавила вакансія",
      }),
    ).toEqual({
      name: "Олена",
      phone: "+380671234567",
      message: "Зацікавила вакансія",
    });
  });

  it("rejects an invalid phone number and an empty name", () => {
    const result = applyForJobScheme.safeParse({ name: "", phone: "123" });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues.map((issue) => issue.path[0])).toEqual([
        "name",
        "phone",
      ]);
    }
  });
});
