import clsx from "clsx";
import { ChevronDown, Funnel } from "lucide-react";
import React, { useState } from "react";
import { JOB_CATEGORIES, type JobCategory } from "../../../types";

const ALL = "Усі" as const;

type TCategories = JobCategory | typeof ALL;

interface PartnerJobFilterProps {
  industry: string;
  setIndustry: (value: TCategories) => void;
}

export default function PartnerJobFilter({
  industry,
  setIndustry,
}: PartnerJobFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((p) => !p);
  };
  const handleChangeIndustry = (category: TCategories) => {
    setIndustry(category);
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative">
        <button
          className="w-60 flex items-center justify-between bg-white border border-bor-primary rounded-2xl px-3"
          onClick={handleToggle}
        >
          <div className="flex items-center gap-2 py-3">
            <Funnel size={20} className="text-brand-accent" />
            <span className="text-brand-primary font-bold">{industry}</span>
          </div>
          <ChevronDown
            size={20}
            className={clsx("text-brand-secondary", {
              "rotate-180": isOpen,
            })}
          />
        </button>
        {isOpen ? (
          <ul className="w-full absolute top-full left-0 bg-white border border-bor-primary rounded-2xl z-20 shadow-xl overflow-hidden">
            {[ALL, ...JOB_CATEGORIES].map((category, i) => (
              <li key={i} className="w-full flex justify-start">
                <button
                  onClick={() => handleChangeIndustry(category)}
                  className={clsx("w-full p-2", {
                    "text-brand-secondary hover:text-brand-accent transition-colors":
                      category !== industry,
                    "text-brand-accent bg-brand-accent/10":
                      category === industry,
                  })}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
}
