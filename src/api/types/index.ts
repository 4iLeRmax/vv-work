export type JobCategory =
  | "Будівництво"
  | "Виробництво"
  | "Логістика"
  | "Готельно-ресторанна сфера"
  | "IT"
  | "Водії"
  | "Інші";

export type EmploymentType =
  | "full-time"
  | "part-time"
  | "contract"
  | "seasonal";

export type ExperienceLevel = "no-experience" | "junior" | "middle" | "senior";

export type SalaryPeriod = "hour" | "month" | "annual";

export type Currency = "EUR" | "PLN" | "CZK";

export interface SalaryRange {
  min: number;
  max: number;
  currency: Currency;
  period: SalaryPeriod;
}

export interface Location {
  city: string;
  country: string;
  countryCode: string;
}

export interface Partner {
  id: string;
  slug: string;
  name: string;
  logoUrl: string;
  industry: JobCategory;
  location: Location;
  description: string;
  about: string;
  employeesCount: number;
  foundedYear: number;
  website: string;
  perks: string[];
  verified: boolean;
}

export interface Job {
  id: string;
  partnerId: string;
  partnerSlug: string;
  title: string;
  category: JobCategory;
  location: Location;
  remote: boolean;
  employmentType: EmploymentType;
  experienceLevel: ExperienceLevel;
  salary: SalaryRange;
  description: string;
  requirements: string[];
  benefits: string[];
  languageRequirements: string[];
  postedAt: string;
  urgent: boolean;
}
