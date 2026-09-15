import { partners } from "../data/partners.data";
import { jobs } from "../data/jobs.data";
import type { Job, Partner } from "../types";

const MIN_DELAY_MS = 300;
const MAX_DELAY_MS = 800;
const ERROR_RATE = 0.2;

class ApiError extends Error {
  status: number;
  constructor(message: string, status = 500) {
    super(message);
    this.status = status;
  }
}

function randomDelay(): number {
  return Math.floor(Math.random() * MAX_DELAY_MS) + MIN_DELAY_MS;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function simulateRequest<T>(payload: T): Promise<T> {
  await sleep(randomDelay());
  if (Math.random() < ERROR_RATE) {
    throw new ApiError("Не вдалося завантажити дані. Спробуйте ще раз.", 503);
  }
  return payload;
}

export async function fetchPartners(): Promise<Partner[]> {
  return simulateRequest(partners);
}

export async function fetchPartnerBySlug(
  slug: string,
): Promise<Partner | undefined> {
  return simulateRequest(partners.find((p) => p.slug === slug));
}

export async function fetchJobsByPartnerSlug(slug: string): Promise<Job[]> {
  return simulateRequest(jobs.filter((j) => j.partnerSlug === slug));
}

export async function fetchAllJobs(): Promise<Job[]> {
  return simulateRequest(jobs);
}

interface SubmitApplicationPayload {
  jobId: string;
  name: string;
  contact: string;
  message?: string;
}

export async function submitApplication(
  payload: SubmitApplicationPayload,
): Promise<{ success: true }> {
  await simulateRequest(null);
  return { success: true };
}

export { ApiError };
