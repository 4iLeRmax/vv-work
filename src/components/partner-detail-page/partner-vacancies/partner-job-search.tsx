import { Search } from "lucide-react";
import React, { useState } from "react";

interface PartnerJobSearchProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export default function PartnerJobSearch({
  searchValue,
  setSearchValue,
}: PartnerJobSearchProps) {
  return (
    <>
      <div className="w-full flex items-center gap-2 text-brand-secondary bg-white border border-bor-primary rounded-2xl px-3">
        <Search size={20} className="text-brand-accent" />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Пошук за назвою вакансії..."
          className="w-full p-3"
        />
      </div>
    </>
  );
}
