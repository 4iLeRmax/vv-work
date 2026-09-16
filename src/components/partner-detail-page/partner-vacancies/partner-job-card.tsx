import React from "react";
import IndustryTag from "../../../UI/industry-tag";
import type { Job } from "../../../types";
import Perk from "../../../UI/perk";
import {
  Bookmark,
  Briefcase,
  Hotel,
  Languages,
  Laptop,
  MapPin,
  TrendingUpDown,
} from "lucide-react";
import Tag from "../../../UI/tag";
import ApplyForJob from "./apply-for-job";

interface PartnerJobCardProps {
  job: Job;
}

export default function PartnerJobCard({ job }: PartnerJobCardProps) {
  return (
    <>
      <div className="bg-white rounded-2xl border border-bor-primary p-8 grid grid-cols-1 gap-6">
        {/*  */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2 items-start">
            <div className="flex items-center gap-2">
              <IndustryTag industry={job.category} />
              {job.urgent ? <IndustryTag industry={"Терміново"} /> : null}
            </div>
            <h1 className="text-brand-primary font-bold text-2xl">
              {job.title}
            </h1>
          </div>
          {/*  */}
          <Tag firstColor="accent" secondColor="accent">
            <div className="flex items-center gap-1">
              <div className="flex items-center">
                <span>{job.salary.min}</span>
                <span>-</span>
                <span>{job.salary.max}</span>
              </div>

              <div className="flex items-center">
                <span>{job.salary.currency}</span>
                <span>/</span>
                <span>{job.salary.period}</span>
              </div>
            </div>
          </Tag>
          {/*  */}
        </div>
        {/*  */}
        {/*  */}
        <div className="flex  flex-wrap items-center gap-3 ">
          <Perk>
            <div className="flex items-center gap-1 text-brand-secondary">
              <MapPin size={14} />
              <span>
                {job.location.city}, {job.location.country}
              </span>
            </div>
          </Perk>
          <Perk>
            <div className="flex items-center gap-1 text-brand-secondary">
              {job.remote ? <Laptop size={14} /> : <Hotel size={14} />}
              <span>{job.remote ? "remote" : "onsite"}</span>
            </div>
          </Perk>
          <Perk>
            <div className="flex items-center gap-1 text-brand-secondary">
              <Briefcase size={14} />
              <span>{job.employmentType}</span>
            </div>
          </Perk>
          <Perk>
            <div className="flex items-center gap-1 text-brand-secondary">
              <TrendingUpDown size={14} />
              <span>{job.experienceLevel}</span>
            </div>
          </Perk>
        </div>
        {/*  */}
        {/*  */}
        <div className="text-brand-secondary">
          <h2 className="font-bold text-md">Опис вакансії</h2>
          <p>
            Кладка цегли та блоків на об’єктах житлового будівництва у Варшаві.
            Робота в складі бригади з 6 осіб.
          </p>
        </div>
        {/*  */}
        {/*  */}
        <div className="grid grid-cols-2 gap-8 text-brand-secondary">
          <div>
            <h2 className="text-md font-bold">Вимоги</h2>
            <ul className="list-disc pl-5 marker:text-brand-accent mt-2">
              {job.requirements.map((req, i) => (
                <li key={req}>{req}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-md font-bold">Що ми пропонуємо</h2>
            <ul className="list-disc pl-5 marker:text-green-600 mt-2">
              {job.benefits.map((ben, i) => (
                <li key={i}>{ben}</li>
              ))}
            </ul>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="flex items-center gap-1">
          <Languages size={14} className="text-brand-secondary" />
          <div className="flex items-center gap-1">
            {job.languageRequirements.map((l) => (
              <Perk key={l}>{l}</Perk>
            ))}
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="flex items-end justify-between">
          <p className="text-brand-secondary">
            Опубліковано:
            <span className="font-bold">{job.postedAt}</span>
          </p>
          <div className="flex items-end gap-3">
            <button className="w-10 h-10 rounded-md flex items-center justify-center border border-bor-primary bg-primary">
              <Bookmark size={14} className="text-brand-secondary" />
            </button>
            <ApplyForJob />
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
}
